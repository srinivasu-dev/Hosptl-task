curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee   /usr/share/keyrings/jenkins-keyring.asc > /dev/null
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository "deb http://pkg.jenkins.io/debian-stable binary/"
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo apt update
sudo apt install jenkins
