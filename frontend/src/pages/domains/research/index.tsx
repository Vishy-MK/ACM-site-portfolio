"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card_p"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, GraduationCap } from "lucide-react"
import { FadeIn, ScaleIn, SlideIn } from "@/components/motion"
import { motion } from "framer-motion"
import React from "react"

export default function ResearchPage() {
  const domainHead = {
    name: "Animesh Kumar",

    image: "/person.webp",
  }


  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <ScaleIn>
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
          <h1 className="text-4xl font-righteous font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
            Research and Content Domain
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore academic research, technical writing, and content creation with our dedicated domain.
          </p>
          <div className="h-1 w-20 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </ScaleIn>

      <Tabs defaultValue="about" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="about" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            <BookOpen className="w-5 h-5 mr-2" /> About
          </TabsTrigger>
          <TabsTrigger
            value="domain-head"
            className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
          >
            <GraduationCap className="w-5 h-5 mr-2" /> Domain Head
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <FadeIn>
            <Card className="border-green-100 bg-white shadow-sm">
              <CardHeader>
                
                <CardTitle className="font-righteous text-green-700">About the Research and Content Domain</CardTitle>
                <CardDescription>Discover our focus areas in research and content creation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <SlideIn direction="right">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-green-700">Academic Research</h3>
                      <p className="text-gray-600">
                        We conduct research in various computer science fields and publish papers in conferences and
                        journals.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right" delay={0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-green-700">Technical Writing</h3>
                      <p className="text-gray-600">
                        We focus on developing technical writing skills for documentation, blogs, and research papers.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right" delay={0.2}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <GraduationCap className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-green-700">Mentorship</h3>
                      <p className="text-gray-600">
                        We provide mentorship to students interested in pursuing research and academic careers.
                      </p>
                    </div>
                  </div>
                </SlideIn>

                <div className="mt-6 p-4 border border-green-100 rounded-lg bg-green-50/50">
                  <h3 className="text-lg font-medium text-green-700 mb-2">Ready to join?</h3>
                  <p className="text-gray-600 mb-4">
                    Whether you're a beginner or an experienced researcher, our community welcomes everyone who's
                    passionate about academic exploration.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">Join Our Community</Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </TabsContent>

        <TabsContent value="domain-head" className="mt-6">
          <FadeIn>
            <Card className="border-green-100 bg-white shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-30"></div>
              <CardHeader>
                
                <CardTitle className="font-righteous text-green-700">Meet Our Domain Head</CardTitle>
                <CardDescription>The leader of our Research & Content domain</CardDescription>
              </CardHeader>
              <CardContent>
                
                <div className="flex flex-col items-center justify-center gap-6 text-center p-4">
                  <motion.div
                    className="w-48 h-48 rounded-full overflow-hidden bg-green-50 flex-shrink-0 border-4 border-white shadow-lg"
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
                    <h3 className="text-3xl font-bold text-green-700 font-righteous">{domainHead.name}</h3>
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