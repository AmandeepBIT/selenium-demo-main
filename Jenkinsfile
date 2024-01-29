pipeline {     
    agent any
    tools {
        nodejs 'Node-1313'
    }
    stages {
        stage('Build') { 
            steps {
                echo "building states"
                sh 'node -v' 
                sh 'npm install'                 
            }
        }
         stage('Test') { 
            steps {
                echo "testing stage"
                sh "npm test"
            }
        }
         
         stage('Deploy') { 
            steps {
                echo "Deploying..."
               
            }
        }
    }
}