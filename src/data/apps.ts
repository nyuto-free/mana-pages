export type AppStatus = 'available' | 'review' | 'coming-soon';
export type Device = 'iphone' | 'ipad' | 'mac';

export type Feature = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type AppMeta = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** 検索結果に出るメタディスクリプション。具体的なベネフィット+OS+価格などを含める */
  seoDescription: string;
  /** App Storeでの正式名（PRODUCT_NAME と一致させる場合は別途用意） */
  appStoreName?: string;
  /** 価格表記 (例: '無料', '¥600') */
  price: string;
  /** カテゴリ (App Store/Schema用) */
  category: string;
  /** 対象OSの最低バージョン */
  minOs: { ios?: string; ipados?: string; macos?: string };
  status: AppStatus;
  appStoreUrl?: string;
  privacyUrl: string;
  accentColor: string;
  iconImage: string;
  devices: Device[];
  features: Feature[];
  screenshots: { src: string; alt: string }[];
  faqs: Faq[];
};

export const apps: AppMeta[] = [
  {
    slug: 'studymana',
    name: 'StudyMana',
    tagline: '合格までの時間を、味方にする。',
    description:
      '資格学習・受験勉強に集中するための、シンプルで美しいポモドーロタイマー。iPhone・iPad・Mac で iCloud 自動同期。買い切り・広告なし・データ収集なし。',
    seoDescription:
      '資格学習向けポモドーロタイマー「StudyMana」。科目管理・学習統計・iCloud同期・Live Activity に対応。iPhone / iPad / Mac で使える、無料・広告なし・データ収集なしの学習タイマー。',
    price: '無料',
    category: 'Education',
    minOs: { ios: '17.0', ipados: '17.0', macos: '14.0' },
    status: 'available',
    appStoreUrl: 'https://apps.apple.com/jp/app/id6767480300',
    privacyUrl: 'https://studymana.mana-app.studio/privacy-policy.html',
    accentColor: '#c9a961',
    iconImage: '/apps/studymana/icon.png',
    devices: ['iphone', 'ipad', 'mac'],
    features: [
      {
        title: 'ポモドーロタイマー',
        description: '作業25分+休憩5分。長休憩間隔もカスタマイズ可能。',
      },
      {
        title: '科目管理',
        description: '試験日・目標時間・色アイコンで複数科目を整理。',
      },
      {
        title: 'セッション中メモ',
        description: 'タイマーを止めずに気付きをそのまま記録。',
      },
      {
        title: '学習統計',
        description: '日次・週グラフ・12週ヒートマップ・ストリーク・累計時間。',
      },
      {
        title: 'iCloud同期',
        description: 'iPhone・iPad・Mac でデータが自動同期。',
      },
      {
        title: 'Live Activity / MenuBar',
        description: 'ロック画面・Dynamic Island・Macメニューバーで残り時間を常時表示。',
      },
    ],
    screenshots: [
      { src: '/apps/studymana/01-timer.png', alt: 'ポモドーロタイマー画面' },
      { src: '/apps/studymana/02-subjects.png', alt: '科目管理画面' },
      { src: '/apps/studymana/05-stats.png', alt: '学習統計画面' },
      { src: '/apps/studymana/04-lockscreen-live-activity.png', alt: 'ロック画面のLive Activity表示' },
      { src: '/apps/studymana/03-memo.png', alt: 'セッション中メモ編集画面' },
    ],
    faqs: [
      {
        question: '無料ですか？',
        answer: 'はい、v1.0 は完全無料です。今後追加するPro機能のみ有料になる予定ですが、既存機能の有償化は行いません。',
      },
      {
        question: '広告は表示されますか？',
        answer: '一切表示されません。',
      },
      {
        question: '個人データは収集されますか？',
        answer: 'いいえ。学習データはお客様の iCloud にのみ保存され、開発者を含む第三者には送信されません。',
      },
      {
        question: '対応OSは？',
        answer: 'iOS 17 / iPadOS 17 / macOS 14 以降。',
      },
    ],
  },
  {
    slug: 'newsmana',
    name: 'NewsMana',
    appStoreName: 'News Mana',
    tagline: '今日のニュースを、ジャンルで読む。',
    description:
      '11ジャンル・33の信頼できる配信元から最新ニュースを集約。お気に入り保存、オフライン閲覧、ローカル通知に対応した、シンプルなRSSニュースリーダー。',
    seoDescription:
      'ジャンル別ニュースアプリ「NewsMana」。11ジャンル × 33の信頼できる配信元からRSSで最新ニュースを集約。お気に入り・オフライン閲覧・通知対応の無料iPhoneアプリ。',
    price: '無料',
    category: 'News',
    minOs: { ios: '17.0' },
    status: 'available',
    appStoreUrl: 'https://apps.apple.com/jp/app/id6770266972',
    privacyUrl: 'https://newsmana.mana-app.studio/',
    accentColor: '#c9a961',
    iconImage: '/apps/newsmana/icon.png',
    devices: ['iphone'],
    features: [
      {
        title: '11ジャンル × 33フィード',
        description: '総合 / 国内 / 国際 / 経済 / テック / AI / サイエンス / スポーツ / エンタメ / アニメ・ゲームを網羅。',
      },
      {
        title: '高速プリフェッチ',
        description: '起動時に全ジャンルを並列取得。タブ切替もキャッシュで瞬時に表示。',
      },
      {
        title: 'お気に入り & オフライン',
        description: '気になる記事は本文ごと端末保存。電波がなくても読み返せます。',
      },
      {
        title: '横断検索',
        description: '取得済みの全ジャンルから、キーワードで一括検索。',
      },
      {
        title: 'ローカル通知',
        description: '新着記事を指定時刻に通知。タップで該当記事へ直接ジャンプ。',
      },
      {
        title: '3つの表示形式',
        description: 'リスト / 2列グリッド / 3列グリッドから好みのレイアウトを選択。',
      },
    ],
    screenshots: [
      { src: '/apps/newsmana/01-home-list.png', alt: 'ホーム画面（リスト表示）' },
      { src: '/apps/newsmana/03-home-grid3.png', alt: 'ホーム画面（3列グリッド表示）' },
      { src: '/apps/newsmana/07-search.png', alt: '横断検索画面' },
      { src: '/apps/newsmana/06-saved.png', alt: 'お気に入り画面' },
      { src: '/apps/newsmana/08-article-detail.png', alt: '記事詳細画面' },
      { src: '/apps/newsmana/05-settings-summary-style.png', alt: '設定画面' },
    ],
    faqs: [
      {
        question: '無料ですか？',
        answer: 'はい、無料でご利用いただけます。広告（バナー・ネイティブ）が表示されます。',
      },
      {
        question: '個人データは収集されますか？',
        answer: 'アプリ自身は閲覧履歴・お気に入りなどをすべて端末内に保存します。広告配信のため Google AdMob を利用しており、AdMob 側で広告識別子等が取得されます（詳細はプライバシーポリシー）。',
      },
      {
        question: '配信元は？',
        answer: '各メディアが公式に公開しているRSSフィードのみを使用しています。著作権は各配信元に帰属し、本アプリはタイトル・概要・サムネイル・元記事リンクのみを表示します。',
      },
      {
        question: '対応OSは？',
        answer: 'iOS 17 以降の iPhone（iPad は非対応）。',
      },
    ],
  },
];
