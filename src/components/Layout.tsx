import React, { useState } from 'react';
import { 
  Home, 
  User, 
  Users, 
  BookOpen, 
  Target, 
  Search, 
  Bell, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronRight,
  ChevronDown,
  LayoutDashboard,
  FileText,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
  Info,
  HelpCircle,
  DollarSign,
  MessageSquare,
  Activity,
  TrendingUp,
  Briefcase,
  Award
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '../lib/utils';
import { UserAvatar } from './UserAvatar';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Home', icon: Home },
  { id: 'compensation', label: 'Compensation', icon: DollarSign },
  { id: 'feedback', label: 'Continuous Feedback', icon: MessageSquare },
  { id: 'performance_cont', label: 'Continuous Performance', icon: Activity },
  { id: 'development', label: 'Development', icon: TrendingUp },
  { id: 'profile', label: 'Employee Files', icon: User },
  { id: 'goals', label: 'Goals', icon: Target },
  { id: 'growth', label: 'Growth Portfolio', icon: Briefcase },
  { id: 'learning', label: 'Learning', icon: BookOpen },
  { id: 'marketplace', label: 'Opportunity Marketplace', icon: LayoutDashboard },
  { id: 'orgchart', label: 'Org Chart', icon: Users },
  { id: 'performance', label: 'Performance', icon: Award },
  { id: 'recruiting', label: 'Recruiting', icon: FileText },
  { id: 'succession', label: 'Succession', icon: Users },
];

const NOTIFICATIONS = [
  { id: 1, title: 'Performance Review', desc: 'Your annual review is due in 3 days.', time: '2h ago', icon: Clock, color: 'text-blue-500' },
  { id: 2, title: 'Course Completed', desc: 'You finished "Leadership Basics".', time: '5h ago', icon: CheckCircle2, color: 'text-green-500' },
  { id: 3, title: 'New Requisition', desc: 'A new role for Senior Dev is open.', time: '1d ago', icon: Info, color: 'text-blue-500' },
  { id: 4, title: 'System Update', desc: 'Maintenance scheduled for Sunday.', time: '2d ago', icon: AlertCircle, color: 'text-amber-500' },
];

export function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNavDropdown, setShowNavDropdown] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-sap-bg font-sans text-sap-text">
      {/* Top Header */}
      <header className="h-header bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50 sticky top-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" 
              alt="SAP Logo" 
              className="h-6 w-auto cursor-pointer"
              referrerPolicy="no-referrer"
              onClick={() => setActiveTab('dashboard')}
            />
            <div className="h-6 w-[1px] bg-gray-200 mx-1" />
            <div className="relative">
              <div 
                onClick={() => setShowNavDropdown(!showNavDropdown)}
                className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition-colors group"
              >
                <span className="text-sm font-semibold text-sap-text group-hover:text-sap-blue">
                  {NAV_ITEMS.find(i => i.id === activeTab)?.label || 'Home'}
                </span>
                <ChevronDown size={14} className={cn("text-sap-text/70 transition-transform group-hover:text-sap-blue", showNavDropdown && "rotate-180")} />
              </div>

              <AnimatePresence>
                {showNavDropdown && (
                  <>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setShowNavDropdown(false)}
                      className="fixed inset-0 z-40"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 shadow-2xl rounded-lg z-50 py-2 max-h-[80vh] overflow-y-auto no-scrollbar"
                    >
                      {NAV_ITEMS.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveTab(item.id);
                            setShowNavDropdown(false);
                          }}
                          className={cn(
                            "w-full flex items-center gap-4 px-4 py-2.5 text-sm transition-colors",
                            activeTab === item.id ? "bg-blue-50 text-sap-blue font-bold" : "text-sap-text hover:bg-gray-50"
                          )}
                        >
                          <div className={cn("p-1 rounded-sm", activeTab === item.id ? "text-sap-blue" : "text-gray-500")}>
                            <item.icon size={18} />
                          </div>
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-xl px-4">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search for actions or people"
              className="w-full pl-4 pr-10 py-1.5 bg-gray-100 border border-transparent focus:bg-white focus:border-sap-blue focus:ring-1 focus:ring-sap-blue rounded-full text-sm text-sap-text placeholder:text-gray-500 transition-all outline-none"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-sap-blue transition-colors" size={16} />
          </div>
        </div>

        <div className="flex items-center gap-1 relative">
          <button className="p-2 rounded-full text-sap-text/80 hover:bg-gray-100 transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button>

          <button className="p-2 rounded-full text-sap-text/80 hover:bg-gray-100 relative transition-colors">
            <CheckCircle2 size={18} strokeWidth={1.5} />
            <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-sap-blue rounded-full flex items-center justify-center text-[7px] font-bold text-white border border-white">20</div>
          </button>
          
          <button className="p-2 rounded-full text-sap-text/80 hover:bg-gray-100 transition-colors">
            <HelpCircle size={18} strokeWidth={1.5} />
          </button>

          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={cn(
              "p-2 rounded-full transition-colors relative",
              showNotifications ? "bg-gray-100 text-sap-blue" : "text-sap-text/80 hover:bg-gray-100"
            )}
          >
            <Bell size={18} strokeWidth={1.5} />
            <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-[#D04343] rounded-full flex items-center justify-center text-[7px] font-bold text-white border border-white">4</div>
          </button>

          <div className="h-6 w-[1px] bg-gray-200 mx-1" />
          
          <div 
            onClick={() => setActiveTab('profile')}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded-full transition-colors"
          >
            <UserAvatar firstName="Paula" lastName="Nyandat" size="xs" className="border border-gray-200" />
          </div>
        </div>
      </header>

      {/* Sub Navigation Bar */}
      <nav className="h-9 bg-white border-b border-gray-200 flex items-center px-4 gap-5 z-40 overflow-x-auto no-scrollbar sticky top-header">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "h-full px-1 text-[11px] font-bold transition-all relative whitespace-nowrap uppercase tracking-tight",
              activeTab === item.id 
                ? "text-sap-blue" 
                : "text-gray-500 hover:text-sap-blue"
            )}
          >
            {item.label}
            {activeTab === item.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sap-blue" />
            )}
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative">
        {children}
        
        {/* Support Tab (Floating) */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
          <div 
            onClick={() => toast.info('Support portal opening...')}
            className="bg-sap-text text-white text-[10px] font-bold py-3 px-1 rounded-l-md cursor-pointer hover:bg-sap-dark-blue transition-colors [writing-mode:vertical-rl] rotate-180"
          >
            Support
          </div>
        </div>
      </main>
    </div>
  );
}
