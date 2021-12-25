#!/bin/bash

yarn build
cat extensions/dist/index.html | sed "s/\/assets/assets/g" > tmp
rm extensions/dist/index.html
mv tmp extensions/dist/index.html
