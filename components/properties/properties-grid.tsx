"use client"

import { useState } from "react"
import { properties } from "@/lib/data"
import { PropertyCard } from "@/components/property-card"
import { PropertyFilters } from "@/components/properties/property-filters"
import { motion } from "framer-motion"
import type { Property } from "@/lib/data"

export function PropertiesGrid() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties)
  const [sortBy, setSortBy] = useState<string>("featured")

  const handleFilterChange = (filters: {
    type: string
    status: string
    priceRange: string
    bedrooms: string
  }) => {
    let filtered = [...properties]

    // Filter by type
    if (filters.type) {
      filtered = filtered.filter((p) => p.type === filters.type)
    }

    // Filter by status
    if (filters.status) {
      filtered = filtered.filter((p) => p.status === filters.status)
    }

    // Filter by bedrooms
    if (filters.bedrooms) {
      const bedroomCount = Number.parseInt(filters.bedrooms)
      filtered = filtered.filter((p) => p.bedrooms >= bedroomCount)
    }

    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange
        .split("-")
        .map((v) => (v === "+" ? Number.POSITIVE_INFINITY : Number.parseInt(v)))
      filtered = filtered.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }

    // Sort
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === "featured") {
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    setFilteredProperties(filtered)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <PropertyFilters onFilterChange={handleFilterChange} sortBy={sortBy} onSortChange={setSortBy} />

        {filteredProperties.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No properties found matching your criteria.</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredProperties.length}</span>{" "}
                {filteredProperties.length === 1 ? "property" : "properties"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  className="h-full"
                >
                  {/* <PropertyCard property={property} /> */}
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
