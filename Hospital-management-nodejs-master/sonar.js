 const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://52.91.186.130:9000/',
  options: {
    'sonar.login': '551fe364e574e7b6dec6d5e0f6d561368fc3f251',
    'sonar.sources': './',
    'sonar.exclusions': 'node_modules/**,public/**,views/**,test/**',
    'sonar.projectKey': 'nhs-app',
    'sonar.projectName': 'NHS App',
  },
}, () => {});
