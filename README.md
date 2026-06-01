# KokiJPN サイト

[YouTube @KokiJPN](https://www.youtube.com/@KokiJPN) のチャンネル紹介サイト（静的サイト）。

## ローカルで確認

`index.html` をブラウザで開くだけで確認できます。
ホットリロードしたい場合は、VS Code 拡張の **Live Server** を使うか、以下のいずれかを実行してください。

```pwsh
# Python
python -m http.server 5500

# Node.js
npx serve .
```

## GitHub Pages へデプロイする手順

1. GitHub で新しいリポジトリを作成（例: `kokijpn-site`）。
2. このフォルダで Git を初期化して push します。

   ```pwsh
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```

3. GitHub のリポジトリページで **Settings → Pages** を開く。
4. **Build and deployment** の **Source** を `Deploy from a branch` にする。
5. **Branch** で `main` / `/ (root)` を選んで **Save**。
6. 数十秒〜数分で `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/` に公開されます。

> ユーザー / 組織サイト（`<USERNAME>.github.io` というリポジトリ名）にすると、ルート URL で公開できます。

参考: [GitHub Pages サイトの作成](https://docs.github.com/ja/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## カスタマイズポイント

- `index.html` … 文言・セクション構成
- `styles.css` … カラー（`--color-accent` などの CSS 変数）・余白
- `script.js` … 動的処理（現状はフッターの年号表示のみ）
