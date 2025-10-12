"use client"

import { MotionWrapper } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { Award, Heart, Shield, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"

export function ValuesSection() {
  const t = useTranslations("about.values")

  const values = [
    {
      icon: Award,
      title: t("excellence.title"),
      description: t("excellence.description"),
    },
    {
      icon: Heart,
      title: t("integrity.title"),
      description: t("integrity.description"),
    },
    {
      icon: Sparkles,
      title: t("innovation.title"),
      description: t("innovation.description"),
    },
    {
      icon: Shield,
      title: t("commitment.title"),
      description: t("commitment.description"),
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t("title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
