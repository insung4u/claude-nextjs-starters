import * as Icons from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FEATURES } from "../config/landing-config";

/**
 * Features 섹션
 * 3-column 그리드 레이아웃
 */
export function FeaturesSection() {
  return (
    <section
      id="features"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Everything you need to get started
        </h2>
        <p className="text-lg text-muted-foreground">
          A comprehensive starter kit with all the features you need
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

          return (
            <Card key={feature.title} className="border-2 transition-colors hover:border-primary">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
