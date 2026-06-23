# Weather Forecast Application

## Overview

A React-based Weather Forecast application that fetches real-time weather data using a weather API.

## Technologies Used

* React
* Vite
* Git & GitHub
* Docker
* Jenkins
* AWS EC2
* Linux

## CI/CD Pipeline

GitHub → Jenkins → Build → Docker Image → Deploy on EC2

## Jenkins Stages

1. Checkout Code
2. Install Dependencies
3. Build Application
4. Test
5. Build Docker Image
6. Deploy Container

## Docker Commands

Build Image:
docker build -t weather-app .

Run Container:
docker run -d -p 5173:5173 --name weather-app weather-app

## Deployment

Application deployed on AWS EC2 using Docker and Jenkins Pipeline.

