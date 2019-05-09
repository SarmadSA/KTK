# KTK
Kids art for sale website

How to run projcet

Frontend:
1. Acces the frontend folder where package.json is located
2. Install the dependencies by running 'npm install'
3. Start the frontend app by running 'npm start'

If you don't have node.js installed, make sure to do so, inorder to be able to start the fronend app and run the requrired commands.

Backend:
1. Start local MySQL server that runs on localhost (127.0.0.1) port 3306. If your local root user have password set, you need to go to 'src/main/resources/application.properties' and set 'spring.datasource.password' to your password. Or simply set 'spring.datasource.password' and 'spring.datasource.username' to the correct username and password.
2. Acces the backend folder where pom.xml is loacted
3. Install the maven dependencies by running 'mvn install'
4. To run the backend app you can run the commend: 'mvn spring-boot:run'

For other running methods, you can refer to: https://docs.spring.io/spring-boot/docs/current/reference/html/using-boot-running-your-application.html

If you don't have maven installed, make sure to do so inorder to be able to start the backend app and run the requrired commands.
