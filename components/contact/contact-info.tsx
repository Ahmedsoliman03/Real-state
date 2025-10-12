"use client"

import { useTranslations } from "next-intl"
import { MotionWrapper } from "@/components/motion-wrapper"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const t = useTranslations("contact.info")

  const contactDetails = [
    {
      icon: Phone,
      title: t("phone"),
      details: t.raw("phoneNumbers") as string[],
    },
    {
      icon: Mail,
      title: t("email"),
      details: t.raw("emailAddresses") as string[],
    },
    {
      icon: MapPin,
      title: t("office"),
      details: t.raw("officeAddress") as string[],
    },
    {
      icon: Clock,
      title: t("hours"),
      details: t.raw("hoursDetails") as string[],
    },
  ]

  return (
    <MotionWrapper>
      <div>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{t("title")}</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">{t("subtitle")}</p>

        <div className="space-y-8">
          {contactDetails.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  {item.details.map((detail, index) => (
                    <p key={index} className="text-muted-foreground text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-secondary rounded-2xl">
          <h3 className="font-serif text-xl font-bold text-foreground mb-3">{t("scheduleViewing.title")}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t("scheduleViewing.description")}</p>
          <a href="tel:+15551234567" className="inline-flex items-center text-primary font-semibold hover:underline">
            <Phone className="h-4 w-4 ltr:mr-2 rtl:ml-2" />
            {t("scheduleViewing.callNow")}
          </a>
        </div>
      </div>
    </MotionWrapper>
  )
}
