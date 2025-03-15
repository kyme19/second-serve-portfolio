import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Utensils, LineChart, Truck, ShoppingCart } from "lucide-react"

const projects = [
  {
    title: "Community Kitchen Connect",
    description:
      "A platform connecting local restaurants with community kitchens to streamline food donations and reduce waste.",
    icon: Utensils,
    tags: ["Web App", "Food Rescue"],
    link: "#",
  },
  {
    title: "FoodTrack Analytics",
    description:
      "Data analytics dashboard helping businesses track and reduce their food waste with actionable insights.",
    icon: LineChart,
    tags: ["Analytics", "Sustainability"],
    link: "#",
  },
  {
    title: "GreenDelivery",
    description: "Eco-friendly delivery service for rescued food using electric vehicles and optimized routes.",
    icon: Truck,
    tags: ["Logistics", "Green Tech"],
    link: "#",
  },
  {
    title: "Surplus Marketplace",
    description: "Online marketplace connecting food producers with buyers for discounted surplus food items.",
    icon: ShoppingCart,
    tags: ["E-commerce", "B2B"],
    link: "#",
  },
]

export function Projects() {
  return (
    <section className="py-16 md:py-24 bg-green-50" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore some of our successful initiatives that are making a difference in communities and reducing food
            waste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card key={index} className="border-green-100 h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center text-green-700">
                    <IconComponent size={40} />
                  </div>
                  <CardTitle className="text-xl text-center">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 text-center">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex justify-center">
                  <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-800 hover:bg-green-100">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

