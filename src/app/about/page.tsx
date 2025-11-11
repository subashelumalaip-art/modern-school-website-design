"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Heart, Award, Users, Quote } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from academics to character development.",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We foster a caring community where every student feels valued, respected, and supported.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace new ideas and technologies to provide cutting-edge educational experiences.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "We build strong partnerships between students, families, faculty, and the broader community.",
      gradient: "from-blue-500 to-cyan-500"
    },
  ]

  const milestones = [
    { year: "1985", event: "Bright Nursery and Primary School founded with 150 students", color: "from-orange-500 to-amber-500" },
    { year: "1995", event: "Expanded to include full primary program", color: "from-green-500 to-emerald-500" },
    { year: "2005", event: "Received National Excellence in Early Education Award", color: "from-blue-500 to-cyan-500" },
    { year: "2010", event: "Opened vibrant new learning center", color: "from-pink-500 to-rose-500" },
    { year: "2015", event: "Celebrated 30 years of nurturing young minds", color: "from-purple-500 to-violet-500" },
    { year: "2020", event: "Launched innovative interactive learning program", color: "from-yellow-500 to-amber-500" },
    { year: "2024", event: "Serving 2,500+ students with 98% satisfaction rate", color: "from-orange-500 to-red-500" },
  ]

  const facilities = [
    {
      name: "Science & Discovery Center",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      description: "Interactive laboratories equipped with hands-on learning materials and experiments.",
    },
    {
      name: "Arts & Creative Studio",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop",
      description: "Colorful studio spaces for art, music, drama, and creative expression.",
    },
    {
      name: "Play & Sports Area",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      description: "Safe, vibrant outdoor and indoor play areas with modern equipment.",
    },
    {
      name: "Innovation Lab",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      description: "Engaging workspace for robotics, coding, and hands-on STEM projects.",
    },
    {
      name: "Library & Reading Corner",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop",
      description: "Colorful collection with cozy reading nooks and digital resources.",
    },
    {
      name: "Outdoor Learning Garden",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop",
      description: "Gardens and outdoor classrooms for nature-based experiential learning.",
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Parent of 2nd Grader",
      quote: "Bright Nursery has exceeded our expectations. The teachers genuinely care about each child's success, and the sense of community is remarkable. My daughter loves coming to school every day!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    },
    {
      name: "David Thompson",
      role: "Alumni Parent",
      quote: "Both our children attended Bright Nursery and they received an excellent foundation. The creative, hands-on approach to learning prepared them perfectly for their future education.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Sarah Chen",
      role: "Parent of Nursery Student",
      quote: "The vibrant, nurturing environment is wonderful. Our son has blossomed here, developing confidence, curiosity, and a true love for learning.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white border-0 shadow-lg">
              Our Story
            </Badge>
            <h1 className="text-4xl font-bold mb-4 md:text-5xl bg-gradient-to-r from-orange-600 via-amber-500 to-green-600 bg-clip-text text-transparent">
              About Bright Nursery and Primary School
            </h1>
            <p className="text-lg text-muted-foreground">
              For nearly four decades, we've been dedicated to nurturing curious young minds, building strong character, and preparing children for a bright future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-2 shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To provide an exceptional, vibrant educational experience that empowers young learners to achieve excellence, develop strong character, and become curious, creative citizens who make positive contributions to their community.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-2 shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a leading early childhood and primary institution where creativity meets learning, where every child discovers their unique talents, and where the next generation is inspired to shine bright.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Our Core Values</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            These principles guide everything we do and shape our approach to education.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className={`mx-auto w-14 h-14 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Our Journey</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 transition-transform`}>
                  {milestone.year}
                </div>
              </div>
              <Card className="flex-1 hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                <CardContent className="pt-6">
                  <p className="font-medium">{milestone.event}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Facilities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Vibrant, colorful facilities designed to inspire learning and foster creativity.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <Card key={facility.name} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                <div className="h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{facility.name}</CardTitle>
                  <CardDescription>{facility.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">What Our Community Says</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hear from parents and families about their Bright Nursery experience.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative hover:shadow-xl transition-all hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 shadow-lg">
                  <Quote className="h-5 w-5 text-white" />
                </div>
                <CardDescription className="text-base leading-relaxed italic">
                  "{testimonial.quote}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-500">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" />
        <div className="container relative mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="hover:scale-110 transition-transform">
              <div className="text-4xl font-bold mb-2 drop-shadow-lg">39</div>
              <div className="text-orange-100">Years of Excellence</div>
            </div>
            <div className="hover:scale-110 transition-transform">
              <div className="text-4xl font-bold mb-2 drop-shadow-lg">2,500+</div>
              <div className="text-orange-100">Students Enrolled</div>
            </div>
            <div className="hover:scale-110 transition-transform">
              <div className="text-4xl font-bold mb-2 drop-shadow-lg">98%</div>
              <div className="text-orange-100">Satisfaction Rate</div>
            </div>
            <div className="hover:scale-110 transition-transform">
              <div className="text-4xl font-bold mb-2 drop-shadow-lg">150+</div>
              <div className="text-orange-100">Faculty & Staff</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}