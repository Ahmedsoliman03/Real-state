import { properties } from "@/lib/data"
import { notFound } from "next/navigation"
import { PropertyGallery } from "@/components/property-details/property-gallery"
import { PropertyInfo } from "@/components/property-details/property-info"
import { PropertyFeatures } from "@/components/property-details/property-features"
import { PropertyMap } from "@/components/property-details/property-map"
import { ContactAgent } from "@/components/property-details/contact-agent"

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }))
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  return (
    <main className="pt-20">
      <PropertyGallery images={property.images} title={property.title} />
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <PropertyInfo property={property} />
            <PropertyFeatures features={property.features} />
            <PropertyMap location={property.location} />
          </div>
          <div className="lg:col-span-1">
            <ContactAgent property={property} />
          </div>
        </div>
      </div>
    </main>
  )
}
