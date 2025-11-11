"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, BookOpen, Calendar, ArrowRight, Star } from "lucide-react"

export default function Home() {
  const stats = [
    { icon: Users, label: "Students", value: "2,500+" },
    { icon: Trophy, label: "Awards", value: "150+" },
    { icon: BookOpen, label: "Programs", value: "45+" },
    { icon: Star, label: "Success Rate", value: "98%" },
  ]

  const announcements = [
    {
      title: "Spring Semester Registration Open",
      date: "March 15, 2024",
      category: "Admissions",
      description: "Register now for the upcoming spring semester. Early bird discounts available.",
    },
    {
      title: "Science Fair Winners Announced",
      date: "March 12, 2024",
      category: "Events",
      description: "Congratulations to all participants in this year's annual science fair competition.",
    },
    {
      title: "New Robotics Lab Opening",
      date: "March 10, 2024",
      category: "Facilities",
      description: "State-of-the-art robotics lab now open for students interested in STEM programs.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white border-0 shadow-lg animate-bounce">
              Nurturing Excellence Since 1985
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Where Bright Minds{" "}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
                Shine & Grow
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Bright Nursery and Primary School provides vibrant, engaging education that nurtures creativity, curiosity, and character development for young learners from nursery through primary grades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 shadow-lg hover:shadow-xl transition-all">
                <Link href="/admissions">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 hover:border-primary hover:bg-accent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const gradients = [
              "from-orange-500 to-amber-500",
              "from-green-500 to-emerald-500",
              "from-blue-500 to-cyan-500",
              "from-pink-500 to-rose-500"
            ];
            return (
              <Card key={stat.label} className="text-center border-2 hover:border-primary/50 hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className={`mx-auto w-12 h-12 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center mb-4 shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-500 to-green-600 bg-clip-text text-transparent">Welcome to Bright Nursery and Primary School</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For nearly four decades, Bright Nursery and Primary School has been at the forefront of early childhood and primary education. Our commitment to creating a vibrant, nurturing environment helps young students discover their passions and reach their full potential.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We offer a comprehensive, colorful curriculum that balances engaging academics with arts, play, and character development. Our dedicated faculty and bright, welcoming facilities provide the perfect foundation for lifelong learning.
            </p>
            <Button asChild variant="outline" className="border-2 hover:border-primary">
              <Link href="/about">
                Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
              alt="Students learning"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Latest Announcements</h2>
              <p className="text-muted-foreground">Stay updated with our latest news and events</p>
            </div>
            <Button asChild variant="ghost" className="hover:bg-accent">
              <Link href="/">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((announcement, index) => {
              const badgeColors = [
                "bg-gradient-to-r from-orange-500 to-amber-500",
                "bg-gradient-to-r from-green-500 to-emerald-500",
                "bg-gradient-to-r from-blue-500 to-cyan-500"
              ];
              return (
                <Card key={announcement.title} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${badgeColors[index]} text-white border-0`}>{announcement.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {announcement.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{announcement.title}</CardTitle>
                    <CardDescription>{announcement.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" />
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container relative mx-auto px-4 py-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">Ready to Join Our Bright Community?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-orange-50 drop-shadow">
            Take the first step towards an exceptional education. Our admissions team is here to guide you through the enrollment process.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            <Link href="/admissions">
              Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}