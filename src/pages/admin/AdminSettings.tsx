import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";

const AdminSettings = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="font-display text-2xl font-bold">Site Settings</h1>
      <Button><Save className="h-4 w-4 mr-1" /> Save Changes</Button>
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader><CardTitle>Institution Details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Institution Name</Label>
            <Input defaultValue="Preston Academy" />
          </div>
          <div className="space-y-2">
            <Label>Tagline</Label>
            <Input defaultValue="Shaping Tomorrow's Leaders Since 1976" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue="info@prestonacademy.edu" />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input defaultValue="+1 (555) 123-4567" />
          </div>
          <div className="space-y-2">
            <Label>Address</Label>
            <Textarea defaultValue="123 University Avenue, Preston City, PC 10001" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Website Configuration</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div><Label>Admission Portal</Label><p className="text-xs text-muted-foreground">Enable online admission applications</p></div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div><Label>Maintenance Mode</Label><p className="text-xs text-muted-foreground">Show maintenance page to visitors</p></div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div><Label>Show Notice Bar</Label><p className="text-xs text-muted-foreground">Display scrolling notice bar on homepage</p></div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div><Label>Student Registration</Label><p className="text-xs text-muted-foreground">Allow new student registrations</p></div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Social Links</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2"><Label>Facebook</Label><Input defaultValue="https://facebook.com/prestonacademy" /></div>
          <div className="space-y-2"><Label>Twitter / X</Label><Input defaultValue="https://twitter.com/prestonacademy" /></div>
          <div className="space-y-2"><Label>Instagram</Label><Input defaultValue="https://instagram.com/prestonacademy" /></div>
          <div className="space-y-2"><Label>LinkedIn</Label><Input defaultValue="https://linkedin.com/school/prestonacademy" /></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Academic Session</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2"><Label>Current Session</Label><Input defaultValue="2025–2026" /></div>
          <div className="space-y-2"><Label>Current Semester</Label><Input defaultValue="Spring 2026 (Even)" /></div>
          <div className="space-y-2"><Label>Exam Period</Label><Input defaultValue="March 15 – April 5, 2026" /></div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default AdminSettings;
