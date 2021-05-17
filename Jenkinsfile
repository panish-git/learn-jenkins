pipeline {
    agent any

    stages {
        stage('Verify Branch') {
            steps {
                echo "$GIT_BRANCH"
            }
        }
        stage('Docker build') {
            steps {
                sh 'echo "Building App image"'
                sh 'docker images -a'
                sh 'cd ./App'
                sh 'docker build -t panish-jenkins-pipeline .'
                sh 'docker images -a'
                sh '..
            }
        }
        
    }
}
