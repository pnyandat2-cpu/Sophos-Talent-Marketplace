import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  Award, 
  PlayCircle, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  Star,
  Users
} from 'lucide-react';
import { toast } from 'sonner';
import { MOCK_COURSES } from '../constants';
import { cn } from '../lib/utils';

const CATEGORIES = [
  'All Courses',
  'Leadership',
  'Technical Skills',
  'Compliance',
  'Soft Skills',
  'Product Knowledge',
];

export function Learning() {
  const [activeCategory, setActiveCategory] = useState('Completed');

  const handleAction = (label: string) => {
    toast.success(`${label} triggered`);
  };

  const stats = [
    { label: 'Bookmarks', value: '5', icon: Star, color: 'text-blue-500', bg: 'bg-blue-50', progress: 0 },
    { label: 'Started Actions', value: '1', icon: PlayCircle, color: 'text-orange-500', bg: 'bg-orange-50', progress: 25 },
    { label: 'Open Steps', value: '4', icon: Clock, color: 'text-blue-400', bg: 'bg-blue-50', progress: 40 },
    { label: 'Completed Steps', value: '0', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50', progress: 100 },
    { label: 'Completed Actions', value: '12', icon: Award, color: 'text-indigo-500', bg: 'bg-indigo-50', progress: 100, isFlag: true },
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-right-4 duration-500 -m-8 p-8 bg-sap-bg min-h-full">
      {/* Top Circular Stats */}
      <div className="flex flex-wrap items-center justify-center gap-12 py-8 bg-sap-dark-blue rounded-b-3xl -mt-8 -mx-8 shadow-inner">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            onClick={() => handleAction(stat.label)}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                <circle 
                  cx="40" cy="40" r="36" fill="none" 
                  stroke="rgba(255,255,255,0.5)" 
                  strokeWidth="4" 
                  strokeDasharray="226.2" 
                  strokeDashoffset={226.2 * (1 - stat.progress / 100)} 
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-xl font-bold">{stat.value}</span>
                {stat.isFlag ? <Award size={14} className="mt-0.5" /> : <Star size={14} className="mt-0.5 opacity-50" />}
              </div>
            </div>
            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-3 group-hover:text-white transition-colors">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-col space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 border-b border-gray-200 flex-1">
            {['Recommended', 'Bookmarked', 'Started', 'Completed'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={cn(
                  "pb-4 text-sm font-bold transition-all relative",
                  activeCategory === tab ? "text-[#0070F2]" : "text-gray-400 hover:text-gray-600"
                )}
              >
                {tab}
                {activeCategory === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sap-blue" />}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-8">
            {['Article', 'Practice', 'Action', 'Manager Action'].map((type, i) => (
              <button 
                key={type} 
                onClick={() => handleAction(type)}
                className={cn(
                "px-3 py-1.5 rounded-sm border text-[10px] font-bold uppercase tracking-wider transition-colors",
                i === 0 ? "border-purple-200 text-purple-600 hover:bg-purple-50" :
                i === 1 ? "border-blue-200 text-blue-600 hover:bg-blue-50" :
                i === 2 ? "border-orange-200 text-orange-600 hover:bg-orange-50" :
                "border-indigo-200 text-indigo-600 hover:bg-indigo-50"
              )}>
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_COURSES.concat(MOCK_COURSES).map((course, idx) => (
            <div 
              key={idx} 
              onClick={() => handleAction(`Course: ${course.title}`)}
              className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="relative h-48">
                <img src={course.thumbnail} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400">
                  <Award size={18} />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Leadership Development</p>
                <h3 className="text-sm font-bold text-sap-text group-hover:text-sap-blue transition-colors mb-1">{course.title}</h3>
                <p className="text-xs text-gray-500">Empathetic Leader</p>
                <div className="mt-auto pt-4">
                  <div className="w-full h-1 bg-gray-100 rounded-full">
                    <div className="h-full bg-sap-blue rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
