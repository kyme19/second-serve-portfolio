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
            We are Fusion Technologies, a forward-thinking technology company that combines innovation with expertise to
            deliver transformative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <Leaf className="h-12 w-12 text-green-600 mb-2" />
              <CardTitle className="text-xl font-semibold">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                We drive technological advancement through cutting-edge solutions and forward-thinking approaches to
                complex challenges.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <Heart className="h-12 w-12 text-green-600 mb-2" />
              <CardTitle className="text-xl font-semibold">Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                We maintain the highest standards of quality in our development processes and deliverables.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader className="pb-2">
              <Recycle className="h-12 w-12 text-green-600 mb-2" />
              <CardTitle className="text-xl font-semibold">Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                We help businesses evolve through digital transformation and innovative technology solutions.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

