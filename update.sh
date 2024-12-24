rm -rf docs
npm run build
mv dist docs
git add -A
git commit -m "update"
git push
