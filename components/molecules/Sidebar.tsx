import {
 Home,
 Users,
 Calendar,
 ChefHat,
 MessageSquare,
 BarChart3,
 Settings,
 HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
 { name: "Dashboard", href: "/dashboard", icon: Home },
 { name: "Clients", href: "/dashboard/clients", icon: Users },
 { name: "Appointments", href: "/dashboard/appointments", icon: Calendar },
 { name: "Meal Plans", href: "/dashboard/meal-plans", icon: ChefHat },
 { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
 { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
 { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
 mobile?: boolean;
 sidebarOpen: boolean;
 setSidebarOpen: (open: boolean) => void;
}

const Sidebar = (props: SidebarProps) => {
 const { mobile = false, setSidebarOpen } = props;
 const pathname = usePathname();
 return (
  <div className={`flex flex-col h-full ${mobile ? "w-full" : "w-64"}`}>
   {/* Logo */}
   <div className="flex items-center space-x-2 p-6 border-b">
    <div className="w-8 h-8 bg-[#1B5E20] rounded-lg flex items-center justify-center">
     <ChefHat className="w-5 h-5 text-white" />
    </div>
    <span className="text-xl font-bold text-[#1B5E20]">AfyaNutrix</span>
   </div>

   {/* Navigation */}
   <nav className="flex-1 p-4 space-y-2">
    {navigation.map((item) => {
     const isActive = pathname === item.href;
     return (
      <Link
       key={item.name}
       href={item.href}
       className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive
         ? "bg-[#1B5E20] text-white"
         : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
       }`}
       onClick={() => mobile && setSidebarOpen(false)}
      >
       <item.icon className="w-5 h-5" />
       <span>{item.name}</span>
      </Link>
     );
    })}
   </nav>

   {/* Help Section */}
   <div className="p-4 border-t">
    <Link
     href="/help"
     className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
    >
     <HelpCircle className="w-5 h-5" />
     <span>Help & Support</span>
    </Link>
   </div>
  </div>
 );
};

export default Sidebar;
