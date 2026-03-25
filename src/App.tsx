import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { EmployeeProfile } from './components/EmployeeProfile';
import { OrgChart } from './components/OrgChart';
import { Learning } from './components/Learning';
import { Performance } from './components/Performance';
import { JobRequisitions } from './components/JobRequisitions';
import { Analytics } from './components/Analytics';

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
        return <JobRequisitions />;
      case 'learning':
        return <Learning />;
      case 'performance':
        return <Performance />;
      case 'analytics':
        return <Analytics />;
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
