import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Gift, Shield, Wallet, Zap, Users, BarChart, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient hero-pattern py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">株主優待の新しいカタチ</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up opacity-90">
              Perkfiは、株主優待をデジタル優待券として発行・取引できる革新的なプラットフォームです。
              ブロックチェーン技術を活用し、株主優待の流動性と利便性を高めます。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100" asChild>
                <Link href="/about/how-it-works">
                  ご利用の流れを見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/marketplace">マーケットプレイスを見る</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Perkfiのミッション</h2>
              <p className="text-xl text-gray-700">
                株主優待の価値を最大化し、企業と株主の新しい関係性を創造します。
                ブロックチェーン技術を活用することで、透明性と安全性を確保しながら、
                株主優待の流動性を高め、より多くの人々が企業の恩恵を受けられる世界を目指しています。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="feature-card">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">優待の流動性向上</h3>
                <p className="text-gray-600">
                  株主優待をデジタル化することで、必要な人に必要なタイミングで優待が行き渡る仕組みを構築します。
                </p>
              </div>
              <div className="feature-card">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">安全な取引環境</h3>
                <p className="text-gray-600">
                  ブロックチェーン技術により、偽造や不正取引のリスクを排除し、安全な取引環境を提供します。
                </p>
              </div>
              <div className="feature-card">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">簡単なアクセス</h3>
                <p className="text-gray-600">
                  ウォレットを意識せず、シンプルなアカウントログインでサービスを利用できる設計です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">Perkfiの仕組み</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">企業が株主優待をデジタル優待券として発行</h3>
                      <p className="text-gray-600">
                        企業は管理画面から簡単に株主優待をSolanaベースのデジタル優待券として発行できます。
                        発行数や有効期限、利用条件などを設定可能です。
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">株主が優待券を受け取る</h3>
                      <p className="text-gray-600">
                        証券会社と連携して株主認証を行い、株主は自動的に優待券を受け取ることができます。
                        ウォレットを意識せず、通常のアカウントで管理できます。
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">マーケットプレイスで取引</h3>
                      <p className="text-gray-600">
                        株主は受け取った優待券を使用するか、マーケットプレイスで販売することができます。
                        欲しい優待がある場合は、マーケットプレイスで購入することも可能です。
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">優待の利用</h3>
                      <p className="text-gray-600">
                        優待券の所有者は、店舗やオンラインで簡単に優待を利用できます。
                        利用履歴はブロックチェーン上に記録され、透明性が確保されます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-20 blur-xl"></div>
                <Card className="relative overflow-hidden border-0 shadow-xl">
                  <CardContent className="p-0">
                    <img
                      src="/placeholder.svg?height=600&width=800&text=Perkfiの仕組み"
                      alt="Perkfiの仕組み"
                      className="w-full h-auto"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">Perkfiのメリット</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">株主様のメリット</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>必要な優待だけを選んで取得できる</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>不要な優待は売却して現金化できる</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>株式を保有していなくても優待を購入できる</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>優待の管理が簡単（紛失リスクなし）</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>ブロックチェーンによる安全な取引</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">企業様のメリット</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>優待の発行・管理コストの削減</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>優待の利用状況をリアルタイムで把握</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>優待の二次流通による企業認知度の向上</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>株主以外のユーザーへのリーチ拡大</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span>偽造防止と不正利用の防止</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">テクノロジー</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="feature-card">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Solanaブロックチェーン</h3>
                <p className="text-gray-600">
                  高速で低コストのSolanaブロックチェーンを採用し、スムーズな取引体験を実現しています。
                  環境負荷も低く、持続可能なプラットフォームを構築しています。
                </p>
              </div>
              <div className="feature-card">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">証券会社連携API</h3>
                <p className="text-gray-600">
                  主要証券会社と連携し、株主情報を安全に同期。
                  株主であることを証明しながらも、個人情報は厳重に保護されます。
                </p>
              </div>
              <div className="feature-card">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">分析ダッシュボード</h3>
                <p className="text-gray-600">
                  企業向けに優待の利用状況や取引データを可視化。
                  マーケティング戦略の立案や優待設計に役立つインサイトを提供します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="section-heading">よくある質問</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>ウォレットがなくても利用できますか？</AccordionTrigger>
                <AccordionContent>
                  はい、Perkfiではウォレットを意識することなく、通常のアカウントログインでサービスを利用できます。
                  バックグラウンドでは安全にウォレットが管理されており、ユーザーは複雑な操作を行う必要はありません。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>株主でなくても優待を購入できますか？</AccordionTrigger>
                <AccordionContent>
                  はい、株主でなくても優待券を購入することができます。
                  マーケットプレイスでは、株主から出品された優待券を誰でも購入可能です。
                  これにより、株式投資をせずに優待だけを利用したい方にもメリットがあります。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>優待券の利用方法を教えてください</AccordionTrigger>
                <AccordionContent>
                  優待券を購入または受け取った後、マイページから確認できます。
                  利用時には店舗でQRコードを提示するか、オンラインサービスの場合は
                  専用コードを入力することで優待が適用されます。 利用後は自動的に使用済みとしてマークされます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>企業として参加するにはどうすればよいですか？</AccordionTrigger>
                <AccordionContent>
                  企業様は「企業向けサービス」ページからお申し込みいただけます。
                  専任のサポートスタッフが導入から運用までサポートいたします。
                  既存の株主優待をNFT化するだけでなく、新しい形の優待設計のご相談も承っております。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>取引手数料はかかりますか？</AccordionTrigger>
                <AccordionContent>
                  マーケットプレイスでの取引には少額の手数料がかかります。
                  購入時は表示価格に手数料が含まれており、売却時には売上の一部（5%程度）が
                  プラットフォーム手数料として差し引かれます。
                  なお、株主が初めて優待NFTを受け取る際には手数料はかかりません。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient hero-pattern text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">株主優待の新しい体験を始めましょう</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Perkfiで株主優待の可能性を広げませんか？ 簡単な登録で、すぐに優待券の取引を始めることができます。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100" asChild>
                <Link href="/auth/register">今すぐ始める</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white/10" asChild>
                <Link href="/about/for-companies">企業向け詳細を見る</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

