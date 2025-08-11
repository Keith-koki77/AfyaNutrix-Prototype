import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Building } from "lucide-react";
import RegionalSettings from "./forms/RegionalSettings";
import PracticeForm from "./forms/PracticeForm";

export default function PracticeSettings() {
 return (
  <>
   <Card>
    <CardHeader>
     <CardTitle className="flex items-center">
      <Building className="w-5 h-5 mr-2 text-[#1B5E20]" />
      Practice Information
     </CardTitle>
     <CardDescription>
      Manage your practice details and professional credentials
     </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
     <PracticeForm />
    </CardContent>
   </Card>

   <Card>
    <CardHeader>
     <CardTitle>Regional Settings</CardTitle>
     <CardDescription>
      Configure regional preferences for your practice
     </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
     <RegionalSettings />
    </CardContent>
   </Card>
  </>
 );
}
