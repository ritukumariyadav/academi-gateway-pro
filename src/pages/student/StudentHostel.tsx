import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home } from "lucide-react";

const hostelInfo = {
  room: "A-101", block: "Block A", type: "Double Sharing", roommate: "Amit Singh",
  warden: "Mr. Rajesh Kumar", wardenPhone: "+91 98765 43210",
  messMenu: [
    { day: "Monday", breakfast: "Poha, Tea", lunch: "Rice, Dal, Sabzi", dinner: "Roti, Paneer, Salad" },
    { day: "Tuesday", breakfast: "Idli, Sambar", lunch: "Rice, Rajma, Raita", dinner: "Roti, Mix Veg" },
    { day: "Wednesday", breakfast: "Paratha, Curd", lunch: "Rice, Chole, Salad", dinner: "Roti, Dal Fry" },
  ]
};

const StudentHostel = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Hostel</h1>
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader><CardTitle>My Room Details</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[["Room", hostelInfo.room], ["Block", hostelInfo.block], ["Type", hostelInfo.type], ["Roommate", hostelInfo.roommate], ["Warden", hostelInfo.warden], ["Warden Phone", hostelInfo.wardenPhone]].map(([k, v]) => (
            <div key={k} className="flex justify-between"><span className="text-muted-foreground text-sm">{k}</span><span className="font-medium text-sm">{v}</span></div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Mess Menu (Sample)</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {hostelInfo.messMenu.map(m => (
              <div key={m.day} className="p-3 rounded-lg bg-muted/50">
                <p className="font-medium text-sm mb-1">{m.day}</p>
                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <div><Badge variant="outline" className="text-xs">B</Badge> {m.breakfast}</div>
                  <div><Badge variant="outline" className="text-xs">L</Badge> {m.lunch}</div>
                  <div><Badge variant="outline" className="text-xs">D</Badge> {m.dinner}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default StudentHostel;
