import { useState } from "react";
import Searchbar from "../shared/Searchbar";
import { useDispatch } from "react-redux";
import { setCompanyName } from "../../redux/slices/filterSlice";

const CompanyFilter = (): JSX.Element => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const handleChange = (value: string) => {
    console.log('CompanyName value:',value);
    
    setInput(value);
    dispatch(setCompanyName(value));
  };

  return (
    <Searchbar
      placeholder="Company Name"
      value={input}
      onChange={handleChange as (value: string) => void}
      className="min-w-48"
    />
  );
};

export default CompanyFilter;
