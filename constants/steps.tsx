import {CircleDollarSign, Lightbulb, Medal, MoveDiagonal, ThumbsUp} from "lucide-react";
import React from "react";

export const steps=[
  {
    id: 1,
    date: ["2019", "January"],
    title: "Conceptualizing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: <MoveDiagonal/>
  },
  {
    id: 2,
    date: ["2019", "March"],
    title: "Initial Research",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: <Lightbulb />
  },
  {
    id: 3,
    date: ["2019", "December"],
    title: "Prototype Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: <ThumbsUp />
  },
  {
    id: 4,
    date: ["2020", "March"],
    title: "Securing Seed Funding",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: <CircleDollarSign />
  },
  {
    id: 5,
    date: ["2022", "March"],
    title: "Receiving Industry Recognition",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: <Medal />
  }
]