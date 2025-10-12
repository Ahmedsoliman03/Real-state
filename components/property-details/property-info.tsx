"use client"

import type { Property } from "@/lib/data"
import { MotionWrapper } from "@/components/motion-wrapper"
import { MapPin, Bed, Bath, Maximize, Home } from "lucide-react"

interface PropertyInfoProps {
  property: Property
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(property.price)

  return (
    <MotionWrapper>
      <div>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
              {property.title}
            </h1>
            <div className="flex items-center text-muted-foreground text-lg">
              <MapPin className="h-5 w-5 mr-2" />
              {property.location}
            </div>
          </div>
          <div className="text-right">
            <div className="font-serif text-4xl font-bold text-primary mb-1">{formattedPrice}</div>
            <div className="text-sm text-muted-foreground capitalize">{property.status.replace("-", " ")}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-secondary rounded-2xl mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Bed className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{property.bedrooms}</div>
              <div className="text-sm text-muted-foreground">Bedrooms</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Bath className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{property.bathrooms}</div>
              <div className="text-sm text-muted-foreground">Bathrooms</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Maximize className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{property.area.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Sq Ft</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Home className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground capitalize">{property.type}</div>
              <div className="text-sm text-muted-foreground">Type</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Description</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{property.description}</p>
        </div>
      </div>
    </MotionWrapper>
  )
}
