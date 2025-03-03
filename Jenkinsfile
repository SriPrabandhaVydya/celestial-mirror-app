pipeline {
    agent any

    environment {
        IMAGE_NAME = "docker.io/prabha20/my-node-app"
        IMAGE_TAG = "latest"
        REGISTRY = "docker.io" // Use Docker Hub, AWS ECR, or any registry
        DOCKER_USER = credentials('DOCKER_HUB_USERNAME') // Store in Jenkins credentials
        DOCKER_PASS = credentials('DOCKER_HUB_PASSWORD') // Store in Jenkins credentials
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    sh 'echo ${DOCKER_PASS} | docker login -u ${DOCKER_USER} --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh 'docker push ${IMAGE_NAME}:${IMAGE_TAG}'
                }
            }
        }

        stage('Deploy with Docker') {
            steps {
                script {
                    // Stop running container if exists
                    sh '''
                    docker ps -q --filter "name=my-node-app" | grep -q . && docker stop my-node-app && docker rm my-node-app || true
                    docker run -d --name my-node-app -p 8081:81 ${IMAGE_NAME}:${IMAGE_TAG}
                    '''
                }
            }
        }
    }
}
