"use client"

import { properties } from "@/lib/data"
import { PropertyCard } from "@/components/property-card"
import { MotionWrapper } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Feature } from "@/types/homeTypes"

export function FeaturedProperties({ content }: { content: Feature }) {
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              {/* Featured Properties */} {content.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {/* Handpicked selection of our most exceptional properties */}
              {content.subTitle}
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 auto-rows-fr">
          {/* featuredProperties */}
          {content.card.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        <MotionWrapper className="text-center">
          <Link href="/properties">
            <Button size="lg" className="rounded-full group">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </MotionWrapper>
      </div>
    </section>
  )
}
