pipeline {
    agent any
    stages {
        stage('Verify Docker') {
            steps {
                sh '''
                which docker
                '''
            }
        } 
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
                docker build -t panish/nodeApp:1.0 .
                docker images -a
                cd ../
                '''
            }
        }
        
    }
}
