"use client"

import { useTranslations } from "next-intl"
import { MotionWrapper } from "@/components/motion-wrapper"

export function ContactHero() {
  const t = useTranslations("contact.hero")

  return (
    <section className="relative py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <MotionWrapper>
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              {t("title")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{t("subtitle")}</p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
