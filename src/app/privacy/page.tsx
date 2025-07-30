"use client";
import Link from "next/link";
import { FiArrowLeft, FiShield, FiFileText, FiUsers, FiLock } from "react-icons/fi";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-900 py-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* ヘッダー */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-secondary hover:text-secondary-light transition-all duration-300 mb-8 group"
            >
              <FiArrowLeft className="mr-3 text-lg group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">メインページに戻る</span>
            </Link>
            
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                プライバシーポリシー
              </h1>
              <p className="text-gray-400 font-medium">
                最終更新日: 2025年7月30日
              </p>
            </div>
          </div>

          {/* プライバシーポリシー内容 */}
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-zinc-700/50 space-y-12">
            
            {/* タイトルセクション */}
            <section className="border-b border-zinc-700 pb-8">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <FiFileText className="mr-3 text-secondary" />
                プライバシーポリシー
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                （PROMO AI Webサイトおよび関連サービス用）
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">1</span>
                はじめに
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6 border-l-4 border-secondary">
                <p className="text-gray-300 leading-relaxed mb-4">
                  株式会社LOGICA（以下「当社」といいます。）は、AI 技術を活用した動画・画像制作および DX コンサルティングサービス「PROMO AI」（以下「本サービス」といいます。）を運営するにあたり、お客様ならびにステークホルダーの皆さまからお預かりする個人情報を適切に取り扱うことを最重要事項と位置付けています。
                </p>
                <p className="text-gray-300 leading-relaxed">
                  本プライバシーポリシー（以下「本ポリシー」といいます。）は、<strong className="text-secondary-light">個人情報の保護に関する法律（平成 15 年法律第 57 号、以下「個人情報保護法」）</strong>、<strong className="text-secondary-light">EU 一般データ保護規則（GDPR）</strong>、<strong className="text-secondary-light">カリフォルニア州消費者プライバシー法（CCPA）</strong>その他関連法令・ガイドラインを遵守しつつ、本サービスにおける個人情報の取扱いを定めるものです。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">2</span>
                適用範囲
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  本ポリシーは、本サービスの公式ウェブサイト、申込フォーム、各種 SNS アカウント、メール・チャット・オンライン会議ツール等、本サービスの提供に付随して当社が運営・管理するあらゆるデジタルチャネルに適用されます。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">3</span>
                取得する個人情報
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed mb-6">
                  当社は以下の情報を取得する場合があります。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-zinc-700 to-zinc-800">
                        <th className="border border-zinc-600 p-4 text-left text-white font-bold text-sm uppercase tracking-wide">区分</th>
                        <th className="border border-zinc-600 p-4 text-left text-white font-bold text-sm uppercase tracking-wide">具体的項目</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-zinc-700/30 transition-colors">
                        <td className="border border-zinc-600 p-4 text-gray-300 font-semibold bg-zinc-800/50">基本情報</td>
                        <td className="border border-zinc-600 p-4 text-gray-300">会社名、部署名、役職、担当者氏名、メールアドレス、電話番号など</td>
                      </tr>
                      <tr className="hover:bg-zinc-700/30 transition-colors">
                        <td className="border border-zinc-600 p-4 text-gray-300 font-semibold bg-zinc-800/50">サービス関連情報</td>
                        <td className="border border-zinc-600 p-4 text-gray-300">制作ジャンル、納品本数・尺・形式、撮影要否、企画構成要否、修正回数希望、制作スケジュール、納品形式、予算レンジ、参考 URL、その他お問い合わせ内容など</td>
                      </tr>
                      <tr className="hover:bg-zinc-700/30 transition-colors">
                        <td className="border border-zinc-600 p-4 text-gray-300 font-semibold bg-zinc-800/50">技術情報</td>
                        <td className="border border-zinc-600 p-4 text-gray-300">IP アドレス、Cookie・同類の識別子、ブラウザ種別・バージョン、OS・デバイス情報、アクセスログ（日時・閲覧ページ・クリック履歴等）</td>
                      </tr>
                      <tr className="hover:bg-zinc-700/30 transition-colors">
                        <td className="border border-zinc-600 p-4 text-gray-300 font-semibold bg-zinc-800/50">その他</td>
                        <td className="border border-zinc-600 p-4 text-gray-300">当社との打合せ・アンケート等で取得する資料・メモ、映像・音声データ等</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">4</span>
                個人情報の利用目的
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <ol className="list-decimal list-inside text-gray-300 space-y-3 marker:text-secondary marker:font-bold">
                  <li className="pl-2">本サービスの提供、運営およびアフターサポート</li>
                  <li className="pl-2">見積書・契約書・請求書等の送付、連絡、本人確認</li>
                  <li className="pl-2">コンテンツ制作・納品・改善のための企画立案、品質管理、A/B テスト</li>
                  <li className="pl-2">取得したアクセスデータの分析による UX 向上、機能改善、セキュリティ確保</li>
                  <li className="pl-2">新サービス・イベント・セミナー等のご案内（事前の同意がある場合に限る）</li>
                  <li className="pl-2">問い合わせ対応、トラブルシューティング</li>
                  <li className="pl-2">法令または行政当局の要請に基づく対応</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">5</span>
                法的根拠
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/20 text-secondary p-2 rounded-lg mr-4 mt-1">
                      <FiLock className="text-sm" />
                    </div>
                    <div>
                      <strong className="text-secondary-light">契約履行</strong>（GDPR6(1)(b)）<br />
                      <span className="text-gray-300">ご依頼に基づく制作・運用業務の遂行</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 text-secondary p-2 rounded-lg mr-4 mt-1">
                      <FiFileText className="text-sm" />
                    </div>
                    <div>
                      <strong className="text-secondary-light">法的義務の履行</strong>（GDPR6(1)(c)）<br />
                      <span className="text-gray-300">税務・会計・記録保持に関する法定義務</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 text-secondary p-2 rounded-lg mr-4 mt-1">
                      <FiShield className="text-sm" />
                    </div>
                    <div>
                      <strong className="text-secondary-light">正当な利益</strong>（GDPR6(1)(f)）<br />
                      <span className="text-gray-300">不正利用防止、サービス改善、セキュリティ確保</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 text-secondary p-2 rounded-lg mr-4 mt-1">
                      <FiUsers className="text-sm" />
                    </div>
                    <div>
                      <strong className="text-secondary-light">同意</strong>（GDPR6(1)(a)）<br />
                      <span className="text-gray-300">マーケティング情報の配信等、任意同意が必要な行為</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">6</span>
                AI 技術の利用と著作権保護への取り組み
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6 space-y-6">
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    AI 活用の透明性
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>当社は Adobe Firefly、OpenAI、Runway 等の生成系 AI ツールを用い、お客様の制作目的に応じて効率的かつ高品質なクリエイティブを提供します。</li>
                    <li><strong className="text-secondary-light">すべての生成物について「使用ツール名」「モデルバージョン」「主要プロンプト（再現可能な粒度）」「生成日時」を納品物とともに必ず開示</strong>いたします。</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    著作権・ライセンス遵守
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>公開ライセンス、オープンソース、ストック素材については利用条件を法務部が二重チェックし、適切なクレジットおよびライセンス証跡を保管します。</li>
                    <li>生成 AI の学習データ由来による第三者著作物の潜在的侵害リスクを低減するため、<strong className="text-secondary-light">類似度判定ツール・逆画像検索・音声識別</strong>を社内ワークフローに組み込み、制作段階で「既存コンテンツのトレース／模倣」を排除しています。</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    社内ガバナンス
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>社員・業務委託者全員に対し AI 倫理・著作権保護の研修を年 1 回以上実施。</li>
                    <li><strong className="text-secondary-light">外部ガイドライン（経済産業省「生成 AI 利用ガイドライン」等）を参照しつつ、社内規程「Generative AI Code of Conduct」を策定し公開</strong>しています。</li>
                    <li>重大インシデントが発生した場合は、24 時間以内にお客様へ初報を行い、事実関係・再発防止策を含む報告書を提出します。</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-secondary/20 to-secondary-light/20 p-6 rounded-xl border border-secondary/30">
                  <p className="text-gray-300 italic">
                    <strong className="text-secondary-light">当社は「プロンプトまで開示する」ことで AI 生成物の真正性を証明し、二次利用・改変時の権利処理を容易にする――この徹底度こそが他社にはない競争優位性であると自負しています。</strong>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">7</span>
                個人情報の第三者提供
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  当社は以下の場合を除き、個人情報を第三者に提供しません。
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のため必要で本人の同意が困難な場合</li>
                  <li>国の機関等の公的機関が法令の定める事務を遂行するうえで協力する必要がある場合</li>
                  <li>あらかじめ本人の同意を得た範囲で外部委託する場合（クラウドホスティング、決済代行、配送業者など）</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">8</span>
                個人情報の国外移転
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  クラウドサービス（AWS, Google Cloud, Microsoft Azure 等）の利用に伴い、EU 圏外・日本国外にサーバーが所在する場合があります。移転先が GDPR 第 45 条に基づく十分性認定国でない場合でも、標準契約条項（SCC）等により適切な保護措置を講じます。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">9</span>
                安全管理措置
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-secondary/20 text-secondary p-2 rounded-lg mr-4 mt-1">
                      <FiShield className="text-sm" />
                    </div>
                    <div>
                      <strong className="text-secondary-light">組織的安全管理</strong>: 権限管理、定期的アクセス権レビュー、ログ監査
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 text-secondary p-2 rounded-lg mr-4 mt-1">
                      <FiUsers className="text-sm" />
                    </div>
                    <div>
                      <strong className="text-secondary-light">人的安全管理</strong>: 秘密保持契約、教育・訓練、退職時権限剥奪
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 text-secondary p-2 rounded-lg mr-4 mt-1">
                      <FiLock className="text-sm" />
                    </div>
                    <div>
                      <strong className="text-secondary-light">物理的安全管理</strong>: サーバールーム入退室管理、盗難防止
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 text-secondary p-2 rounded-lg mr-4 mt-1">
                      <FiFileText className="text-sm" />
                    </div>
                    <div>
                      <strong className="text-secondary-light">技術的安全管理</strong>: 暗号化通信（TLS 1.2 以上）、WAF、IPS/IDS、マルウェア対策、2 要素認証
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 text-secondary p-2 rounded-lg mr-4 mt-1">
                      <FiShield className="text-sm" />
                    </div>
                    <div>
                      <strong className="text-secondary-light">外的環境の把握</strong>: クラウドベンダーの SOC1/SOC2 報告書、ISMS 認証を確認
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">10</span>
                保有個人データの開示等のご請求
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  本人または代理人から、保有個人データの開示・訂正・追加・削除・利用停止等（APPI 第 32〜35 条、GDPR 第 15〜18 条ほか）の請求があった場合、本人確認のうえ、法令に従い速やかに対応します。手続きの詳細および手数料は「12. お問い合わせ先」までご請求ください。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">11</span>
                Cookie 等の利用
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  当社ウェブサイトでは、以下の目的で Cookie・広告識別子を使用します。
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                  <li>サイトパフォーマンス計測（Google Analytics 等）</li>
                  <li>広告パーソナライズおよびリマーケティング（事前同意制）</li>
                  <li>サイト利用状況の分析・改善</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  ブラウザの設定により Cookie の保存を拒否することが可能ですが、その場合サイトの一部機能が利用できないことがあります。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">12</span>
                未成年の個人情報
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  16 歳未満の方は必ず保護者の同意を得たうえで本サービスをご利用ください。保護者の同意が確認できない場合、利用をお断りする場合があります。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">13</span>
                本ポリシーの改定
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  法令改正、サービス内容の変更等に応じて、本ポリシーを予告なく改定することがあります。重要な変更を行う場合は、当社ウェブサイト上で周知し、必要に応じて同意を再取得します。最新版は常に当社サイトに掲載します。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">14</span>
                お問い合わせ先
              </h2>
              <div className="bg-gradient-to-r from-zinc-700 to-zinc-800 p-6 rounded-xl border border-zinc-600">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <FiUsers className="mr-2 text-secondary" />
                      運営会社
                    </h3>
                    <p className="text-gray-300">
                      <strong>株式会社LOGICA</strong><br />
                      <strong>代表者</strong>: 西木 昌江
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <FiFileText className="mr-2 text-secondary" />
                      連絡先
                    </h3>
                    <p className="text-gray-300">
                      <strong>住所</strong>: 東京都港区赤坂8-5-40 ペガサス青山720<br />
                      <strong>受付時間</strong>: 平日 11:00–19:00（日本時間）
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">付則</span>
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-6">
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>制定：2025 年 7 月 30 日</li>
                  <li>最終改定：2025 年 7 月 30 日</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 