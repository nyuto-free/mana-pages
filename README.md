# Mana Pages

`https://mana-app.studio` — Mana シリーズ（StudyMana / NewsMana ほか）のブランドハブ + アプリ詳細ページ。

## 構成

- **トップ (`/`)**: シリーズ紹介 + アプリ一覧
- **アプリ詳細 (`/apps/[slug]`)**: ヒーロー / 機能 / スクショ / FAQ
- データは `src/data/apps.ts` で一元管理

## 開発

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # ./dist に静的書き出し
npm run preview   # 本番ビルドのローカルプレビュー
```

## デプロイ

`main` ブランチへの push で `.github/workflows/deploy.yml` が自動デプロイ。
GitHub リポジトリ Settings → Pages → Source を **GitHub Actions** に設定すること。

カスタムドメイン `mana-app.studio` は `public/CNAME` で指定済み。
DNS 側で apex (`mana-app.studio`) を以下の GitHub Pages IP に向ける:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## ファイル配置

```
public/
├── CNAME            # mana-app.studio
├── app-ads.txt      # AdMob (pub-8739008871785068)
├── robots.txt
├── favicon.{svg,ico}
└── apps/
    ├── newsmana/    # スクリーンショット
    └── studymana/   # （未配置）

src/
├── data/apps.ts            # アプリメタデータ
├── layouts/BaseLayout.astro
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── AppCard.astro
├── pages/
│   ├── index.astro
│   └── apps/[slug].astro
└── styles/global.css
```

## 新規アプリ追加

1. `src/data/apps.ts` の `apps` 配列にエントリ追加
2. スクショ画像を `public/apps/<slug>/` に配置
3. 必要なら `src/components/Footer.astro` のリンクも更新

これだけで `/apps/<slug>` が自動生成される（dynamic route）。

## 関連リポジトリ

- `nyuto-free/news-mana-pages` — NewsMana プライバシーポリシー（newsmana.mana-app.studio）
- `nyuto-free/studymana-pages` — StudyMana プライバシーポリシー（studymana.mana-app.studio）
