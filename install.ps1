Param(
  [Parameter(Mandatory=$true, HelpMessage="Your message goes here")]
  $ApplicationName,
  [Parameter(Mandatory=$true, HelpMessage="IIS PortNumber? (Default=4012)")]
  $portNumbder
)

Import-Module WebAdministration
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
   @{protocol="http";bindingInformation="*:" + $portNumbder + ":" + $iisAppName},
   @{protocol="http";bindingInformation="*:" + $portNumbder + ":www." + $iisAppName},
   @{protocol="http";bindingInformation="*:" + $portNumbder + ":"}
)

#create the site
$iisApp = New-Item $iisAppName -bindings $bindings -physicalPath $directoryPath
$iisApp | Set-ItemProperty -Name "applicationPool" -Value $iisAppPoolName