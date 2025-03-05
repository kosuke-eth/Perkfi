'use client'

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, SlidersHorizontal } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const perks = [
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
    investmentValue: 21000,
    remaining: 10,
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
    investmentValue: 30000,
    remaining: 5,
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
    investmentValue: 13000,
    remaining: 8,
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
    investmentValue: 235000,
    remaining: 20,
  },
  {
    id: 5,
    company: "日本電信電話(9432)",
    validUntil: "優待権利確定月3月",
    type: "dポイント付与",
    description: "ポイントサービス 長期保有特典",
    minInvestment: "1.4万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "3.53%",
    totalYield: "3.53%",
    investmentValue: 14000,
    remaining: 12,
  },
  {
    id: 6,
    company: "ゆうちょ銀行(7182)",
    validUntil: "優待権利確定月3月",
    type: "オリジナルカタログ商品",
    description: "食料品 カタログギフト 暮らし 社会貢献",
    minInvestment: "75.3万",
    shareCount: "500株",
    yield: "0.39%",
    dividendYield: "3.71%",
    totalYield: "4.10%",
    investmentValue: 753000,
    remaining: 7,
  },
  {
    id: 7,
    company: "ＳＢＩグローバルアセットマネジメント(4765)",
    validUntil: "優待権利確定月3月",
    type: "自社投資情報サービス、暗号資産（仮想通貨）",
    description: "教養・娯楽 金融サービス 長期保有特典",
    minInvestment: "7.0万",
    shareCount: "100株",
    yield: "71.83%",
    dividendYield: "---%",
    totalYield: "71.83%",
    investmentValue: 70000,
    remaining: 9,
  },
  {
    id: 8,
    company: "ヒーハイスト(6433)",
    validUntil: "優待権利確定月3月",
    type: "QUOカード",
    description: "金券",
    minInvestment: "4.3万",
    shareCount: "100株",
    yield: "6.83%",
    dividendYield: "0.22%",
    totalYield: "7.05%",
    investmentValue: 43000,
    remaining: 11,
  },
  {
    id: 9,
    company: "ＩＮＰＥＸ(1605)",
    validUntil: "優待権利確定月12月",
    type: "QUOカード、施設見学会",
    description: "金券 教養・娯楽 長期保有特典 社会貢献",
    minInvestment: "18.9万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "4.74%",
    totalYield: "4.74%",
    investmentValue: 189000,
    remaining: 6,
  },
  {
    id: 10,
    company: "アイ・ケイ・ケイホールディングス(2198)",
    validUntil: "優待権利確定月4月",
    type: "優待食事券、株主優待商品",
    description: "食料品 食事券",
    minInvestment: "8.4万",
    shareCount: "100株",
    yield: "2.37%",
    dividendYield: "2.84%",
    totalYield: "5.21%",
    investmentValue: 84000,
    remaining: 15,
  },
  {
    id: 11,
    company: "オンワードホールディングス(8016)",
    validUntil: "優待権利確定月2月",
    type: "自社グループ製品",
    description: "カタログギフト 美容・ファッション 長期保有特典",
    minInvestment: "5.4万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "4.81%",
    totalYield: "4.81%",
    investmentValue: 54000,
    remaining: 14,
  },
  {
    id: 12,
    company: "小林洋行(8742)",
    validUntil: "優待権利確定月3月",
    type: "全国共通おこめ券",
    description: "金券 長期保有特典",
    minInvestment: "3.1万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "1.61%",
    totalYield: "1.61%",
    investmentValue: 31000,
    remaining: 8,
  },
  {
    id: 13,
    company: "ＲＩＺＡＰグループ(2928)",
    validUntil: "優待権利確定月3月",
    type: "優待品交換ポイント、優待券",
    description: "カタログギフト ポイントサービス 長期保有特典",
    minInvestment: "2.4万",
    shareCount: "100株",
    yield: "37.25%",
    dividendYield: "---%",
    totalYield: "37.25%",
    investmentValue: 24000,
    remaining: 7,
  },
  {
    id: 14,
    company: "キリンホールディングス(2503)",
    validUntil: "優待権利確定月12月",
    type: "自社商品詰合せ",
    description: "食料品 美容・ファッション 長期保有特典 社会貢献",
    minInvestment: "20.6万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "3.58%",
    totalYield: "3.58%",
    investmentValue: 206000,
    remaining: 5,
  },
  {
    id: 15,
    company: "キッコーマン(2801)",
    validUntil: "優待権利確定月3月",
    type: "自社グループ商品詰合せ",
    description: "食料品 長期保有特典 社会貢献",
    minInvestment: "14.4万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "1.44%",
    totalYield: "1.44%",
    investmentValue: 144000,
    remaining: 9,
  },
  {
    id: 16,
    company: "明治ホールディングス(2269)",
    validUntil: "優待権利確定月3月",
    type: "自社グループ製品詰合せ",
    description: "食料品 社会貢献",
    minInvestment: "31.2万",
    shareCount: "100株",
    yield: "0.48%",
    dividendYield: "3.20%",
    totalYield: "3.68%",
    investmentValue: 312000,
    remaining: 10,
  },
  {
    id: 17,
    company: "ドリームインキュベータ(4310)",
    validUntil: "優待権利確定月3月",
    type: "プレミアム優待倶楽部ポイント",
    description: "カタログギフト ポイントサービス 長期保有特典 プレミアム優待倶楽部",
    minInvestment: "39.8万",
    shareCount: "100株",
    yield: "0.37%",
    dividendYield: "10.62%",
    totalYield: "10.99%",
    investmentValue: 398000,
    remaining: 3,
  },
  {
    id: 18,
    company: "セブン＆アイ・ホールディングス(3382)",
    validUntil: "優待権利確定月2月",
    type: "グループ共通商品券",
    description: "金券 長期保有特典",
    minInvestment: "20.4万",
    shareCount: "100株",
    yield: "0.97%",
    dividendYield: "1.95%",
    totalYield: "2.92%",
    investmentValue: 204000,
    remaining: 6,
  },
  {
    id: 19,
    company: "くら寿司(2695)",
    validUntil: "優待権利確定月4月",
    type: "優待食事券",
    description: "食事券",
    minInvestment: "30.1万",
    shareCount: "100株",
    yield: "0.82%",
    dividendYield: "0.66%",
    totalYield: "1.48%",
    investmentValue: 301000,
    remaining: 4,
  },
  {
    id: 20,
    company: "北の達人コーポレーション(2930)",
    validUntil: "優待権利確定月2月",
    type: "自社商品・ＥＣサイト商品券",
    description: "食料品 美容・ファッション 長期保有特典",
    minInvestment: "1.5万",
    shareCount: "100株",
    yield: "35.43%",
    dividendYield: "2.28%",
    totalYield: "37.71%",
    investmentValue: 15000,
    remaining: 5,
  },
]

