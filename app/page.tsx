"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Gift,
  CreditCard,
  Phone,
  BookOpen,
  ShoppingBag,
  ArrowRight,
  TrendingUp,
  Zap,
  Shield,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useAuth } from "@/app/context/AuthContext"

export default function Home() {
  const { isLoggedIn } = useAuth()

  const categories = [
    { name: "商品券", icon: <ShoppingBag className="h-10 w-10 mb-2" />, count: 124 },
    { name: "ギフト券", icon: <Gift className="h-10 w-10 mb-2" />, count: 87 },
    { name: "テレホンカード", icon: <Phone className="h-10 w-10 mb-2" />, count: 32 },
    { name: "クオカード", icon: <CreditCard className="h-10 w-10 mb-2" />, count: 76 },
    { name: "図書カード", icon: <BookOpen className="h-10 w-10 mb-2" />, count: 45 },
  ]

  // Featured優待券（提供いただいた企業情報・画像に合わせて更新）
  const featuredItems = [
    {
      id: 1,
      company: "ソフトバンク(9434)",
      validUntil: "優待権利確定月3月",
      type: "PayPayポイント",
      description: "ポイントサービス 長期保有特典",
      minInvestment: "2.1万",
      shareCount: "100株",
      yield: "---%",
      dividendYield: "4.01%",
      totalYield: "4.01%",
      value: 21000,
      remaining: 10,
      image: "/perks-images/1.png",
      popular: true,
    },
    {
      id: 2,
      company: "ＴＢＫ(7277)",
      validUntil: "優待権利確定月3月",
      type: "東北地方ブランド米、またはQUOカード",
      description: "食料品 金券 長期保有特典",
      minInvestment: "3.0万",
      shareCount: "100株",
      yield: "---%",
      dividendYield: "2.66%",
      totalYield: "2.66%",
      value: 30000,
      remaining: 5,
      image: "/perks-images/2.png",
      new: true,
    },
    {
      id: 3,
      company: "レダックス(7602)",
      validUntil: "優待権利確定月3月",
      type: "株主優待券",
      description: "暮らし",
      minInvestment: "1.3万",
      shareCount: "100株",
      yield: "218.97%",
      dividendYield: "1.46%",
      totalYield: "220.43%",
      value: 13000,
      remaining: 8,
      image: "/perks-images/3.png",
    },
    {
      id: 4,
      company: "イオンモール(8905)",
      validUntil: "優待権利確定月2月",
      type: "自社商品券",
      description: "金券 長期保有特典 社会貢献",
      minInvestment: "23.5万",
      shareCount: "100株",
      yield: "1.27%",
      dividendYield: "2.11%",
      totalYield: "3.38%",
      value: 235000,
      remaining: 20,
      image: "/perks-images/4.png",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-600 hero-pattern"></div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                株主優待を
                <br />
                もっと自由に
              </h1>
              <p className="text-xl md:text-2xl text-white opacity-90 mb-8 animate-slide-up">
                Perkfiは企業の株主優待をSolanaベースのデジタル優待券として発行し、自由に売買できるマーケットプレイスです。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100" asChild>
                  <Link href="/marketplace">
                    マーケットプレイスを見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {/* ログインしていなければ、新規登録ボタンを表示 */}
                {!isLoggedIn && (
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    <Link href="/auth/register">新規登録</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10,000+</p>
                <p className="text-gray-600">取引済み優待券</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50+</p>
                <p className="text-gray-600">参加企業</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5,000+</p>
                <p className="text-gray-600">ユーザー数</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">364</p>
                <p className="text-gray-600">優待種類</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">Perkfiの特徴</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="feature-card">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">簡単アクセス</h3>
                <p className="text-gray-600 text-center">
                  ウォレットを意識せず、シンプルなアカウントログインでサービスを利用できます。
                  ブロックチェーンの知識がなくても安心してご利用いただけます。
                </p>
              </div>
              <div className="feature-card">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6 mx-auto">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">多様な優待</h3>
                <p className="text-gray-600 text-center">
                  商品券、ギフト券、テレホンカードなど、さまざまなデジタル優待を取り扱っています。
                  欲しい優待だけを選んで購入することができます。
                </p>
              </div>
              <div className="feature-card">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">証券会社連携</h3>
                <p className="text-gray-600 text-center">
                  証券会社と連携して株主認証を行い、安全に優待を受け取ることができます。
                  偽造や不正利用を防止し、安心して取引できる環境を提供します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">優待カテゴリ</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <Link key={index} href={`/marketplace?category=${category.name}`}>
                  <Card className="card-hover h-full border-0 shadow-md">
                    <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center mb-4">
                        {category.icon}
                      </div>
                      <h3 className="font-medium text-lg">{category.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{category.count}件の優待</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Items */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">注目の株主優待</h2>
              <Button variant="outline" className="group" asChild>
                <Link href="/marketplace" className="flex items-center">
                  すべて見る
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {featuredItems.map((item) => (
                <Link href={`/優待/${item.id}`} key={item.id}>
                  <Card className="優待-card border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="優待-card-image relative">
                        <img
                          src={item.image}
                          alt={`${item.company}の${item.type}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          {item.popular && <Badge className="bg-amber-500">人気</Badge>}
                          {item.new && <Badge className="bg-green-500">新着</Badge>}
                        </div>
                      </div>
                      <div className="優待-card-content p-4">
                        <div className="text-sm text-gray-500 mb-1">{item.type}</div>
                        <h3 className="font-semibold text-lg mb-1">{item.company}の株主優待</h3>
                        <div className="flex justify-between items-center mt-3">
                          <span className="font-bold text-lg text-purple-600">
                            {item.value.toLocaleString()}円相当
                          </span>
                          <span className="text-sm text-gray-500">残り{item.remaining}枚</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">ユーザーの声</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold mr-4">
                      TK
                    </div>
                    <div>
                      <p className="font-semibold">田中健太</p>
                      <p className="text-sm text-gray-500">個人投資家</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    「株主優待を選べるようになったのが嬉しいです。必要な優待だけを購入できるので、無駄がなくなりました。使い方も簡単で、ブロックチェーンの知識がなくても問題なく利用できています。」
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold mr-4">
                      MY
                    </div>
                    <div>
                      <p className="font-semibold">松本優子</p>
                      <p className="text-sm text-gray-500">主婦</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    「株を持っていなくても優待が買えるのが魅力です。特に商品券やギフト券は日常で使えるので重宝しています。紙の優待券と違って管理も楽で、スマホひとつで全て完結するのが便利です。」
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold mr-4">
                      SK
                    </div>
                    <div>
                      <p className="font-semibold">佐藤健一</p>
                      <p className="text-sm text-gray-500">企業IR担当</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    「優待の発行・管理が格段に楽になりました。利用状況もリアルタイムで把握できるので、次の優待設計にも活かせています。株主以外のユーザーにもリーチできるのが大きなメリットです。」
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-600 hero-pattern"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">今すぐPerkfiを始めよう</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white opacity-90">
              簡単な登録で株主優待デジタル券の取引を始めることができます。 証券会社アカウントとの連携も可能です。
            </p>
            {/* ログインしていなければ、CTAボタンを表示 */}
            {!isLoggedIn && (
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  <Link href="/auth/register">新規登録</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="border border-gray-400 text-gray-700 hover:bg-gray-100"
                >
                  <Link href="/auth/login">ログイン</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
