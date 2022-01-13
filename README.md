Angular app with Java

---------------------------------------
//console database H2
http://localhost:8080/h2-console

//Run Java Spring Boot : port 8080
mvn spring-boot:run 
mvn clean package spring-boot:repackage  //no build !!! fix soon...

mvn clean install
java -jar target/com.javatrap2020.angular_app_with_java-0.0.1-SNAPSHOT.jar


!!!!! run  from intellij IDE AngularAppWithJavaApplication


//Run Angular : port 4200
cd ui-angular
npm install
npm start



