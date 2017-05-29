node {
    def app
    def app2

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("mactores.mactores.com/webapi")
    }

    stage('Build image 2') {
        app2 = docker.build("mactores/webapi")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Test image 2') {
        app2.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        docker.withRegistry('https://mactores.mactores.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage('Push image 2') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-cred') {
            app2.push("${env.BUILD_NUMBER}")
            app2.push("latest")
        }
    }
}
