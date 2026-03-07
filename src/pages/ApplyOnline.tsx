import PageBanner from "@/components/layout/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

const ApplyOnline = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! You'll receive a confirmation email shortly.");
  };

  return (
    <div>
      <PageBanner title="Apply Online" breadcrumbs={[{ label: "Admission", path: "/admission" }, { label: "Apply Online" }]} />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardContent className="p-8">
              <h2 className="font-display text-2xl font-bold mb-6">Admission Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" required />
                  <Input placeholder="Last Name" required />
                </div>
                <Input type="email" placeholder="Email Address" required />
                <Input type="tel" placeholder="Phone Number" required />
                <Input type="date" placeholder="Date of Birth" required />
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select Program" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="bba">Business Administration</SelectItem>
                    <SelectItem value="me">Mechanical Engineering</SelectItem>
                    <SelectItem value="eng">English Literature</SelectItem>
                    <SelectItem value="phy">Physics</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Previous School/College" required />
                <Input placeholder="Percentage/GPA in Last Exam" required />
                <Textarea placeholder="Additional Information / Why do you want to join Preston Academy?" rows={4} />
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Submit Application</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ApplyOnline;
