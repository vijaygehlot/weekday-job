import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  BasePayOption,
  ExperienceOption,
  Role,
  WorkTypeOption,
} from "./constants";
import { Job } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterByRoles = (jbList: any[], selectedRoles: Role[]): Job[] => {
  if (selectedRoles.length === 0) return jbList;

  return jbList.filter((job) =>
    selectedRoles.some((role) => job.jobRole.includes(role.name.toLowerCase()))
  );
};

export const filterByExperience = (
  jbList: Job[],
  selectedExperiences: ExperienceOption[]
): Job[] => {
  if (selectedExperiences.length === 0) return jbList;

  const experienceValues = selectedExperiences[0];
  console.log(experienceValues);

  return jbList.filter((job) => {
    const { maxExp } = job;
    return maxExp <= parseInt(experienceValues.name);
  });
};

export const filterByWorkType = (
  jbList: Job[],
  selectedWorkTypes: WorkTypeOption[]
): Job[] => {
  if (selectedWorkTypes.length === 0) return jbList;

  return jbList.filter((job) => {
    const isRemote = selectedWorkTypes.some(
      (workType) => workType.name.toLowerCase() === "remote"
    );
    const isInOffice = selectedWorkTypes.some(
      (workType) => workType.name.toLowerCase() === "inoffice"
    );
    const isHybrid = selectedWorkTypes.some(
      (workType) => workType.name.toLowerCase() === "hybrid"
    );

    const locationLower = job.location.toLowerCase();

    if (isRemote) {
      return locationLower.includes("remote");
    } else if (isInOffice) {
      return (
        !locationLower.includes("remote") && !locationLower.includes("hybrid")
      );
    } else if (isHybrid) {
      return locationLower.includes("hybrid");
    }

    return false;
  });
};

export const filterByBasePay = (
  jbList: Job[],
  selectedBasePays: BasePayOption[]
): Job[] => {
  if (selectedBasePays.length === 0) return jbList;

  const basePay = parseInt(selectedBasePays[0].name.split("L")[0]);
  console.log(basePay);

  return jbList.filter((job) => {
    return basePay >= job.minJdSalary && basePay <= job.maxJdSalary;
  });
};

// Filter by search company location

export const filterBySearchCompanyLocation = (
  jbList: Job[],
  location: string
) => {
  return jbList.filter((job) =>
    job.location.toLowerCase().includes(location.toLowerCase())
  );
};

// Apply all filters
export const applyFilters = (
  jbList: any[],
  selectedRoles: Role[],
  selectedExperiences: ExperienceOption[],
  selectedWorkTypes: WorkTypeOption[],
  selectedBasePays: BasePayOption[]
) => {
  let filteredJobs = jbList;

  filteredJobs = filterByRoles(filteredJobs, selectedRoles);
  filteredJobs = filterByExperience(filteredJobs, selectedExperiences);
  filteredJobs = filterByWorkType(filteredJobs, selectedWorkTypes);
  filteredJobs = filterByBasePay(filteredJobs, selectedBasePays);

  return filteredJobs;
};
