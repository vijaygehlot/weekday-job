import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BasePayOption,
  EmployeeOption,
  ExperienceOption,
  Role,
  TechStacks,
  WorkTypeOption,
} from "../../lib/constants";

interface FilterState {
  selectedRoles: Role[];
  selectedEmployees: EmployeeOption[];
  selectedExperiences: ExperienceOption[];
  selectedWorkTypes: WorkTypeOption[];
  selectedBasePays: BasePayOption[];
  searchCompanyLocation: string;
  companyName: string;
  techstacks:TechStacks[]
}

const initialState: FilterState = {
  selectedRoles: [],
  selectedEmployees: [],
  selectedExperiences: [],
  selectedWorkTypes: [],
  selectedBasePays: [],
  searchCompanyLocation: "",
  companyName: "",
  techstacks:[]
};

//jsdoc
/**
 * @returns {FilterState} - Filter state
 */
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedRoles: (state, action: PayloadAction<Role[]>) => {
      state.selectedRoles = action.payload;
    },
    setSelectedEmployees: (state, action: PayloadAction<EmployeeOption[]>) => {
      state.selectedEmployees = action.payload;
    },
    setSelectedExperiences: (
      state,
      action: PayloadAction<ExperienceOption[]>
    ) => {
      state.selectedExperiences = action.payload;
    },
    setSelectedWorkTypes: (state, action: PayloadAction<WorkTypeOption[]>) => {
      state.selectedWorkTypes = action.payload;
    },
    setSelectedBasePays: (state, action: PayloadAction<BasePayOption[]>) => {
      state.selectedBasePays = action.payload;
    },

    setSearchCompanyLocation: (state, action: PayloadAction<string>) => {
      console.log("state.searchCompanyLocation", state.searchCompanyLocation);

      state.searchCompanyLocation = action.payload;
    },

    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    setSelectedTechs: (state, action: PayloadAction<TechStacks[]>) => {
      state.techstacks = action.payload;
    },
  },
});

export const {
  setSelectedRoles,
  setSelectedEmployees,
  setSelectedExperiences,
  setSelectedWorkTypes,
  setSelectedBasePays,
  setSearchCompanyLocation,
  setCompanyName,
  setSelectedTechs
} = filterSlice.actions;

export default filterSlice.reducer;
