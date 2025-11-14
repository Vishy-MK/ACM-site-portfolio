"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card_p"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"

export default function DesignResourcesPage() {
  const websites = [
    {
      title: "Dribbble",
      description: "A platform to showcase and discover creative design work.",
      link: "https://dribbble.com/",
    },
    {
      title: "Behance",
      description: "A platform to explore and showcase design portfolios.",
      link: "https://www.behance.net/",
    },
    {
      title: "Canva Design School",
      description: "Learn design basics and advanced techniques with Canva.",
      link: "https://www.canva.com/designschool/",
    },
    {
      title: "Smashing Magazine",
      description: "A resource for web designers and developers.",
      link: "https://www.smashingmagazine.com/",
    },
  ]

  const youtubeVideos = [
    {
      title: "UI/UX Design Crash Course",
      description: "A beginner-friendly crash course on UI/UX design by DesignCourse.",
      link: "https://www.youtube.com/watch?v=_Hp_dI0DzY4",
    },
    {
      title: "Typography Basics",
      description: "Learn the basics of typography by The Futur.",
      link: "https://www.youtube.com/watch?v=6p6E1qA3H4s",
    },
    {
      title: "Color Theory for Designers",
      description: "An introduction to color theory by GFXMentor.",
      link: "https://www.youtube.com/watch?v=Qj1FK8n7WgY",
    },
    {
      title: "Figma Tutorial for Beginners",
      description: "Learn Figma from scratch by freeCodeCamp.",
      link: "https://www.youtube.com/watch?v=4W4LvJnNegI",
    },
    {
      title: "Design Systems Explained",
      description: "Understand design systems by AJ&Smart.",
      link: "https://www.youtube.com/watch?v=Z9mYq8zJ1aM",
    },
  ]

  const courses = [
    {
      title: "UI/UX Design Specialization",
      description: "A Coursera specialization on UI/UX design by CalArts.",
      link: "https://www.coursera.org/specializations/ui-ux-design",
    },
    {
      title: "The Complete Graphic Design Theory for Beginners",
      description: "A comprehensive course on graphic design basics.",
      link: "https://www.udemy.com/course/graphic-design-theory-for-beginners-course/",
    },
    {
      title: "Figma for UX Design",
      description: "Learn Figma for UX design by DesignLab.",
      link: "https://trydesignlab.com/courses/figma-ux-design/",
    },
    {
      title: "Adobe XD Masterclass",
      description: "A complete guide to Adobe XD for UI/UX design.",
      link: "https://www.udemy.com/course/adobe-xd-masterclass/",
    },
    {
      title: "Interaction Design Foundation",
      description: "A platform offering various design courses.",
      link: "https://www.interaction-design.org/",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-righteous font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700">
          Design Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore curated resources to enhance your skills in UI/UX and graphic design.
        </p>
      </div>

      <Tabs defaultValue="websites" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="websites" className="data-[state=active]:bg-pink-50 data-[state=active]:text-pink-700">
            Websites
          </TabsTrigger>
          <TabsTrigger value="youtube" className="data-[state=active]:bg-pink-50 data-[state=active]:text-pink-700">
            YouTube Videos
          </TabsTrigger>
          <TabsTrigger value="courses" className="data-[state=active]:bg-pink-50 data-[state=active]:text-pink-700">
            Courses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="websites" className="mt-6">
          <div className="grid gap-6">
            {websites.map((resource, index) => (
              <Card key={index} className="border border-pink-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-pink-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-pink-600 hover:bg-pink-700"
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
              <Card key={index} className="border border-pink-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-pink-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-pink-600 hover:bg-pink-700"
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
              <Card key={index} className="border border-pink-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-pink-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-pink-600 hover:bg-pink-700"
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

