 const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.85.50.213:9000',
  options: {
    'sonar.login': '84331cb61b186d1050a627da5da712b1c9c09f69',
    'sonar.sources': './',
    'sonar.exclusions': 'node_modules/**,public/**,views/**,test/**',
    'sonar.projectKey': 'nhs-app',
    'sonar.projectName': 'NHS App',
  },
}, () => {});
