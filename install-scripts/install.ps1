 ######################################################################################
 # Install.ps1
 # Author: Siawash Shibani (siawash.shibani@trivident.com)
 # Change Log: Version 1.0
 # Change Date: 07-03-2017
 # Product Scope: TopologyManager GUI
 ######################################################################################
<#
.PARAMETER DatabaseServer
    Database Server name. Default is '(local)'
#>
Param(
    [Parameter(Mandatory=$true, HelpMessage="IIS website name? (Default=topology-manager-gui)")]
    [string]$ApplicationName,
    [Parameter(Mandatory=$true, HelpMessage="IIS PortNumber? (Default=4012)")]
    [string]$portNumber,
    [Parameter(Mandatory=$true, HelpMessage="CoreService domain.")]
    [string]$CoreService_Domain,
    [Parameter(Mandatory=$true, HelpMessage="CoreService user.")]
    [string]$CoreService_UserName,
    [Parameter(Mandatory=$true, HelpMessage="CoreService password.")]
    [securestring]$CoreService_password
)


Import-Module WebAdministration

function createWebApplication() {
    $iisAppPoolName = $ApplicationName
    $iisAppPoolDotNetVersion = "v4.0"
    $iisAppName = $ApplicationName
    $directoryPath = (Get-Item -Path ".\" -Verbose).FullName

    #navigate to the app pools root
    Set-Location IIS:\AppPools\

    #check if the app pool exists
    if (!(Test-Path $iisAppPoolName -pathType container))
    {
        #create the app pool
        $appPool = New-Item $iisAppPoolName
        $appPool | Set-ItemProperty -Name "managedRuntimeVersion" -Value $iisAppPoolDotNetVersion
    }

    #navigate to the sites root
    Set-Location IIS:\Sites\

    #check if the site exists
    if (Test-Path $iisAppName -pathType container)
    {
        return
    }

    $bindings = @(
    @{protocol="http";bindingInformation="*:" + $portNumber + ":" + $iisAppName},
    @{protocol="http";bindingInformation="*:" + $portNumber + ":www." + $iisAppName},
    @{protocol="http";bindingInformation="*:" + $portNumber + ":"}
    )

    #create the site
    $iisApp = New-Item $iisAppName -bindings $bindings -physicalPath $directoryPath
    $iisApp | Set-ItemProperty -Name "applicationPool" -Value $iisAppPoolName

}

function GetTridionHome()
{
    $TridionHome = "Tridion_Home"
    $tridion = (get-item env:$TridionHome).Value
    return $tridion
}

function BackupTridionConfig([string]$arg1)
{
    $newName = $arg1 + ".TrividentResolverBak"
    Copy-Item $arg1 $newName
}

function WriteToDisk([string]$config)
{
    Write-Host "Saving configuration to disk..."

    $path = $webconfigPath
    if(Test-Path $webconfigPath)
    {
        Remove-Item $webconfigPath
    }

    $config | Add-Content $webconfigPath
    Write-Host "Configuration saved."
}

function Format-XML([xml]$xml, $indent=2)
{
    $StringWriter = New-Object System.IO.StringWriter
    $XmlWriter = New-Object System.XMl.XmlTextWriter $StringWriter
    $xmlWriter.Formatting = "indented"
    $xmlWriter.Indentation = $Indent
    $xml.WriteContentTo($XmlWriter)
    $XmlWriter.Flush()
    $StringWriter.Flush()
    return $StringWriter.ToString()
}



# Update web.config
function UpdateWebConfig()
{
    $webconfigPath = Join-Path (Get-Item -Path ".\") "\web.config"
    [xml]$webconfig = Get-Content $webconfigPath;

    $BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($CoreService_password)
    $UnsecurePassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

    $domainNode = $webconfig.configuration.appSettings.SelectSingleNode("add[@key = 'domain']")
    $userNameNode =  $webconfig.configuration.appSettings.SelectSingleNode("add[@key = 'username']")
    $passwordNode = $webconfig.configuration.appSettings.SelectSingleNode("add[@key = 'password']")

    $domainNode.SetAttribute('value',  $CoreService_Domain)
    $userNameNode.SetAttribute('value', $CoreService_UserName)
    $passwordNode.SetAttribute('value', $UnsecurePassword)

    $xmlToSave = Format-XML -xml $webconfig

    WriteToDisk($xmlToSave)
}



# Update web.config with CoreServoce credentials
UpdateWebConfig

# Create IIS website and AppPool
createWebApplication

#Set-Location (Get-Item -Path ".\")