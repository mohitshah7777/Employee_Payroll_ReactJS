#!/bin/bash -x

cd /home/ubuntu/EmployeePayroll_Frontend
directory=$(pwd)
echo "Directory is $directory"
npm i
# npm install @babel/core@babel/preset-env
npm run build
npm start
echo "Successfully Deployed"
npm build
npm start
