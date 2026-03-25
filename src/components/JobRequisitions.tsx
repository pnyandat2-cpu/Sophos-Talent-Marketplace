import React, { useState } from 'react';
import { 
  Plus, 
  FileText, 
  LayoutDashboard, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  MoreHorizontal, 
  Filter, 
  Eye, 
  CheckCircle2, 
  X,
  ArrowUpDown,
  User,
  Star,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '../lib/utils';
import { UserAvatar } from './UserAvatar';
import { JobRequisition, Candidate } from '../types';

const MOCK_REQUISITIONS: JobRequisition[] = [
  {
    id: '1',
    title: 'Operations Manager',
    reqId: '57',
    hiringManager: 'Paula Nyandat',
    candidatesCount: 4,
    newCandidatesCount: 0,
    ageDays: 124,
    status: 'Open',
    postings: ['I/E']
  },
  {
    id: '2',
    title: 'IT Project Manager',
    reqId: '101',
    hiringManager: 'James Karanja',
    candidatesCount: 31,
    newCandidatesCount: 12,
    ageDays: 0,
    status: 'Offer',
    postings: ['I/E/A']
  },
  {
    id: '3',
    title: 'Insurance Specialist',
    reqId: '121',
    hiringManager: 'Harriet Apondi',
    candidatesCount: 3,
    newCandidatesCount: 1,
    ageDays: 0,
    status: 'Open',
    postings: ['I/E']
  }
];

const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 'c1',
    name: 'Abdi Hassan',
    isNew: false,
    status: 'Short List',
    rating: 100.0,
    source: 'Corporate: Default Site',
    candidateSource: 'Corporate: Default Site',
    avatarUrl: 'https://picsum.photos/seed/abdi/100/100'
  },
  {
    id: 'c2',
    name: 'Amina Mohammed',
    isNew: false,
    status: 'Phone Screen',
    rating: 100.0,
    source: 'Corporate: Default Site',
    candidateSource: 'Corporate: Default Site',
    avatarUrl: 'https://picsum.photos/seed/amina/100/100'
  },
  {
    id: 'c3',
    name: 'Catherine Wanjiku',
    isNew: false,
    status: 'Accepted',
    rating: 100.0,
    source: 'Corporate: Default Site',
    candidateSource: 'Corporate: Default Site',
    avatarUrl: 'https://picsum.photos/seed/catherine/100/100'
  },
  {
    id: 'c4',
    name: 'Caleb Otieno',
    isNew: true,
    status: 'New Application',
    rating: 100.0,
    source: 'Corporate: Default Site',
    candidateSource: 'Corporate: Default Site',
    avatarUrl: 'https://picsum.photos/seed/caleb/100/100'
  }
];

const PIPELINE_STAGES = [
  { id: 'new', label: 'New Application', count: 12 },
  { id: 'phone', label: 'Phone Screen', count: 5 },
  { id: 'shortlist', label: 'Short List', count: 4 },
  { id: 'interview', label: 'Interview', count: 3 },
  { id: 'background', label: 'Background Check', count: 0 },
  { id: 'assessments', label: 'Assessments', count: 0 },
  { id: 'offer', label: 'Offer', count: 1 },
];

