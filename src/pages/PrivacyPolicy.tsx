import PageBanner from "@/components/layout/PageBanner";

const PrivacyPolicy = () => (
  <div>
    <PageBanner title="Privacy Policy" subtitle="How we collect, use, and protect your information" />
    <section className="container mx-auto px-4 py-12 max-w-4xl prose prose-slate">
      <h2 className="font-display text-xl font-bold">1. Information We Collect</h2>
      <p className="text-muted-foreground">We collect personal information such as name, email, phone number, and academic records when you register, apply for admission, or use our services. We also collect usage data through cookies and analytics.</p>

      <h2 className="font-display text-xl font-bold mt-8">2. How We Use Your Information</h2>
      <p className="text-muted-foreground">Your information is used to process admissions, manage academic records, communicate important updates, provide student services, and improve our website experience.</p>

      <h2 className="font-display text-xl font-bold mt-8">3. Data Protection</h2>
      <p className="text-muted-foreground">We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information from unauthorized access.</p>

      <h2 className="font-display text-xl font-bold mt-8">4. Information Sharing</h2>
      <p className="text-muted-foreground">We do not sell your personal information. We may share data with authorized personnel, regulatory bodies, and service providers necessary for institutional operations.</p>

      <h2 className="font-display text-xl font-bold mt-8">5. Cookies</h2>
      <p className="text-muted-foreground">Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings.</p>

      <h2 className="font-display text-xl font-bold mt-8">6. Your Rights</h2>
      <p className="text-muted-foreground">You have the right to access, correct, or request deletion of your personal data. Contact our Data Protection Officer at privacy@prestonacademy.edu.</p>

      <h2 className="font-display text-xl font-bold mt-8">7. Contact</h2>
      <p className="text-muted-foreground">For privacy-related inquiries, contact us at privacy@prestonacademy.edu or +1 (555) 123-4567.</p>

      <p className="text-sm text-muted-foreground mt-8">Last updated: March 1, 2026</p>
    </section>
  </div>
);

export default PrivacyPolicy;
