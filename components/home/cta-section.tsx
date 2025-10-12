"use client"

import { MotionWrapper } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export function CTASection() {
  const t = useTranslations("home.cta")

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <MotionWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button size="lg" className="rounded-full w-full sm:w-auto group">
                  {t("button")}
                  <ArrowRight className="ltr:ml-2 rtl:mr-2 h-4 w-4 transition-transform group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto bg-transparent">
                  {t("contactUs")}
                </Button>
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
