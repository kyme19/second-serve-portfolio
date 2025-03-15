"use client"

import { Leaf, Heart, Recycle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            We are Second Serve, a social impact organization dedicated to reducing food waste while helping those in
            need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <Leaf className="h-12 w-12 text-green-600 mb-2" />
              <CardTitle className="text-xl font-semibold">Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                We promote environmental sustainability by diverting food waste from landfills and reducing greenhouse
                gas emissions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <Heart className="h-12 w-12 text-green-600 mb-2" />
              <CardTitle className="text-xl font-semibold">Community Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                We deliver nutritious food to shelters, orphanages, and low-income communities to combat hunger.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <Recycle className="h-12 w-12 text-green-600 mb-2" />
              <CardTitle className="text-xl font-semibold">Zero Waste</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Inedible food is converted into compost, biogas, or animal feed, ensuring nothing goes to waste.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

