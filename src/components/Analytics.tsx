import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  Users, 
  UserPlus, 
  UserMinus, 
  TrendingUp, 
  Briefcase, 
  GraduationCap,
  Clock,
  DollarSign
} from 'lucide-react';
import { cn } from '../lib/utils';

const headcountData = [
  { name: 'Jan', headcount: 420 },
  { name: 'Feb', headcount: 425 },
  { name: 'Mar', headcount: 432 },
  { name: 'Apr', headcount: 440 },
  { name: 'May', headcount: 448 },
  { name: 'Jun', headcount: 455 },
];

const diversityData = [
  { name: 'Male', value: 55 },
  { name: 'Female', value: 42 },
  { name: 'Non-binary', value: 3 },
];

const departmentData = [
  { name: 'Engineering', count: 120 },
  { name: 'Sales', count: 85 },
  { name: 'Marketing', count: 45 },
  { name: 'HR', count: 15 },
  { name: 'Finance', count: 25 },
  { name: 'Operations', count: 65 },
];

const COLORS = ['#00708C', '#008BB0', '#004050', '#33B5D6', '#66C7E0'];

export function Analytics() {
  return (
    <div className="p-6 space-y-6 bg-sap-bg min-h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-sap-text">Workforce Analytics</h1>
        <div className="flex gap-2">
          <select className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-sap-blue">
            <option>All Departments</option>
            <option>Engineering</option>
            <option>Sales</option>
            <option>Marketing</option>
          </select>
          <select className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-sap-blue">
            <option>Last 6 Months</option>
            <option>Last Year</option>
            <option>All Time</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Headcount', value: '455', change: '+8.3%', icon: Users, color: 'text-blue-600' },
          { label: 'Internal Hiring Rate', value: '68%', change: '+12%', icon: UserPlus, color: 'text-green-600' },
          { label: 'Turnover Reduction', value: '15%', change: '-4.2%', icon: UserMinus, color: 'text-red-600' },
          { label: 'Avg. Time-to-Fill', value: '14 days', change: '-5 days', icon: Clock, color: 'text-purple-600' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gray-50 ${kpi.color}`}>
                <kpi.icon size={24} />
              </div>
              <div className={cn(
                "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                kpi.change.startsWith('+') ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
              )}>
                {kpi.change}
              </div>
            </div>
            <div className="text-3xl font-bold text-sap-text mb-1">{kpi.value}</div>
            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Headcount Trend */}
        <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-200">
          <h3 className="text-sm font-bold text-sap-text mb-6">Headcount Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={headcountData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '4px', border: '1px solid #E5E7EB', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
                />
                <Line type="monotone" dataKey="headcount" stroke="#00708C" strokeWidth={3} dot={{ r: 4, fill: '#00708C' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Distribution */}
        <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-200">
          <h3 className="text-sm font-bold text-sap-text mb-6">Headcount by Department</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} width={100} />
                <Tooltip 
                  cursor={{ fill: '#F9FAFB' }}
                  contentStyle={{ borderRadius: '4px', border: '1px solid #E5E7EB', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
                />
                <Bar dataKey="count" fill="#00708C" radius={[0, 2, 2, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Diversity Pie Chart */}
        <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-200">
          <h3 className="text-sm font-bold text-sap-text mb-6">Gender Diversity</h3>
          <div className="h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={diversityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {diversityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity / Insights */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-sap-text mb-6">Hackathon Project Insights</h3>
          <div className="space-y-4">
            {[
              { title: 'Internal Mobility Peak', desc: 'Internal hiring reached an all-time high of 68% this month.', type: 'positive' },
              { title: 'Skill Gap Reduction', desc: 'Average skill gap across the organization reduced by 15% through Percipio.', type: 'positive' },
              { title: 'Peer Recognition Impact', desc: 'Employee engagement scores up by 22% since peer recognition launch.', type: 'positive' },
              { title: 'AI Matching Accuracy', desc: '92% of AI-recommended roles resulted in successful internal placements.', type: 'info' },
            ].map((insight, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border-l-4 border-sap-blue">
                <div className="flex-1">
                  <div className="text-sm font-bold text-sap-text">{insight.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{insight.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
