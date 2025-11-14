"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card_p"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palette, Layout, PenTool } from "lucide-react"
import { FadeIn, ScaleIn, SlideIn } from "@/components/motion"
import { motion } from "framer-motion"
import React from "react"

export default function DesignPage() {
  const domainHead = {
    name: "Kaaviya Kalyanakumar",

     image: "/person.webp",
  }



  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <ScaleIn>
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-50 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
          <h1 className="text-4xl font-righteous font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700">
            Design Domain
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create beautiful and functional designs with our UI/UX and graphic design domain.
          </p>
          <div className="h-1 w-20 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </ScaleIn>

      <Tabs defaultValue="about" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="about" className="data-[state=active]:bg-pink-50 data-[state=active]:text-pink-700">
            About
          </TabsTrigger>
          <TabsTrigger value="domain-head" className="data-[state=active]:bg-pink-50 data-[state=active]:text-pink-700">
            Domain Head
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <FadeIn>
            <Card className="border-pink-100 bg-white shadow-sm">
              <CardHeader>
                
                <CardTitle className="font-righteous text-pink-700">About the Design Domain</CardTitle>
                <CardDescription>Discover our focus areas in UI/UX and graphic design</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <SlideIn direction="right">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Layout className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-pink-700">UI/UX Design</h3>
                      <p className="text-gray-600">
                        We focus on creating intuitive and accessible user interfaces and experiences for web and mobile
                        applications.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right" delay={0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Palette className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-pink-700">Graphic Design</h3>
                      <p className="text-gray-600">
                        We create visual assets like logos, posters, social media graphics, and marketing materials.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right" delay={0.2}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <PenTool className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-pink-700">Design Systems</h3>
                      <p className="text-gray-600">
                        We develop comprehensive design systems with reusable components and consistent guidelines.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <div className="mt-6 p-4 border border-pink-100 rounded-lg bg-pink-50/50">
                  <h3 className="text-lg font-medium text-pink-700 mb-2">Ready to join?</h3>
                  <p className="text-gray-600 mb-4">
                    Whether you're a beginner or an experienced designer, our community welcomes everyone who's
                    passionate about design.
                  </p>
                  <Button className="bg-pink-600 hover:bg-pink-700">Join Our Community</Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </TabsContent>

        <TabsContent value="domain-head" className="mt-6">
          <FadeIn>
            <Card className="border-pink-100 bg-white shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-30"></div>
              <CardHeader>
                
                <CardTitle className="font-righteous text-pink-700">Meet Our Domain Head</CardTitle>
                <CardDescription>The leader of our Design domain</CardDescription>
              </CardHeader>
              <CardContent>
                
                <div className="flex flex-col items-center justify-center gap-6 text-center p-4">
                  <motion.div
                    className="w-48 h-48 rounded-full overflow-hidden bg-pink-50 flex-shrink-0 border-4 border-white shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={domainHead.image || "/placeholder.svg"}
                      alt={domainHead.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="mt-2">
                    <h3 className="text-3xl font-bold text-pink-700 font-righteous">{domainHead.name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </TabsContent>
      </Tabs>
    </div>
  )
}