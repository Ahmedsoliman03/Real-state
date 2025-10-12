"use client"

import { MotionWrapper } from "@/components/motion-wrapper"
import { Check } from "lucide-react"

interface PropertyFeaturesProps {
  features: string[]
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  return (
    <MotionWrapper delay={0.1}>
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Features & Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </MotionWrapper>
  )
}
