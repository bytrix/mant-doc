#! /bin/sh

rm -rf ./docs/.vuepress/dist
npm run build
git add .
git commit -m 'AUTO_COMMIT'
git push https://github.com/bytrix/mant-doc.git
git checkout -b gh-pages origin/gh-pages
git branch -a
git checkout master docs/.vuepress/dist
mv docs/.vuepress/dist/* ./doc
