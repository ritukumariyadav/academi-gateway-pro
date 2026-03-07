import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/data/sampleData";
import heroCampus from "@/assets/hero-campus.jpg";

const About = () => (
  <div>
    <PageBanner title="About Us" breadcrumbs={[{ label: "About Us" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl font-bold mb-4">A Legacy of Excellence Since 1976</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Preston Academy was founded with a vision to create a world-class educational institution that nurtures intellectual curiosity, critical thinking, and ethical leadership. Over five decades, we have grown from a small college into a premier multi-disciplinary institution.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our campus spans 85 acres of beautifully landscaped grounds, housing state-of-the-art laboratories, a central library with over 200,000 volumes, modern sports facilities, and comfortable residential halls.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are accredited by the National Board of Education with an 'A+' grade and consistently ranked among the top 50 institutions in the country.
          </p>
        </div>
        <img src={heroCampus} alt="Campus" className="rounded-xl shadow-lg" />
      </div>
    </section>
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-display font-bold text-gold">{s.value}</div>
            <div className="text-xs text-primary-foreground/60 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
