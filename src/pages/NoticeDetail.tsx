import { useParams, Link } from "react-router-dom";
import PageBanner from "@/components/layout/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notices } from "@/data/sampleData";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const NoticeDetail = () => {
  const { id } = useParams();
  const notice = notices.find((n) => n.id === id);

  if (!notice) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Notice Not Found</h2>
        <Link to="/notices"><Button><ArrowLeft className="mr-2 h-4 w-4" /> All Notices</Button></Link>
      </div>
    );
  }

  const otherNotices = notices.filter((n) => n.id !== id).slice(0, 3);

  return (
    <>
      <PageBanner title="Notice Details" subtitle={notice.title} />
      <section className="container mx-auto px-4 py-12">
        <Link to="/notices" className="inline-flex items-center text-primary hover:underline text-sm mb-6 block">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Notices
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge><Tag className="h-3 w-3 mr-1" />{notice.category}</Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{notice.date}</span>
                </div>
                <CardTitle className="text-2xl">{notice.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>{notice.content}</p>
                <p>All concerned students and faculty members are requested to take note of the above and act accordingly. For further queries, please contact the relevant department office during working hours.</p>
                <p>This notice is effective from the date of publication. Any updates or amendments will be communicated through the official notice board and the institution's website.</p>
                <div className="border-t pt-4 mt-6">
                  <p className="text-sm font-medium">— Office of the Registrar</p>
                  <p className="text-xs text-muted-foreground">Preston Academy</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Other Notices</h3>
            {otherNotices.map((n) => (
              <Link to={`/notices/${n.id}`} key={n.id}>
                <Card className="hover:bg-muted/50 transition-colors mb-3">
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">{n.category}</Badge>
                    <p className="font-medium text-sm">{n.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{n.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NoticeDetail;
