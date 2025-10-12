"use client"

import { MotionWrapper } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function StatsSection() {
  const t = useTranslations("home.stats")

  const stats = [
    { value: "500+", label: t("properties") },
    { value: "$2.5B+", label: t("totalValue") },
    { value: "15+", label: t("experience") },
    { value: "98%", label: t("satisfaction") },
  ]

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <MotionWrapper>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            {t("title")}
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
