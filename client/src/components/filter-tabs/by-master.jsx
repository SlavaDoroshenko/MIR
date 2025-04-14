import SelectDate from "../select-date";
import SelectMaster from "../select-master";

const ByMaster = () => {
  return (
    <div id="master-content" className="space-y-4">
      {/* Master Selection */}
      <SelectMaster />

      {/* Available Dates for Selected Master */}
      <SelectDate />
    </div>
  );
};

export default ByMaster;
