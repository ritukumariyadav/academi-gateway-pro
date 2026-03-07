import { Card, CardContent } from "@/components/ui/card";

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="space-y-4">
    <h1 className="font-display text-2xl font-bold">{title}</h1>
    <Card><CardContent className="p-12 text-center text-muted-foreground">
      <p className="text-lg">This section is under development.</p>
      <p className="text-sm mt-2">Full functionality will be available when connected to Lovable Cloud.</p>
    </CardContent></Card>
  </div>
);

export default PlaceholderPage;
