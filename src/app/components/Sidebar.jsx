"use client"
import { FaStar, FaClock, FaChevronRight, FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-12 left-0 h-full w-64 bg-gray-100 shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out flex flex-col`}
    >
      <div className="overflow-y-auto flex-grow">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-4">Favorites</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
              aria-label="Close sidebar"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <ul>
            {[
              "Currencies",
              "Currency exchange rates",
              "General journals",
              "Trial balance",
              "Voucher transactions",
            ].map((item, index) => (
              <li key={index} className="flex items-center mb-2 justify-between">
              <span>{item}</span>
                <FaStar className="text-blue-900 mr-2" />
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-t border-gray-300">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaClock className="mr-2" />
            Recent
          </h2>
        </div>
        <div className="p-4 border-t border-gray-300">
          <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">
            Workspaces
            <FaChevronRight />
          </h2>
        </div>
        <div className="p-4 border-t border-gray-300">
          <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">
            Modules
            <FaChevronRight />
          </h2>
          <ul>
            {[
              "Accounts payable",
              "Accounts receivable",
              "Audit workbench",
              "Budgeting",
              "Cash and bank management",
              "Common",
              "Consolidations",
              "Cost accounting",
              "Cost management",
              "Credit and collections",
              "Demo data",
              "Expense management",
              "Fixed assets",
              "Fleet management",
              "General ledger",
              "Human resources",
              "Inventory management",
              "Master planning",
            ].map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;