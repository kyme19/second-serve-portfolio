import { Button } from "@/components/ui/button"
import { ExternalLink, Bell } from "lucide-react"

export function ComingSoon() {
  return (
    <section className="py-16 md:py-24 bg-white" id="coming-soon">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              <Bell className="mr-1 h-4 w-4" />
              <span>Now Active</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-green-900">Food Donation Platform</h2>

            <p className="text-lg text-gray-600">
              Our revolutionary platform is now live! Connect with donors and recipients directly, track impact in real-time,
              and experience a streamlined donation process. Join us in making a difference today.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                </div>
                <span className="text-gray-600">Seamless matching of donors with recipients</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                </div>
                <span className="text-gray-600">Real-time tracking of food donations</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                </div>
                <span className="text-gray-600">Impact dashboard showing meals provided and waste reduced</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                </div>
                <span className="text-gray-600">Mobile app for on-the-go donations and pickups</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700" onClick={() => window.open('https://second-serve-platform-jz2v.vercel.app/', '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Platform
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="aspect-square max-w-md mx-auto bg-green-100 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      Live
                    </div>
                  </div>
                  <div className="bg-white/90 py-3 px-6 rounded-lg">
                    <p className="text-green-800 font-semibold">Platform Active</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-700/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

