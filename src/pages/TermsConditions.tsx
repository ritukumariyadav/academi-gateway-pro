import PageBanner from "@/components/layout/PageBanner";

const TermsConditions = () => (
  <div>
    <PageBanner title="Terms & Conditions" subtitle="Terms of use for the Preston Academy website and services" />
    <section className="container mx-auto px-4 py-12 max-w-4xl prose prose-slate">
      <h2 className="font-display text-xl font-bold">1. Acceptance of Terms</h2>
      <p className="text-muted-foreground">By accessing and using the Preston Academy website and services, you agree to be bound by these terms and conditions.</p>

      <h2 className="font-display text-xl font-bold mt-8">2. User Accounts</h2>
      <p className="text-muted-foreground">Users are responsible for maintaining the confidentiality of their login credentials. Any activity under your account is your responsibility.</p>

      <h2 className="font-display text-xl font-bold mt-8">3. Academic Policies</h2>
      <p className="text-muted-foreground">All students and faculty must adhere to the academic policies, code of conduct, and examination regulations as published by the institution.</p>

      <h2 className="font-display text-xl font-bold mt-8">4. Intellectual Property</h2>
      <p className="text-muted-foreground">All content on this website, including text, images, and course materials, is the property of Preston Academy and protected by copyright laws.</p>

      <h2 className="font-display text-xl font-bold mt-8">5. Fee Policy</h2>
      <p className="text-muted-foreground">Fees once paid are non-refundable unless specified in the refund policy. Late payment may attract additional charges as per the fee schedule.</p>

      <h2 className="font-display text-xl font-bold mt-8">6. Limitation of Liability</h2>
      <p className="text-muted-foreground">Preston Academy shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or services.</p>

      <h2 className="font-display text-xl font-bold mt-8">7. Changes to Terms</h2>
      <p className="text-muted-foreground">We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.</p>

      <p className="text-sm text-muted-foreground mt-8">Last updated: March 1, 2026</p>
    </section>
  </div>
);

export default TermsConditions;
