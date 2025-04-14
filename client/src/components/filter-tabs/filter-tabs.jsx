import { useState } from "react";
import ByDate from "./by-date";
import ByMaster from "./by-master";

const FilterTabs = () => {
  const [activeTab, setActiveTab] = useState("ByDate");

  const renderTabContent = () => {
    switch (activeTab) {
      case "ByDate":
        return <ByDate />;
      case "ByMaster":
        return <ByMaster />;
    }
  };

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-4">
        <button
          id="date-tab"
          className={`flex-1 py-2 px-4 font-medium border-indigo-600 ${
            activeTab === "ByDate"
              ? "text-indigo-600 border-b-2 "
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("ByDate")}
        >
          <svg
            className="icon mr-2 w-6 h-6 inline-block align-middle"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
          </svg>
          По дате
        </button>
        <button
          id="master-tab"
          className={`flex-1 py-2 px-4 font-medium border-indigo-600 ${
            activeTab === "ByMaster"
              ? "text-indigo-600 border-b-2 "
              : "text-gray-500"
          } `}
          onClick={() => setActiveTab("ByMaster")}
        >
          <svg
            className="icon mr-2 w-6 h-6 inline-block align-middle"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          К мастеру
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default FilterTabs;
