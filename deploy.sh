
cd dist
git init
git checkout -b master
git add -A
git commit -m 'deploy'
git push -f git@github.com:tqkoh/qkjudge-UI.git master:dist
rm -rf .git
cd ..

cd ../tqk.blue
git pull
git commit -m "deploy qkjudge" --allow-empty
git push
cd ..
