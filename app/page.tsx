import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Heart, Shield, Star, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80 py-20 md:py-28 lg:py-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute top-40 left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61802.jpg')] opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="container relative px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-6 text-white">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                Trusted by 10,000+ patients
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-7xl/none">
                Your Health, <span className="text-blue-100">Connected</span>
              </h1>
              <p className="max-w-[600px] text-white/80 md:text-xl lg:text-2xl">
                Manage your healthcare needs, connect with professionals, and access emergency services all in one
                place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 10}.jpg`}
                        alt={`User ${i}`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-white/80">
                  <span className="font-medium text-white">4.9/5</span> from over 2,000 reviews
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-2xl"></div>
              <div className="relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-vector/medical-healthcare-dashboard-concept_23-2148528914.jpg"
                  alt="HealthConnect App showing patient dashboard with vitals and upcoming appointments"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blue-500/30 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-gray-500 dark:text-gray-400">
              Trusted by leading healthcare providers
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              {
                name: "Mayo Clinic",
                logo: "https://cdn.freebiesupply.com/logos/large/2x/mayo-clinic-logo-png-transparent.png",
              },
              {
                name: "Cleveland Clinic",
                logo: "https://logos-world.net/wp-content/uploads/2022/01/Cleveland-Clinic-Logo.png",
              },
              {
                name: "Johns Hopkins",
                logo: "https://logos-world.net/wp-content/uploads/2021/09/Johns-Hopkins-Logo.png",
              },
              {
                name: "Kaiser Permanente",
                logo: "https://logos-world.net/wp-content/uploads/2021/02/Kaiser-Permanente-Logo.png",
              },
              {
                name: "Blue Cross",
                logo: "https://logos-world.net/wp-content/uploads/2021/02/Blue-Cross-Blue-Shield-Logo.png",
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 md:h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              <Star className="mr-1 h-3.5 w-3.5" />
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
              Everything you need for better health
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our platform offers comprehensive tools to manage your healthcare journey with ease and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Health Tracking",
                description:
                  "Monitor vital signs and health metrics in real-time with personalized insights and trends.",
                icon: Heart,
                color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
                image: "https://img.freepik.com/free-vector/health-tracking-app-interface-concept_52683-44500.jpg",
              },
              {
                title: "Appointment Management",
                description:
                  "Schedule and manage medical appointments with ease, receive reminders, and access virtual visits.",
                icon: Clock,
                color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
                image: "https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg",
              },
              {
                title: "Virtual Consultations",
                description:
                  "Connect with healthcare providers from the comfort of your home through secure video calls.",
                icon: Users,
                color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
                image: "https://img.freepik.com/free-photo/online-doctor-consultation-concept_23-2148522197.jpg",
              },
              {
                title: "Medical Records",
                description: "Access and manage your complete medical history securely in one centralized location.",
                icon: Shield,
                color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
                image: "https://img.freepik.com/free-vector/medical-record-concept-illustration_114360-7072.jpg",
              },
              {
                title: "Emergency Services",
                description:
                  "Quick access to ambulance, oxygen resources, and nearby emergency facilities when needed most.",
                icon: CheckCircle,
                color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
                image:
                  "https://img.freepik.com/free-photo/ambulance-paramedic-emergency-medical-service_53876-138044.jpg",
              },
              {
                title: "Hospital Reports",
                description:
                  "Report and track issues with healthcare facilities to improve quality of care for everyone.",
                icon: CheckCircle,
                color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
                image: "https://img.freepik.com/free-vector/hospital-service-concept-illustration_114360-7497.jpg",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`rounded-full ${feature.color} p-2.5 inline-flex`}>
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                  <div className="mt-4">
                    <Link
                      href="/dashboard"
                      className="text-primary font-medium inline-flex items-center hover:underline"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              <Clock className="mr-1 h-3.5 w-3.5" />
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
              How HealthConnect Works
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Get started in minutes and take control of your healthcare journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    step: "01",
                    title: "Create Your Account",
                    description:
                      "Sign up in seconds with your email or social accounts and set up your health profile.",
                  },
                  {
                    step: "02",
                    title: "Connect Your Providers",
                    description: "Link your healthcare providers and import your existing medical records securely.",
                  },
                  {
                    step: "03",
                    title: "Access All Services",
                    description:
                      "Start booking appointments, tracking health metrics, and accessing emergency services.",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-lg font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-2xl transform translate-x-4 translate-y-4"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10">
                <Image
                  src="https://imgs.search.brave.com/ErXts8c-m1LLd6IC2UiCXmgCtsZTMf2v4ZwPsgORWhA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvOC9IZWFs/dGgtUE5HLUltYWdl/LUhELnBuZw"
                  alt="HealthConnect App Interface showing patient onboarding process"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/*

      {/* Call To Action Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611232.jpg"
            alt="Healthcare Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        </div>
        <div className="container relative px-4 md:px-6 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Ready to transform your healthcare experience?
          </h2>
          <p className="mx-auto max-w-[700px] text-xl mb-12">
            Join HealthConnect today and discover a new way to manage your health, connect with professionals, and
            access emergency services.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              <Heart className="mr-1 h-3.5 w-3.5" />
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
              What our patients are saying
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Real stories from real people who have transformed their healthcare experience with HealthConnect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                quote:
                  "HealthConnect has made managing my appointments and medical records so much easier. I can now access everything I need in one place.",
                name: "Sarah Johnson",
                title: "Patient",
                avatar: "https://randomuser.me/api/portraits/women/32.jpg",
              },
              {
                quote:
                  "I love the virtual consultation feature! It's so convenient to speak with my doctor from the comfort of my own home.",
                name: "Michael Chen",
                title: "Patient",
                avatar: "https://randomuser.me/api/portraits/men/45.jpg",
              },
              {
                quote:
                  "The emergency services feature gave me peace of mind knowing that help is just a tap away in case of an emergency.",
                name: "Robert Williams",
                title: "Patient",
                avatar: "https://randomuser.me/api/portraits/men/22.jpg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-2xl border bg-background shadow-sm p-6 flex flex-col items-start">
                <div className="relative mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                </div>
                <blockquote className="text-gray-500 dark:text-gray-400 mb-4">{testimonial.quote}</blockquote>
                <div className="text-lg font-medium text-gray-900 dark:text-gray-100">{testimonial.name}</div>
                <div className="text-gray-500 dark:text-gray-400">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-900/50 border-t">
        <div className="container px-4 md:px-6 text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} HealthConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

