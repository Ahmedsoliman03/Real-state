// Placeholder data for properties
export interface Property {
  id: string
  title: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  type: "apartment" | "house" | "villa" | "commercial"
  status: "for-sale" | "for-rent"
  featured: boolean
  images: string[]
  description: string
  features: string[]
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Architectural Villa",
    location: "Beverly Hills, CA",
    price: 4500000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    type: "villa",
    status: "for-sale",
    featured: true,
    images: [
      "/modern-luxury-villa-exterior-with-pool.jpg",
      "/modern-villa-living-room-interior.jpg",
      "/modern-villa-kitchen.png",
    ],
    description:
      "A stunning contemporary villa featuring floor-to-ceiling windows, open-plan living spaces, and breathtaking views. This architectural masterpiece combines luxury with functionality.",
    features: ["Swimming Pool", "Home Theater", "Wine Cellar", "Smart Home System", "Gym", "Garden"],
  },
  {
    id: "2",
    title: "Downtown Luxury Apartment",
    location: "Manhattan, NY",
    price: 2800000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    type: "apartment",
    status: "for-sale",
    featured: true,
    images: ["/luxury-apartment-exterior.png", "/modern-apartment-living-room.png", "/luxury-apartment-bedroom.png"],
    description:
      "Sophisticated urban living in the heart of Manhattan. This luxury apartment offers panoramic city views and premium finishes throughout.",
    features: ["Concierge Service", "Rooftop Terrace", "Parking", "Storage", "Pet Friendly"],
  },
  {
    id: "3",
    title: "Coastal Contemporary House",
    location: "Malibu, CA",
    price: 6200000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3800,
    type: "house",
    status: "for-sale",
    featured: true,
    images: [
      "/coastal-modern-house-with-ocean-view.jpg",
      "/beach-house-interior.png",
      "/modern-house-deck-with-ocean-view.jpg",
    ],
    description:
      "Beachfront elegance meets modern design. This coastal retreat offers direct beach access and stunning ocean views from every room.",
    features: ["Beach Access", "Outdoor Kitchen", "Fire Pit", "Solar Panels", "Guest House"],
  },
  {
    id: "4",
    title: "Urban Loft Space",
    location: "Brooklyn, NY",
    price: 1850000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1600,
    type: "apartment",
    status: "for-sale",
    featured: false,
    images: ["/industrial-loft.png", "/loft-interior-with-exposed-brick.jpg", "/modern-loft-kitchen.png"],
    description:
      "Industrial chic meets modern comfort in this converted loft space. High ceilings and exposed brick create a unique living experience.",
    features: ["High Ceilings", "Exposed Brick", "Hardwood Floors", "Natural Light", "Washer/Dryer"],
  },
  {
    id: "5",
    title: "Mountain View Estate",
    location: "Aspen, CO",
    price: 8900000,
    bedrooms: 6,
    bathrooms: 5,
    area: 6500,
    type: "house",
    status: "for-sale",
    featured: false,
    images: [
      "/luxury-mountain-estate.jpg",
      "/mountain-house-interior-with-fireplace.jpg",
      "/luxury-house-with-mountain-view.jpg",
    ],
    description:
      "Majestic mountain estate offering unparalleled views and world-class amenities. Perfect for those seeking privacy and luxury.",
    features: ["Ski-in/Ski-out", "Hot Tub", "Wine Room", "Home Office", "Multiple Fireplaces", "Heated Driveway"],
  },
  {
    id: "6",
    title: "Penthouse Suite",
    location: "Miami, FL",
    price: 5400000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    type: "apartment",
    status: "for-sale",
    featured: true,
    images: ["/luxury-penthouse-exterior.jpg", "/penthouse-interior-with-city-view.jpg", "/penthouse-terrace.png"],
    description:
      "Sky-high luxury living with 360-degree views of Miami. This penthouse features a private rooftop terrace and resort-style amenities.",
    features: ["Private Elevator", "Rooftop Pool", "Summer Kitchen", "Smart Home", "Spa Bath", "Butler Service"],
  },
]

export const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    image: "/professional-woman-portrait.png",
    bio: "With over 20 years in luxury real estate, Sarah leads our vision of redefining property excellence.",
  },
  {
    name: "James Rodriguez",
    role: "Head of Sales",
    image: "/professional-man-portrait.png",
    bio: "James brings expertise in high-end property transactions and client relationship management.",
  },
  {
    name: "Emily Chen",
    role: "Design Director",
    image: "/professional-asian-woman.png",
    bio: "Emily curates our portfolio with an eye for architectural excellence and contemporary design.",
  },
  {
    name: "Michael Thompson",
    role: "Investment Advisor",
    image: "/professional-man-portrait.png",
    bio: "Michael guides clients through strategic property investments with market insights and analysis.",
  },
]
