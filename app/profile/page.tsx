import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, CreditCard, History, Package, Settings, User, Wallet } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Profile() {
  // Mock user data
  const userData = {
    name: "山田太郎",
    email: "yamada@example.com",
    walletBalance: 25000,
    nftsOwned: 3,
    nftsSold: 2,
  }

  // Mock owned NFTs
  const ownedNfts = [
    {
      id: 1,
      company: "ABC株式会社",
      type: "商品券",
      value: 5000,
      image: "/placeholder.svg?height=300&width=300&text=ABC商品券",
      purchaseDate: "2024年4月15日",
      status: "未使用",
    },
    {
      id: 3,
      company: "123ホールディングス",
      type: "テレホンカード",
      value: 10000,
      image: "/placeholder.svg?height=300&width=300&text=123テレカ",
      purchaseDate: "2024年5月2日",
      status: "未使用",
    },
    {
      id: 5,
      company: "グルメ株式会社",
      type: "商品券",
      value: 8000,
      image: "/placeholder.svg?height=300&width=300&text=グルメ商品券",
      purchaseDate: "2024年5月10日",
      status: "使用済み",
    },
  ]

  // Mock transaction history
  const transactions = [
    {
      id: 1,
      type: "購入",
      nftName: "ABC株式会社 商品券",
      amount: 5000,
      date: "2024年4月15日",
    },
    {
      id: 2,
      type: "購入",
      nftName: "123ホールディングス テレホンカード",
      amount: 10000,
      date: "2024年5月2日",
    },
    {
      id: 3,
      type: "購入",
      nftName: "グルメ株式会社 商品券",
      amount: 8000,
      date: "2024年5月10日",
    },
    {
      id: 4,
      type: "売却",
      nftName: "XYZ商事 ギフト券",
      amount: 2700,
      date: "2024年5月15日",
    },
    {
      id: 5,
      type: "売却",
      nftName: "テック企業 クオカード",
      amount: 1800,
      date: "2024年5月20日",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <User className="h-10 w-10 text-purple-600" />
                    </div>
                    <h2 className="text-xl font-bold">{userData.name}</h2>
                    <p className="text-gray-500 text-sm mb-4">{userData.email}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/profile/settings">
                        <Settings className="h-4 w-4 mr-2" />
                        プロフィール設定
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Wallet className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="font-medium">ウォレット残高</span>
                    </div>
                    <span className="font-bold">{userData.walletBalance.toLocaleString()}円</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Package className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="font-medium">保有NFT</span>
                    </div>
                    <span className="font-bold">{userData.nftsOwned}個</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="font-medium">売却NFT</span>
                    </div>
                    <span className="font-bold">{userData.nftsSold}個</span>
                  </div>
                  <Button className="w-full">
                    <CreditCard className="h-4 w-4 mr-2" />
                    入金する
                  </Button>
                </CardContent>
              </Card>

              <div className="hidden md:block space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/profile">
                    <Package className="h-5 w-5 mr-2" />
                    マイNFT
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/profile/history">
                    <History className="h-5 w-5 mr-2" />
                    取引履歴
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/profile/wallet">
                    <Wallet className="h-5 w-5 mr-2" />
                    ウォレット
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/profile/settings">
                    <Settings className="h-5 w-5 mr-2" />
                    設定
                  </Link>
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <Tabs defaultValue="nfts">
                <TabsList className="mb-6">
                  <TabsTrigger value="nfts">マイNFT</TabsTrigger>
                  <TabsTrigger value="history">取引履歴</TabsTrigger>
                </TabsList>
                <TabsContent value="nfts">
                  <h2 className="text-2xl font-bold mb-6">保有中のNFT</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ownedNfts.map((nft) => (
                      <Card
                        key={nft.id}
                        className={`hover:shadow-lg transition-shadow ${nft.status === "使用済み" ? "opacity-70" : ""}`}
                      >
                        <CardContent className="p-0">
                          <div className="aspect-square relative bg-gray-200">
                            <img
                              src={nft.image || "/placeholder.svg"}
                              alt={`${nft.company}の${nft.type}`}
                              className="w-full h-full object-cover"
                            />
                            {nft.status === "使用済み" && (
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold">使用済み</span>
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <div className="text-sm text-gray-500 mb-1">{nft.type}</div>
                            <h3 className="font-semibold mb-1">{nft.company}の株主優待</h3>
                            <div className="flex justify-between items-center mt-2">
                              <span className="font-bold text-purple-600">{nft.value.toLocaleString()}円相当</span>
                              <span className="text-sm text-gray-500">{nft.status}</span>
                            </div>
                            <div className="mt-4">
                              {nft.status === "未使用" ? (
                                <div className="grid grid-cols-2 gap-2">
                                  <Button size="sm" className="w-full">
                                    使用する
                                  </Button>
                                  <Button size="sm" variant="outline" className="w-full">
                                    出品する
                                  </Button>
                                </div>
                              ) : (
                                <Button size="sm" variant="outline" className="w-full" disabled>
                                  使用済み
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="history">
                  <h2 className="text-2xl font-bold mb-6">取引履歴</h2>
                  <Card>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        {transactions.map((transaction) => (
                          <div key={transaction.id} className="flex justify-between items-center p-4">
                            <div>
                              <div className="flex items-center">
                                <span
                                  className={`inline-block w-16 text-center text-sm font-medium px-2.5 py-0.5 rounded ${
                                    transaction.type === "購入"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-green-100 text-green-800"
                                  }`}
                                >
                                  {transaction.type}
                                </span>
                                <span className="ml-3 font-medium">{transaction.nftName}</span>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{transaction.date}</p>
                            </div>
                            <div className="text-right">
                              <p
                                className={`font-bold ${
                                  transaction.type === "購入" ? "text-red-600" : "text-green-600"
                                }`}
                              >
                                {transaction.type === "購入" ? "-" : "+"}
                                {transaction.amount.toLocaleString()}円
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

