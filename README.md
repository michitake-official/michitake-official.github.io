# michitake-official.github.io

一般社団法人 michitake のウェブサイト

## 構成

```
.
├── index.html       — トップページ
├── styles.css       — スタイル
├── script.js        — ナビ / スクロールアニメ
├── sitemap.xml      — サイトマップ
├── robots.txt       — クローラ向け
└── assets/
    └── logo.png     — ロゴ
```

## 開発

ローカルで確認する場合は、任意のHTTPサーバを起動してください。

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## デプロイ

`main` ブランチにマージすると GitHub Pages に自動デプロイされます。

## カスタマイズ

### Google Analytics

`index.html` 内の `GA_MEASUREMENT_ID`（2箇所）を、ご自身の GA4 測定ID（`G-XXXXXXXXXX`）に差し替えてください。

### OGP画像

`assets/ogp.png` (1200x630推奨) を追加すると、SNSシェア時に表示されます。
未配置の場合はロゴが代替として表示されます。

### 代表者写真

`#profile` セクション内の `.profile-photo` プレースホルダを、写真に差し替えてください。

```html
<div class="profile-photo">
  <img src="assets/representative.jpg" alt="宮道 敬" />
</div>
```

CSSで `img { width: 100%; height: 100%; object-fit: cover; }` が当たるよう調整済みです。

## ライセンス

© 一般社団法人 michitake. All Rights Reserved.