export function JobRequisitions() {
  const [selectedReqId, setSelectedReqId] = useState<string | null>('2'); // Default to Project Manager (101)
  const [searchQuery, setSearchQuery] = useState('');

  const handleAction = (label: string) => {
    toast.success(`${label} triggered`);
  };

  const selectedReq = MOCK_REQUISITIONS.find(r => r.id === selectedReqId);

  return (
    <div className="flex flex-col min-h-full bg-white animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-sap-text">Job Requisitions</h1>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleAction('Create New')}
              className="flex items-center gap-1.5 text-xs font-semibold text-sap-blue hover:underline"
            >
              <Plus size={14} />
              Create New
            </button>
            <button 
              onClick={() => handleAction('Offer Approvals')}
              className="flex items-center gap-1.5 text-xs font-semibold text-sap-blue hover:underline"
            >
              <FileText size={14} />
              Offer Approvals
            </button>
            <button 
              onClick={() => handleAction('RMK Dashboard')}
              className="flex items-center gap-1.5 text-xs font-semibold text-sap-blue hover:underline"
            >
              <LayoutDashboard size={14} />
              RMK Dashboard
            </button>
          </div>
        </div>

        <div className="flex items-center gap-12 mb-4">
          <div className="flex flex-col cursor-pointer group" onClick={() => handleAction('Total Requisitions')}>
            <span className="text-3xl font-bold text-sap-text group-hover:text-sap-blue transition-colors">11</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total</span>
          </div>
          <div className="flex flex-col cursor-pointer group" onClick={() => handleAction('Active Requisitions')}>
            <span className="text-3xl font-bold text-sap-text group-hover:text-sap-blue transition-colors">89</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active</span>
          </div>
          <div className="flex flex-col cursor-pointer group" onClick={() => handleAction('Pending Requisitions')}>
            <span className="text-3xl font-bold text-sap-text group-hover:text-sap-blue transition-colors">31</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pending</span>
          </div>
          <div className="flex flex-col cursor-pointer group" onClick={() => handleAction('Closed Requisitions')}>
            <span className="text-3xl font-bold text-sap-text group-hover:text-sap-blue transition-colors">31</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Closed</span>
          </div>
          <div className="h-10 w-[1px] bg-gray-200" />
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-semibold text-gray-500">Average Days Open</span>
              <span className="text-lg font-bold text-green-600">124</span>
            </div>
            <div className="w-32 h-1.5 bg-gray-100 rounded-full mt-1">
              <div className="w-3/4 h-full bg-green-500 rounded-full" />
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed max-w-5xl">
          Welcome to the requisition listing page. This list page displays all the requisitions to which you have access to, and navigational elements to interact with the requisitions. Access is controlled by the Operator fields in the job requisition. The analytic widget above is interactive, acting as a method to filter the requisition list to view only requisitions that meet certain criteria. Use the "Clear all filters" link to return to a non-filtered view of the requisition list.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="px-6 py-2 bg-[#F8F9FA] border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleAction('Approve')}
            className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-300 rounded text-xs font-semibold hover:bg-gray-50"
          >
            <CheckCircle2 size={14} className="text-green-600" />
            Approve
          </button>
          <div className="h-6 w-[1px] bg-gray-300 mx-1" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-600">Filter Job Requisitions:</span>
            <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-1 bg-white border border-gray-300 rounded-sm text-xs font-semibold outline-none focus:border-sap-blue">
                <option>Open Job Requisitions</option>
                <option>All Job Requisitions</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
          <button 
            onClick={() => handleAction('Filter Options')}
            className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-300 rounded-sm text-xs font-semibold hover:bg-gray-50"
          >
            <Filter size={14} />
            Filter Options
          </button>
          <button 
            onClick={() => handleAction('Display Options')}
            className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-300 rounded-sm text-xs font-semibold hover:bg-gray-50"
          >
            <Eye size={14} />
            Display Options
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-600">Highlight Job Title:</span>
          <div className="relative">
            <Search size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..."
              className="pl-8 pr-8 py-1 bg-white border border-gray-300 rounded-sm text-xs outline-none focus:border-sap-blue w-48"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Requisitions Table */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F8F9FA] border-b border-gray-200">
              <th className="px-6 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider w-1/4">Job Title</th>
              <th className="px-6 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-sap-blue">
                  Req Id
                  <ArrowUpDown size={10} />
                </div>
              </th>
              <th className="px-6 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">Hiring Manager</th>
              <th className="px-6 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">Candidates</th>
              <th className="px-6 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">Age(Days)</th>
              <th className="px-6 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">Job Postings</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_REQUISITIONS.map((req) => (
              <tr 
                key={req.id} 
                onClick={() => setSelectedReqId(req.id)}
                className={cn(
                  "border-b border-gray-100 hover:bg-blue-50/30 cursor-pointer transition-colors",
                  selectedReqId === req.id && "bg-blue-50/50"
                )}
              >
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-sap-blue hover:underline">{req.title}</span>
                    <ExternalLink size={12} className="text-gray-400" />
                  </div>
                </td>
                <td className="px-6 py-3 text-sm text-gray-600">{req.reqId}</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{req.hiringManager}</span>
                    <User size={12} className="text-gray-400" />
                  </div>
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-sap-text">{req.candidatesCount}</span>
                    {req.newCandidatesCount > 0 && (
                      <span className="text-xs text-orange-600 font-semibold">({req.newCandidatesCount} New)</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-3">
                  <span className={cn(
                    "text-sm font-semibold",
                    req.ageDays > 100 ? "text-red-600" : "text-gray-600"
                  )}>
                    {req.ageDays > 0 ? req.ageDays : '-'}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500">{req.postings.join('/')}</span>
                    <LayoutDashboard size={12} className="text-gray-400" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Section (Selected Requisition) */}
      {selectedReq && (
        <div className="border-t-4 border-sap-blue bg-white animate-in slide-in-from-bottom duration-300">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-sap-text">{selectedReq.title} <span className="text-gray-400 font-normal">({selectedReq.reqId})</span></h2>
                <button 
                  onClick={() => handleAction('View Details')}
                  className="text-xs font-semibold text-sap-blue hover:underline"
                >
                  View Details
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-600">Status:</span>
                  <div className="relative">
                    <select className="appearance-none pl-3 pr-8 py-1 bg-white border border-gray-300 rounded-sm text-xs font-semibold outline-none focus:border-sap-blue">
                      <option>{selectedReq.status}</option>
                      <option>Closed</option>
                      <option>On Hold</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-600">Hiring Manager: <span className="font-normal">{selectedReq.hiringManager}</span></p>
                  <p className="text-xs font-bold text-gray-600">Age: <span className="text-green-600">{selectedReq.ageDays}d</span></p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button 
                onClick={() => handleAction('Job Profile')}
                className="flex items-center gap-1.5 text-xs font-semibold text-sap-blue hover:underline"
              >
                <FileText size={14} />
                Job Profile
              </button>
              <button 
                onClick={() => handleAction('Job Postings')}
                className="flex items-center gap-1.5 text-xs font-semibold text-sap-blue hover:underline"
              >
                <LayoutDashboard size={14} />
                Job Postings (3)
              </button>
              <button 
                onClick={() => handleAction('Candidate Search')}
                className="flex items-center gap-1.5 text-xs font-semibold text-sap-blue hover:underline"
              >
                <Search size={14} />
                Candidate Search
              </button>
              <button 
                onClick={() => handleAction('Candidate Ratings')}
                className="flex items-center gap-1.5 text-xs font-semibold text-sap-blue hover:underline"
              >
                <Star size={14} />
                View Candidate Ratings (4)
              </button>
            </div>
          </div>

          {/* Talent Pipeline */}
          <div className="px-6 py-4 bg-[#F8F9FA] border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-sap-text">Talent Pipeline</h3>
                <button className="flex items-center gap-1 text-[10px] font-bold text-sap-blue uppercase tracking-wider">
                  Hide Talent Pipeline
                  <ChevronDown size={12} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1 overflow-x-auto pb-2">
              <button className="p-1 hover:bg-gray-200 rounded-sm">
                <ChevronLeft size={20} className="text-gray-400" />
              </button>
              {PIPELINE_STAGES.map((stage, idx) => (
                <div 
                  key={stage.id}
                  className={cn(
                    "flex-1 min-w-[120px] p-3 border border-gray-300 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer hover:border-sap-blue hover:bg-white",
                    idx === 0 ? "bg-white border-l-4 border-l-sap-blue" : "bg-gray-50"
                  )}
                >
                  <span className="text-lg font-bold text-sap-text">{stage.count}</span>
                  <span className="text-[10px] font-bold text-gray-500 text-center leading-tight">{stage.label}</span>
                </div>
              ))}
              <button className="p-1 hover:bg-gray-200 rounded-sm">
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Candidates List */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-sap-text">Candidates : View all candidates ({selectedReq.candidatesCount})</h3>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-300 rounded-sm text-xs font-semibold hover:bg-gray-50">
                  Action
                  <ChevronDown size={14} />
                </button>
                <span className="text-xs text-gray-500">0 selected</span>
                <button className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-300 rounded-sm text-xs font-semibold hover:bg-gray-50">
                  <Eye size={14} />
                  Display Options
                </button>
              </div>
            </div>

            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="w-10 px-2 py-2">
                    <input type="checkbox" className="rounded-sm" />
                  </th>
                  <th className="px-4 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-sap-blue">
                      Name
                      <ArrowUpDown size={10} />
                    </div>
                  </th>
                  <th className="px-4 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">New</th>
                  <th className="px-4 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="px-4 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">Source</th>
                  <th className="px-4 py-2 text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider">Candidate Source</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_CANDIDATES.map((candidate) => (
                  <tr key={candidate.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                    <td className="px-2 py-3 text-center">
                      <input type="checkbox" className="rounded-sm" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <UserAvatar fullName={candidate.name} size="sm" className="border border-gray-200" />
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-sap-blue group-hover:underline cursor-pointer">{candidate.name}</span>
                          <div className="flex items-center gap-1">
                            <FileText size={10} className="text-gray-400" />
                            <User size={10} className="text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {candidate.isNew && (
                        <span className="px-1.5 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-sm">NEW</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{candidate.status}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{candidate.rating.toFixed(1)}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{candidate.source}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{candidate.candidateSource}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
