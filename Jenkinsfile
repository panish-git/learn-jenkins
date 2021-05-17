pipeline {
    environment {
        registry = "docker_hub_account/repository_name"
    }
    agent any

    stages {
        stage('Verify Branch') {
            steps {
                echo "$GIT_BRANCH"
            }
        }
        stage('Docker build') {
            steps {
                sh '''
                echo "Building App image"
                docker images -a
                cd ./App
                docker build -t panish-jenkins-pipeline .
                docker images -a
                cd ../
                '''
            }
        }
        
    }
}
