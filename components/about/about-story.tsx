"use client"

import { MotionWrapper } from "@/components/motion-wrapper"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function AboutStory() {
  const t = useTranslations("about.story")

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionWrapper>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{t("title")}</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{t("content")}</p>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-villa-living-room-interior.jpg"
                alt="Estate & Co. Office"
                fill
                className="object-cover"
              />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
