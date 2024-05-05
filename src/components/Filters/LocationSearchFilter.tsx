import { useState } from "react";
import Searchbar from "../shared/Searchbar";
import { useDispatch } from "react-redux";
import { setSearchCompanyLocation } from "../../redux/slices/filterSlice";

const LocationSearchFilter = (): JSX.Element => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const handleChange = (value: string) => {
    console.log('value:',value);
    
    setInput(value);
    dispatch(setSearchCompanyLocation(value));
  };

  return (
    <Searchbar
      placeholder="Location"
      value={input}
      onChange={handleChange as (value: string) => void}
      className="min-w-48"
    />
  );
};

export default LocationSearchFilter;
