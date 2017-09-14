node {
    def app

    stage('Clone repository') {
        git clone https://github.com/albertorm95/Books-Read
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("amrojas/bookstest")
    }
}