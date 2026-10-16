# KokiJPN サイト

[YouTube @KokiJPN](https://www.youtube.com/@KokiJPN) から訪れる海外旅行者向けの英語サイトです。YouTube の紹介から東京のパーソナルツアーへの問い合わせにつなげます。HTML・CSS・JavaScript のみで動作し、ビルドや依存パッケージは不要です。

## ローカルで確認

`index.html` をブラウザで開いてください。HTTP で確認する場合は、このフォルダから次を実行します。

```pwsh
python -m http.server 5500
```

`http://localhost:5500` を開きます。

## 構成と編集

- `index.html`: 英語の紹介、オリジナルの東京イラスト、YouTube、ツアー、問い合わせ、FAQ。提供内容は既存サイトに基づきます。料金、空き状況、資格、実績などは未確認のため掲載していません。
- `styles.css`: レスポンシブレイアウトと `--cp-*` カラートークン。OS の配色設定に連動し、`?scoutTheme=light` / `?scoutTheme=dark` でプレビューできます。外部フォントは使用しません。
- `script.js`: 年号、端末の現地日付を使った希望日の最小値、クリック時のみ読み込む YouTube プレーヤー。JavaScript が無効でもページ内リンク、フォーム、FAQ、YouTube へのリンクは動作します。

掲載動画は所有者指定の `ddrVf9PUIfs` です。「最新」とは表示しません。変更時は `index.html` の動画 URL・サムネイルと `script.js` の埋め込み URL を同時に更新してください。サムネイルは YouTube から読み込み、プレーヤーは利用者が再生を選んだときに `youtube-nocookie.com` から読み込みます。

## 問い合わせ

ツアー相談は、Formspree エンドポイント `https://formspree.io/f/mwlvanrp` に標準 HTML POST で送信します。送信後の成功・エラー画面は Formspree 側が提供します。サイト側で送信成功を装う処理や決済処理はありません。

気軽な会話・日本語と英語の言語交流・コラボレーションは [Instagram @koki.japan](https://www.instagram.com/koki.japan/) へ案内します。一般問い合わせフォームは置かず、プロフィールへの通常リンクのみを使用し、Instagram の埋め込みは読み込みません。Instagram 側のメッセージリクエスト設定は所有者が確認してください。返信は確約していません。

ツアー送信は予約確定ではなく問い合わせです。日程・ルート・価格はメールで相談する旨を表示しています。フォームには個人情報の外部送信と Formspree のプライバシーポリシーを案内しています。

## 公開と確認

GitHub リポジトリの **Settings → Pages → Build and deployment** で `Deploy from a branch` を選び、公開するブランチと `/ (root)` を指定します。`.nojekyll` を保持してください。

公開前に次を確認してください。

- 320px 幅のスマートフォンからデスクトップまで、横スクロールなく読めること。
- キーボードでスキップリンク、ナビゲーション、再生、FAQ、ツアーフォーム、Instagram リンクを操作できること。
- ライト／ダーク表示、動きを減らす設定、JavaScript 無効時の表示。
- 動画の公開状態と埋め込み許可。再生できない場合もチャンネルへの直接リンクを利用できます。
- サイト所有者が Formspree のフォーム設定、通知先、ドメイン制限、迷惑メール対策、利用上限を確認すること。実送信テストは所有者の同意のもとで行い、受信まで確認してください。
