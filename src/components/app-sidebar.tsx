import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { Settings01Icon } from "@hugeicons/core-free-icons"
import Logo from './../assets/logo/logo.png';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="p-3 pt-0">
		<div className="flex items-center justify-between gap-3">
			<img src={Logo} alt="Company Logo" className="w-[60%]"/>
			<HugeiconsIcon className="mt-[5px]" icon={Settings01Icon} />
		</div>
		
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}