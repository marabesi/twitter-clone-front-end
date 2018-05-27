#!/bin/bash
set -ev && \
git checkout gh-pages && \
git config user.name "marabesi" && \
git config user.email "matheus.marabesi@gmail.com" && \
git add -f dist/ . && \
git commit -m 'build' && \
git push --force --quiet $remote_repo master:$remote_branch > /dev/null 2>&1 && \
rm -fr .git

