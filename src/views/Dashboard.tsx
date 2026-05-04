import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Card } from "@/components/ui/card"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
		<Card>
			<h1>test</h1>
		</Card>
		<div>page content here</div>
      </main>
    </SidebarProvider>
  )
}