export default function Marketplace() {
  // 各フィルターの状態管理
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("すべて")
  const [moneyFilter, setMoneyFilter] = useState("all")
  const [companyFilter, setCompanyFilter] = useState("all")
  const [sortOrder, setSortOrder] = useState("newest")
  const [activeTab, setActiveTab] = useState("primary")

  // フィルター処理
  const filteredPerks = perks
    // タブによる処理（ここでは一次、二次とも基本同じデータを対象とする）
    .filter((perk) => true)
    // 検索フィルター（企業名、優待内容、説明を対象）
    .filter((perk) => {
      const search = searchTerm.toLowerCase()
      return (
        perk.company.toLowerCase().includes(search) ||
        perk.type.toLowerCase().includes(search) ||
        perk.description.toLowerCase().includes(search)
      )
    })
    // カテゴリフィルター（選択したカテゴリと perk.type が一致するか）
    .filter((perk) => {
      if (selectedCategory === "すべて") return true
      return perk.type === selectedCategory
    })
    // 金額フィルター（investmentValue を基準に）
    .filter((perk) => {
      if (moneyFilter === "all") return true
      if (moneyFilter === "under30000") return perk.investmentValue < 30000
      if (moneyFilter === "30000to100000")
        return perk.investmentValue >= 30000 && perk.investmentValue <= 100000
      if (moneyFilter === "over100000") return perk.investmentValue > 100000
      return true
    })
    // 企業フィルター
    .filter((perk) => {
      if (companyFilter === "all") return true
      return perk.company === companyFilter
    })
    // 並び順
    .sort((a, b) => {
      if (sortOrder === "newest") return b.id - a.id
      if (sortOrder === "price_asc") return a.investmentValue - b.investmentValue
      if (sortOrder === "price_desc") return b.investmentValue - a.investmentValue
      if (sortOrder === "popular") return b.remaining - a.remaining
      return 0
    })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* ヘッダーエリア */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold">マーケットプレイス</h1>
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="企業名や優待を検索"
                  className="pl-10 w-full md:w-[300px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* 流通種別タブ */}
          <Tabs
            defaultValue="primary"
            className="mb-8"
            onValueChange={(val) => setActiveTab(val)}
          >
            <TabsList>
              <TabsTrigger value="primary">一次流通</TabsTrigger>
              <TabsTrigger value="secondary">二次流通</TabsTrigger>
            </TabsList>
            <TabsContent value="primary">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredPerks.map((perk) => (
                  <Link href={`/nft/${perk.id}`} key={perk.id}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardContent className="p-0">
                        <div className="aspect-square relative bg-gray-200">
                          <img
                            src={`/perks-images/${perk.id}.png`}
                            alt={`${perk.company}の${perk.type}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="text-sm text-gray-500 mb-1">{perk.type}</div>
                          <h3 className="font-semibold mb-1">{perk.company}の株主優待</h3>
                          <div className="flex justify-between items-center mt-2">
                            <span className="font-bold text-purple-600">
                              {activeTab === "secondary"
                                ? Math.round(perk.investmentValue * 0.9).toLocaleString()
                                : perk.investmentValue.toLocaleString()}円
                            </span>
                            <span className="text-sm text-gray-500">
                              残り{perk.remaining}件
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="secondary">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredPerks
                  .slice(0, 6)
                  .reverse()
                  .map((perk) => (
                    <Link href={`/nft/${perk.id}?market=secondary`} key={perk.id}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                        <CardContent className="p-0">
                          <div className="aspect-square relative bg-gray-200">
                            <img
                              src={`/perks-images/${perk.id}.png`}
                              alt={`${perk.company}の${perk.type}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <div className="text-sm text-gray-500 mb-1">{perk.type}</div>
                            <h3 className="font-semibold mb-1">
                              {perk.company}の株主優待
                            </h3>
                            <div className="flex justify-between items-center mt-2">
                              <span className="font-bold text-purple-600">
                                {Math.round(perk.investmentValue * 0.9).toLocaleString()}円
                              </span>
                              <span className="text-sm text-gray-500">
                                市場価格
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* カテゴリフィルター */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">カテゴリから探す</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "すべて",
                "PayPayポイント",
                "QUOカード",
                "株主優待券",
                "dポイント付与",
                "オリジナルカタログ商品",
              ].map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>


          {/* 詳細フィルター */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">詳細フィルター</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">金額</label>
                <Select onValueChange={(val) => setMoneyFilter(val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="金額を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="under30000">30,000円未満</SelectItem>
                    <SelectItem value="30000to100000">
                      30,000円〜100,000円
                    </SelectItem>
                    <SelectItem value="over100000">100,000円以上</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">企業</label>
                <Select onValueChange={(val) => setCompanyFilter(val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="企業を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    {perks.map((perk) => (
                      <SelectItem key={perk.id} value={perk.company}>
                        {perk.company}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">並び順</label>
                <Select onValueChange={(val) => setSortOrder(val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="並び順を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">新着順</SelectItem>
                    <SelectItem value="price_asc">価格が安い順</SelectItem>
                    <SelectItem value="price_desc">価格が高い順</SelectItem>
                    <SelectItem value="popular">人気順</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
