"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GetInvolved() {
  const [activeTab, setActiveTab] = useState("donate")

  return (
    <section className="py-16 md:py-24 bg-white" id="get-involved">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            There are many ways to support our mission. Choose how you'd like to make a difference.
          </p>
        </div>

        <Tabs defaultValue="donate" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="donate">Donate Food</TabsTrigger>
            <TabsTrigger value="request">Request Food</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
            <TabsTrigger value="partner">Partner With Us</TabsTrigger>
          </TabsList>

          <TabsContent value="donate" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Donate Surplus Food</CardTitle>
                <CardDescription>
                  Restaurants, supermarkets, and individuals can donate surplus food that would otherwise go to waste.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Register your business or yourself as a food donor and schedule regular or one-time pickups for your
                  surplus food. We accept all types of unexpired food items.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">Register as Donor</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="request" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Request Food Assistance</CardTitle>
                <CardDescription>
                  If you run a shelter, community center, or organization that serves people in need, apply for food
                  assistance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We deliver rescued food to organizations that serve vulnerable populations. Fill out our application
                  to become a food recipient partner.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">Apply for Assistance</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="volunteer" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Volunteer Your Time</CardTitle>
                <CardDescription>
                  Help with food collection, sorting, and distribution to make a direct impact in your community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We need volunteers for food pickup, sorting, delivery, and administrative tasks. Choose your role and
                  availability.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">Join as Volunteer</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="partner" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Partner With Us</CardTitle>
                <CardDescription>
                  Join as a corporate sponsor or sustainability partner to support our mission financially or through
                  collaboration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Corporate partnerships help us expand our reach and impact. We offer various partnership opportunities
                  tailored to your organization's goals.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">Become a Partner</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

