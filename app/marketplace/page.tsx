import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, SlidersHorizontal } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Marketplace() {
  // Mock NFT data
  const nfts = [
    {
      id: 1,
      company: "ABC株式会社",
      type: "商品券",
      value: 5000,
      remaining: 12,
      image: "/placeholder.svg?height=300&width=300&text=ABC商品券",
    },
    {
      id: 2,
      company: "XYZ商事",
      type: "ギフト券",
      value: 3000,
      remaining: 5,
      image: "/placeholder.svg?height=300&width=300&text=XYZギフト券",
    },
    {
      id: 3,
      company: "123ホールディングス",
      type: "テレホンカード",
      value: 10000,
      remaining: 8,
      image: "/placeholder.svg?height=300&width=300&text=123テレカ",
    },
    {
      id: 4,
      company: "テック企業",
      type: "クオカード",
      value: 2000,
      remaining: 20,
      image: "/placeholder.svg?height=300&width=300&text=テッククオカード",
    },
    {
      id: 5,
      company: "グルメ株式会社",
      type: "商品券",
      value: 8000,
      remaining: 3,
      image: "/placeholder.svg?height=300&width=300&text=グルメ商品券",
    },
    {
      id: 6,
      company: "トラベル社",
      type: "ギフト券",
      value: 15000,
      remaining: 2,
      image: "/placeholder.svg?height=300&width=300&text=トラベルギフト券",
    },
    {
      id: 7,
      company: "ブック株式会社",
      type: "図書カード",
      value: 3000,
      remaining: 15,
      image: "/placeholder.svg?height=300&width=300&text=ブック図書カード",
    },
    {
      id: 8,
      company: "エンタメ社",
      type: "クオカード",
      value: 5000,
      remaining: 7,
      image: "/placeholder.svg?height=300&width=300&text=エンタメクオカード",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold">マーケットプレイス</h1>
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="企業名や優待を検索" className="pl-10 w-full md:w-[300px]" />
              </div>
              <Button variant="outline">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                フィルター
              </Button>
            </div>
          </div>

          <Tabs defaultValue="primary" className="mb-8">
            <TabsList>
              <TabsTrigger value="primary">一次流通</TabsTrigger>
              <TabsTrigger value="secondary">二次流通</TabsTrigger>
            </TabsList>
            <TabsContent value="primary">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {nfts.map((nft) => (
                  <Link href={`/nft/${nft.id}`} key={nft.id}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardContent className="p-0">
                        <div className="aspect-square relative bg-gray-200">
                          <img
                            src={nft.image || "/placeholder.svg"}
                            alt={`${nft.company}の${nft.type}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="text-sm text-gray-500 mb-1">{nft.type}</div>
                          <h3 className="font-semibold mb-1">{nft.company}の株主優待</h3>
                          <div className="flex justify-between items-center mt-2">
                            <span className="font-bold text-purple-600">{nft.value.toLocaleString()}円相当</span>
                            <span className="text-sm text-gray-500">残り{nft.remaining}枚</span>
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
                {nfts
                  .slice(0, 6)
                  .reverse()
                  .map((nft) => (
                    <Link href={`/nft/${nft.id}?market=secondary`} key={nft.id}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                        <CardContent className="p-0">
                          <div className="aspect-square relative bg-gray-200">
                            <img
                              src={nft.image || "/placeholder.svg"}
                              alt={`${nft.company}の${nft.type}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <div className="text-sm text-gray-500 mb-1">{nft.type}</div>
                            <h3 className="font-semibold mb-1">{nft.company}の株主優待</h3>
                            <div className="flex justify-between items-center mt-2">
                              <span className="font-bold text-purple-600">
                                {Math.round(nft.value * 0.9).toLocaleString()}円
                              </span>
                              <span className="text-sm text-gray-500">市場価格</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">カテゴリから探す</h2>
            <div className="flex flex-wrap gap-2">
              {["すべて", "商品券", "ギフト券", "テレホンカード", "クオカード", "図書カード"].map((category) => (
                <Button key={category} variant={category === "すべて" ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">詳細フィルター</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">金額</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="金額を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="under5000">5,000円未満</SelectItem>
                    <SelectItem value="5000to10000">5,000円〜10,000円</SelectItem>
                    <SelectItem value="over10000">10,000円以上</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">企業</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="企業を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="abc">ABC株式会社</SelectItem>
                    <SelectItem value="xyz">XYZ商事</SelectItem>
                    <SelectItem value="123">123ホールディングス</SelectItem>
                    <SelectItem value="tech">テック企業</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">並び順</label>
                <Select>
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

