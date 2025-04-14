const SelectMaster = () => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
        Выберите мастера
      </h2>
      <div className="space-y-3">
        <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
          <img
            src="https://randomuser.me/api/portraits/women/42.jpg"
            alt="Master"
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div className="flex-1">
            <h3 className="font-medium">Анна Смирнова</h3>
            <p className="text-xs text-gray-500">Парикмахер-стилист</p>
          </div>
          <input
            type="radio"
            name="master"
            className="form-radio h-4 w-4 text-indigo-600"
            defaultChecked=""
          />
        </div>
        <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Master"
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div className="flex-1">
            <h3 className="font-medium">Иван Петров</h3>
            <p className="text-xs text-gray-500">Барбер</p>
          </div>
          <input
            type="radio"
            name="master"
            className="form-radio h-4 w-4 text-indigo-600"
          />
        </div>
        <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Master"
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div className="flex-1">
            <h3 className="font-medium">Мария Иванова</h3>
            <p className="text-xs text-gray-500">Колорист</p>
          </div>
          <input
            type="radio"
            name="master"
            className="form-radio h-4 w-4 text-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectMaster;
