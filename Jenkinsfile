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
                        echo env.GIT_BRANCH
                        echo env.BUILD_NUMBER
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
                docker build -t panish/node-app1:${BUILD_NUMBER} .
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
                docker push panish/node-app1:${BUILD_NUMBER}
                '''
            }
        }
        
        stage('Approval For Production') {
            when {
                expression { return env.GIT_BRANCH == 'origin/main'; }
            }
            options {
                timeout(time: 1, unit: 'HOURS')
            }
            steps {
                input message: "Approve?"
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
                expression { return env.GIT_BRANCH == 'origin/main'; }
            }
            environment {
                ENVIRONMENT = 'prod'
            }
            steps {
                echo "Deploying to ${ENVIRONMENT}"
                sh '''
                echo "Deploying to Prod K8s cluster"
                kubectl apply -f ./Deployments/svc-nodeport.yml
                kubectl apply -f ./Deployments/deploy-complete.yml
                kubectl set image deployment/web-deploy panish-app1-pod=panish/node-app1:${BUILD_NUMBER} --record
                '''
            }
        }
        
    }
}
