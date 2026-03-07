import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Award, Calendar, Bell, GraduationCap } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import { stats, notices, events, testimonials, courses } from "@/data/sampleData";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCampus} alt="Preston Academy Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
            Admissions Open for 2026–27
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Where Knowledge Meets <span className="text-gold">Excellence</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Preston Academy has been shaping future leaders for over 50 years. Join a community of scholars, innovators, and changemakers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/apply-online"><Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link to="/courses"><Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">Explore Programs</Button></Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-gold">{s.value}</div>
              <div className="text-xs text-primary-foreground/60 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Links */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground">Discover Preston Academy</h2>
          <p className="text-muted-foreground mt-2">Everything you need to start your academic journey</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "Academic Programs", desc: "45+ courses across 5 departments", path: "/courses" },
            { icon: Users, title: "Our Faculty", desc: "120+ experienced educators and researchers", path: "/faculty" },
            { icon: GraduationCap, title: "Admissions", desc: "Apply online for the upcoming session", path: "/admission" },
            { icon: Award, title: "Scholarships", desc: "Merit and need-based financial aid", path: "/admission" },
            { icon: Calendar, title: "Campus Events", desc: "Festivals, symposiums, and career fairs", path: "/events" },
            { icon: Bell, title: "Notice Board", desc: "Stay updated with latest announcements", path: "/notices" },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
              <Link to={item.path}>
                <Card className="group hover:shadow-lg hover:border-accent/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Courses */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl font-bold">Popular Programs</h2>
            <p className="text-muted-foreground mt-1">Find the right program for your career goals</p>
          </div>
          <Link to="/courses" className="text-accent hover:underline text-sm font-medium hidden md:block">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((c) => (
            <Card key={c.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-2 bg-accent" />
              <CardContent className="p-6">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">{c.department}</span>
                <h3 className="font-display text-xl font-semibold mt-3">{c.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{c.description}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t text-sm text-muted-foreground">
                  <span>⏱ {c.duration}</span>
                  <span>🎓 {c.seats} seats</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Notices & Events */}
    <section className="py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10">
        {/* Notices */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold">Latest Notices</h2>
            <Link to="/notices" className="text-accent text-sm hover:underline">View All →</Link>
          </div>
          <div className="space-y-3">
            {notices.slice(0, 4).map((n) => (
              <Link key={n.id} to={`/notices/${n.id}`}>
                <Card className="hover:border-accent/40 transition-colors">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="h-10 w-10 rounded bg-accent/10 flex items-center justify-center shrink-0">
                      <Bell className="h-4 w-4 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium truncate">{n.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{n.date} • {n.category}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        {/* Events */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold">Upcoming Events</h2>
            <Link to="/events" className="text-accent text-sm hover:underline">View All →</Link>
          </div>
          <div className="space-y-3">
            {events.slice(0, 4).map((e) => (
              <Link key={e.id} to={`/events/${e.id}`}>
                <Card className="hover:border-accent/40 transition-colors">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="h-10 w-14 rounded bg-primary flex flex-col items-center justify-center shrink-0 text-primary-foreground">
                      <span className="text-xs">{new Date(e.date).toLocaleString('default', { month: 'short' })}</span>
                      <span className="text-lg font-bold leading-none">{new Date(e.date).getDate()}</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium truncate">{e.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">📍 {e.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-hero">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-primary-foreground text-center mb-12">What Our Community Says</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
                <CardContent className="p-6">
                  <p className="text-sm text-primary-foreground/80 italic leading-relaxed">"{t.quote}"</p>
                  <div className="mt-4 pt-4 border-t border-primary-foreground/10">
                    <p className="text-sm font-semibold text-gold">{t.name}</p>
                    <p className="text-xs text-primary-foreground/60">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">Admissions for 2026–27 are now open. Take the first step towards a brighter future.</p>
        <div className="flex justify-center gap-4">
          <Link to="/apply-online"><Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">Apply Online</Button></Link>
          <Link to="/contact"><Button size="lg" variant="outline" className="px-8">Contact Us</Button></Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
