pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/sonam1605/Weather-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'No test cases configured'
                // sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t weather-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop weather-app || true
                docker rm weather-app || true
                docker run -d -p 5173:5173 --name weather-app weather-app
                '''
            }
        }
    }
}