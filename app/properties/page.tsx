import { PropertiesGrid } from "@/components/properties/properties-grid"
import { PropertiesHeader } from "@/components/properties/properties-header"

export default function PropertiesPage() {
  return (
    <main className="pt-20">
      <PropertiesHeader />
      <PropertiesGrid />
    </main>
  )
}
