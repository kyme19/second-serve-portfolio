import { Utensils, Truck, Recycle } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-green-50" id="process">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our three-step process ensures that surplus food is put to good use, helping communities and the
            environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Utensils className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">Food Donation</h3>
            <p className="text-gray-600">
              Restaurants, supermarkets, and individuals donate surplus food that would otherwise go to waste.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">Redistribution</h3>
            <p className="text-gray-600">
              We deliver edible food to orphanages, shelters, and people in need throughout the community.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Recycle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-2">Recycling</h3>
            <p className="text-gray-600">
              Spoiled food is converted into compost, biogas, or animal feed to minimize environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

