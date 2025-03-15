import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "ALBERT CHORE",
    role: "Project Manager",
    avatar: "/albert.jpeg",
    initials: "AC",
  },
  {
    name: "GUYATU ROBA",
    role: "UI/UX Developer",
    avatar: "/roba.jpeg",
    initials: "GR",
  },
  {
    name: "ANITA NGUGI",
    role: "Business Analyst",
    avatar: "/anita.jpeg",
    initials: "AN",
  },
  {
    name: "CALEB LATEITEI",
    role: "Backend Developer",
    avatar: "/caleb.jpeg",
    initials: "CL",
  },
  {
    name: "CHRISTOPHER ORENTAL",
    role: "Financial Analyst",
    avatar: "/christopher.jpeg",
    initials: "CO",
  },
]

export function Team() {
  return (
    <section className="py-16 md:py-24 bg-white" id="team">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Meet the dedicated professionals working to reduce food waste and support our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-green-100 overflow-hidden">
              <div className="aspect-square bg-green-50 flex items-center justify-center">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-2xl bg-green-100 text-green-800">{member.initials}</AvatarFallback>
                </Avatar>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-600">{member.role}</p>
                <div className="flex mt-3 space-x-2">
                  <a href="#" className="text-gray-500 hover:text-green-600" aria-label={`${member.name}'s LinkedIn`}>
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-green-600" aria-label={`${member.name}'s Twitter`}>
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-green-600" aria-label={`Email ${member.name}`}>
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

