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
    alert(`Thank you for subscribing! Email: ${email}`);
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl rounded-lg border bg-muted/50 p-8 text-center md:p-12">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to get started?
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Subscribe to our newsletter to get the latest updates and news.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 text-left">
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" size="lg">
            Subscribe
          </Button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
