"use client"
import { useState } from "react"
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
  // ...（その他のデータは省略）
]

export default function NFTDetail({ params }: { params: { id: string } }) {
  const nftId = Number.parseInt(params.id)
  const nftData = nftDataList[(nftId - 1) % nftDataList.length]

  // 入力モーダルと確認モーダルの表示状態管理
  const [modalType, setModalType] = useState<"purchase" | "list" | null>(null)
  const [confirmationModal, setConfirmationModal] = useState(false)
  // 購入・出品共通の入力項目
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  // 確認メッセージを保持
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null)

  // 最初のモーダル内で「確認」を押した際の処理
  const handleConfirm = () => {
    const msg = modalType === "purchase" ? "購入しました" : "出品しました"
    // 入力モーダルは閉じ、値をリセット
    setModalType(null)
    setQuantity("")
    setPrice("")
    // 確認メッセージをセットして、確認モーダルを表示
    setConfirmationMessage(msg)
    setConfirmationModal(true)
  }

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
                <Button size="lg" className="flex-1" onClick={() => setModalType("purchase")}>
                  購入する
                </Button>
                <Button size="lg" variant="outline" className="flex-1" onClick={() => setModalType("list")}>
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

      {/* 入力モーダル */}
      {modalType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">
              {modalType === "purchase" ? "購入する" : "出品する"}
            </h2>
            {modalType === "purchase" ? (
              <>
                <label className="block text-sm mb-2">購入数量</label>
                <input
                  type="number"
                  className="border p-2 mb-4 w-full"
                  placeholder="例: 1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <label className="block text-sm mb-2">購入希望価格 (円)</label>
                <input
                  type="number"
                  className="border p-2 mb-4 w-full"
                  placeholder="例: 1000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </>
            ) : (
              <>
                <label className="block text-sm mb-2">出品数量</label>
                <input
                  type="number"
                  className="border p-2 mb-4 w-full"
                  placeholder="例: 1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <label className="block text-sm mb-2">出品希望価格 (円)</label>
                <input
                  type="number"
                  className="border p-2 mb-4 w-full"
                  placeholder="例: 1200"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </>
            )}
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => { setModalType(null); setQuantity(""); setPrice("") }}>
                キャンセル
              </Button>
              <Button onClick={handleConfirm}>確認</Button>
            </div>
          </div>
        </div>
      )}

      {/* 確認モーダル */}
      {confirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">{confirmationMessage}</h2>
            <div className="flex justify-end">
              <Button onClick={() => { setConfirmationModal(false); setConfirmationMessage(null) }}>
                閉じる
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
