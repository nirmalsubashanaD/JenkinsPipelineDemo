// pipeline {
//   agent any

//   stages {
//     stage('Checkout') {
//       steps {
//         checkout scm
//       }
//     }
//     stage('Install Dependencies') {
//       steps {
//         sh 'npm install'
//       }
//     }
//     stage('Run Tests') {
//       steps {
//         sh 'npm test'
//       }
//     }
//   }
// }

pipeline {
    agent any

    tools {
        nodejs "Node 18"  // Make sure this matches the name you set in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Code Analysis') {
            steps {
                sh 'npx eslint .'
            }
        }

        stage('Security Scan') {
            steps {
                sh 'npx retire'  // Or use 'npx snyk test' if using Snyk
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging...'
                // Your actual deploy script or SSH commands go here
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging...'
                // Add test commands (e.g., Newman for Postman tests)
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production...'
                // Your actual production deploy steps
            }
        }
    }
}
