pipeline {
    agent {
    // Equivalent to "docker build -f Dockerfile.build --build-arg version=1.0.2 ./build/
    dockerfile {
        filename 'Dockerfile'
        dir 'App'
        args '-t panish/nodeApp1:1.0'
    }
}

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
                '''
            }
        }
        
    }
}
