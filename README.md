# GUI For Topology Manager (G4TM)

[![AppVeyor][appveyor-badge-dev]][appveyor-badge-dev-url]

[![Code Climate][code-climate-badge]][code-climate-badge-url]
[![Issue Count][code-climate-issue-badge]][code-climate-issue-badge-url]
[![Test Coverage][code-climate-test-badge]][code-climate-test-badge-url]

[![Dependency Status][david-badge]][david-badge-url] 
[![devDependency Status][david-badge-dev]][david-badge-dev-url]

## Prerequisites

 * IIS 8.5
 * [IIS URL Rewrite 2.0](https://www.iis.net/downloads/microsoft/url-rewrite)


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Development](#development)
* [License](#license)


## Installation

# G4TM

1. Download the [latest](https://github.com/sshibani/gui-for-topology-manager/releases) release package.
2. Unzip the package. 
3. Open a Powershell window and execute the `install.ps1` in the root of the packge. 

```
.\install.ps1 -ApplicationName MyTopologManager -portNumbder 8822 -CoreService_Domain mydomain -CoreService_UserName admin
``` 

# TopologyManager 

1. Open rdp session to the Tridion Content mangaer server.
2. Browse to `%TRIDION_HOME%\TopologyManager\web`
3. Update web.config the following code blocks and replace the `##G4TM_URL##` with the url that you have used to install G4TM. i.e. `http://g4tm:88`

```
<system.webServer>
    <rewrite>
      <rules>
        <rule name="SpecificRewrite" stopProcessing="true">
          <match url="/*" />
          <conditions>
            <add input="{REQUEST_METHOD}" pattern="^OPTIONS" />
          </conditions>
          <action type="CustomResponse" statusCode="200" />
        </rule>
      </rules>
    </rewrite>
    ....
</system.webServer>
<httpProtocol>
    <customHeaders>
        <add name="Access-Control-Request-Headers" value="Content-Type,Authorization" />
        <add name="Access-Control-Allow-Headers" value="Content-Type,Authorization" />
        <add name="Access-Control-Allow-Origin" value="##G4TM_URL##" />
        <add name="Access-Control-Allow-Credentials" value="true" />
        <add name="Access-Control-Allow-Methods" value="GET, POST, PUT, PATCH, DELETE, OPTIONS" />
    </customHeaders>
</httpProtocol>
```
4. Save web.config
5. Run IISreset.

## Usage

## Development

## License

Apache License 2.0


[appveyor-badge-dev]: https://ci.appveyor.com/api/projects/status/github/sshibani/gui-for-topology-manager?branch=develop&svg=true&passingText=develop
[appveyor-badge-dev-url]: https://ci.appveyor.com/project/sshibani/gui-for-topology-manager

[david-badge-dev]: https://david-dm.org/sshibani/topology-manager-gui/dev-status.svg?path=client&type=dev
[david-badge-dev-url]: https://david-dm.org/sshibani/topology-manager-gui?path=client&type=dev
[david-badge]: https://david-dm.org/sshibani/topology-manager-gui.svg?path=client
[david-badge-url]: https://david-dm.org/sshibani/topology-manager-gui?path=client

[code-climate-badge]: https://codeclimate.com/github/cloudfoundry/membrane.png
[code-climate-badge-url]: https://codeclimate.com/github/sshibani/gui-for-topology-manager/
[code-climate-issue-badge]: https://codeclimate.com/github/sshibani/gui-for-topology-manager/badges/issue_count.svg
[code-climate-issue-badge-url]: https://codeclimate.com/github/sshibani/topology-manager-gui
[code-climate-test-badge]: https://codeclimate.com/github/sshibani/gui-for-topology-manager/badges/coverage.svg
[code-climate-test-badge-url]: https://codeclimate.com/github/sshibani/gui-for-topology-manager/coverage