@echo off
set "JAVA_HOME=C:\Users\surid\.jdk\jdk8"
set "PATH=%JAVA_HOME%\bin;%PATH%"

echo Starting emobility-smart-charging server...
echo Application URL:       http://localhost:8080/
echo Frontend Playground:   http://localhost:8080/playground/index.html
echo Swagger UI:            http://localhost:8080/swagger-ui.html
echo Health endpoint:       http://localhost:8080/actuator/health

java -jar target\emobility-smart-charging-0.0.1-SNAPSHOT.jar
pause
