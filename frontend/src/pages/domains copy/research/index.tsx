"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card_p"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"

export default function ResearchResourcesPage() {
  const websites = [
    {
      title: "Google Scholar",
      description: "A freely accessible search engine for scholarly articles and research papers.",
      link: "https://scholar.google.com/",
    },
    {
      title: "ResearchGate",
      description: "A platform to connect with researchers and access publications.",
      link: "https://www.researchgate.net/",
    },
    {
      title: "arXiv",
      description: "An open-access repository for research papers in various fields.",
      link: "https://arxiv.org/",
    },
    {
      title: "PubMed",
      description: "A resource for biomedical and life sciences literature.",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
    },
  ]

  const youtubeVideos = [
    {
      title: "How to Write a Research Paper",
      description: "A step-by-step guide to writing a research paper by Scribbr.",
      link: "https://www.youtube.com/watch?v=PtH60ktLqBQ",
    },
    {
      title: "Research Methodology Basics",
      description: "An introduction to research methodology by Dr. Manishika Jain.",
      link: "https://www.youtube.com/watch?v=2z3IIcF5i0E",
    },
    {
      title: "How to Read a Research Paper",
      description: "Learn how to effectively read research papers by R3ciprocity Team.",
      link: "https://www.youtube.com/watch?v=QJ2f4hH4QpE",
    },
    {
      title: "Literature Review Writing",
      description: "A guide to writing a literature review by Scribbr.",
      link: "https://www.youtube.com/watch?v=2IUZWZX4OGI",
    },
    {
      title: "How to Present Research",
      description: "Tips for presenting research effectively by Professor Dave Explains.",
      link: "https://www.youtube.com/watch?v=Jm8n5Jq3z2g",
    },
  ]

  const courses = [
    {
      title: "Academic Research Fundamentals",
      description: "A Coursera course on research fundamentals by the University of London.",
      link: "https://www.coursera.org/learn/academic-research",
    },
    {
      title: "Research Methods for the Social Sciences",
      description: "A course on research methods by the University of Amsterdam.",
      link: "https://www.coursera.org/learn/research-methods",
    },
    {
      title: "How to Write and Publish a Scientific Paper",
      description: "A course on writing and publishing research papers by École Polytechnique.",
      link: "https://www.coursera.org/learn/sciwrite",
    },
    {
      title: "Data Analysis and Interpretation",
      description: "A course on data analysis techniques by Wesleyan University.",
      link: "https://www.coursera.org/specializations/data-analysis",
    },
    {
      title: "Introduction to Systematic Review and Meta-Analysis",
      description: "A course on systematic reviews by Johns Hopkins University.",
      link: "https://www.coursera.org/learn/systematic-review",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-righteous font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
          Research Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore curated resources to enhance your research skills and academic knowledge.
        </p>
      </div>

      <Tabs defaultValue="websites" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="websites" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Websites
          </TabsTrigger>
          <TabsTrigger value="youtube" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            YouTube Videos
          </TabsTrigger>
          <TabsTrigger value="courses" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Courses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="websites" className="mt-6">
          <div className="grid gap-6">
            {websites.map((resource, index) => (
              <Card key={index} className="border border-green-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(resource.link, "_blank")}
                  >
                    Visit Website
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="youtube" className="mt-6">
          <div className="grid gap-6">
            {youtubeVideos.map((resource, index) => (
              <Card key={index} className="border border-green-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(resource.link, "_blank")}
                  >
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="courses" className="mt-6">
          <div className="grid gap-6">
            {courses.map((resource, index) => (
              <Card key={index} className="border border-green-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(resource.link, "_blank")}
                  >
                    View Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

