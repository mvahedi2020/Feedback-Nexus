import TriageBoard from "@/components/TriageBoard";
import { LayoutDashboard, MessageSquare, Settings, Users, Box, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-50 overflow-hidden font-sans selection:bg-indigo-500/30">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl flex flex-col z-20">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-800/80">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Box className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400">
            Nexus
          </span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 px-2">Menu</div>
          <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" />
          <NavItem icon={<MessageSquare className="w-5 h-5" />} label="Feedback" active />
          <NavItem icon={<Users className="w-5 h-5" />} label="Customers" />
          
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-8 mb-4 px-2">Settings</div>
          <NavItem icon={<Settings className="w-5 h-5" />} label="Preferences" />
        </div>
        
        <div className="p-4 border-t border-zinc-800/80">
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-900 cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-medium">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-zinc-500">Admin</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-y-auto">
        {/* Subtle background gradients */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-900/10 via-purple-900/5 to-transparent pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="p-8 lg:p-12 relative z-10 max-w-7xl mx-auto">
          <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
                Feedback Triage
              </h1>
              <p className="text-zinc-400">Review, prioritize, and route customer feedback.</p>
            </div>
            <div className="relative">
              <Search className="w-5 h-5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search feedback..." 
                className="pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all w-64 placeholder:text-zinc-600"
              />
            </div>
          </header>

          <TriageBoard />
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
        active 
          ? "bg-indigo-500/10 text-indigo-400" 
          : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </a>
  );
}
