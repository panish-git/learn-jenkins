pipeline {
    agent any

    stages {
        stage('Hello Git Branch') {
            steps {
                echo 'Hello World from : '$GIT_BRANCH
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
