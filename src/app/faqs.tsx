"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "Qu'est-ce que One Trajet ?",
    desc: "One Trajet est une application mobile qui permet aux usagers de payer leurs tickets de transport directement dans le bus. Elle simplifie le travail des receveurs et améliore l'expérience de voyage en rendant les paiements rapides, sécurisés et sans contact.",
  },
  {
    title: "Dans quelles villes est disponible One Trajet ?",
    desc: "One Trajet est actuellement disponible dans plusieurs villes. Consultez notre site Web ou l'application pour la liste complète des zones couvertes.",
  },
  {
    title: "L'application est-elle gratuite ?",
    desc: "Oui, le téléchargement de l'application One Trajet est entièrement gratuit.",
  },
  {
    title: "Quels sont les modes de paiement disponibles ?",
    desc: "Vous pouvez payer via : Mobile Money (Orange Money ou Wave.)",
  },
  {
    title: "Les paiements sont-ils sécurisés ?",
    desc: " Oui, tous les paiements sont sécurisés grâce à des technologies de cryptage avancées et à la conformité avec les normes internationales de sécurité des transactions.",
  },
  {
    title: "Y a-t-il un service client disponible ?",
    desc: "Oui, notre service client est disponible 24h/24 et 7j/7. Contactez-nous par téléphone, e-mail ou via nos réseaux sociaux.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="mb-4">
            FAQ
          </h1>
          <p
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </p>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <div key={title}  className="bg-transparent">
              <p className="pb-6">
                {title}
              </p>
              <div className="pt-2">
                <p className="font-normal !text-gray-500">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
