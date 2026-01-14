"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * CTA (Call to Action) 섹션
 * 이메일 구독 폼 포함
 */
export function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 이메일 구독 로직 구현
    console.log("Email submitted:", email);
    alert(`구독해 주셔서 감사합니다! 이메일: ${email}`);
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl rounded-lg border bg-muted/50 p-8 text-center md:p-12">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          시작할 준비가 되셨나요?
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          최신 업데이트와 소식을 받아보려면 뉴스레터를 구독하세요.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 text-left">
            <Label htmlFor="email" className="sr-only">
              이메일 주소
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" size="lg">
            구독하기
          </Button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          개인정보를 존중합니다. 언제든지 구독을 취소할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
