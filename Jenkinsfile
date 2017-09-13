node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("amrojas/bookstest")
    }
}