"use client"

import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative bg-green-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-2">
            Food Rescue & Redistribution
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-green-900 max-w-3xl">
            Reducing Food Waste, Feeding Communities
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Our mission is to create a sustainable solution where surplus food is rescued and redistributed to those who
            need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button className="bg-green-600 hover:bg-green-700">Donate Food</Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export { Hero }

