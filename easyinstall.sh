#!/bin/bash

# Schedulr Easy Install Script

# Install NodeJS 6
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install apt-get dependencies
sudo apt-get install -y git mongodb

# Clone GitHub Repo
git clone https://github.com/TomLavenziano/Schedulr.git

# Enter project directory
cd Schedulr

# Install npm dependencies
npm install

# Install npm global dependencies
sudo npm install -g sails

# Print finish message
clear
echo "Schedulr easy install complete!"
echo "Run \"cd Schedulr\" to change to Schedulr's folder"
echo "Run \"sails lift\" to run Schedulr"
echo "Have a nice day!"
