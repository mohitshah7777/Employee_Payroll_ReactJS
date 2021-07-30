#!/bin/bash -x

cd /home/ubuntu/EmployeePayroll_Frontend
directory=$(pwd)
echo "Directory is $directory"
npm i
# npm install @babel/core@babel/preset-env
npm run build
npx kill-port 3000
npm start
echo "Successfully Deployed"