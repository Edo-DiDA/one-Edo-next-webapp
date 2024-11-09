pipeline {
    agent any

    environment {
        AWS_REGION = 'eu-north-1' 
        ECR_REPOSITORY = 'oneedo' 
        AWS_ACCOUNT_ID = '242201278106'
        IMAGE_TAG = 'oneedoweb'
        EC2_HOST = '13.247.95.4'
        APP_PORT = '3000' 
        SSH_USER = 'ubuntu'
    }

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
                    app = docker.build("${ECR_REPOSITORY}")
                }
            }
        }

        stage('Deploy') {
            steps {
                script{
                    docker.withRegistry("https://${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com", "ecr:${AWS_REGION}:aws-cred") {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("${IMAGE_TAG}")
                    }
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(credentials: ['ssh-credentials-1']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${SSH_USER}@${EC2_HOST} << EOF
                            # Authenticate Docker with ECR on the EC2 instance
                            aws ecr get-login-password --region ${AWS_REGION} | \
                            docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

                            # Pull the latest image
                            docker pull ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}:${IMAGE_TAG}

                            # Stop and remove any existing container
                            docker stop ${IMAGE_TAG} || true
                            docker rm ${IMAGE_TAG} || true

                            # Run the new container
                            docker run -d --name ${IMAGE_TAG} -p ${APP_PORT}:${APP_PORT} ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}:${IMAGE_TAG}
                        EOF
                    """
                }
            }
        }
    }
}