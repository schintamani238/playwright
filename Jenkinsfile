pipeline {
    agent any
    
    options {
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'bash .github/jenkins-test.sh'
            }
        }
    }
    
    post {
        always {
            junit testResults: 'test-results/**/*.xml', allowEmptyResults: true
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report',
                keepAll: true
            ])
        }
        
        failure {
            echo "❌ Tests failed. Check the Playwright Test Report for details."
        }
        
        success {
            echo "✅ All tests passed!"
        }
    }
}
