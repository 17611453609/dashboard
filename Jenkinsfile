pipeline {
    agent {
        docker {
            image 'node:13.6.0'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Sonar') {
            steps {
                sh 'npm run sonar'
            }
        }
    }
}
