pipeline {
    agent any

    stages {
        stage('Verify Branch') {
            steps {
                echo "$GIT_BRANCH"
            }
        }
        stage('Bye') {
            steps {
                echo 'bye bye!!'
            }
        }
        stage('From shell script') {
            steps {
                sh 'time'
            }
        }
        
    }
}
