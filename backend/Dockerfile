FROM openjdk:20-ea-4-jdk

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:resolve

COPY src ./src
EXPOSE 8080
CMD ["./mvnw", "spring-boot:run"]
