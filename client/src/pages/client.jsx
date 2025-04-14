import { observer } from "mobx-react-lite";
import { useStores } from "../store-context";
import { NavLink } from "react-router";
import { AppRoutes } from "../const";
import FilterTabs from "../components/filter-tabs/filter-tabs";
import { useEffect } from "react";

const Client = observer(() => {
  const { userStore } = useStores();

  return (
    <>
      {/* Main Content */}
      <main className="flex-1 container mx-auto min-w-[340px] p-4 pb-20">
        {/* Booking Filters */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Запись</h2>
          <FilterTabs />
        </div>
        {/* Services Selection */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Select Services</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="service1"
                  className="custom-checkbox"
                />
                <label htmlFor="service1" className="ml-2" />
                <div className="ml-3">
                  <h3 className="font-medium">Women's Haircut</h3>
                  <p className="text-sm text-gray-500">45 min</p>
                </div>
              </div>
              <span className="font-medium">$45</span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="service2"
                  className="custom-checkbox"
                />
                <label htmlFor="service2" className="ml-2" />
                <div className="ml-3">
                  <h3 className="font-medium">Men's Haircut</h3>
                  <p className="text-sm text-gray-500">30 min</p>
                </div>
              </div>
              <span className="font-medium">$30</span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="service3"
                  className="custom-checkbox"
                />
                <label htmlFor="service3" className="ml-2" />
                <div className="ml-3">
                  <h3 className="font-medium">Hair Coloring</h3>
                  <p className="text-sm text-gray-500">2 hours</p>
                </div>
              </div>
              <span className="font-medium">$120</span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="service4"
                  className="custom-checkbox"
                />
                <label htmlFor="service4" className="ml-2" />
                <div className="ml-3">
                  <h3 className="font-medium">Hair Treatment</h3>
                  <p className="text-sm text-gray-500">1 hour</p>
                </div>
              </div>
              <span className="font-medium">$75</span>
            </div>
          </div>
        </div>
        {/* Booking Summary */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Booking Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">May 10, 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">10:30 AM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Master:</span>
              <span className="font-medium">Anna Smith</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Services:</span>
              <span className="font-medium">Women's Haircut</span>
            </div>
            <div className="border-t border-gray-200 my-3" />
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-indigo-600">$45</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition mt-4">
              Confirm Booking
            </button>
          </div>
        </div>
      </main>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
        <div className="flex justify-around">
          <a
            href="#"
            className="flex flex-col items-center justify-center p-3 text-indigo-600"
          >
            <svg
              className="icon mb-1 w-6 h-6 inline-block align-middle"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
              <path d="M12 19c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" opacity=".3" />
            </svg>
            <span className="text-xs">Book</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center p-3 text-gray-500 hover:text-indigo-600"
          >
            <svg
              className="icon mb-1 w-6 h-6 inline-block align-middle"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <span className="text-xs">Info</span>
          </a>
          <NavLink
            to={AppRoutes.Master}
            className="flex flex-col items-center justify-center p-3 text-gray-500 hover:text-indigo-600"
          >
            <svg className="icon mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span className="text-xs">Profile</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
});

export default Client;
