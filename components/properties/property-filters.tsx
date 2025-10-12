"use client"

import { useState } from "react"
import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"

interface PropertyFiltersProps {
  onFilterChange: (filters: { type: string; status: string; priceRange: string; bedrooms: string }) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export function PropertyFilters({ onFilterChange, sortBy, onSortChange }: PropertyFiltersProps) {
  const t = useTranslations("properties.filters")
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    priceRange: "",
    bedrooms: "",
  })

  const handleFilterUpdate = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleReset = () => {
    const resetFilters = { type: "", status: "", priceRange: "", bedrooms: "" }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="rounded-full gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          {t("filters")}
        </Button>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{t("sortBy")}:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2 bg-secondary border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
          >
            <option value="featured">{t("featured")}</option>
            <option value="price-low">{t("priceLowHigh")}</option>
            <option value="price-high">{t("priceHighLow")}</option>
          </select>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-secondary rounded-2xl p-6 border border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("propertyType")}</label>
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterUpdate("type", e.target.value)}
                    className="w-full px-4 py-2 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option value="">{t("allTypes")}</option>
                    <option value="apartment">{t("apartment")}</option>
                    <option value="house">{t("house")}</option>
                    <option value="villa">{t("villa")}</option>
                    <option value="commercial">{t("commercial")}</option>
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("status")}</label>
                  <select
                    value={filters.status}
                    onChange={(e) => handleFilterUpdate("status", e.target.value)}
                    className="w-full px-4 py-2 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option value="">{t("all")}</option>
                    <option value="for-sale">{t("sale")}</option>
                    <option value="for-rent">{t("rent")}</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("priceRange")}</label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterUpdate("priceRange", e.target.value)}
                    className="w-full px-4 py-2 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option value="">{t("allPrices")}</option>
                    <option value="0-1000000">{t("under1M")}</option>
                    <option value="1000000-3000000">{t("1Mto3M")}</option>
                    <option value="3000000-5000000">{t("3Mto5M")}</option>
                    <option value="5000000-+">{t("over5M")}</option>
                  </select>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("minBedrooms")}</label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) => handleFilterUpdate("bedrooms", e.target.value)}
                    className="w-full px-4 py-2 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option value="">{t("any")}</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
              </div>

              <Button variant="outline" onClick={handleReset} size="sm" className="rounded-full bg-transparent">
                {t("resetFilters")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
