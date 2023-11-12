import FQA from "../../components/FQA/FQA";
import Attributes from "../../components/attributes/Attributes";
import BigIdea from "../../components/bigIdea/BigIdea";
import Hero from "../../components/hero/Hero";
import Partners from "../../components/partners/Partners";
import Privacy from "../../components/privacy/Privacy";
import Prizes from "../../components/prizes/Prizes";
import Rules from "../../components/rules/Rules";
import Timeline from "../../components/timeline/Timeline";
import { useEffect } from "react";



const heroVariants = {
  initial: {
    x: '100%'
  },

  final: {
    x: '0%',
    transition: {
      type: 'spring',
      mass: 0.6,
      duration: 1000000000
    }
  }
}

export default function Home() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  })

  return (
    <>
      <Hero heroVariants={heroVariants} />
      <BigIdea />
      <Rules />
      <Attributes />
      <FQA />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
    </>
  )
}
