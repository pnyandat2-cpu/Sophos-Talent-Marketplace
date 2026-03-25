import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ChevronRight, 
  Plus, 
  MoreHorizontal,
  TrendingUp,
  Users,
  BookOpen,
  Calendar,
  Award,
  MessageSquare,
  Activity,
  Building,
  ChevronLeft,
  Mail,
  User,
  LayoutDashboard,
  FileText,
  ThumbsUp,
  Clipboard,
  Star,
  Building2,
  Bell,
  Sparkles,
  Zap
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { toast } from 'sonner';
import { UserAvatar } from './UserAvatar';
import { MOCK_GOALS, MOCK_COURSES, MOCK_EMPLOYEES } from '../constants';
import { cn } from '../lib/utils';

interface DashboardProps {
  onNavigateToProfile: (id: string) => void;
  onNavigateToTab: (tab: string) => void;
}

const TODO_ITEMS = [
  { id: 1, title: 'Approve Time Off Request', user: 'Harriet Apondi', date: 'Today', type: 'approval' },
  { id: 2, title: 'Complete Performance Review', user: 'Confidence Alividza', date: 'In 2 days', type: 'task' },
  { id: 3, title: 'Update Compliance Training', user: 'Self', date: 'Overdue', type: 'urgent' },
];

const QUICK_ACTIONS = [
  { id: 1, label: 'Request Time Off', icon: Calendar, tab: 'dashboard' },
  { id: 2, label: 'Request Feedback', icon: MessageSquare, tab: 'performance' },
  { id: 3, label: 'Give Feedback', icon: MessageSquare, tab: 'performance' },
  { id: 4, label: 'Create Activity', icon: Clipboard, tab: 'performance' },
  { id: 5, label: 'Recognize a Colleague', icon: ThumbsUp, tab: 'dashboard' },
  { id: 6, label: 'View Company..', icon: Building2, tab: 'dashboard' },
  { id: 7, label: 'View Reminders', icon: Bell, tab: 'dashboard' },
  { id: 8, label: 'View Favorites', icon: Star, tab: 'dashboard' },
];

const NEEDS_ATTENTION_TABS = [
  { id: 'all', label: 'All (16)' },
  { id: 'approvals', label: 'Approvals (11)' },
  { id: 'for-you', label: 'For You Today (5)' },
];

