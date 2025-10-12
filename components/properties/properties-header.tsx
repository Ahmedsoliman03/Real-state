"use client"

import { MotionWrapper } from "@/components/motion-wrapper"
import { useTranslations } from "next-intl"

export function PropertiesHeader() {
  const t = useTranslations("properties")

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <MotionWrapper>
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
