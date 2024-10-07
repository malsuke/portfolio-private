## Getting Started

### Use Bun

```bash
bun i
bun run dev
```

### Use others

```bash
npm i
npm run dev
# or
yarn i
yarn dev
# or
pnpm i
pnpm dev
```


## husky・lint-staged

コミットが発生する直前にコマンドを実行することができるツールを導入しています。
コミット前にlintチェックとフォーマットチェックを行っています。チェックに失敗するとエラー画面がでます。
ただ、VScodeのGUIでコミットした場合はエラー理由がわからないのでそういうときはCLIでコミットしてみると理由がわかるかもです。

```
git commit -m "test commit"
```
