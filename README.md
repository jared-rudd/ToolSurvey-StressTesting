# ToolSurvey-StressTesting

This repository contains a microservice-based system used to evaluate stress testing tools, specifically **Apache JMeter** and **Gatling**, as part of an survey assignment on testing tools.

## Purpose

The project simulates a real-world healthcare software environment involving:
- Organization and license management services
- Service discovery via Eureka
- Externalized configuration using Spring Cloud Config
- A PostgreSQL backend

These components are used to demonstrate how stress testing tools can assess system reliability, performance, and scalability in a hospital-grade software setting.

## Technologies

- Java 21 (Spring Boot)
- Apache Maven
- Docker & Docker Compose
- PostgreSQL
- Apache JMeter
- Gatling

## Services

- configserver: Centralized configuration service
- eurekaserver: Service registry for microservices
- organization-service: Handles organization data
- licensing-service: Handles license data
- postgres: Backend database with schema and seed data
