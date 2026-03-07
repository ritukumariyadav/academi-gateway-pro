import PageBanner from "@/components/layout/PageBanner";
import { Eye, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisionMission = () => (
  <div>
    <PageBanner title="Vision & Mission" breadcrumbs={[{ label: "About", path: "/about" }, { label: "Vision & Mission" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-5xl">
        {[
          { icon: Eye, title: "Our Vision", text: "To be a globally recognized institution of higher learning that transforms lives through education, research, and innovation." },
          { icon: Target, title: "Our Mission", text: "To provide accessible, affordable, quality education that empowers students to become ethical leaders, critical thinkers, and responsible citizens." },
          { icon: Heart, title: "Core Values", text: "Integrity, Excellence, Innovation, Inclusivity, Collaboration, and Social Responsibility guide everything we do." },
        ].map((item, i) => (
          <Card key={i} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default VisionMission;
