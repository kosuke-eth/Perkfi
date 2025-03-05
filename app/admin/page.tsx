import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, BarChart3, Download, FileText, Gift, Plus, RefreshCw, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AdminDashboard() {
  // Mock data for NFTs
  const nfts = [
    {
      id: 1,
      name: "商品券 5,000円",
      type: "商品券",
      value: 5000,
      issued: 100,
      sold: 88,
      used: 45,
      status: "アクティブ",
    },
    {
      id: 2,
      name: "ギフト券 3,000円",
      type: "ギフト券",
      value: 3000,
      issued: 200,
      sold: 195,
      used: 120,
      status: "アクティブ",
    },
    {
      id: 3,
      name: "テレホンカード 10,000円",
      type: "テレホンカード",
      value: 10000,
      issued: 50,
      sold: 42,
      used: 30,
      status: "アクティブ",
    },
    {
      id: 4,
      name: "クオカード 2,000円",
      type: "クオカード",
      value: 2000,
      issued: 300,
      sold: 280,
      used: 200,
      status: "アクティブ",
    },
    {
      id: 5,
      name: "商品券 8,000円",
      type: "商品券",
      value: 8000,
      issued: 80,
      sold: 77,
      used: 60,
      status: "期限切れ",
    },
  ]

  // Mock data for recent transactions
  const transactions = [
    {
      id: 1,
      user: "user123",
      nft: "商品券 5,000円",
      type: "購入",
      amount: 5000,
      date: "2024-05-20 14:30",
    },
    {
      id: 2,
      user: "user456",
      nft: "ギフト券 3,000円",
      type: "使用",
      amount: 3000,
      date: "2024-05-20 13:15",
    },
    {
      id: 3,
      user: "user789",
      nft: "テレホンカード 10,000円",
      type: "購入",
      amount: 10000,
      date: "2024-05-20 12:45",
    },
    {
      id: 4,
      user: "user234",
      nft: "クオカード 2,000円",
      type: "売却",
      amount: 1800,
      date: "2024-05-20 11:30",
    },
    {
      id: 5,
      user: "user567",
      nft: "商品券 5,000円",
      type: "使用",
      amount: 5000,
      date: "2024-05-20 10:15",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold">企業管理ダッシュボード</h1>
            <div className="flex gap-2">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                新規優待発行
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                レポート
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">総発行数</CardTitle>
                <Gift className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">730</div>
                <p className="text-xs text-gray-500">前月比 +5%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">総売上</CardTitle>
                <BarChart className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥3,245,000</div>
                <p className="text-xs text-gray-500">前月比 +12%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">使用率</CardTitle>
                <BarChart3 className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68.5%</div>
                <p className="text-xs text-gray-500">前月比 +2.3%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">ユーザー数</CardTitle>
                <Users className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">452</div>
                <p className="text-xs text-gray-500">前月比 +8%</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="nfts">
            <TabsList className="mb-6">
              <TabsTrigger value="nfts">優待NFT管理</TabsTrigger>
              <TabsTrigger value="transactions">取引履歴</TabsTrigger>
              <TabsTrigger value="reports">レポート</TabsTrigger>
            </TabsList>
            <TabsContent value="nfts">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>優待NFT一覧</CardTitle>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    更新
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>優待名</TableHead>
                        <TableHead>種類</TableHead>
                        <TableHead className="text-right">金額</TableHead>
                        <TableHead className="text-right">発行数</TableHead>
                        <TableHead className="text-right">販売数</TableHead>
                        <TableHead className="text-right">使用数</TableHead>
                        <TableHead>ステータス</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {nfts.map((nft) => (
                        <TableRow key={nft.id}>
                          <TableCell>{nft.id}</TableCell>
                          <TableCell>{nft.name}</TableCell>
                          <TableCell>{nft.type}</TableCell>
                          <TableCell className="text-right">{nft.value.toLocaleString()}円</TableCell>
                          <TableCell className="text-right">{nft.issued}</TableCell>
                          <TableCell className="text-right">{nft.sold}</TableCell>
                          <TableCell className="text-right">{nft.used}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded ${
                                nft.status === "アクティブ" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {nft.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/admin/nft/${nft.id}`}>
                                <FileText className="h-4 w-4" />
                              </Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="transactions">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>最近の取引</CardTitle>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    更新
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>ユーザー</TableHead>
                        <TableHead>優待</TableHead>
                        <TableHead>取引タイプ</TableHead>
                        <TableHead className="text-right">金額</TableHead>
                        <TableHead>日時</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>{transaction.id}</TableCell>
                          <TableCell>{transaction.user}</TableCell>
                          <TableCell>{transaction.nft}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded ${
                                transaction.type === "購入"
                                  ? "bg-blue-100 text-blue-800"
                                  : transaction.type === "使用"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-green-100 text-green-800"
                              }`}
                            >
                              {transaction.type}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">{transaction.amount.toLocaleString()}円</TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/admin/transaction/${transaction.id}`}>
                                <FileText className="h-4 w-4" />
                              </Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>優待種類別販売数</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                      <p>グラフが表示されます</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>月別売上推移</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                      <p>グラフが表示されます</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

