"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Gift, LogIn, Menu, Package, Settings, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/app/context/AuthContext"

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-8 h-8 mr-2">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg transform rotate-6"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gift className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="font-bold text-xl">Perkfi</span>
            </Link>
            <nav className="hidden md:flex ml-10 space-x-1">
              <Link
                href="/marketplace"
                className="px-3 py-2 text-gray-600 hover:text-purple-600 rounded-md transition-colors"
              >
                マーケットプレイス
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-3 py-2 text-gray-600 hover:text-purple-600 rounded-md transition-colors flex items-center">
                    Perkfiについて
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/about">サービス概要</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/how-it-works">ご利用の流れ</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/for-companies">企業の方へ</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/technology">テクノロジー</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/help"
                className="px-3 py-2 text-gray-600 hover:text-purple-600 rounded-md transition-colors"
              >
                ヘルプ
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
                  <Link href="/marketplace">
                    <Gift className="h-4 w-4 mr-2" />
                    優待を探す
                  </Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-medium">
                        YT
                      </div>
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="p-2 border-b">
                      <p className="font-medium">山田太郎</p>
                      <p className="text-xs text-gray-500">yamada@example.com</p>
                    </div>
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="flex items-center">
                        <Package className="h-4 w-4 mr-2" />
                        マイ優待券
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile/settings" className="flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        設定
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="flex items-center">
                      <LogIn className="h-4 w-4 mr-2" />
                      ログアウト
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Button
                  variant="ghost"
                  className="border border-gray-400 text-gray-700 hover:bg-gray-100"
                >
                  <Link href="/auth/login">ログイン</Link>
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  <Link href="/auth/register">新規登録</Link>
                </Button>
              </div>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="/marketplace"
                    className="text-lg font-medium hover:text-purple-600"
                  >
                    マーケットプレイス
                  </Link>
                  <div className="space-y-2 pl-2">
                    <p className="text-lg font-medium">Perkfiについて</p>
                    <Link
                      href="/about"
                      className="block text-gray-600 hover:text-purple-600 py-1"
                    >
                      サービス概要
                    </Link>
                    <Link
                      href="/about/how-it-works"
                      className="block text-gray-600 hover:text-purple-600 py-1"
                    >
                      ご利用の流れ
                    </Link>
                    <Link
                      href="/about/for-companies"
                      className="block text-gray-600 hover:text-purple-600 py-1"
                    >
                      企業の方へ
                    </Link>
                    <Link
                      href="/about/technology"
                      className="block text-gray-600 hover:text-purple-600 py-1"
                    >
                      テクノロジー
                    </Link>
                  </div>
                  <Link
                    href="/help"
                    className="text-lg font-medium hover:text-purple-600"
                  >
                    ヘルプ
                  </Link>
                  {isLoggedIn ? (
                    <>
                      <div className="border-t pt-4 mt-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-medium">
                            YT
                          </div>
                          <div>
                            <p className="font-medium">山田太郎</p>
                            <p className="text-xs text-gray-500">yamada@example.com</p>
                          </div>
                        </div>
                        <Link
                          href="/profile"
                          className="block text-gray-600 hover:text-purple-600 py-2"
                        >
                          マイ優待券
                        </Link>
                        <Link
                          href="/profile/settings"
                          className="block text-gray-600 hover:text-purple-600 py-2"
                        >
                          設定
                        </Link>
                        <Button
                          variant="outline"
                          className="w-full mt-4"
                          onClick={logout}
                        >
                          ログアウト
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="border-t pt-4 mt-4 flex flex-col space-y-2">
                      <Button
                        variant="ghost"
                        className="border border-gray-400 text-gray-700 hover:bg-gray-100"
                      >
                        <Link href="/auth/login">ログイン</Link>
                      </Button>
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                        <Link href="/auth/register">新規登録</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
