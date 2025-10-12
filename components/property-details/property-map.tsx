"use client"

import { MotionWrapper } from "@/components/motion-wrapper"
import { MapPin } from "lucide-react"

interface PropertyMapProps {
  location: string
}

export function PropertyMap({ location }: PropertyMapProps) {
  return (
    <MotionWrapper delay={0.2}>
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Location</h2>
        <div className="bg-secondary rounded-2xl overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
              <p className="text-lg font-semibold text-foreground">{location}</p>
              <p className="text-sm text-muted-foreground mt-2">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}
