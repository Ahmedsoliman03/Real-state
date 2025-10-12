"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function AboutHero() {
  const t = useTranslations("about.hero")
  const tImages = useTranslations("images")

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/modern-luxury-villa-exterior-with-pool.jpg" alt={tImages("aboutImageAlt")} fill className="object-cover" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 text-balance">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
