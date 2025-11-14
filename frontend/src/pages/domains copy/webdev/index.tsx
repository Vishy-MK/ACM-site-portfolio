"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card_p"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"

export default function WebDevResourcesPage() {
  const websites = [
    {
      title: "MDN Web Docs",
      description: "Comprehensive documentation for web standards and best practices.",
      link: "https://developer.mozilla.org/",
    },
    {
      title: "freeCodeCamp",
      description: "Learn web development through interactive tutorials and projects.",
      link: "https://www.freecodecamp.org/",
    },
    {
      title: "CSS-Tricks",
      description: "Tips, tricks, and techniques for web design and development.",
      link: "https://css-tricks.com/",
    },
    {
      title: "Frontend Mentor",
      description: "Practice building real-world projects with design templates.",
      link: "https://www.frontendmentor.io/",
    },
  ]

  const youtubeVideos = [
    {
      title: "HTML Full Course",
      description: "A complete HTML course for beginners by freeCodeCamp.",
      link: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
    },
    {
      title: "CSS Crash Course",
      description: "A crash course on CSS by Traversy Media.",
      link: "https://www.youtube.com/watch?v=yfoY53QXEnI",
    },
    {
      title: "JavaScript Basics",
      description: "Learn JavaScript fundamentals by Programming with Mosh.",
      link: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    },
    {
      title: "React JS Tutorial",
      description: "A beginner's guide to React by The Net Ninja.",
      link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    },
    {
      title: "Node.js Crash Course",
      description: "Learn Node.js basics by Traversy Media.",
      link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
    },
  ]

  const courses = [
    {
      title: "The Web Developer Bootcamp",
      description: "A comprehensive web development course by Colt Steele.",
      link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    },
    {
      title: "JavaScript: Understanding the Weird Parts",
      description: "A deep dive into JavaScript by Anthony Alicea.",
      link: "https://www.udemy.com/course/understand-javascript/",
    },
    {
      title: "React - The Complete Guide",
      description: "A detailed React course by Academind.",
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "CS50's Web Programming with Python and JavaScript",
      description: "A Harvard course on web programming.",
      link: "https://cs50.harvard.edu/web/",
    },
    {
      title: "Full-Stack Open",
      description: "A free full-stack development course by the University of Helsinki.",
      link: "https://fullstackopen.com/en/",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-righteous font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700">
          Web Development Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore curated resources to enhance your skills in web development.
        </p>
      </div>

      <Tabs defaultValue="websites" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="websites" className="data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-700">
            Websites
          </TabsTrigger>
          <TabsTrigger value="youtube" className="data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-700">
            YouTube Videos
          </TabsTrigger>
          <TabsTrigger value="courses" className="data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-700">
            Courses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="websites" className="mt-6">
          <div className="grid gap-6">
            {websites.map((resource, index) => (
              <Card key={index} className="border border-yellow-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-yellow-600 hover:bg-yellow-700"
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
              <Card key={index} className="border border-yellow-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-yellow-600 hover:bg-yellow-700"
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
              <Card key={index} className="border border-yellow-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-yellow-600 hover:bg-yellow-700"
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

