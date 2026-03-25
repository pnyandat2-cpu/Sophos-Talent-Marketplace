import React, { useState } from 'react';
import { toast } from 'sonner';
import { Target, TrendingUp, CheckCircle2, Clock, AlertCircle, ChevronRight, Filter, Plus, Heart, MessageSquare, Zap, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import { MOCK_GOALS } from '../constants';

export function Performance() {
  const [activeTab, setActiveTab] = useState('Goals');

  const handleAction = (label: string) => {
    toast.success(`${label} triggered`);
  };

  const stats = [
    { label: 'Total Goals', value: '8', icon: Target, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'On Track', value: '6', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Recognition Points', value: '1,250', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-sap-text tracking-tight">Performance & Goals</h1>
          <p className="text-gray-500 mt-1">Manage your professional objectives and performance reviews.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleAction('Filter')}
            className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2"
          >
            <Filter size={18} />
            Filter
          </button>
          <button 
            onClick={() => handleAction('Create Goal')}
            className="px-4 py-2 bg-sap-blue text-white rounded-sm text-sm font-bold hover:bg-sap-dark-blue transition-all flex items-center gap-2 shadow-sm"
          >
            <Plus size={18} />
            Create Goal
          </button>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(stat => (
          <div 
            key={stat.label} 
            onClick={() => handleAction(stat.label)}
            className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all"
          >
            <div className={cn("w-12 h-12 rounded-sm flex items-center justify-center", stat.bg, stat.color)}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-2xl font-black text-sap-text">{stat.value}</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
          {['Goals', 'Performance Reviews', 'Peer Recognition', 'Continuous Feedback'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-8 py-4 text-sm font-bold transition-all relative whitespace-nowrap",
                activeTab === tab ? "text-sap-blue" : "text-gray-400 hover:text-gray-600"
              )}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-sap-blue rounded-t-full" />}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'Goals' ? (
            <div className="space-y-4">
              {MOCK_GOALS.map(goal => (
                <div 
                  key={goal.id} 
                  onClick={() => handleAction(`Goal: ${goal.title}`)}
                  className="group p-5 rounded-sm border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={cn(
                          "px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider",
                          goal.status === 'Completed' ? "bg-green-100 text-green-700" :
                          goal.status === 'Overdue' ? "bg-orange-100 text-orange-700" :
                          "bg-blue-100 text-blue-700"
                        )}>
                          {goal.status}
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Due {goal.dueDate}</span>
                      </div>
                      <h3 className="text-base font-bold text-sap-text group-hover:text-sap-blue transition-colors">{goal.title}</h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-1">{goal.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-sap-text">{goal.progress}%</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Complete</p>
                    </div>
                  </div>
                  <div className="mt-4 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all duration-1000",
                        goal.status === 'Completed' ? "bg-green-500" :
                        goal.status === 'Overdue' ? "bg-orange-500" :
                        "bg-sap-blue"
                      )}
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : activeTab === 'Peer Recognition' ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-sap-text">Recent Recognition</h3>
                <button 
                  onClick={() => handleAction('Send Recognition')}
                  className="text-sap-blue text-sm font-bold hover:underline flex items-center gap-1"
                >
                  <Heart size={16} /> Send Recognition
                </button>
              </div>
              
              {[
                { from: 'James Karanja', message: 'Paula did an amazing job leading the M-Pesa integration project. Her strategic vision was key!', date: '2 days ago', points: 100 },
                { from: 'Mary Mutahi', message: 'Great collaboration on the HR policy update. Very professional and thorough.', date: '1 week ago', points: 50 },
                { from: 'Confidence Alividza', message: 'Thank you for the mentorship session. It really helped me understand the new architecture.', date: '2 weeks ago', points: 75 },
              ].map((rec, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/30 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-sap-blue font-bold">
                    {rec.from.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-sap-text">{rec.from}</h4>
                      <span className="text-[10px] text-gray-400 font-bold uppercase">{rec.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic mb-3">"{rec.message}"</p>
                    <div className="flex items-center gap-1 text-amber-600 font-bold text-xs">
                      <Zap size={12} fill="currentColor" />
                      <span>+{rec.points} pts</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-lg font-bold text-sap-text">No {activeTab} yet</h3>
              <p className="text-sm text-gray-500 mt-1">Check back later for updates on your {activeTab.toLowerCase()}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
