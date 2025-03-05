import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Info, MapPin, Share2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

type NFTData = {
  company: string
  validUntil: string
  type: string
  description: string
  minInvestment: string
  shareCount: string
  yield: string
  dividendYield: string
  totalYield: string
}

const nftDataList: NFTData[] = [
  {
    company: "ソフトバンク(9434)",
    validUntil: "優待権利確定月3月",
    type: "PayPayポイント",
    description: "ポイントサービス 長期保有特典",
    minInvestment: "2.1万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "4.01%",
    totalYield: "4.01%",
  },
  {
    company: "ＴＢＫ(7277)",
    validUntil: "優待権利確定月3月",
    type: "東北地方ブランド米、またはQUOカード",
    description: "食料品 金券 長期保有特典",
    minInvestment: "3.0万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "2.66%",
    totalYield: "2.66%",
  },
  {
    company: "レダックス(7602)",
    validUntil: "優待権利確定月3月",
    type: "株主優待券",
    description: "暮らし",
    minInvestment: "1.3万",
    shareCount: "100株",
    yield: "218.97%",
    dividendYield: "1.46%",
    totalYield: "220.43%",
  },
  {
    company: "イオンモール(8905)",
    validUntil: "優待権利確定月2月",
    type: "自社商品券",
    description: "金券 長期保有特典 社会貢献",
    minInvestment: "23.5万",
    shareCount: "100株",
    yield: "1.27%",
    dividendYield: "2.11%",
    totalYield: "3.38%",
  },
  {
    company: "日本電信電話(9432)",
    validUntil: "優待権利確定月3月",
    type: "dポイント付与",
    description: "ポイントサービス 長期保有特典",
    minInvestment: "1.4万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "3.53%",
    totalYield: "3.53%",
  },
  {
    company: "ゆうちょ銀行(7182)",
    validUntil: "優待権利確定月3月",
    type: "オリジナルカタログ商品",
    description: "食料品 カタログギフト 暮らし 社会貢献",
    minInvestment: "75.3万",
    shareCount: "500株",
    yield: "0.39%",
    dividendYield: "3.71%",
    totalYield: "4.10%",
  },
  {
    company: "ＳＢＩグローバルアセットマネジメント(4765)",
    validUntil: "優待権利確定月3月",
    type: "自社投資情報サービス、暗号資産（仮想通貨）",
    description: "教養・娯楽 金融サービス 長期保有特典",
    minInvestment: "7.0万",
    shareCount: "100株",
    yield: "71.83%",
    dividendYield: "---%",
    totalYield: "71.83%",
  },
  {
    company: "ヒーハイスト(6433)",
    validUntil: "優待権利確定月3月",
    type: "QUOカード",
    description: "金券",
    minInvestment: "4.3万",
    shareCount: "100株",
    yield: "6.83%",
    dividendYield: "0.22%",
    totalYield: "7.05%",
  },
  {
    company: "ＩＮＰＥＸ(1605)",
    validUntil: "優待権利確定月12月",
    type: "QUOカード、施設見学会",
    description: "金券 教養・娯楽 長期保有特典 社会貢献",
    minInvestment: "18.9万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "4.74%",
    totalYield: "4.74%",
  },
  {
    company: "アイ・ケイ・ケイホールディングス(2198)",
    validUntil: "優待権利確定月4月",
    type: "優待食事券、株主優待商品",
    description: "食料品 食事券",
    minInvestment: "8.4万",
    shareCount: "100株",
    yield: "2.37%",
    dividendYield: "2.84%",
    totalYield: "5.21%",
  },
  {
    company: "オンワードホールディングス(8016)",
    validUntil: "優待権利確定月2月",
    type: "自社グループ製品",
    description: "カタログギフト 美容・ファッション 長期保有特典",
    minInvestment: "5.4万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "4.81%",
    totalYield: "4.81%",
  },
  {
    company: "小林洋行(8742)",
    validUntil: "優待権利確定月3月",
    type: "全国共通おこめ券",
    description: "金券 長期保有特典",
    minInvestment: "3.1万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "1.61%",
    totalYield: "1.61%",
  },
  {
    company: "ＲＩＺＡＰグループ(2928)",
    validUntil: "優待権利確定月3月",
    type: "優待品交換ポイント、優待券",
    description: "カタログギフト ポイントサービス 長期保有特典",
    minInvestment: "2.4万",
    shareCount: "100株",
    yield: "37.25%",
    dividendYield: "---%",
    totalYield: "37.25%",
  },
  {
    company: "キリンホールディングス(2503)",
    validUntil: "優待権利確定月12月",
    type: "自社商品詰合せ",
    description: "食料品 美容・ファッション 長期保有特典 社会貢献",
    minInvestment: "20.6万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "3.58%",
    totalYield: "3.58%",
  },
  {
    company: "キッコーマン(2801)",
    validUntil: "優待権利確定月3月",
    type: "自社グループ商品詰合せ",
    description: "食料品 長期保有特典 社会貢献",
    minInvestment: "14.4万",
    shareCount: "100株",
    yield: "---%",
    dividendYield: "1.44%",
    totalYield: "1.44%",
  },
  {
    company: "明治ホールディングス(2269)",
    validUntil: "優待権利確定月3月",
    type: "自社グループ製品詰合せ",
    description: "食料品 社会貢献",
    minInvestment: "31.2万",
    shareCount: "100株",
    yield: "0.48%",
    dividendYield: "3.20%",
    totalYield: "3.68%",
  },
  {
    company: "ドリームインキュベータ(4310)",
    validUntil: "優待権利確定月3月",
    type: "プレミアム優待倶楽部ポイント",
    description: "カタログギフト ポイントサービス 長期保有特典 プレミアム優待倶楽部",
    minInvestment: "39.8万",
    shareCount: "100株",
    yield: "0.37%",
    dividendYield: "10.62%",
    totalYield: "10.99%",
  },
  {
    company: "セブン＆アイ・ホールディングス(3382)",
    validUntil: "優待権利確定月2月",
    type: "グループ共通商品券",
    description: "金券 長期保有特典",
    minInvestment: "20.4万",
    shareCount: "100株",
    yield: "0.97%",
    dividendYield: "1.95%",
    totalYield: "2.92%",
  },
  {
    company: "くら寿司(2695)",
    validUntil: "優待権利確定月4月",
    type: "優待食事券",
    description: "食事券",
    minInvestment: "30.1万",
    shareCount: "100株",
    yield: "0.82%",
    dividendYield: "0.66%",
    totalYield: "1.48%",
  },
  {
    company: "北の達人コーポレーション(2930)",
    validUntil: "優待権利確定月2月",
    type: "自社商品・ＥＣサイト商品券",
    description: "食料品 美容・ファッション 長期保有特典",
    minInvestment: "1.5万",
    shareCount: "100株",
    yield: "35.43%",
    dividendYield: "2.28%",
    totalYield: "37.71%",
  },
]

