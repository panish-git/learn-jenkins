pipeline {
    agent any
    stages {
        stage('pre condition') {
            parallel {
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
            }
        }
        stage('Docker build') {
            steps {
                sh '''
                echo "Building App image"
                docker images -a
                cd ./App
                docker build -t panish/node-app1:1.0 .
                docker images -a
                cd ../
                '''
            }
        }
        stage('Test App') {
            steps {
                sh '''
                echo "Testing App"
                cd ./App
                docker build -t nodeapp1-test -f Dockerfile.test .
                docker run --rm nodeapp1-test
                '''
            }
            post {
                success {
                    echo "Test passed :)"
                }
                failure {
                    echo "Test failed :("
                }                
            }
        }
        stage('Docker push image') {
            steps {
                sh '''
                echo "Pushing Docker image"
                docker push panish/node-app1:1.0
                '''
            }
        }
        
        stage('Approval For Production') {
            when { 
                branch 'main' 
            }
            steps {
                input message "Approve?"
            }
            post {
                success {
                    echo "Prod deply approved :)"
                }
                aborted {
                    echo "Prod deploy not approved :("
                }                
            }
        }
        
        stage('Deploy To Prod') {
            when { 
                branch 'main'
            }
            environment {
                ENVIRONMENT = 'prod'
            }
            steps {
                echo "Deploying to ${ENVIRONMENT}"
                sh '''
                echo "Deploying to Prod K8s cluster"
                '''
            }
        }
        
    }
}
