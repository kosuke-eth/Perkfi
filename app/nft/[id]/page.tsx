import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Info, MapPin, Share2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NFTDetail({ params }: { params: { id: string } }) {
  // Mock NFT data based on ID
  const nftId = Number.parseInt(params.id)

  const nftData = {
    id: nftId,
    company: ["ABC株式会社", "XYZ商事", "123ホールディングス", "テック企業"][(nftId - 1) % 4],
    type: ["商品券", "ギフト券", "テレホンカード", "クオカード"][(nftId - 1) % 4],
    value: [5000, 3000, 10000, 2000][(nftId - 1) % 4],
    remaining: [12, 5, 8, 20][(nftId - 1) % 4],
    image: `/placeholder.svg?height=500&width=500&text=${
      ["ABC商品券", "XYZギフト券", "123テレカ", "テッククオカード"][(nftId - 1) % 4]
    }`,
    description: [
      "ABC株式会社の株主優待商品券です。全国のABCストアで利用可能です。",
      "XYZ商事の株主優待ギフト券です。提携レストランやホテルで利用できます。",
      "123ホールディングスの株主優待テレホンカードです。全国で利用可能です。",
      "テック企業の株主優待クオカードです。コンビニやガソリンスタンドで利用できます。",
    ][(nftId - 1) % 4],
    validUntil: "2025年3月31日",
    usageLocations: ["全国のABCストア", "提携レストラン・ホテル", "全国", "コンビニ・ガソリンスタンド"][
      (nftId - 1) % 4
    ],
    conditions: "現金との交換はできません。お釣りは出ません。",
    issueDate: "2024年4月1日",
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* NFT Image */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={nftData.image || "/placeholder.svg"}
                      alt={`${nftData.company}の${nftData.type}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* NFT Details */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {nftData.type}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-2">{nftData.company}の株主優待</h1>
              <div className="text-2xl font-bold text-purple-600 mb-6">{nftData.value.toLocaleString()}円相当</div>

              <p className="text-gray-700 mb-6">{nftData.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">有効期限</p>
                    <p className="font-medium">{nftData.validUntil}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">利用可能店舗</p>
                    <p className="font-medium">{nftData.usageLocations}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">利用条件</p>
                    <p className="font-medium">{nftData.conditions}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">発行日</p>
                    <p className="font-medium">{nftData.issueDate}</p>
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
                      このNFTは{nftData.company}が発行した正規の株主優待です。
                      Perkfiでは証券会社と連携して株主優待の真正性を確認しています。
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
                        <h4 className="font-medium mb-2">利用方法</h4>
                        <p className="text-gray-700">
                          1. 購入後、マイページから優待NFTを確認できます。
                          <br />
                          2. 利用時には店舗でQRコードを提示してください。
                          <br />
                          3. 店舗スタッフが確認後、優待が適用されます。
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">注意事項</h4>
                        <p className="text-gray-700">
                          ・一度使用した優待NFTは再利用できません。
                          <br />
                          ・有効期限を過ぎると利用できなくなります。
                          <br />・{nftData.conditions}
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
                          <p className="text-sm text-gray-500">{nftData.issueDate}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{nftData.value.toLocaleString()}円</p>
                          <p className="text-sm text-gray-500">発行者: {nftData.company}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <div>
                          <p className="font-medium">一次販売</p>
                          <p className="text-sm text-gray-500">2024年4月15日</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{nftData.value.toLocaleString()}円</p>
                          <p className="text-sm text-gray-500">購入者: User123</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <div>
                          <p className="font-medium">二次販売</p>
                          <p className="text-sm text-gray-500">2024年5月2日</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{Math.round(nftData.value * 0.9).toLocaleString()}円</p>
                          <p className="text-sm text-gray-500">購入者: User456</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="related">
                <h3 className="text-xl font-semibold mb-4">関連する株主優待</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4]
                    .filter((id) => id !== nftId)
                    .map((id) => (
                      <Link href={`/nft/${id}`} key={id}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                          <CardContent className="p-0">
                            <div className="aspect-square relative bg-gray-200">
                              <img
                                src={`/placeholder.svg?height=300&width=300&text=優待NFT ${id}`}
                                alt={`優待NFT ${id}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <div className="text-sm text-gray-500 mb-1">
                                {["商品券", "ギフト券", "テレホンカード", "クオカード"][(id - 1) % 4]}
                              </div>
                              <h3 className="font-semibold mb-1">
                                {["ABC株式会社", "XYZ商事", "123ホールディングス", "テック企業"][(id - 1) % 4]}
                                の株主優待
                              </h3>
                              <div className="flex justify-between items-center mt-2">
                                <span className="font-bold text-purple-600">
                                  {[5000, 3000, 10000, 2000][(id - 1) % 4].toLocaleString()}円相当
                                </span>
                                <span className="text-sm text-gray-500">残り{[12, 5, 8, 20][(id - 1) % 4]}枚</span>
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

