import { Hero } from "@/components/hero"
import { WhoWeAre } from "@/components/who-we-are"
import { HowItWorks } from "@/components/how-it-works"
import { GetInvolved } from "@/components/get-involved"
import { Projects } from "@/components/projects"
import { ComingSoon } from "@/components/coming-soon"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <HowItWorks />
      <GetInvolved />
      <Projects />
      <ComingSoon />
      <Team />
      <Contact />
    </main>
  )
}

