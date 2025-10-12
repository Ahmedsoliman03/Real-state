"use client"

import { useTranslations } from "next-intl"
import { MotionWrapper } from "@/components/motion-wrapper"
import { MapPin } from "lucide-react"

export function ContactMap() {
  const t = useTranslations("contact.map")
  const info = useTranslations("contact.info")

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <MotionWrapper>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("description")}</p>
          </div>
        </MotionWrapper>

        <MotionWrapper>
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-muted">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                {(info.raw("officeAddress") as string[]).map((line, index) => (
                  <p
                    key={index}
                    className={index === 0 ? "text-xl font-semibold text-foreground mb-2" : "text-muted-foreground"}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
