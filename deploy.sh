
cd dist
git init
git checkout -b master
git add .
git commit -m 'deploy'
git push -f git@github.com:tqkoh/qkjudge.git master:gh-pages
rm -rf .git
cd ..
