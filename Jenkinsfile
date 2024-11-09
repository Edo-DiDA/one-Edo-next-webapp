pipeline {
    agent any
    stages {
         stage('Clone repository') { 
            steps { 
                script{
                    checkout scm
                }
            }
        }

        stage('Build') { 
            steps { 
                script{
                    app = docker.build("oneedoweb")
                }
            }
        }
        stage('Test'){
            steps {
                echo 'Empty'
            }
        }
        stage('Deploy') {
            steps {
                script{
                    docker.withRegistry('https://242201278106.dkr.ecr.eu-north-1.amazonaws.com/oneedo/app', 'ecr:eu-north-1:aws-credentials') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("oneedoweb:latest")
                    }
                }
            }
        }
    }
}