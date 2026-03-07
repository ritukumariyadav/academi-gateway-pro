import PageBanner from "@/components/layout/PageBanner";

const Gallery = () => (
  <div>
    <PageBanner title="Gallery" breadcrumbs={[{ label: "Gallery" }]} />
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-muted flex items-center justify-center text-muted-foreground text-sm hover:opacity-80 transition-opacity cursor-pointer">
              📷 Photo {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
