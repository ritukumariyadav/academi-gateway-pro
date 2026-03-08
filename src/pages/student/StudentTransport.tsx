import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bus, MapPin } from "lucide-react";

const transport = {
  route: "Route 1 — Downtown", bus: "BUS-001", driver: "Mr. James", driverPhone: "+1 (555) 987-6543",
  pickupPoint: "Central Park Stop", pickupTime: "7:45 AM", dropTime: "5:15 PM",
  fee: "$1,200/semester", feeStatus: "Paid",
  stops: ["Central Park", "Main Street", "City Mall", "Tech Park", "Green Avenue", "Station Road", "University Gate"],
};

const StudentTransport = () => (
  <div className="space-y-6">
    <h1 className="font-display text-2xl font-bold">Transport</h1>
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader><CardTitle>My Bus Details</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[["Route", transport.route], ["Bus No", transport.bus], ["Driver", transport.driver], ["Driver Phone", transport.driverPhone], ["Pickup Point", transport.pickupPoint], ["Pickup Time", transport.pickupTime], ["Drop Time", transport.dropTime], ["Fee", transport.fee]].map(([k, v]) => (
            <div key={k} className="flex justify-between"><span className="text-muted-foreground text-sm">{k}</span><span className="font-medium text-sm">{v}</span></div>
          ))}
          <div className="flex justify-between"><span className="text-muted-foreground text-sm">Status</span><Badge variant="secondary">{transport.feeStatus}</Badge></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Route Stops</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-2">
            {transport.stops.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${s === transport.pickupPoint ? "bg-accent" : "bg-muted-foreground/30"}`} />
                <span className={`text-sm ${s === transport.pickupPoint ? "font-bold" : ""}`}>{s} {s === transport.pickupPoint && <Badge variant="outline" className="ml-2 text-xs">Your Stop</Badge>}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default StudentTransport;
