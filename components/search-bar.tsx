"use client"

import { useState } from "react"
import { Search, MapPin, Home, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function SearchBar() {
  const t = useTranslations("search")
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [priceRange, setPriceRange] = useState("")

  const handleSearch = () => {
    // Placeholder for search functionality
    console.log("[v0] Search:", { location, propertyType, priceRange })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={t("location")}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Property Type */}
        <div className="relative">
          <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground appearance-none cursor-pointer"
          >
            <option value="">{t("propertyType")}</option>
            <option value="apartment">{t("apartment")}</option>
            <option value="house">{t("house")}</option>
            <option value="villa">{t("villa")}</option>
            <option value="commercial">{t("commercial")}</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground appearance-none cursor-pointer"
          >
            <option value="">{t("priceRange")}</option>
            <option value="0-1000000">{t("under1M")}</option>
            <option value="1000000-3000000">{t("1Mto3M")}</option>
            <option value="3000000-5000000">{t("3Mto5M")}</option>
            <option value="5000000+">{t("over5M")}</option>
          </select>
        </div>
      </div>

      <Button onClick={handleSearch} size="lg" className="w-full rounded-xl group">
        <Search className="ltr:mr-2 rtl:ml-2 h-5 w-5" />
        {t("searchProperties")}
      </Button>
    </motion.div>
  )
}
