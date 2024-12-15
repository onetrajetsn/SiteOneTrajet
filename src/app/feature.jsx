"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Paiement sans contact",
    children:
      "Paiement rapide et sécurisé via mobile money ou carte bancaire.",
  },
  {
    icon: HeartIcon,
    title: "Gestion des trajets",
    children:
      "Suivez vos itinéraires et recevez des informations en temps réel sur votre transport.",
  },
  {
    icon: LockClosedIcon,
    title: "Sécurité garantie",
    children:
      "Réduisez les échanges physiques d'argent et optez pour un système numérique sécurisé.",
  },
  {
    icon: LightBulbIcon,
    title: "Économie de temps",
    children:
      "Évitez les files d'attente en achetant vos tickets à l'avance.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Your Learning App
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
        Fonctionnalités de One Trajet
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          One Trajet est une solution innovante qui permet de gérer le paiement 
          des tickets de transport de manière digitale et sécurisée. 
          Nous rendons les trajets plus simples 
          pour les usagers et les receveurs grâce à une application moderne.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
