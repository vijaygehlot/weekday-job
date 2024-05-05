import { useState } from "react";
import { TechStacks, techstacks } from "../../lib/constants";
import GenericSelect, { GenericOption } from "../shared/GenericSelect";
import { useDispatch } from "react-redux";
import { setSelectedTechs } from "../../redux/slices/filterSlice";
import { UnknownAction } from "@reduxjs/toolkit";


const TechFilter = (): JSX.Element => {
  const dispatch = useDispatch();
  const [selectedTechs, setSelectedTechState] = useState<TechStacks[]>([]);

  const handleChange = (value: TechStacks[]) => {
    setSelectedTechState(value);
    dispatch(setSelectedTechs(value) as unknown as UnknownAction);
  };

  return (
    <GenericSelect
      options={techstacks}
      placeholder="Tech Stack"
      value={selectedTechs}
      onChange={handleChange as (value: GenericOption[]) => void}
    />
  );
};

export default TechFilter;
