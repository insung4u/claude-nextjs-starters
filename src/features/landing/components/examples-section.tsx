"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

/**
 * 컴포넌트 예제 섹션
 * shadcn/ui 컴포넌트들의 실제 작동 예제
 */
export function ExamplesSection() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section
      id="examples"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">컴포넌트 예제</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          즉시 사용 가능한 shadcn/ui 컴포넌트들을 확인하세요
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>다양한 스타일의 버튼 컴포넌트</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <Separator />
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>상태 표시를 위한 배지 컴포넌트</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
            <Separator />
            <div className="flex flex-wrap gap-2">
              <Badge>🎉 New</Badge>
              <Badge variant="secondary">✅ Active</Badge>
              <Badge variant="outline">📦 Beta</Badge>
              <Badge variant="destructive">⚠️ Deprecated</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Input & Form */}
        <Card>
          <CardHeader>
            <CardTitle>Input & Form</CardTitle>
            <CardDescription>폼 입력을 위한 컴포넌트</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="example-input">이메일 주소</Label>
                <Input
                  id="example-input"
                  type="email"
                  placeholder="example@email.com"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  autoComplete="email"
                />
                {inputValue && (
                  <p className="text-sm text-muted-foreground">
                    입력값: {inputValue}
                  </p>
                )}
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <Label htmlFor="password-input">비밀번호</Label>
                <Input
                  id="password-input"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Dropdown Menu */}
        <Card>
          <CardHeader>
            <CardTitle>Dropdown Menu</CardTitle>
            <CardDescription>드롭다운 메뉴 컴포넌트</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  메뉴 열기
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuItem>청구</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>로그아웃</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Separator />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  액션 선택
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>새로 만들기</DropdownMenuItem>
                <DropdownMenuItem>편집</DropdownMenuItem>
                <DropdownMenuItem>복제</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>

        {/* Card Component */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>
              콘텐츠를 그룹화하는 카드 컴포넌트 (현재 보고 있는 이 컴포넌트가 Card입니다)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Card는 CardHeader, CardTitle, CardDescription, CardContent, CardFooter로 구성됩니다.
              유연하게 조합하여 다양한 레이아웃을 만들 수 있습니다.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          모든 컴포넌트는{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-foreground"
          >
            shadcn/ui
          </a>
          를 기반으로 합니다
        </p>
      </div>
    </section>
  );
}
