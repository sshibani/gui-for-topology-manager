MSBuild.SonarQube.Runner.exe begin /k:"topology" /d:"sonar.host.url=https://sonarqube.com" /d:"sonar.login=775813ef25e609ef6aa3e76573d8d38cca09dd5e"
"C:\Program Files (x86)\MSBuild\14.0\Bin\MSBuild.exe" "D:\dev\angular\topology\server\TopologyManager.WebApi.sln"
MSBuild.SonarQube.Runner.exe end /d:"sonar.login=775813ef25e609ef6aa3e76573d8d38cca09dd5e"