#!/bin/bash
pm2 stop "yazmeyaa_website"
git pull
npm install
npm run build
rm -r node_modules
pm2 start "yazmeyaa_website"