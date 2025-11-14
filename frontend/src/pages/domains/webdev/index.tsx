"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card_p"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Code, Server } from "lucide-react"
import { FadeIn, ScaleIn, SlideIn } from "@/components/motion"
import { motion } from "framer-motion"
import React from "react"

export default function WebDevPage() {
  const domainHead = {
    
    name: "Vishal Kumar",
    image: "/person.webp",
  }



  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <ScaleIn>
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-50 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
          <h1 className="text-4xl font-righteous font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700">
            Web Development Domain
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create modern, responsive, and accessible web applications with our web development domain.
          </p>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </ScaleIn>

      <Tabs defaultValue="about" className="max-w-4xl mx-auto">
        
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="about" className="data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-700">
            About
          </TabsTrigger>
          <TabsTrigger
            value="domain-head"
            className="data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-700"
          >
            Domain Head
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <FadeIn>
            <Card className="border-yellow-100 bg-white shadow-sm">
              <CardHeader>
                
                <CardTitle className="font-righteous text-yellow-700">About the Web Development Domain</CardTitle>
                <CardDescription>Discover our focus areas in web development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <SlideIn direction="right">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Globe className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-yellow-700">Frontend Development</h3>
                      <p className="text-gray-600">
                        We focus on creating responsive and accessible user interfaces using modern frameworks like
                        React, Vue, and Angular.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right" delay={0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Server className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-yellow-700">Backend Development</h3>
                      <p className="text-gray-600">
                        We build robust server-side applications using Node.js, Express, Django, and other backend
                        technologies.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right" delay={0.2}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Code className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-yellow-700">Full-Stack Development</h3>
                      <p className="text-gray-600">
                        We integrate frontend and backend technologies to create complete web applications with seamless
                        user experiences.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <div className="mt-6 p-4 border border-yellow-100 rounded-lg bg-yellow-50/50">
                  <h3 className="text-lg font-medium text-yellow-700 mb-2">Ready to join?</h3>
                  <p className="text-gray-600 mb-4">
                    Whether you're a beginner or an experienced developer, our community welcomes everyone who's
                    passionate about web development.
                  </p>
                  <Button className="bg-yellow-600 hover:bg-yellow-700">Join Our Community</Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </TabsContent>

        <TabsContent value="domain-head" className="mt-6">
          <FadeIn>
            <Card className="border-yellow-100 bg-white shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-30"></div>
              <CardHeader>
                
                <CardTitle className="font-righteous text-yellow-700">Meet Our Domain Head</CardTitle>
                <CardDescription>The leader of our Web Development domain</CardDescription>
              </CardHeader>
              <CardContent>
                
                <div className="flex flex-col items-center justify-center gap-6 text-center p-4">
                  <motion.div
                    className="w-48 h-48 rounded-full overflow-hidden bg-yellow-50 flex-shrink-0 border-4 border-white shadow-lg"
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
                    <h3 className="text-3xl font-bold text-yellow-700 font-righteous">{domainHead.name}</h3>
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