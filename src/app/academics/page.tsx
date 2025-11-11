"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Microscope, Palette, Calculator, Globe, Music, Award } from "lucide-react"
import Link from "next/link"

export default function AcademicsPage() {
  const programs = [
    {
      icon: BookOpen,
      title: "Language Arts",
      description: "Comprehensive reading, writing, and communication skills development.",
      levels: "Nursery-Grade 6",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "From basic numeracy to problem-solving and logical thinking.",
      levels: "Nursery-Grade 6",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Microscope,
      title: "Sciences",
      description: "Hands-on exploration of nature, biology, and physical science.",
      levels: "Grade 1-6",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "Learning about our community, cultures, and the world.",
      levels: "Nursery-Grade 6",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Palette,
      title: "Visual Arts",
      description: "Creative expression through painting, drawing, and crafts.",
      levels: "Nursery-Grade 6",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Music,
      title: "Performing Arts",
      description: "Music, drama, dance, and creative performance programs.",
      levels: "Nursery-Grade 6",
      gradient: "from-yellow-500 to-amber-500"
    },
  ]

  const faculty = [
    {
      name: "Ms. Sarah Johnson",
      position: "Head of Early Years",
      credentials: "M.Ed. Early Childhood, 15+ years experience",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Mr. Michael Chen",
      position: "Mathematics Coordinator",
      credentials: "B.Ed. Mathematics, Award-winning educator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Ms. Emily Rodriguez",
      position: "Language Arts Director",
      credentials: "M.A. Literacy Education, Published author",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Mr. David Kim",
      position: "Arts & Music Coordinator",
      credentials: "B.F.A. Visual Arts, Professional musician",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ]

  const achievements = [
    "National Excellence in Early Education Award",
    "Top 50 Primary Programs in the Region",
    "98% Student Satisfaction Rate",
    "Outstanding Creative Arts Recognition",
    "Award-winning STEM Discovery Program",
    "Distinguished Community Engagement Award",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white border-0 shadow-lg">
              Academic Excellence
            </Badge>
            <h1 className="text-4xl font-bold mb-4 md:text-5xl bg-gradient-to-r from-orange-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
              Comprehensive Learning Programs
            </h1>
            <p className="text-lg text-muted-foreground">
              Our vibrant curriculum prepares young learners for success, fostering critical thinking, creativity, and a lifelong love of learning.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Our Academic Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.title} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <program.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{program.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">{program.levels}</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>{program.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Curriculum Highlights</h2>
          <Tabs defaultValue="nursery" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="nursery">Nursery</TabsTrigger>
              <TabsTrigger value="lower">Lower Primary</TabsTrigger>
              <TabsTrigger value="upper">Upper Primary</TabsTrigger>
            </TabsList>
            <TabsContent value="nursery" className="space-y-4">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Nursery Program (Ages 3-5)</CardTitle>
                  <CardDescription>Building foundations through play and exploration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Core Activities</h4>
                    <p className="text-muted-foreground">Early literacy, number concepts, sensory play, creative arts, music & movement</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Special Programs</h4>
                    <p className="text-muted-foreground">Outdoor learning, storytelling, art studio, nature walks, social skills development</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Focus Areas</h4>
                    <p className="text-muted-foreground">Emotional development, language acquisition, motor skills, curiosity & wonder</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="lower" className="space-y-4">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Lower Primary (Grades 1-3)</CardTitle>
                  <CardDescription>Developing foundational skills with engaging activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Core Subjects</h4>
                    <p className="text-muted-foreground">Reading & Writing, Basic Mathematics, Science Exploration, Social Studies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Special Activities</h4>
                    <p className="text-muted-foreground">Arts & Crafts, Physical Education, Music & Drama, Library Time, Technology Basics</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Focus Areas</h4>
                    <p className="text-muted-foreground">Reading fluency, problem-solving, collaboration, creativity & imagination</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="upper" className="space-y-4">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Upper Primary (Grades 4-6)</CardTitle>
                  <CardDescription>Building independence and advanced skills</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Core Subjects</h4>
                    <p className="text-muted-foreground">Advanced Language Arts, Mathematics & Logic, Integrated Science, World Studies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Enrichment</h4>
                    <p className="text-muted-foreground">STEM Projects, Creative Writing, Drama & Performance, Sports & Athletics, Digital Literacy</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Focus Areas</h4>
                    <p className="text-muted-foreground">Critical thinking, leadership, research skills, community engagement, future readiness</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Faculty */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Meet Our Dedicated Faculty</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our passionate educators are dedicated to nurturing each child's unique talents and potential.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => {
            const gradients = [
              "from-orange-500 to-amber-500",
              "from-green-500 to-emerald-500",
              "from-blue-500 to-cyan-500",
              "from-pink-500 to-rose-500"
            ];
            return (
              <Card key={member.name} className="text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden ring-4 ring-orange-500/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge className={`mx-auto bg-gradient-to-r ${gradients[index]} text-white border-0`}>{member.position}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.credentials}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold mb-8 drop-shadow-lg">Academic Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center gap-3 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
                  <span className="text-left">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Explore Our Learning Programs</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Schedule a campus visit to learn more about our vibrant programs and meet our dedicated faculty.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 shadow-lg">
          <Link href="/admissions">Schedule a Visit</Link>
        </Button>
      </section>
    </div>
  )
}