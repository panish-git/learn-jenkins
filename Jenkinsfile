pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
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
