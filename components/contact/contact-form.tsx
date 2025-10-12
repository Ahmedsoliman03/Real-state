"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { MotionWrapper } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export function ContactForm() {
  const t = useTranslations("contact.form")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <MotionWrapper>
      <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{t("title")}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-foreground mb-2 block">
              {t("name")} {t("required")}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("namePlaceholder")}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-foreground mb-2 block">
              {t("email")} {t("required")}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("emailPlaceholder")}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-foreground mb-2 block">
              {t("phone")}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("phonePlaceholder")}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="subject" className="text-foreground mb-2 block">
              {t("subject")} {t("required")}
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder={t("subjectPlaceholder")}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-foreground mb-2 block">
              {t("message")} {t("required")}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={t("messagePlaceholder")}
              rows={6}
              className="w-full resize-none"
            />
          </div>

          {submitStatus === "success" && (
            <div className="bg-primary/10 text-primary px-4 py-3 rounded-lg">{t("success")}</div>
          )}

          <Button type="submit" size="lg" className="w-full rounded-full group" disabled={isSubmitting}>
            {isSubmitting ? (
              t("sending")
            ) : (
              <>
                {t("submit")}
                <Send className="ltr:ml-2 rtl:mr-2 h-4 w-4 transition-transform group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </div>
    </MotionWrapper>
  )
}
