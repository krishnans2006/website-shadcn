pnpm run build

timestamp=$(pnpm node -e "console.log(new Date())")

gh-pages -r git@github.com:krishnans2006/krishnans2006.github.io.git -b main -d build --nojekyll -m "Update $timestamp"
