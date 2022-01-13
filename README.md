Angular app with Java

---------------------------------------
//console database H2 //
http://localhost:8080/h2-console


//Run Java Spring Boot : port 8080 (Terminal 1) //
mvn clean package spring-boot:repackage
mvn spring-boot:run 
 


//Run Angular : port 4200 (Terminal 2) //
cd src\main\ui
npm install
npm start



