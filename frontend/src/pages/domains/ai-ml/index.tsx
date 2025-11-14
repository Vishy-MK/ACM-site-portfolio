"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card_p"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Lightbulb, Database } from "lucide-react"
import { FadeIn, ScaleIn, SlideIn } from "@/components/motion"
import { motion } from "framer-motion"
import React from "react"

export default function AIMLPage() {
  const domainHead = {
    name: "Mrinal Dhami",

      image: "/person.webp",
  }

  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <ScaleIn>
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
          <h1 className="text-4xl font-bold mb-4 font-righteous bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">
            AI and ML Domain
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the cutting-edge fields of Artificial Intelligence and Machine Learning with our dedicated domain.
          </p>
          <div className="h-1 w-20 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </ScaleIn>

      <Tabs defaultValue="about" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="about" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">
            About
          </TabsTrigger>
          <TabsTrigger
            value="domain-head"
            className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700"
          >
            Domain Head
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <FadeIn>
            <Card className="border-purple-100 bg-white shadow-sm">
              <CardHeader>
                
                <CardTitle className="font-righteous text-purple-700">About the AI and ML Domain</CardTitle>
                <CardDescription>
                  Discover our focus areas in artificial intelligence and machine learning
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <SlideIn direction="right">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Brain className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-purple-700">Deep Learning</h3>
                      <p className="text-gray-600">
                        We explore neural networks, computer vision, natural language processing, and other deep
                        learning applications.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right" delay={0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Lightbulb className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-purple-700">Research and Innovation</h3>
                      <p className="text-gray-600">
                        We stay updated with the latest research papers and implement cutting-edge algorithms.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right" delay={0.2}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Database className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-purple-700">Data Science</h3>
                      <p className="text-gray-600">
                        We work with large datasets, perform data analysis, and extract meaningful insights.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <div className="mt-6 p-4 border border-purple-100 rounded-lg bg-purple-50/50">
                  <h3 className="text-lg font-medium text-purple-700 mb-2">Ready to join?</h3>
                  <p className="text-gray-600 mb-4">
                    Whether you're a beginner or an experienced data scientist, our community welcomes everyone who's
                    passionate about AI and ML.
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">Join Our Community</Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </TabsContent>

        <TabsContent value="domain-head" className="mt-6">
          <FadeIn>
            <Card className="border-purple-100 bg-white shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-30"></div>
              <CardHeader>
                 
                <CardTitle className="font-righteous text-purple-700">Meet Our Domain Head</CardTitle>
                <CardDescription>The leader of our AI & ML domain</CardDescription>
              </CardHeader>
              <CardContent>
                
                <div className="flex flex-col items-center justify-center gap-6 text-center p-4">
                  <motion.div
                    className="w-48 h-48 rounded-full overflow-hidden bg-purple-50 flex-shrink-0 border-4 border-white shadow-lg"
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
                    <h3 className="text-3xl font-bold text-purple-700 font-righteous">{domainHead.name}</h3>
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