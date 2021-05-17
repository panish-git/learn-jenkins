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
                pwsh(script: 'echo "Building App Container"')
                pwsh(script: 'docker images -a')
            }
        }
        
    }
}
