import PageBanner from "@/components/layout/PageBanner";
import { User } from "lucide-react";

const PrincipalMessage = () => (
  <div>
    <PageBanner title="Principal's Message" breadcrumbs={[{ label: "About", path: "/about" }, { label: "Principal's Message" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="h-48 w-48 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mx-auto md:mx-0">
            <User className="h-20 w-20 text-primary/40" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Dr. Eleanor Mitchell</h2>
            <p className="text-accent font-medium mb-4">Principal & Director</p>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>Dear Students, Parents, and Well-Wishers,</p>
              <p>It is my privilege to lead Preston Academy — an institution that has stood as a beacon of knowledge, integrity, and academic excellence for over five decades.</p>
              <p>We believe that education is not merely about academics; it is about building character, fostering creativity, and preparing young minds to navigate an ever-changing world with confidence and compassion.</p>
              <p>Our dedicated faculty, world-class infrastructure, and student-centric approach ensure that every learner receives the guidance and support they need to reach their full potential.</p>
              <p>I invite you to explore our campus, engage with our community, and discover the Preston difference.</p>
              <p className="font-medium text-foreground">Warm regards,<br />Dr. Eleanor Mitchell</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PrincipalMessage;
