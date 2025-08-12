"use client";

import { useState } from "react";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
 User,
 Building,
 Bell,
 Shield,
 CreditCard,
 FileText,
 Globe,
 Smartphone,
 Mail,
 Eye,
 EyeOff,
 Save,
 Download,
 Trash2,
 AlertTriangle,
} from "lucide-react";
import ProfileSettings from "@/components/organisms/settings/ProfileSettings";
import PracticeSettings from "@/components/organisms/settings/PracticeSettings";

export default function SettingsPage() {
 const [activeTab, setActiveTab] = useState("profile");
 const [showPassword, setShowPassword] = useState(false);
 const [settings, setSettings] = useState({
  // Profile
  firstName: "Amina",
  lastName: "Wanjiku",
  email: "amina.wanjiku@email.com",
  phone: "+254 700 123 456",
  bio: "Registered Nutritionist with 8+ years experience in clinical nutrition and community health.",

  // Practice
  practiceName: "Amina Nutrition Clinic",
  practiceType: "Solo Practitioner",
  location: "Nairobi, Kenya",
  license: "RN-2024-001234",

  // Notifications
  emailNotifications: true,
  smsReminders: true,
  whatsappIntegration: false,
  appointmentReminders: true,
  clientUpdates: true,
  marketingEmails: false,

  // Security
  twoFactorAuth: false,
  sessionTimeout: "30",
  dataRetention: "7years",

  // Language & Region
  language: "english",
  timezone: "Africa/Nairobi",
  dateFormat: "dd/mm/yyyy",
  currency: "KES",
 });

 //eslint-disable-next-line @typescript-eslint/no-explicit-any
 const handleSettingChange = (key: string, value: any) => {
  setSettings((prev) => ({ ...prev, [key]: value }));
 };

 const handleSave = () => {
  // Handle saving settings
  console.log("Settings saved:", settings);
 };

 return (
  <div className="space-y-6">
   {/* Header */}
   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div>
     <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
     <p className="text-gray-600 mt-1">
      Manage your account and practice preferences
     </p>
    </div>
    <Button onClick={handleSave} className="bg-[#1B5E20] hover:bg-[#2E7D32]">
     <Save className="w-4 h-4 mr-2" />
     Save Changes
    </Button>
   </div>

   {/* Settings Tabs */}
   <Tabs value={activeTab} onValueChange={setActiveTab}>
    <TabsList className="grid w-full grid-cols-6">
     <TabsTrigger value="profile">Profile</TabsTrigger>
     <TabsTrigger value="practice">Practice</TabsTrigger>
     <TabsTrigger value="notifications">Notifications</TabsTrigger>
     <TabsTrigger value="security">Security</TabsTrigger>
     <TabsTrigger value="billing">Billing</TabsTrigger>
     <TabsTrigger value="compliance">Compliance</TabsTrigger>
    </TabsList>

    <TabsContent value="profile" className="space-y-6">
     <ProfileSettings />
    </TabsContent>

    <TabsContent value="practice" className="space-y-6">
     <PracticeSettings />
    </TabsContent>

    {/* Notifications Tab */}
    <TabsContent value="notifications" className="space-y-6">
     <Card>
      <CardHeader>
       <CardTitle className="flex items-center">
        <Bell className="w-5 h-5 mr-2 text-[#1B5E20]" />
        Notification Preferences
       </CardTitle>
       <CardDescription>
        Choose how you want to receive notifications
       </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
       <div className="space-y-4">
        <div className="flex items-center justify-between">
         <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-400" />
          <div>
           <p className="font-medium">Email Notifications</p>
           <p className="text-sm text-gray-500">
            Receive notifications via email
           </p>
          </div>
         </div>
         <Switch
          checked={settings.emailNotifications}
          onCheckedChange={(checked) =>
           handleSettingChange("emailNotifications", checked)
          }
         />
        </div>

        <div className="flex items-center justify-between">
         <div className="flex items-center space-x-3">
          <Smartphone className="w-5 h-5 text-gray-400" />
          <div>
           <p className="font-medium">SMS Reminders</p>
           <p className="text-sm text-gray-500">
            Send appointment reminders via SMS
           </p>
          </div>
         </div>
         <Switch
          checked={settings.smsReminders}
          onCheckedChange={(checked) =>
           handleSettingChange("smsReminders", checked)
          }
         />
        </div>

        <div className="flex items-center justify-between">
         <div className="flex items-center space-x-3">
          <Globe className="w-5 h-5 text-gray-400" />
          <div>
           <p className="font-medium">WhatsApp Integration</p>
           <p className="text-sm text-gray-500">
            Connect with clients via WhatsApp
           </p>
          </div>
         </div>
         <div className="flex items-center space-x-2">
          <Badge variant="secondary">Coming Soon</Badge>
          <Switch
           checked={settings.whatsappIntegration}
           onCheckedChange={(checked) =>
            handleSettingChange("whatsappIntegration", checked)
           }
           disabled
          />
         </div>
        </div>
       </div>

       <div className="border-t pt-4">
        <h4 className="font-medium mb-4">Notification Types</h4>
        <div className="space-y-3">
         <div className="flex items-center justify-between">
          <span className="text-sm">Appointment Reminders</span>
          <Switch
           checked={settings.appointmentReminders}
           onCheckedChange={(checked) =>
            handleSettingChange("appointmentReminders", checked)
           }
          />
         </div>
         <div className="flex items-center justify-between">
          <span className="text-sm">Client Progress Updates</span>
          <Switch
           checked={settings.clientUpdates}
           onCheckedChange={(checked) =>
            handleSettingChange("clientUpdates", checked)
           }
          />
         </div>
         <div className="flex items-center justify-between">
          <span className="text-sm">Marketing & Feature Updates</span>
          <Switch
           checked={settings.marketingEmails}
           onCheckedChange={(checked) =>
            handleSettingChange("marketingEmails", checked)
           }
          />
         </div>
        </div>
       </div>
      </CardContent>
     </Card>
    </TabsContent>

    {/* Security Tab */}
    <TabsContent value="security" className="space-y-6">
     <Card>
      <CardHeader>
       <CardTitle className="flex items-center">
        <Shield className="w-5 h-5 mr-2 text-[#1B5E20]" />
        Security Settings
       </CardTitle>
       <CardDescription>
        Manage your account security and privacy
       </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
       <div>
        <h4 className="font-medium mb-4">Password</h4>
        <div className="space-y-4">
         <div>
          <Label htmlFor="currentPassword">Current Password</Label>
          <div className="relative">
           <Input
            id="currentPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Enter current password"
           />
           <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setShowPassword(!showPassword)}
           >
            {showPassword ? (
             <EyeOff className="h-4 w-4" />
            ) : (
             <Eye className="h-4 w-4" />
            )}
           </Button>
          </div>
         </div>
         <div className="grid md:grid-cols-2 gap-4">
          <div>
           <Label htmlFor="newPassword">New Password</Label>
           <Input
            id="newPassword"
            type="password"
            placeholder="Enter new password"
           />
          </div>
          <div>
           <Label htmlFor="confirmPassword">Confirm Password</Label>
           <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
           />
          </div>
         </div>
         <Button variant="outline">Update Password</Button>
        </div>
       </div>

       <div className="border-t pt-6">
        <h4 className="font-medium mb-4">Two-Factor Authentication</h4>
        <div className="flex items-center justify-between p-4 border rounded-lg">
         <div>
          <p className="font-medium">Enable 2FA</p>
          <p className="text-sm text-gray-500">
           Add an extra layer of security to your account
          </p>
         </div>
         <Switch
          checked={settings.twoFactorAuth}
          onCheckedChange={(checked) =>
           handleSettingChange("twoFactorAuth", checked)
          }
         />
        </div>
       </div>

       <div className="border-t pt-6">
        <h4 className="font-medium mb-4">Session Management</h4>
        <div>
         <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
         <Select
          value={settings.sessionTimeout}
          onValueChange={(value) =>
           handleSettingChange("sessionTimeout", value)
          }
         >
          <SelectTrigger className="w-48">
           <SelectValue />
          </SelectTrigger>
          <SelectContent>
           <SelectItem value="15">15 minutes</SelectItem>
           <SelectItem value="30">30 minutes</SelectItem>
           <SelectItem value="60">1 hour</SelectItem>
           <SelectItem value="120">2 hours</SelectItem>
          </SelectContent>
         </Select>
        </div>
       </div>
      </CardContent>
     </Card>
    </TabsContent>

    {/* Billing Tab */}
    <TabsContent value="billing" className="space-y-6">
     <Card>
      <CardHeader>
       <CardTitle className="flex items-center">
        <CreditCard className="w-5 h-5 mr-2 text-[#1B5E20]" />
        Subscription & Billing
       </CardTitle>
       <CardDescription>
        Manage your subscription and payment methods
       </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
       <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center justify-between">
         <div>
          <p className="font-medium text-green-800">Solo Practice Plan</p>
          <p className="text-sm text-green-600">Active until March 20, 2025</p>
         </div>
         <Badge className="bg-green-100 text-green-800">Active</Badge>
        </div>
        <div className="mt-3 flex items-center justify-between">
         <span className="text-2xl font-bold text-green-800">
          KES 2,500/month
         </span>
         <Button variant="outline" size="sm">
          Change Plan
         </Button>
        </div>
       </div>

       <div>
        <h4 className="font-medium mb-4">Payment Method</h4>
        <div className="p-4 border rounded-lg">
         <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
           <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">VISA</span>
           </div>
           <div>
            <p className="font-medium">•••• •••• •••• 4242</p>
            <p className="text-sm text-gray-500">Expires 12/26</p>
           </div>
          </div>
          <Button variant="outline" size="sm">
           Update
          </Button>
         </div>
        </div>
       </div>

       <div>
        <h4 className="font-medium mb-4">Billing History</h4>
        <div className="space-y-3">
         {[
          { date: "Feb 20, 2025", amount: "KES 2,500", status: "Paid" },
          { date: "Jan 20, 2025", amount: "KES 2,500", status: "Paid" },
          { date: "Dec 20, 2024", amount: "KES 2,500", status: "Paid" },
         ].map((invoice, index) => (
          <div
           key={index}
           className="flex items-center justify-between p-3 border rounded-lg"
          >
           <div>
            <p className="font-medium">{invoice.date}</p>
            <p className="text-sm text-gray-500">{invoice.amount}</p>
           </div>
           <div className="flex items-center space-x-2">
            <Badge variant="outline">{invoice.status}</Badge>
            <Button variant="ghost" size="sm">
             <Download className="w-4 h-4" />
            </Button>
           </div>
          </div>
         ))}
        </div>
       </div>
      </CardContent>
     </Card>
    </TabsContent>

    {/* Compliance Tab */}
    <TabsContent value="compliance" className="space-y-6">
     <Card>
      <CardHeader>
       <CardTitle className="flex items-center">
        <FileText className="w-5 h-5 mr-2 text-[#1B5E20]" />
        Data Compliance
       </CardTitle>
       <CardDescription>
        Manage data privacy and compliance settings
       </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
       <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
         <Shield className="w-5 h-5 text-green-600" />
         <span className="font-medium text-green-800">DPA 2019 Compliant</span>
        </div>
        <p className="text-sm text-green-700">
         Your AfyaNutrix account is fully compliant with Kenya&apos;s Data
         Protection Act 2019.
        </p>
       </div>

       <div>
        <h4 className="font-medium mb-4">Data Retention</h4>
        <div>
         <Label htmlFor="dataRetention">Client Data Retention Period</Label>
         <Select
          value={settings.dataRetention}
          onValueChange={(value) => handleSettingChange("dataRetention", value)}
         >
          <SelectTrigger className="w-48">
           <SelectValue />
          </SelectTrigger>
          <SelectContent>
           <SelectItem value="1year">1 Year</SelectItem>
           <SelectItem value="3years">3 Years</SelectItem>
           <SelectItem value="5years">5 Years</SelectItem>
           <SelectItem value="7years">7 Years</SelectItem>
           <SelectItem value="indefinite">Indefinite</SelectItem>
          </SelectContent>
         </Select>
         <p className="text-sm text-gray-500 mt-1">
          How long to retain client data after account closure
         </p>
        </div>
       </div>

       <div>
        <h4 className="font-medium mb-4">Data Export & Deletion</h4>
        <div className="space-y-3">
         <Button
          variant="outline"
          className="w-full justify-start bg-transparent"
         >
          <Download className="w-4 h-4 mr-2" />
          Export All Client Data
         </Button>
         <Button
          variant="outline"
          className="w-full justify-start bg-transparent"
         >
          <FileText className="w-4 h-4 mr-2" />
          Generate Compliance Report
         </Button>
        </div>
       </div>

       <div className="border-t pt-6">
        <h4 className="font-medium mb-4 text-red-600">Danger Zone</h4>
        <div className="p-4 border border-red-200 rounded-lg bg-red-50">
         <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
          <div className="flex-1">
           <p className="font-medium text-red-800">Delete Account</p>
           <p className="text-sm text-red-700 mb-3">
            Permanently delete your account and all associated data. This action
            cannot be undone.
           </p>
           <Button variant="destructive" size="sm">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Account
           </Button>
          </div>
         </div>
        </div>
       </div>
      </CardContent>
     </Card>
    </TabsContent>
   </Tabs>
  </div>
 );
}
