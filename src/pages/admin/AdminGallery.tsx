import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Image } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Campus Aerial View", category: "Campus" },
  { id: 2, title: "Annual Day 2025", category: "Events" },
  { id: 3, title: "Science Lab", category: "Facilities" },
  { id: 4, title: "Sports Day 2025", category: "Sports" },
  { id: 5, title: "Library Interior", category: "Facilities" },
  { id: 6, title: "Convocation 2025", category: "Events" },
  { id: 7, title: "Computer Lab", category: "Facilities" },
  { id: 8, title: "Cultural Fest", category: "Events" },
];

const AdminGallery = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Manage Gallery</h1>
      <Button><Plus className="h-4 w-4 mr-1" /> Upload Images</Button>
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {galleryItems.map((item) => (
        <Card key={item.id} className="group relative overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-square bg-muted flex items-center justify-center">
              <Image className="h-12 w-12 text-muted-foreground/30" />
            </div>
            <div className="p-3">
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.category}</p>
            </div>
            <Button
              size="icon"
              variant="destructive"
              className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default AdminGallery;
