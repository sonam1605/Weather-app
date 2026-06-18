pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install --no-audit --no-fund --legacy-peer-deps --timeout=600000'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'No tests yet'
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