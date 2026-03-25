import React from 'react';
import { 
  TrendingUp, 
  Target, 
  Zap, 
  ChevronRight, 
  BookOpen, 
  Award,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Search,
  Plus
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '../lib/utils';

const SKILL_GAPS = [
  {
    skill: 'Advanced Data Analytics',
    level: 'Intermediate',
    target: 'Expert',
    gap: 40,
    recommendation: 'Complete "Data Science for Managers" on Percipio',
    priority: 'High'
  },
  {
    skill: 'Strategic Leadership',
    level: 'Beginner',
    target: 'Advanced',
    gap: 65,
    recommendation: 'Enroll in "Leadership Accelerator" program',
    priority: 'Medium'
  },
  {
    skill: 'Agile Methodologies',
    level: 'Advanced',
    target: 'Expert',
    gap: 15,
    recommendation: 'Get Scrum Master Certification',
    priority: 'Low'
  }
];

const RECENT_CERTIFICATIONS = [
  {
    title: 'Cloud Computing Fundamentals',
    provider: 'Percipio',
    date: 'Mar 15, 2026',
    points: 250
  },
  {
    title: 'Strategic Management',
    provider: 'SAP Learning Hub',
    date: 'Feb 28, 2026',
    points: 500
  }
];

export function Development() {
  const handleAction = (action: string) => {
    toast.success(`${action} triggered`);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-sap-text mb-2">Development & Skills</h1>
          <p className="text-gray-500">AI-driven skill gap analysis and growth planning</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleAction('Add new goal')}
            className="px-6 py-2.5 bg-white border border-gray-200 text-sap-blue rounded-full text-sm font-bold hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2"
          >
            <Plus size={18} />
            Add Goal
          </button>
          <button 
            onClick={() => handleAction('View all skills')}
            className="px-6 py-2.5 bg-sap-blue text-white rounded-full text-sm font-bold hover:bg-sap-dark-blue transition-all shadow-md flex items-center gap-2"
          >
            <Search size={18} />
            Explore Skills
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Skill Gap Analysis */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gradient-to-r from-orange-50/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <TrendingUp className="text-orange-500" size={20} />
                </div>
                <h2 className="text-xl font-bold text-sap-text">AI Skill Gap Analysis</h2>
              </div>
              <button className="text-sap-blue text-sm font-bold hover:underline">Update Skills Profile</button>
            </div>
            
            <div className="divide-y divide-gray-50">
              {SKILL_GAPS.map((gap) => (
                <div key={gap.skill} className="p-8 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-sap-text">{gap.skill}</h3>
                        <span className={cn(
                          "px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider",
                          gap.priority === 'High' ? "bg-red-100 text-red-600" : 
                          gap.priority === 'Medium' ? "bg-orange-100 text-orange-600" : 
                          "bg-blue-100 text-blue-600"
                        )}>
                          {gap.priority} Priority
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">Current: {gap.level} • Target: {gap.target}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-sap-text">{gap.gap}%</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Gap Size</p>
                    </div>
                  </div>
                  
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-6">
                    <div 
                      className={cn(
                        "h-full transition-all duration-1000",
                        gap.priority === 'High' ? "bg-red-500" : 
                        gap.priority === 'Medium' ? "bg-orange-500" : 
                        "bg-blue-500"
                      )} 
                      style={{ width: `${100 - gap.gap}%` }} 
                    />
                  </div>

                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <BookOpen className="text-sap-blue" size={18} />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{gap.recommendation}</p>
                    </div>
                    <button className="flex items-center gap-1 text-sap-blue text-sm font-bold hover:underline">
                      Start Learning <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Fit Scoring */}
          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Sparkles className="text-sap-blue" size={20} />
              </div>
              <h2 className="text-xl font-bold text-sap-text">AI Fit Scoring for Future Roles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { role: 'Product Director', score: 72, trend: '+5%', color: 'blue' },
                { role: 'Head of Strategy', score: 64, trend: '+12%', color: 'purple' },
              ].map((item) => (
                <div key={item.role} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-sap-text">{item.role}</h3>
                    <span className="text-xs font-bold text-green-600">{item.trend}</span>
                  </div>
                  <div className="flex items-end gap-4">
                    <div className="text-4xl font-bold text-sap-text">{item.score}%</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mb-2 overflow-hidden">
                      <div 
                        className={cn("h-full", item.color === 'blue' ? "bg-sap-blue" : "bg-purple-500")} 
                        style={{ width: `${item.score}%` }} 
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">Based on current skills, experience, and learning trajectory.</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Certifications & Progress */}
        <div className="space-y-8">
          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-sap-text">Recent Achievements</h2>
              <button className="text-sap-blue text-xs font-bold hover:underline">View All</button>
            </div>
            
            <div className="space-y-6">
              {RECENT_CERTIFICATIONS.map((cert) => (
                <div key={cert.title} className="flex items-start gap-4 p-4 rounded-2xl border border-gray-50 bg-gray-50/30">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Award className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sap-text text-sm mb-1">{cert.title}</h3>
                    <p className="text-xs text-gray-500">{cert.provider} • {cert.date}</p>
                    <div className="mt-2 flex items-center gap-1 text-amber-600 font-bold text-xs">
                      <Zap size={12} fill="currentColor" />
                      <span>+{cert.points} pts</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-sap-blue to-sap-dark-blue rounded-3xl p-8 text-white shadow-xl">
            <h2 className="text-xl font-bold mb-6">Learning Progress</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-medium">Monthly Learning Goal</span>
                  <span className="text-xs font-bold">85%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[85%]" />
                </div>
                <p className="text-[10px] text-white/70 mt-2">12.5 / 15 hours completed</p>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">3 Skills Mastered</p>
                    <p className="text-xs text-white/70">This quarter</p>
                  </div>
                </div>
                <button className="w-full py-3 bg-white text-sap-blue rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors">
                  Open Percipio Learning
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
