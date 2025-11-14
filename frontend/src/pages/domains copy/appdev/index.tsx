"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card_p"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"

export default function AppDevResourcesPage() {
  const websites = [
    {
      title: "Flutter Documentation",
      description: "Official documentation for Flutter, a UI toolkit for building natively compiled apps.",
      link: "https://flutter.dev/docs",
    },
    {
      title: "React Native Docs",
      description: "Comprehensive guide to building cross-platform apps using React Native.",
      link: "https://reactnative.dev/docs/getting-started",
    },
    {
      title: "Expo Documentation",
      description: "Learn how to build React Native apps with Expo.",
      link: "https://docs.expo.dev/",
    },
    {
      title: "Android Developers",
      description: "Official documentation for Android app development.",
      link: "https://developer.android.com/",
    },
  ]

  const youtubeVideos = [
    
    {
      title: "Flutter Crash Course – 3 hrs (freeCodeCamp)",
      description: "Comprehensive crash course covering Flutter basics and widgets.",
      link: "https://youtu.be/VPvVD8t02U8",
    },
    {
      title: "Complete Flutter Development Course – 10 hrs (Mosh)",
      description: "Full Flutter course covering Dart, widgets, state management and deployment.",
      link: "https://youtu.be/1ukSR1GRtMU",
    },
    {
      title: "Flutter & Firebase Full Chat App – 7 hrs (freeCodeCamp)",
      description: "Build a real-time chat app using Flutter and Firebase.",
      link: "https://youtu.be/2n2H3uk4oDQ",
    },

    
    {
      title: "React Native Full Course – 12 hrs (freeCodeCamp)",
      description: "End-to-end React Native course for building cross-platform mobile apps.",
      link: "https://youtu.be/0-S5a0eXPoc",
    },
    {
      title: "React Native Tutorial for Beginners – 6 hrs (Mosh)",
      description: "Beginner-focused React Native tutorial covering core concepts.",
      link: "https://youtu.be/0-S5a0eXPoc",
    },

    
    {
      title: "Android Development with Kotlin – 8 hrs (freeCodeCamp)",
      description: "Comprehensive Kotlin-based Android development course.",
      link: "https://youtu.be/EExSSotojVI",
    },
    {
      title: "Android Development with Java – 5 hrs (Simplilearn)",
      description: "Java-based Android development beginner course.",
      link: "https://youtu.be/fis26HvvDII",
    },

    
    {
      title: "Node.js & Express Full Course – 8 hrs (freeCodeCamp)",
      description: "Build REST APIs with Node.js and Express.",
      link: "https://youtu.be/Oe421EPjeBE",
    },
    {
      title: "Django REST API Full Course – 4 hrs (freeCodeCamp)",
      description: "Create RESTful APIs using Django REST Framework.",
      link: "https://youtu.be/c708Nf0cHrs",
    },
  ]

  const courses = [
    {
      title: "The Complete Flutter Development Bootcamp",
      description: "A comprehensive Flutter course by Angela Yu.",
      link: "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
    },
    {
      title: "React Native - The Practical Guide",
      description: "A detailed React Native course by Academind.",
      link: "https://www.udemy.com/course/react-native-the-practical-guide/",
    },
    {
      title: "Android App Development Masterclass",
      description: "Learn Android development with Kotlin.",
      link: "https://www.udemy.com/course/android-kotlin-developer/",
    },
    {
      title: "iOS App Development with Swift",
      description: "A course on iOS development using Swift.",
      link: "https://developer.apple.com/learn/curriculum/",
    },
    {
      title: "CS50's Mobile App Development with React Native",
      description: "A Harvard course on mobile app development.",
      link: "https://cs50.harvard.edu/mobile/",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-righteous font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
          App Development Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore curated resources to enhance your skills in mobile app development.
        </p>
      </div>

      <Tabs defaultValue="websites" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="websites" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
            Websites
          </TabsTrigger>
          <TabsTrigger value="youtube" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
            YouTube Videos
          </TabsTrigger>
          <TabsTrigger value="courses" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
            Courses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="websites" className="mt-6">
          <div className="grid gap-6">
            {websites.map((resource, index) => (
              <Card key={index} className="border border-red-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-red-600 hover:bg-red-700"
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
              <Card key={index} className="border border-red-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-red-600 hover:bg-red-700"
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
              <Card key={index} className="border border-red-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-red-600 hover:bg-red-700"
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

