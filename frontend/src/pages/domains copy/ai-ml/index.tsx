"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card_p"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"

export default function AIMLResourcesPage() {
  const websites = [
    {
      title: "Fast.ai",
      description: "Practical deep learning courses for coders.",
      link: "https://www.fast.ai/",
    },
    {
      title: "Kaggle",
      description: "A platform for data science competitions and datasets.",
      link: "https://www.kaggle.com/",
    },
    {
      title: "Towards Data Science",
      description: "A Medium publication sharing AI and ML insights.",
      link: "https://towardsdatascience.com/",
    },
    {
      title: "Google AI",
      description: "Explore Google's AI research and tools.",
      link: "https://ai.google/",
    },
  ]

  const youtubeVideos = [
    {
      title: "Neural Networks from Scratch",
      description: "A detailed explanation of neural networks by 3Blue1Brown.",
      link: "https://www.youtube.com/watch?v=aircAruvnKk",
    },
    {
      title: "Gradient Descent Explained",
      description: "StatQuest's clear explanation of gradient descent.",
      link: "https://www.youtube.com/watch?v=sDv4f4s2SB8",
    },
    {
      title: "Introduction to Machine Learning",
      description: "A beginner-friendly introduction by Simplilearn.",
      link: "https://www.youtube.com/watch?v=GwIo3gDZCVQ",
    },
    {
      title: "Convolutional Neural Networks",
      description: "A great video on CNNs by deeplearning.ai.",
      link: "https://www.youtube.com/watch?v=YRhxdVk_sIs",
    },
    {
      title: "Natural Language Processing",
      description: "An overview of NLP by edureka!",
      link: "https://www.youtube.com/watch?v=8tq1C8spV_g",
    },
  ]

  const courses = [
    {
      title: "Andrew Ng's Machine Learning",
      description: "A foundational course on machine learning by Andrew Ng.",
      link: "https://www.coursera.org/learn/machine-learning",
    },
    {
      title: "Deep Learning Specialization",
      description: "A series of courses on deep learning by Andrew Ng.",
      link: "https://www.coursera.org/specializations/deep-learning",
    },
    {
      title: "CS50's Introduction to AI with Python",
      description: "An introduction to AI concepts using Python.",
      link: "https://cs50.harvard.edu/ai/",
    },
    {
      title: "Practical Deep Learning for Coders",
      description: "A hands-on course by Fast.ai.",
      link: "https://course.fast.ai/",
    },
    {
      title: "Applied Data Science with Python",
      description: "A course covering data science and ML concepts.",
      link: "https://www.coursera.org/specializations/data-science-python",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-righteous font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">
          AI and ML Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore curated resources to enhance your knowledge in Artificial Intelligence and Machine Learning.
        </p>
      </div>

      <Tabs defaultValue="websites" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="websites" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">
            Websites
          </TabsTrigger>
          <TabsTrigger value="youtube" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">
            YouTube Videos
          </TabsTrigger>
          <TabsTrigger value="courses" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">
            Courses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="websites" className="mt-6">
          <div className="grid gap-6">
            {websites.map((resource, index) => (
              <Card key={index} className="border border-purple-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-purple-600 hover:bg-purple-700"
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
              <Card key={index} className="border border-purple-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-purple-600 hover:bg-purple-700"
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
              <Card key={index} className="border border-purple-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-purple-600 hover:bg-purple-700"
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

