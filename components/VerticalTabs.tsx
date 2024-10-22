'use client';
import React, { useState } from 'react';

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode; // Include content directly in the tab definition
};

interface VerticalTabsProps {
  tabs: Tab[];
}

const VerticalTabs = ({ tabs }: VerticalTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="grid grid-cols-4 sm:grid-cols-12 gap-12 px-4">
      {/* Tab List */}
      <div role="tablist" className="card col-span-4 sm:col-span-4 items-center gap-4">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`btn btn-block btn-outline btn-info bg-base-300 ${activeTab === tab.id ? 'font-bold btn-active' : ''}`} >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="card col-span-4 sm:col-span-8" >
        <div className="card-body bg-base-300 shadow rounded-lg p-6">
          {tabs.map((tab) => (
            <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
              {tab.content} {/* Render the tab content directly */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
