import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <PageBanner title="Contact Us" breadcrumbs={[{ label: "Contact" }]} />
      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: MapPin, label: "Address", value: "123 Academic Avenue, Knowledge City, ST 45678" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: Mail, label: "Email", value: "info@prestonacademy.edu" },
                { icon: Clock, label: "Office Hours", value: "Mon–Fri: 8:00 AM – 5:00 PM" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0"><item.icon className="h-5 w-5 text-accent" /></div>
                  <div><p className="text-sm font-medium">{item.label}</p><p className="text-sm text-muted-foreground">{item.value}</p></div>
                </div>
              ))}
            </div>
            <div className="h-64 rounded-xl bg-muted flex items-center justify-center text-muted-foreground text-sm">
              📍 Interactive Map Placeholder
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
