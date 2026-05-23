# Mana Pages SEO 対応計画

最終更新: 2026-05-23

## ゴール

`https://mana-app.studio` を Mana シリーズ（StudyMana / NewsMana ほか）の **検索流入のハブ** にする。

1. 各アプリのブランド検索（"StudyMana" "NewsMana"）で 1位
2. ジャンル検索（"ポモドーロ アプリ" "ニュースアプリ ジャンル別" 等）で上位表示を狙う
3. 検索結果でリッチカード（アプリ情報・FAQ）が表示される
4. SNSシェア時の見た目を最適化（OG画像）

---

## Phase 1: 技術的土台（即着手 / 1日で完了）

| # | 項目 | 担当ファイル | 状態 |
|---|---|---|---|
| 1-1 | `@astrojs/sitemap` 追加 → `sitemap-index.xml` 自動生成 | `astro.config.mjs` / `package.json` | ☑ |
| 1-2 | `robots.txt` に sitemap URL 明記 | `public/robots.txt` | ☑ |
| 1-3 | `SoftwareApplication` JSON-LD 構造化データ追加（各アプリ詳細） | `src/pages/apps/[slug].astro` | ☑ |
| 1-4 | `FAQPage` JSON-LD 追加（FAQ部分） | `src/pages/apps/[slug].astro` | ☑ |
| 1-5 | `WebSite` + `Organization` JSON-LD（トップ） | `src/pages/index.astro` | ☑ |
| 1-6 | OG画像（1200×630）作成・設置（簡易版: アプリアイコンを padding 配置） | `public/og/*.png`, `BaseLayout.astro` | ☑ (要差し替え) |
| 1-7 | メタディスクリプションを検索意図に沿って書き換え | `src/data/apps.ts`, `src/pages/index.astro` | ☑ |
| 1-8 | 各 H1 / タグライン に検索キーワードを自然に含める | `src/data/apps.ts` | ☐ (今後) |
| 1-9 | アプリアイコンの `alt` を SEO 向けに整理 | コンポーネント類 | ☑ |
| 1-10 | favicon 拡張（apple-touch-icon, manifest.json） | `public/`, `BaseLayout.astro` | ☑ |
| 1-11 | Breadcrumb JSON-LD 追加 | `src/pages/apps/[slug].astro` | ☑ |
| 1-12 | Twitter Cards 拡張（title/description/image） | `src/layouts/BaseLayout.astro` | ☑ |

### 残作業（コーディング以外）
- [ ] Google Search Console にプロパティ追加（`https://mana-app.studio`）
- [ ] DNS TXT or HTML タグでドメイン所有確認
- [ ] sitemap.xml を Search Console に送信
- [ ] Bing Webmaster Tools にも同様に登録（オプション）
- [ ] **OG画像のデザイン版差し替え** — 現在はアプリアイコンを黒背景に padding しただけの簡易版。
  - Figma などでブランドロゴ + キャッチコピー入りの 1200×630 OG画像を作成
  - `public/og/default.png` / `public/og/studymana.png` / `public/og/newsmana.png` を差し替え
- [ ] Rich Results Test で構造化データを検証: https://search.google.com/test/rich-results
- [ ] PageSpeed Insights で Core Web Vitals を確認: https://pagespeed.web.dev/

---

## Phase 2: コンテンツ強化（1〜3ヶ月）

| # | 項目 | 状態 |
|---|---|---|
| 2-1 | `/blog` または `/changelog` を Astro Content Collections で実装 | ☐ |
| 2-2 | 初回投稿（例: "Manaシリーズ開発の経緯"、"StudyMana v1.0 リリースノート"） | ☐ |
| 2-3 | 月1回のアップデート / Tips 記事を継続 | ☐ |
| 2-4 | 各アプリの「使い方」「比較」ページを追加（例: "StudyMana vs 他のポモドーロアプリ"） | ☐ |
| 2-5 | キーワード分析（Search Console のクエリレポートを月1チェック） | ☐ |

### キーワードターゲット案

**StudyMana**
- ポモドーロ アプリ iPhone
- 資格勉強 タイマー
- 学習時間 記録
- 集中力 アプリ 無料
- iCloud 同期 タイマー

**NewsMana**
- ニュースアプリ ジャンル別
- RSS リーダー iOS
- ニュース まとめ アプリ
- ジャンル別 ニュース 通知

---

## Phase 3: オーソリティ構築（3〜6ヶ月）

| # | 項目 | 状態 |
|---|---|---|
| 3-1 | Zenn / Qiita / note に技術記事を投稿し mana-app.studio をリンク | ☐ |
| 3-2 | アプリの App Store サポートURL を LP に向ける | ☐ |
| 3-3 | LP のCTAから App Store へリンク（双方向強化） | ☐ |
| 3-4 | X (旧Twitter) や Threads でリリース告知 → 被リンク獲得 | ☐ |
| 3-5 | プロダクトハント等への掲載検討 | ☐ |

---

## Phase 4: 将来検討

- 多言語対応（Astro i18n、英語版）
- AMP は不要（Core Web Vitals最適化で十分）
- Web Story / 動画コンテンツ

---

## 観測 KPI

- **Search Console**:
  - 月間表示回数 / クリック数
  - 平均掲載順位（ブランド系・ジャンル系で別管理）
  - インデックス済みページ数
- **Google Analytics 4**（必要なら）:
  - オーガニック流入数
  - App Store 遷移率
- **目標値（6ヶ月後）**:
  - ブランド検索（"StudyMana" "NewsMana"）で1位
  - ジャンル検索で表示回数 月1000以上

---

## 実装メモ

- Astro はビルド時に静的HTMLを吐くので JSON-LD は `<script type="application/ld+json">` で各ページに埋め込む形が最適
- OG画像は Figma / Canva で作成し PNG で配置。テンプレを1つ作って差し替えれば運用容易
- 構造化データは [Schema.org Validator](https://validator.schema.org/) で検証
- リッチリザルトは [Rich Results Test](https://search.google.com/test/rich-results) で確認
