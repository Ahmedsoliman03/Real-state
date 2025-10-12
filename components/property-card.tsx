"use client"

import type { Property } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const t = useTranslations("properties.card")
  
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(property.price)

  return (
    <Link href={`/properties/${property.id}`} className="h-full block">
      <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3, ease: "easeOut" }} className="h-full">
        <Card className="overflow-hidden border-border hover:shadow-2xl transition-shadow duration-300 group h-full flex flex-col">
          <div className="relative h-64 overflow-hidden flex-shrink-0">
            <Image
              src={property.images[0] || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              {property.status === "for-sale" ? t("forSale") : t("forRent")}
            </div>
          </div>

          <CardContent className="p-6 flex flex-col flex-grow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors text-balance">
                {property.title}
              </h3>
            </div>

            <div className="flex items-center text-muted-foreground text-sm mb-4">
              <MapPin className="h-4 w-4 ltr:mr-1 rtl:ml-1 flex-shrink-0" />
              {property.location}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms} {t("bedrooms")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms} {t("bathrooms")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Maximize className="h-4 w-4" />
                <span>{property.area.toLocaleString()} {t("sqft")}</span>
              </div>
            </div>

            <div className="font-serif text-2xl font-bold text-primary mt-auto">{formattedPrice}</div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
