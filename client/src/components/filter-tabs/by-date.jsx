import SelectDate from "../select-date";
import SelectMaster from "../select-master";

const ByDate = () => {
  return (
    <div id="date-content" className="space-y-4">
      <SelectDate />

      <SelectMaster />
    </div>
  );
};

export default ByDate;
