import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { EmployeeProfile } from './components/EmployeeProfile';
import { OrgChart } from './components/OrgChart';
import { Learning } from './components/Learning';
import { Performance } from './components/Performance';
import { JobRequisitions } from './components/JobRequisitions';
import { 
  DollarSign, 
  MessageSquare, 
  Activity, 
  Target, 
  Briefcase, 
  Users 
} from 'lucide-react';
import { Analytics } from './components/Analytics';
import { OpportunityMarketplace } from './components/OpportunityMarketplace';
import { Development } from './components/Development';

const GenericSection = ({ title, icon: Icon, onReturn }: { title: string, icon: any, onReturn: () => void }) => (
  <div className="max-w-7xl mx-auto px-8 py-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="inline-flex p-6 bg-blue-50 rounded-3xl mb-8">
      <Icon size={64} className="text-sap-blue" />
    </div>
    <h1 className="text-4xl font-bold text-sap-text mb-4">{title}</h1>
    <p className="text-gray-500 max-w-md mx-auto">This section is currently under development as part of the SAP SuccessFactors integration project.</p>
    <button 
      onClick={onReturn}
      className="mt-10 px-8 py-3 bg-sap-blue text-white rounded-full font-bold hover:bg-sap-dark-blue transition-all shadow-md"
    >
      Return to Dashboard
    </button>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);

  const handleNavigateToProfile = (employeeId: string) => {
    setSelectedEmployeeId(employeeId);
    setActiveTab('profile');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigateToProfile={handleNavigateToProfile} onNavigateToTab={setActiveTab} />;
      case 'profile':
        return <EmployeeProfile employeeId={selectedEmployeeId} onNavigateToProfile={handleNavigateToProfile} />;
      case 'orgchart':
        return <OrgChart onNavigateToProfile={handleNavigateToProfile} />;
      case 'requisitions':
      case 'recruiting':
        return <JobRequisitions />;
      case 'learning':
        return <Learning />;
      case 'performance':
        return <Performance />;
      case 'analytics':
        return <Analytics />;
      case 'marketplace':
        return <OpportunityMarketplace />;
      case 'development':
        return <Development />;
      case 'compensation':
        return <GenericSection title="Compensation" icon={DollarSign} onReturn={() => setActiveTab('dashboard')} />;
      case 'feedback':
        return <GenericSection title="Continuous Feedback" icon={MessageSquare} onReturn={() => setActiveTab('dashboard')} />;
      case 'performance_cont':
        return <GenericSection title="Continuous Performance" icon={Activity} onReturn={() => setActiveTab('dashboard')} />;
      case 'goals':
        return <GenericSection title="Goals" icon={Target} onReturn={() => setActiveTab('dashboard')} />;
      case 'growth':
        return <GenericSection title="Growth Portfolio" icon={Briefcase} onReturn={() => setActiveTab('dashboard')} />;
      case 'succession':
        return <GenericSection title="Succession" icon={Users} onReturn={() => setActiveTab('dashboard')} />;
      default:
        return <Dashboard onNavigateToProfile={handleNavigateToProfile} onNavigateToTab={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
