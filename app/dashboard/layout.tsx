import type React from "react";
import SidebarLayout from "@/components/organisms/dashboard/SidebarLayout";

export default function DashboardLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <SidebarLayout>{children}</SidebarLayout>;
}
