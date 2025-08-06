# Next.js プロジェクト トラブルシューティング記録

## 概要
PROMOAI_ServiceSite（Next.jsプロジェクト）での開発環境構築とトラブルシューティングの記録

## 発生した問題
1. **Node.js バージョンの問題**
   - プロジェクトが Node.js 18.17.0 以上を要求
   - ローカル環境が Node.js 16.x で古かった

2. **依存関係のインストールエラー**
   - `npm install` でエラーが発生
   - パッケージの競合や互換性の問題

3. **開発サーバー起動エラー**
   - `npm run dev` でエラーが発生
   - 依存関係が正しくインストールされていない状態

## 解決手順

### 1. Node.js バージョンアップデート
```bash
# Node.js の最新版をインストール
brew install node

# バージョン確認
node --version  # v20.x.x が表示されることを確認
npm --version
```

### 2. プロジェクトディレクトリの確認
```bash
# プロジェクトディレクトリに移動
cd /Users/masayasusuzuki/Desktop/LOGICA/website/PROMOAI_ServiceSite

# プロジェクト構造の確認
ls -la
```

### 3. 依存関係のクリーンインストール
```bash
# node_modules と package-lock.json を削除
rm -rf node_modules package-lock.json

# 依存関係を再インストール
npm install
```

### 4. 開発サーバーの起動
```bash
# 開発サーバーを起動
npm run dev
```

## 成功のポイント

### 重要な気づき
1. **Node.js バージョンの重要性**
   - プロジェクトの `package.json` で要求される Node.js バージョンを必ず確認
   - 古いバージョンでは依存関係のインストールが失敗する可能性

2. **クリーンインストールの効果**
   - `node_modules` と `package-lock.json` を削除してから再インストール
   - キャッシュされた古い依存関係による競合を回避

3. **エラーメッセージの読み方**
   - エラーメッセージから根本原因を特定
   - 依存関係の問題は多くの場合、バージョンの不整合が原因

### 技術的な学び
- **npm の依存関係解決**: パッケージマネージャーが依存関係を解決する仕組み
- **Node.js バージョン管理**: プロジェクトごとに適切な Node.js バージョンを使用する重要性
- **トラブルシューティングの基本**: エラーログを読む → 原因を特定 → 段階的に解決

## 今後の予防策

### 開発環境の管理
1. **Node.js バージョン管理ツールの使用**
   ```bash
   # nvm を使用して Node.js バージョンを管理
   nvm install 20
   nvm use 20
   ```

2. **プロジェクト開始時の確認事項**
   - `package.json` の `engines` フィールドを確認
   - 必要な Node.js バージョンを事前にインストール

3. **定期的な依存関係の更新**
   ```bash
   npm audit  # セキュリティ脆弱性の確認
   npm update # 依存関係の更新
   ```

## 使用したコマンド一覧

```bash
# 環境確認
node --version
npm --version
pwd
ls -la

# 依存関係の管理
rm -rf node_modules package-lock.json
npm install

# 開発サーバー
npm run dev

# その他の便利なコマンド
npm run build  # プロダクションビルド
npm run lint   # コードの品質チェック
```

## 参考資料
- [Next.js 公式ドキュメント](https://nextjs.org/docs)
- [npm 公式ドキュメント](https://docs.npmjs.com/)
- [Node.js 公式サイト](https://nodejs.org/)

## まとめ
今回の問題は主に Node.js バージョンの不整合が原因でした。適切なバージョンを使用し、依存関係をクリーンインストールすることで解決できました。今後は開発環境の管理を徹底し、同様の問題を防ぐことが重要です。

**重要な教訓**: エラーメッセージをよく読み、段階的に問題を解決することがトラブルシューティングの基本です。 