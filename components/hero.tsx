"use client"

const Hero = () => {
  return (
    <section className="relative bg-blue-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start text-left space-y-6">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Innovation Through Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-blue-900">
              Fusion Technologies
            </h1>
          </div>
          <div className="flex flex-col space-y-6">
            <p className="text-xl text-gray-600">
              We are a pioneering technology company dedicated to crafting innovative solutions that transform businesses and empower digital transformation through cutting-edge software development and technological excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export { Hero }

