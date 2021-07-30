#!/bin/bash -x

cd /home/ubuntu/EmpPayroll_FrontEnd
directory=$(pwd)
echo "Directory is $directory"
npm i
# npm run build
npm start