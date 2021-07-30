#!/bin/bash -x

cd /home/ubuntu/EmpPayroll_FrontEnd
directory=$(pwd)
echo "Directory is $directory"
npm i
# npm install @babel/core@babel/preset-env
npm run build
npm start
echo "Successfully Deployed"