export default function NFTDetail({ params }: { params: { id: string } }) {
  // NFT IDに基づき株主優待情報を選択（idが20を超えた場合は循環させる）
  const nftId = Number.parseInt(params.id)
  const nftData = nftDataList[(nftId - 1) % nftDataList.length]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 優待画像 */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={`/perks-images/${nftId}.png`}
                      alt={`${nftData.company}の株主優待`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 優待詳細 */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {nftData.type}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-2">{nftData.company}の株主優待</h1>
              <div className="text-2xl font-bold text-purple-600 mb-6">
                最低投資金額 {nftData.minInvestment}
              </div>

              <p className="text-gray-700 mb-6">{nftData.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">優待権利確定</p>
                    <p className="font-medium">{nftData.validUntil}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">優待発生株数</p>
                    <p className="font-medium">{nftData.shareCount}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">配当利回り</p>
                    <p className="font-medium">{nftData.dividendYield}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">配当＋優待利回り</p>
                    <p className="font-medium">{nftData.totalYield}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button size="lg" className="flex-1">
                  購入する
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  出品する
                </Button>
                <Button size="icon" variant="ghost">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center text-amber-600">
                    <Info className="h-5 w-5 mr-2" />
                    <p className="text-sm">
                      この株主優待は{nftData.company}が発行した正規の優待です。
                      投資情報サイトと連携して情報の正確性を確認しています。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="details">
              <TabsList className="mb-6">
                <TabsTrigger value="details">詳細情報</TabsTrigger>
                <TabsTrigger value="history">取引履歴</TabsTrigger>
                <TabsTrigger value="related">関連優待</TabsTrigger>
              </TabsList>
              <TabsContent value="details">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">優待詳細</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">優待内容</h4>
                        <p className="text-gray-700">{nftData.description}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">条件</h4>
                        <p className="text-gray-700">
                          最低投資金額: {nftData.minInvestment}
                          <br />
                          優待発生株数: {nftData.shareCount}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">利回り</h4>
                        <p className="text-gray-700">
                          優待利回り: {nftData.yield}
                          <br />
                          配当利回り: {nftData.dividendYield}
                          <br />
                          配当＋優待利回り: {nftData.totalYield}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="history">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">取引履歴</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b">
                        <div>
                          <p className="font-medium">発行</p>
                          <p className="text-sm text-gray-500">－</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{nftData.minInvestment}</p>
                          <p className="text-sm text-gray-500">発行者: {nftData.company}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <div>
                          <p className="font-medium">一次販売</p>
                          <p className="text-sm text-gray-500">－</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{nftData.minInvestment}</p>
                          <p className="text-sm text-gray-500">購入者: SampleUser1</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <div>
                          <p className="font-medium">二次販売</p>
                          <p className="text-sm text-gray-500">－</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{nftData.minInvestment}</p>
                          <p className="text-sm text-gray-500">購入者: SampleUser2</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="related">
                <h3 className="text-xl font-semibold mb-4">関連する株主優待</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {nftDataList
                    .filter((_, id) => id !== (nftId - 1) % nftDataList.length)
                    .slice(0, 4)
                    .map((data, index) => (
                      <Link href={`/nft/${index + 1}`} key={index}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                          <CardContent className="p-0">
                            <div className="aspect-square relative bg-gray-200">
                              <img
                                src={`/perks-images/${index + 1}.png`}
                                alt={`${data.company}の株主優待`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <div className="text-sm text-gray-500 mb-1">
                                {data.type}
                              </div>
                              <h3 className="font-semibold mb-1">
                                {data.company}の株主優待
                              </h3>
                              <div className="flex justify-between items-center mt-2">
                                <span className="font-bold text-purple-600">
                                  {data.minInvestment}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {data.shareCount}
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
