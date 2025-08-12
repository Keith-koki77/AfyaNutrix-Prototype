import {
 Select,
 SelectTrigger,
 SelectContent,
 SelectItem,
 SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function RegionalSettings() {
 return (
  <form
   action="
    "
  >
   <div className="grid md:grid-cols-2 gap-4">
    <div>
     <Label htmlFor="dateFormat">Date Format</Label>
     <Select>
      <SelectTrigger>
       <SelectValue />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
       <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
       <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
      </SelectContent>
     </Select>
    </div>
    <div>
     <Label htmlFor="currency">Currency</Label>
     <Select>
      <SelectTrigger>
       <SelectValue />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="KES">KES (Kenyan Shilling)</SelectItem>
       <SelectItem value="USD">USD (US Dollar)</SelectItem>
       <SelectItem value="EUR">EUR (Euro)</SelectItem>
      </SelectContent>
     </Select>
    </div>
   </div>
  </form>
 );
}
