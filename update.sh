rm -rf docs
npm run build
git add -A
git commit -m "update"
mv dist docs
git push
