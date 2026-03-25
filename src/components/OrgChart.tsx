import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Filter, 
  Download, 
  Maximize2,
  Mail,
  Phone,
  MoreVertical,
  Users,
  X,
  Edit2,
  MapPin,
  Clock,
  AlertCircle,
  Share2
} from 'lucide-react';
import { toast } from 'sonner';
import { UserAvatar } from './UserAvatar';
import { MOCK_EMPLOYEES } from '../constants';
import { cn } from '../lib/utils';

interface OrgChartProps {
  onNavigateToProfile: (id: string) => void;
}

export function OrgChart({ onNavigateToProfile }: OrgChartProps) {
  const [selectedEmployee, setSelectedEmployee] = useState(MOCK_EMPLOYEES[2]); // Default to James Karanja
  
  const handleAction = (action: string) => {
    toast.success(`${action} triggered for ${selectedEmployee.firstName}`);
  };

  // Find manager of selected employee
  const manager = MOCK_EMPLOYEES.find(e => e.id === selectedEmployee.managerId);
  
  // Find direct reports of selected employee
  const reports = MOCK_EMPLOYEES.filter(e => e.managerId === selectedEmployee.id);
  
  // If no reports, maybe show peers of the selected employee
  const displayReports = reports.length > 0 ? reports : MOCK_EMPLOYEES.filter(e => e.managerId === selectedEmployee.managerId && e.id !== selectedEmployee.id);

  return (
    <div className="h-full flex flex-col animate-in zoom-in-95 duration-500 -m-8">
      {/* Chart Area */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 relative bg-white overflow-auto p-12 flex flex-col items-center">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#32363A 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          {/* Org Chart Tree */}
          <div className="relative z-10 flex flex-col items-center space-y-12">
            {/* Manager */}
            {manager && (
              <div className="flex flex-col items-center">
                <div 
                  onClick={() => setSelectedEmployee(manager)}
                  className={cn(
                    "w-72 bg-white rounded-sm shadow-sm border p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-md",
                    selectedEmployee.id === manager.id ? "border-sap-blue ring-1 ring-sap-blue" : "border-gray-200"
                  )}
                >
                  <UserAvatar firstName={manager.firstName} lastName={manager.lastName} size="lg" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-sap-text truncate">{manager.firstName} {manager.lastName}</h4>
                    <p className="text-[10px] text-gray-500 truncate">{manager.title}</p>
                    <p className="text-[10px] text-sap-blue font-bold mt-1">2 / 41</p>
                  </div>
                  <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center text-sap-blue">
                    <Users size={14} />
                  </div>
                </div>
                <div className="w-[2px] h-12 bg-gray-200" />
              </div>
            )}

            {/* Selected/Middle Level */}
            <div className="flex flex-col items-center">
              <div 
                className={cn(
                  "w-72 bg-white rounded-sm shadow-sm border p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-md",
                  "border-sap-blue ring-1 ring-sap-blue"
                )}
              >
                <UserAvatar firstName={selectedEmployee.firstName} lastName={selectedEmployee.lastName} size="lg" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-sap-text truncate">{selectedEmployee.firstName} {selectedEmployee.lastName}</h4>
                  <p className="text-[10px] text-gray-500 truncate">{selectedEmployee.title}</p>
                  <p className="text-[10px] text-sap-blue font-bold mt-1">5 / 33 • 8 Matrix</p>
                </div>
                <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center text-sap-blue">
                  <Users size={14} />
                </div>
              </div>
              <div className="w-[2px] h-12 bg-gray-200" />
              <div className="w-8 h-8 bg-sap-blue rounded-full flex items-center justify-center text-white shadow-lg">
                <ChevronDown size={20} />
              </div>
            </div>

            {/* Reports Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {displayReports.map((report) => (
                <div key={report.id} className="flex flex-col items-center">
                  <div className="w-[2px] h-12 bg-gray-200 -mt-12" />
                  <div 
                    onClick={() => setSelectedEmployee(report)}
                    className={cn(
                      "w-64 bg-white rounded-sm shadow-sm border p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-md",
                      selectedEmployee.id === report.id ? "border-sap-blue ring-1 ring-sap-blue" : "border-gray-200"
                    )}
                  >
                    <UserAvatar firstName={report.firstName} lastName={report.lastName} size="md" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-sap-text truncate">{report.firstName} {report.lastName}</h4>
                      <p className="text-[10px] text-gray-500 truncate">{report.title}</p>
                      <p className="text-[10px] text-sap-blue font-bold mt-1">2 / 9 • 7 Matrix</p>
                    </div>
                    <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center text-sap-blue">
                      <Users size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
 
        {/* Spotlight Side Panel */}
        <aside className="w-96 bg-white border-l border-gray-200 flex flex-col overflow-y-auto">
          <div className="relative">
            <img src="https://picsum.photos/seed/nature/400/200" className="w-full h-40 object-cover" referrerPolicy="no-referrer" />
            <div className="absolute top-4 right-4 flex gap-2">
              <button 
                onClick={() => handleAction('Maximize')}
                className="p-1.5 bg-white/80 backdrop-blur-sm rounded-md shadow-sm hover:bg-white transition-colors"
              >
                <Maximize2 size={16} />
              </button>
              <button 
                onClick={() => handleAction('Close')}
                className="p-1.5 bg-white/80 backdrop-blur-sm rounded-md shadow-sm hover:bg-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div 
              className="absolute -bottom-10 left-6 cursor-pointer group"
              onClick={() => onNavigateToProfile(selectedEmployee.id)}
            >
              <UserAvatar 
                firstName={selectedEmployee.firstName} 
                lastName={selectedEmployee.lastName} 
                size="xl" 
                className="border-4 border-white shadow-md group-hover:scale-105 transition-transform"
              />
            </div>
          </div>
 
          <div className="mt-12 px-6 pb-8 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h2 
                  className="text-xl font-bold text-sap-text cursor-pointer hover:text-sap-blue transition-colors"
                  onClick={() => onNavigateToProfile(selectedEmployee.id)}
                >
                  {selectedEmployee.firstName} {selectedEmployee.lastName}
                </h2>
                <Edit2 
                  size={16} 
                  className="text-sap-blue cursor-pointer hover:scale-110 transition-transform" 
                  onClick={() => handleAction('Edit')}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">she / her / hers</p>
              <p className="text-sm font-semibold text-gray-700 mt-2">{selectedEmployee.title}</p>
              <p className="text-xs text-gray-500">{selectedEmployee.department}</p>
            </div>
 
            <div className="flex gap-2">
              <button 
                onClick={() => handleAction('Call')}
                className="flex-1 py-1.5 bg-blue-50 text-sap-blue text-xs font-bold rounded-sm flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
              >
                <Phone size={14} /> Office
              </button>
              <button 
                onClick={() => handleAction('Email')}
                className="flex-1 py-1.5 bg-blue-50 text-sap-blue text-xs font-bold rounded-sm flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
              >
                <Mail size={14} /> Email
              </button>
            </div>
 
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-400 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-gray-700">{selectedEmployee.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gray-400 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-gray-700">07:48 AM (EAT - Nairobi)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle size={16} className="text-gray-400 mt-0.5" />
                <div className="text-xs">
                  <p className="text-gray-600 leading-relaxed italic">
                    "Habari! I am {selectedEmployee.firstName}, I am passionate about driving digital transformation in the Kenyan market."
                  </p>
                </div>
              </div>
            </div>
 
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Direct Manager</h3>
              {manager ? (
                <div 
                  onClick={() => setSelectedEmployee(manager)}
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-sm transition-colors"
                >
                  <UserAvatar firstName={manager.firstName} lastName={manager.lastName} size="md" />
                  <div>
                    <p className="text-xs font-bold text-sap-text">{manager.firstName} {manager.lastName}</p>
                    <p className="text-[10px] text-gray-500">{manager.title}</p>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-gray-500">No direct manager</p>
              )}
            </div>
 
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Actions</h3>
              <button 
                onClick={() => handleAction('All Actions')}
                className="w-full flex items-center justify-between text-xs font-bold text-sap-blue hover:bg-blue-50 p-2 rounded-sm transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Share2 size={16} />
                  <span>All Actions</span>
                </div>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
