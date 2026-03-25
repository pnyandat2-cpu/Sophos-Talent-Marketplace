import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Award, 
  Users, 
  ChevronRight, 
  Star, 
  Zap,
  Target,
  ArrowUpRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '../lib/utils';

const RECOMMENDED_ROLES = [
  {
    id: '1',
    title: 'Senior Product Manager - Fintech',
    department: 'Digital Banking',
    location: 'Nairobi, Kenya',
    matchScore: 94,
    skills: ['Product Strategy', 'Agile', 'Financial Modeling'],
    reason: 'Matches your experience in mobile payments and leadership skills.',
    type: 'Internal Mobility'
  },
  {
    id: '2',
    title: 'Strategy Operations Lead',
    department: 'Corporate Strategy',
    location: 'Nairobi, Kenya',
    matchScore: 88,
    skills: ['Strategic Planning', 'Operations', 'Stakeholder Management'],
    reason: 'Aligns with your recent certification in Strategic Management.',
    type: 'Growth Opportunity'
  },
  {
    id: '3',
    title: 'Customer Experience Architect',
    department: 'Customer Success',
    location: 'Remote / Nairobi',
    matchScore: 82,
    skills: ['UX Design', 'Customer Journey Mapping', 'Data Analytics'],
    reason: 'Leverages your background in user-centric design and analytics.',
    type: 'Skill Stretch'
  }
];

const OPEN_ROLES = [
  {
    id: '4',
    title: 'Data Scientist',
    applicants: 12,
    topFit: 'James Karanja',
    posted: '2 days ago'
  },
  {
    id: '5',
    title: 'HR Business Partner',
    applicants: 8,
    topFit: 'Mary Mutahi',
    posted: '5 days ago'
  },
  {
    id: '6',
    title: 'Full Stack Engineer',
    applicants: 24,
    topFit: 'Confidence Alividza',
    posted: '1 day ago'
  }
];

export function OpportunityMarketplace() {
  const handleAction = (action: string) => {
    toast.success(`${action} triggered`);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-sap-text mb-2">Opportunity Marketplace</h1>
          <p className="text-gray-500">AI-powered career growth and internal mobility</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="p-3 bg-amber-50 rounded-xl">
            <Award className="text-amber-500" size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Your Rewards Points</p>
            <p className="text-2xl font-bold text-sap-text">2,450 <span className="text-sm font-normal text-gray-400">pts</span></p>
          </div>
          <button 
            onClick={() => handleAction('Redeem points')}
            className="ml-4 px-4 py-2 bg-sap-blue text-white rounded-full text-sm font-bold hover:bg-sap-dark-blue transition-all"
          >
            Redeem
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recommended for You */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-blue-50/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sap-blue/10 rounded-lg">
                  <Sparkles className="text-sap-blue" size={20} />
                </div>
                <h2 className="text-xl font-bold text-sap-text">Recommended Roles for You</h2>
              </div>
              <button className="text-sap-blue text-sm font-bold hover:underline">View All Recommendations</button>
            </div>
            
            <div className="divide-y divide-gray-50">
              {RECOMMENDED_ROLES.map((role) => (
                <div key={role.id} className="p-8 hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-blue-100 text-sap-blue text-[10px] font-bold rounded uppercase tracking-wider">
                          {role.type}
                        </span>
                        <h3 className="text-lg font-bold text-sap-text group-hover:text-sap-blue transition-colors">
                          {role.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500">{role.department} • {role.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end text-green-600 font-bold">
                        <Zap size={16} fill="currentColor" />
                        <span>{role.matchScore}% Match</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">AI Fit Score</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {role.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 italic">
                      "{role.reason}"
                    </p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction(`Applied for ${role.title}`);
                      }}
                      className="px-6 py-2 bg-white border border-sap-blue text-sap-blue rounded-full text-sm font-bold hover:bg-sap-blue hover:text-white transition-all shadow-sm"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Career Progression Path */}
          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-50 rounded-lg">
                <TrendingUp className="text-purple-500" size={20} />
              </div>
              <h2 className="text-xl font-bold text-sap-text">Your Career Progression Path</h2>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2" />
              <div className="grid grid-cols-4 gap-4 relative">
                {[
                  { label: 'Current Role', title: 'Senior Associate', status: 'completed' },
                  { label: 'Target 1', title: 'Manager', status: 'active' },
                  { label: 'Target 2', title: 'Senior Manager', status: 'upcoming' },
                  { label: 'Target 3', title: 'Director', status: 'upcoming' },
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center z-10 mb-4 border-4 border-white shadow-sm",
                      step.status === 'completed' ? "bg-green-500 text-white" : 
                      step.status === 'active' ? "bg-sap-blue text-white scale-110 shadow-md" : 
                      "bg-gray-200 text-gray-400"
                    )}>
                      {step.status === 'completed' ? <CheckCircle2 size={20} /> : <span>{idx + 1}</span>}
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{step.label}</p>
                    <p className={cn(
                      "text-sm font-bold",
                      step.status === 'active' ? "text-sap-blue" : "text-sap-text"
                    )}>{step.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Target className="text-purple-500" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-sap-text">Next Milestone: Manager Certification</p>
                  <p className="text-xs text-gray-500">Complete 2 more leadership courses to unlock this role.</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sap-blue text-sm font-bold hover:underline">
                View Learning Path <ArrowUpRight size={16} />
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Open Roles & Talent Matching */}
        <div className="space-y-8">
          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-sap-text">Top Talent Matches</h2>
              <button className="text-sap-blue text-xs font-bold hover:underline">Manage Roles</button>
            </div>
            
            <div className="space-y-6">
              {OPEN_ROLES.map((role) => (
                <div key={role.id} className="p-4 rounded-2xl border border-gray-50 hover:border-sap-blue/30 transition-all cursor-pointer group bg-gray-50/30">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-sap-text group-hover:text-sap-blue transition-colors">{role.title}</h3>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">{role.posted}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{role.applicants} applicants</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Best AI Fit</p>
                      <p className="text-xs font-bold text-sap-text">{role.topFit}</p>
                    </div>
                    <button className="p-2 text-sap-blue hover:bg-blue-50 rounded-lg transition-colors">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-sap-text to-sap-dark-blue rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-4">Talent Insights</h2>
              <p className="text-sm text-white/70 mb-6">Your team's internal mobility rate has increased by 12% this quarter.</p>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-medium">Internal Hiring Rate</span>
                    <span className="text-xs font-bold">68%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-[68%]" />
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-medium">Time-to-Fill (Internal)</span>
                    <span className="text-xs font-bold">14 days</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[45%]" />
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-8 py-3 bg-white text-sap-text rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors">
                View Full Analytics
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
