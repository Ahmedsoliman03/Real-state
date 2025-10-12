"use client"

import type React from "react"

import { useState } from "react"
import type { Property } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { MotionWrapper } from "@/components/motion-wrapper"
import { Phone, Mail, MessageSquare } from "lucide-react"
import { useTranslations } from "next-intl"

interface ContactAgentProps {
  property: Property
}

export function ContactAgent({ property }: ContactAgentProps) {
  const t = useTranslations("contactAgent")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `${t("interestedIn")} ${property.title}`,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    // Placeholder for form submission
  }

  return (
    <MotionWrapper delay={0.3}>
      <div className="sticky top-24">
        <div className="bg-secondary rounded-2xl p-6 border border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">{t("title")}</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                {t("fullName")}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                {t("phone")}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t("message")}
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                required
              />
            </div>

            <Button type="submit" className="w-full rounded-xl">
              <MessageSquare className="ltr:mr-2 rtl:ml-2 h-5 w-5" />
              {t("sendMessage")}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border space-y-3">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-3 p-3 bg-background rounded-xl hover:bg-primary/5 transition-colors"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">+1 (555) 123-4567</span>
            </a>
            <a
              href="mailto:hello@estateandco.com"
              className="flex items-center gap-3 p-3 bg-background rounded-xl hover:bg-primary/5 transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">hello@estateandco.com</span>
            </a>
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}
