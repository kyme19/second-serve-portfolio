import { Lightbulb, Target, Users } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-slate-50" id="values">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-slate-600 max-w-3xl">
            At Fusion Technologies, our values drive everything we do, shaping our approach to innovation and
            client success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Lightbulb className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation</h3>
            <p className="text-slate-600">
              We embrace cutting-edge technologies and creative thinking to deliver transformative solutions
              that drive business growth.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Excellence</h3>
            <p className="text-slate-600">
              We strive for excellence in every project, maintaining the highest standards of quality and
              technical precision.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Collaboration</h3>
            <p className="text-slate-600">
              We believe in the power of teamwork, fostering strong partnerships with our clients and within
              our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