export function Dashboard({ onNavigateToProfile, onNavigateToTab }: DashboardProps) {
  const [activeNeedsTab, setActiveNeedsTab] = React.useState('all');
  const handleAction = (label: string) => {
    toast.success(`${label} action triggered`);
  };

  return (
    <div className="min-h-full bg-[#E5F1F4] animate-in fade-in duration-500 pb-12">
      {/* Quick Actions Bar */}
      <div className="bg-white border-b border-gray-200 px-8 py-6 z-20">
        <div className="flex items-center justify-center gap-12 overflow-x-auto no-scrollbar max-w-7xl mx-auto">
          {QUICK_ACTIONS.map((action) => (
            <button
              key={action.id}
              onClick={() => onNavigateToTab(action.tab)}
              className="flex flex-col items-center gap-3 group min-w-[100px] transition-all"
            >
              <div className="text-sap-blue group-hover:scale-110 transition-transform duration-200">
                <action.icon size={28} strokeWidth={1.2} />
              </div>
              <span className="text-[11px] font-medium text-gray-500 text-center leading-[1.3] group-hover:text-sap-blue transition-colors">
                {action.label.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    {i === 0 && action.label.split(' ').length > 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        {/* Greeting */}
        <section className="py-12 px-8 bg-gradient-to-r from-[#E5F1F4] to-[#F5F6F7] rounded-3xl mb-12 shadow-sm border border-white/50">
          <div className="GreetingBanner_leftContent__mCxvS">
            <h1 className="text-5xl font-light text-sap-text tracking-tight">Good morning Paula Nyandat</h1>
            <div className="flex gap-3 mt-10">
              {['Team Absence Calendar', 'My Team Positions', 'Pending Workflows'].map((btn) => (
                <button 
                  key={btn}
                  onClick={() => handleAction(btn)}
                  className="px-6 py-2.5 bg-white/90 border border-gray-200 text-sap-blue rounded-full text-sm font-bold hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* AI Recommendations Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-sap-blue/10 rounded-lg">
                <Sparkles className="text-sap-blue" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-sap-text">Recommended for You</h2>
            </div>
            <button 
              onClick={() => onNavigateToTab('marketplace')}
              className="text-sap-blue text-sm font-bold hover:underline"
            >
              Explore Marketplace
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              onClick={() => onNavigateToTab('marketplace')}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  94% Match
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <TrendingUp className="text-sap-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sap-text group-hover:text-sap-blue transition-colors">Senior Product Manager</h3>
                  <p className="text-sm text-gray-500">Digital Banking • Nairobi</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                Based on your recent certification in Strategic Management and 5+ years in Fintech, this role is a perfect fit for your career progression.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-sap-blue">
                  View Details <ChevronRight size={14} />
                </div>
                <div className="flex items-center gap-1 text-amber-600 font-bold text-xs">
                  <Zap size={12} fill="currentColor" />
                  <span>Earn 500 pts on hire</span>
                </div>
              </div>
            </div>

            <div 
              onClick={() => onNavigateToTab('development')}
              className="bg-gradient-to-br from-sap-blue to-sap-dark-blue p-6 rounded-3xl text-white shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Skill Gap Identified</h3>
                  <p className="text-sm text-white/70">Advanced Data Analytics</p>
                </div>
              </div>
              <p className="text-sm text-white/80 mb-6">
                Closing this gap will increase your fit for 3 open leadership roles in the Corporate Strategy department.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold">
                  Start Learning <ChevronRight size={14} />
                </div>
                <div className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  High Priority
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Needs Attention Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-sap-text">Needs Attention</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => handleAction('Previous cards')}
                className="p-2 bg-white/80 border border-gray-200 rounded-full text-gray-500 hover:text-sap-blue hover:bg-white transition-all shadow-sm active:scale-90"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => handleAction('Next cards')}
                className="p-2 bg-white/80 border border-gray-200 rounded-full text-gray-500 hover:text-sap-blue hover:bg-white transition-all shadow-sm active:scale-90"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            {NEEDS_ATTENTION_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveNeedsTab(tab.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm",
                  activeNeedsTab === tab.id 
                    ? "bg-sap-blue text-white" 
                    : "bg-white/80 border border-gray-200 text-sap-blue hover:bg-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* My Team Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col group hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-sap-blue">
                  <Users size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">My Team</span>
                </div>
                <button className="text-gray-400 hover:text-sap-text">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              <h3 className="text-xl font-semibold text-sap-text mb-8 leading-snug">Remind a team member to complete pending tasks.</h3>
              
              <div className="flex items-center gap-4 mb-auto">
                <UserAvatar firstName="William" lastName="Otieno" size="md" />
                <div>
                  <p className="text-base font-semibold text-sap-text">William Anthony Otieno</p>
                  <p className="text-sm text-gray-500">1 task</p>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <button 
                  onClick={() => handleAction('View all team tasks')}
                  className="text-sap-blue text-sm font-bold hover:underline"
                >
                  View All (3)
                </button>
                <button 
                  onClick={() => handleAction('Send email to William')}
                  className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-sap-blue hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Send Email
                </button>
              </div>
            </div>

            {/* Job Requisition Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col group hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-sap-blue">
                  <FileText size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Job Requisition</span>
                </div>
                <button className="text-gray-400 hover:text-sap-text">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              <h3 className="text-xl font-semibold text-sap-text mb-2 leading-snug">Production Oversight Manager (SB) 1</h3>
              <p className="text-sm text-gray-500 mb-8">Submitted on Mar 23, 2026</p>

              <div className="space-y-3 text-sm mb-auto">
                <div className="flex justify-between">
                  <span className="text-gray-500">Location</span>
                  <span className="font-semibold text-sap-text">Nairobi (Upper Hill)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Req Id</span>
                  <span className="font-semibold text-sap-text">3377</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Hiring Manager</span>
                  <span className="font-semibold text-sap-text">Marcy Hooks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Recruiter</span>
                  <span className="font-semibold text-sap-text">Gavin Chandler</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Pending For</span>
                  <span className="font-semibold text-sap-text">1 day</span>
                </div>
              </div>

              <div className="mt-10">
                <button 
                  onClick={() => handleAction('View all requisitions')}
                  className="text-sap-blue text-sm font-bold hover:underline"
                >
                  View All (11)
                </button>
              </div>
            </div>

            {/* Learning Assignments Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col group hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-sap-blue">
                  <BookOpen size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Learning Assignments</span>
                </div>
                <button className="text-gray-400 hover:text-sap-text">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              <h3 className="text-xl font-semibold text-sap-text mb-2 leading-snug">Health & Safety Checklist</h3>
              <p className="text-sm text-gray-500 mb-8">Other</p>

              <div className="mb-auto">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-sm">8 days overdue</span>
              </div>

              <div className="mt-10">
                <button 
                  onClick={() => handleAction('View all learning assignments')}
                  className="text-sap-blue text-sm font-bold hover:underline"
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Organizational Updates Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-sap-text">Organizational Updates</h2>
          <div className="flex gap-3">
            <button 
              onClick={() => handleAction('Filter all updates')}
              className="px-5 py-2 bg-sap-blue text-white rounded-full text-sm font-semibold shadow-sm"
            >
              All (3)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              onClick={() => handleAction('Open My Team update')}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-80 group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="h-2/3 w-full overflow-hidden">
                <img src="https://picsum.photos/seed/team/800/600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" alt="My Team" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-sap-text">My Team</h3>
                <ChevronRight size={20} className="text-gray-400 group-hover:text-sap-blue group-hover:translate-x-1 transition-all" />
              </div>
            </div>
            <div 
              onClick={() => handleAction('Open My Profile update')}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-80 group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="h-2/3 w-full overflow-hidden">
                <img src="https://picsum.photos/seed/profile/800/600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" alt="My Profile" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-sap-text">My Profile</h3>
                <ChevronRight size={20} className="text-gray-400 group-hover:text-sap-blue group-hover:translate-x-1 transition-all" />
              </div>
            </div>
            <div 
              onClick={() => handleAction('Open Critical Skills update')}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-80 group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="h-2/3 w-full overflow-hidden">
                <img src="https://picsum.photos/seed/skills/800/600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" alt="New Critical Skills" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-sap-text">New Critical Skills</h3>
                <ChevronRight size={20} className="text-gray-400 group-hover:text-sap-blue group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
