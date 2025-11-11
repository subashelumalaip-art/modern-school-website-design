"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, FileText, Users, Calendar, DollarSign, Video } from "lucide-react"
import Link from "next/link"

export default function AdmissionsPage() {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete our online application form with student information and history.",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: Users,
      title: "Campus Visit",
      description: "Schedule a tour to meet our faculty and explore our vibrant facilities.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Document Review",
      description: "Submit required documents including records and recommendations.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: CheckCircle2,
      title: "Admission Decision",
      description: "Receive your admission decision within 2-3 weeks of completion.",
      gradient: "from-pink-500 to-rose-500"
    },
  ]

  const requirements = [
    "Completed application form",
    "Birth certificate or proof of age",
    "Previous school records (if applicable)",
    "Immunization records",
    "Two letters of recommendation",
    "Parent/Guardian contact information",
    "Emergency contact details",
    "Recent photo of the child",
  ]

  const tuition = [
    { level: "Nursery (Ages 3-4)", amount: "$8,500/year", features: ["Full-day program", "Meals included", "Creative play", "Early learning"], gradient: "from-orange-500 to-amber-500" },
    { level: "Kindergarten (Ages 5-6)", amount: "$10,500/year", features: ["Core curriculum", "Arts & Music", "Physical Education", "Lunch program"], gradient: "from-green-500 to-emerald-500" },
    { level: "Primary (Grades 1-6)", amount: "$12,500/year", features: ["Full academic program", "Elective courses", "After-school clubs", "Field trips"], gradient: "from-blue-500 to-cyan-500" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white border-0 shadow-lg animate-bounce">
              Now Accepting Applications
            </Badge>
            <h1 className="text-4xl font-bold mb-4 md:text-5xl bg-gradient-to-r from-orange-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
              Join Bright Nursery and Primary School
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Begin your child's journey towards excellence. We welcome young learners who are curious, creative, and ready to shine bright.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 shadow-lg">
              Start Application
            </Button>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Enrollment Process</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our straightforward admission process is designed to help you every step of the way.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <CardHeader>
                <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r ${step.gradient} text-white flex items-center justify-center font-bold shadow-lg`}>
                  {index + 1}
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Admission Requirements</h2>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Please prepare the following documents for your application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {requirements.map((req, index) => {
                    const colors = [
                      "text-orange-600",
                      "text-green-600",
                      "text-blue-600",
                      "text-pink-600",
                      "text-purple-600",
                      "text-yellow-600",
                      "text-cyan-600",
                      "text-rose-600"
                    ];
                    return (
                      <div key={req} className="flex items-start gap-3">
                        <CheckCircle2 className={`h-5 w-5 ${colors[index]} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm">{req}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">Virtual Tour Available</Badge>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Explore Our Vibrant Campus</h2>
            <p className="text-muted-foreground mb-6">
              Take a virtual tour of our colorful, engaging facilities, including our learning centers, art studios, play areas, and more. See where your child will learn, grow, and thrive.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <span>Bright, modern classrooms with interactive learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <span>Creative arts studio and discovery labs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <span>Safe outdoor play spaces and learning gardens</span>
              </div>
            </div>
            <Button variant="outline" className="border-2 hover:border-primary">
              <Video className="mr-2 h-4 w-4" />
              Start Virtual Tour
            </Button>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
              alt="School campus"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Tuition */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Tuition & Fees</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transparent pricing with flexible payment plans and scholarship opportunities available.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tuition.map((plan) => (
              <Card key={plan.level} className="relative hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{plan.level}</CardTitle>
                  <div className="text-3xl font-bold mt-2 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">{plan.amount}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => {
                      const colors = [
                        "text-orange-600",
                        "text-green-600",
                        "text-blue-600",
                        "text-pink-600"
                      ];
                      return (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`h-4 w-4 ${colors[index]} flex-shrink-0 mt-0.5`} />
                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Financial aid and payment plans available. Contact our admissions office for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Ready to Apply?</h2>
          <p className="text-center text-muted-foreground mb-8">
            Fill out the form below to get started, and our admissions team will contact you within 24 hours.
          </p>
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle>Quick Inquiry Form</CardTitle>
              <CardDescription>Tell us about your child and we'll guide you through the next steps</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name</Label>
                  <Input id="parentName" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childName">Child's Name</Label>
                  <Input id="childName" placeholder="Jane Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">Grade Level / Age Group</Label>
                <Input id="grade" placeholder="e.g., Nursery (Age 4)" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" placeholder="Tell us about your interest in Bright Nursery and Primary School..." />
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 shadow-lg">
                Submit Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" />
        <div className="container relative mx-auto px-4 py-16 text-center text-white">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Calendar className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">Schedule a Campus Visit</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-orange-50 drop-shadow">
            Experience our vibrant community firsthand. Meet our teachers, tour our facilities, and see why Bright Nursery is the right choice for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-xl hover:scale-105 transition-all">
              Book a Tour
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 border-2">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}