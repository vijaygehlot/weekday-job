import BasePayFilter from "./Filters/BasePayFilter";
import EmployeesFilter from "./Filters/EmployeesFilter";
import ExperienceFilter from "./Filters/ExperienceFilter";
import RoleFilter from "./Filters/RoleFilter";
import LocationSearchFilter from "./Filters/LocationSearchFilter";
import WorkTypeFilter from "./Filters/WorkTypeFilter";
import CompanyFilter from "./Filters/CompanyFilter";
import TechFilter from "./Filters/TechFilter";

const FilterContainer = (): JSX.Element => {
  return (
    <div className=" flex gap-5 flex-wrap max-sm:gap-2">
      <RoleFilter />
      <EmployeesFilter />
      <ExperienceFilter />
      <TechFilter/>
      <WorkTypeFilter />
      <BasePayFilter />
      <LocationSearchFilter />
      <CompanyFilter/>
   
    </div>
  );
};

export default FilterContainer;
