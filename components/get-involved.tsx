"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GetInvolved() {
  const [, setActiveTab] = useState("projects")

  return (
    <section className="py-16 md:py-24 bg-white" id="get-involved">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Join us in shaping the future of technology. Explore opportunities to collaborate and innovate together.
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="careers">Careers</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="partner">Partner</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Collaborative Projects</CardTitle>
                <CardDescription>
                  Engage in cutting-edge technology projects and contribute to innovative solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our development teams in creating transformative software solutions. Whether you are a startup
                  or enterprise, we welcome collaboration on projects that push technological boundaries.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">Start a Project</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="careers" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Join Our Team</CardTitle>
                <CardDescription>
                  Build your career with a company that values innovation and professional growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We are always looking for talented developers, engineers, and tech enthusiasts who are passionate about
                  creating impactful solutions and driving technological advancement.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">View Positions</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Research & Innovation</CardTitle>
                <CardDescription>
                  Participate in our research initiatives and help shape the future of technology.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Collaborate with our R&D team on emerging technologies like AI, blockchain, and cloud computing.
                  We welcome academic partnerships and innovative research proposals.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">Explore Research</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="partner" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Technology Partnership</CardTitle>
                <CardDescription>
                  Form strategic partnerships to accelerate innovation and create mutual value.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Partner with us to leverage our technological expertise and innovation capabilities. We offer various
                  collaboration models tailored to your organization&apos;s strategic objectives.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">Partner With Us</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

