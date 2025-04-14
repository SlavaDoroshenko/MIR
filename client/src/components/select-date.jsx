const SelectDate = () => {
  return (
    <div className="relative">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
        Выберите дату
      </h2>
      {/* Календарь на неделю */}
      <div className="dates-container flex overflow-x-auto pb-2 space-x-2 mb-4">
        <button className="date-btn flex flex-col items-center justify-center p-2 border border-[#f3f4f6] rounded-lg flex-shrink-0">
          <span class="text-xs">Пн</span>
          <span class="font-medium">12</span>
        </button>
      </div>

      {/* Выбранная дата */}
      {/* Доступные слоты */}
      <div className="fade-in">
        <h3 className="text-sm font-medium mb-2 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          Доступное время
        </h3>
        <div className="grid grid-cols-3 gap-2 mb-2">
          <button className="time-slot bg-white border border-indigo-300 text-indigo-600 py-2 px-3 rounded-lg hover:bg-indigo-50 transition">
            19:00
          </button>
          {/* Слоты будут добавляться динамически */}
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
