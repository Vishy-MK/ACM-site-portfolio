"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card_p"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CodingResourcesPage() {
  const websites = [
    {
      title: "LeetCode",
      description: "A platform to practice coding problems and prepare for technical interviews.",
      link: "https://leetcode.com/",
    },
    {
      title: "GeeksforGeeks",
      description: "Comprehensive tutorials and coding problems for data structures and algorithms.",
      link: "https://www.geeksforgeeks.org/",
    },
    {
      title: "HackerRank",
      description: "Practice coding challenges and improve your skills.",
      link: "https://www.hackerrank.com/",
    },
    {
      title: "Codeforces",
      description: "A competitive programming platform with contests and problems.",
      link: "https://codeforces.com/",
    },
  ]

  const youtubeVideos = [
    
    {
      title: "Top 7 Algorithms for Coding Interviews Explained SIMPLY",
      description: "A concise walkthrough of essential algorithms for interviews.",
      link: "https://youtu.be/kp3fCihUXEg?si=ELrkIZEcZvRv6J5w",
    },
    {
      title: "Top 7 Data Structures for Interviews Explained SIMPLY",
      description: "A clear explanation of core data structures used in interviews.",
      link: "https://youtu.be/cQWr9DFE1ww?si=P9CfBkJFhqpzzs08",
    },
    {
      title: "How to Solve ANY LeetCode Problem (Step-by-Step)",
      description: "A step-by-step method for approaching LeetCode problems.",
      link: "https://youtu.be/OTNe0eV8418?si=dk6N-jexDlVDgJ8B",
    },
    {
      title: "Dynamic Programming - A Beginner's Guide",
      description: "A detailed explanation of dynamic programming by freeCodeCamp.",
      link: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
    },
    {
      title: "Sorting Algorithms and Their Implementations",
      description: "Learn sorting algorithms by MyCodeSchool.",
      link: "https://www.youtube.com/watch?v=pkkFqlG0Hds",
    },
    {
      title: "Graph Algorithms for Beginners",
      description: "An introduction to graph algorithms by Abdul Bari.",
      link: "https://www.youtube.com/watch?v=09_LlHjoEiY",
    },
    {
      title: "Binary Search Explained",
      description: "A beginner-friendly explanation of binary search by CS Dojo.",
      link: "https://www.youtube.com/watch?v=P3YID7liBug",
    },
    {
      title: "Recursion and Backtracking",
      description: "Learn recursion and backtracking by freeCodeCamp.",
      link: "https://www.youtube.com/watch?v=ZGZfIRt9k_U",
    },
  ]

  const courses = [
    {
      title: "CS50's Introduction to Computer Science",
      description: "A foundational computer science course by Harvard.",
      link: "https://cs50.harvard.edu/x/",
    },
    {
      title: "Master the Coding Interview: Data Structures + Algorithms",
      description: "A comprehensive course on coding interviews by Andrei Neagoie.",
      link: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",
    },
    {
      title: "Data Structures and Algorithms Specialization",
      description: "A Coursera specialization by UC San Diego.",
      link: "https://www.coursera.org/specializations/data-structures-algorithms",
    },
    {
      title: "Competitive Programmer's Handbook",
      description: "A free eBook for competitive programming.",
      link: "https://cses.fi/book/",
    },
    {
      title: "Algorithmic Toolbox",
      description: "A beginner-friendly course on algorithms by UC San Diego.",
      link: "https://www.coursera.org/learn/algorithmic-toolbox",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-righteous font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
          Coding Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore curated resources to enhance your coding skills and prepare for competitive programming.
        </p>
      </div>

      <Tabs defaultValue="websites" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="websites" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
            Websites
          </TabsTrigger>
          <TabsTrigger value="youtube" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
            YouTube Videos
          </TabsTrigger>
          <TabsTrigger value="courses" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
            Courses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="websites" className="mt-6">
          <div className="grid gap-6">
            {websites.map((resource, index) => (
              <Card key={index} className="border border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-blue-600 hover:bg-blue-700"
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
              <Card key={index} className="border border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-blue-600 hover:bg-blue-700"
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
              <Card key={index} className="border border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{resource.description}</p>
                  <Button
                    size="sm"
                    className="mt-4 bg-blue-600 hover:bg-blue-700"
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

