## 開発

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

### husky・lint-staged

コミットが発生する直前にコマンドを実行することができるツールを導入しています。
コミット前にlintチェックとフォーマットチェックを行っています。チェックに失敗するとエラー画面がでます。
ただ、VScodeのGUIでコミットした場合はエラー理由がわからないのでそういうときはCLIでコミットしてみると理由がわかるかもです。

```
git commit -m "test commit"
```

## デプロイ

デプロイ先は自由だが、おすすめはcloudflare pages
GitHub Actionsを利用する場合は付属のWorkflowが利用可能

### はてなブログの更新をトリガーにcloudflare pagesへデプロイする

環境変数としてシークレットを設定する必要がある

|Key|Value|
|---|---|
|HATENA_USER_ID|はてなブログのユーザーID|
|HATENA_API_KEY|はてなブログのAPIキー (アカウント設定から確認)|
|HATENA_BLOG_URL|はてなブログのURL|
|CLOUDFLARE_WEBHOOK_URL|デプロイするCloudflare pagesのWebhook URL|
