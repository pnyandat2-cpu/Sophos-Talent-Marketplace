import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Award, 
  ChevronRight,
  Edit2,
  Download,
  Share2,
  CheckCircle2,
  Clock,
  TrendingUp,
  User,
  Heart,
  Users,
  BookOpen,
  FileText,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';
import { UserAvatar } from './UserAvatar';
import { MOCK_EMPLOYEES, MOCK_GOALS } from '../constants';
import { cn } from '../lib/utils';

interface EmployeeProfileProps {
  employeeId: string | null;
  onNavigateToProfile: (id: string) => void;
}

const PROFILE_NAV_ITEMS = [
  { id: 'personal', label: 'Personal Data', icon: User },
  { id: 'job', label: 'Job Data', icon: Briefcase },
  { id: 'compensation', label: 'Compensation', icon: Award },
  { id: 'time', label: 'Time Management', icon: Clock },
  { id: 'benefits', label: 'Benefits', icon: Heart },
  { id: 'performance', label: 'Performance and Goals', icon: TrendingUp },
  { id: 'succession', label: 'Succession', icon: Users },
  { id: 'learning', label: 'Learning and Development', icon: BookOpen },
  { id: 'talent', label: 'Talent Profile', icon: FileText },
];

export function EmployeeProfile({ employeeId, onNavigateToProfile }: EmployeeProfileProps) {
  const [activeSection, setActiveSection] = useState('personal');
  const employee = MOCK_EMPLOYEES.find(e => e.id === employeeId) || MOCK_EMPLOYEES[2];

  const handleAction = (action: string) => {
    toast.success(`${action} triggered for ${employee.firstName}`);
  };

  return (
    <div className="max-w-7xl mx-auto animate-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-sap-text">People Profile</h1>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleAction('Public Profile')}
            className="px-4 py-1.5 bg-white border border-gray-200 text-sap-blue rounded-sm text-sm font-bold hover:bg-gray-50 transition-colors"
          >
            Public Profile
          </button>
          <button 
            onClick={() => handleAction('Date selection')}
            className="px-4 py-1.5 bg-white border border-gray-200 text-sap-blue rounded-sm text-sm font-bold hover:bg-gray-50 flex items-center gap-2 transition-colors"
          >
            <Calendar size={16} />
            As of Today
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Left Sidebar Profile Card */}
        <div className="w-80 flex-shrink-0 space-y-6">
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
            <div className="h-24 relative">
              <img src="https://picsum.photos/seed/landscape/400/200" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-10 left-6">
                <UserAvatar 
                  firstName={employee.firstName} 
                  lastName={employee.lastName} 
                  size="xl" 
                  className="rounded-full border-4 border-white shadow-md"
                />
              </div>
            </div>
            <div className="pt-12 px-6 pb-6 space-y-4">
              <div className="flex items-center gap-2 text-xs text-sap-blue font-bold">
                <Clock size={14} />
                <span>Out of Office • Back on Apr 1, 2026</span>
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-sap-text">{employee.firstName} {employee.lastName}</h2>
                  <FileText size={16} className="text-sap-blue" />
                </div>
                <p className="text-sm text-gray-500 mt-1">{employee.title}</p>
                <p className="text-xs text-gray-400">{employee.department} (5000131)</p>
              </div>

              <button 
                onClick={() => handleAction('All Actions')}
                className="w-full py-2 bg-white border border-sap-blue text-sap-blue rounded-sm text-sm font-bold hover:bg-blue-50 transition-colors"
              >
                All Actions
              </button>

              <p className="text-xs font-bold text-sap-blue">Direct Reports: 6 • Team Size: 6</p>

              <div className="pt-4 border-t border-gray-100 space-y-1">
                {PROFILE_NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-sm transition-colors",
                      activeSection === item.id 
                        ? "bg-blue-50 text-sap-blue font-bold" 
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <item.icon size={18} className={activeSection === item.id ? "text-sap-blue" : "text-gray-400"} />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-bold text-sap-text mb-8">Personal Data</h2>

          <div className="grid grid-cols-1 gap-8">
            {/* Personal Information */}
            <div className="bg-white rounded-sm border border-gray-200 shadow-sm p-8 relative group">
              <div className="absolute top-6 right-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <AlertCircle size={18} className="text-orange-500 cursor-help" onClick={() => handleAction('View alerts')} />
                <Edit2 size={18} className="text-sap-blue cursor-pointer" onClick={() => handleAction('Edit personal info')} />
                <Clock size={18} className="text-sap-blue cursor-pointer" onClick={() => handleAction('View history')} />
              </div>

              <h3 className="text-xl font-bold text-sap-text mb-8">Personal Information</h3>
              
              <div className="grid grid-cols-2 gap-y-6">
                {[
                  { label: 'First Name:', value: employee.firstName },
                  { label: 'Last Name:', value: employee.lastName },
                  { label: 'Salutation:', value: 'Mrs. (mrs)' },
                  { label: 'Gender:', value: '******', isSecret: true },
                  { label: 'Global Information:', value: 'Kenya (KEN)' },
                ].map((field) => (
                  <div key={field.label}>
                    <p className="text-sm text-gray-500 mb-1">{field.label}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-base font-medium text-sap-text">{field.value}</p>
                      {field.isSecret && (
                        <button 
                          onClick={() => handleAction('Reveal secret field')}
                          className="text-xs font-bold text-sap-blue hover:underline"
                        >
                          Show
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button 
                  onClick={() => handleAction('View all personal info')}
                  className="text-sm font-bold text-sap-blue hover:underline"
                >
                  View All
                </button>
              </div>
            </div>

            {/* Biographical Information */}
            <div className="bg-white rounded-sm border border-gray-200 shadow-sm p-8">
              <h3 className="text-xl font-bold text-sap-text mb-8">Biographical Information</h3>
              
              <div className="grid grid-cols-2 gap-y-6">
                {[
                  { label: 'Person Id:', value: 'M1' },
                  { label: 'Date Of Birth:', value: 'Sep 15, 1980' },
                  { label: 'Country Of Birth:', value: 'Kenya (KEN)' },
                ].map((field) => (
                  <div key={field.label}>
                    <p className="text-sm text-gray-500 mb-1">{field.label}</p>
                    <p className="text-base font-medium text-sap-text">{field.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button 
                  onClick={() => handleAction('View all biographical info')}
                  className="text-sm font-bold text-sap-blue hover:underline"
                >
                  View All
                </button>
              </div>
            </div>

            {/* Addresses */}
            <div className="bg-white rounded-sm border border-gray-200 shadow-sm p-8 relative group">
              <div className="absolute top-6 right-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <AlertCircle size={18} className="text-orange-500 cursor-help" onClick={() => handleAction('View address alerts')} />
                <Edit2 size={18} className="text-sap-blue cursor-pointer" onClick={() => handleAction('Edit address')} />
                <Clock size={18} className="text-sap-blue cursor-pointer" onClick={() => handleAction('View address history')} />
              </div>
              <h3 className="text-xl font-bold text-sap-text mb-8">Addresses</h3>
              <p className="text-sm text-gray-500 mb-1">Address Type:</p>
              <p className="text-base font-medium text-sap-text">Home Address (Nairobi, Kenya)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
