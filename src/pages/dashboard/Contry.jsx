import React from 'react'
import {
    GetCountries,
    GetState,
  } from "react-country-state-city";
  
const Contry = () => {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setStateid] = useState(0);
  
    const [countriesList, setCountriesList] = useState([]);
    const [stateList, setStateList] = useState([]);
  
    useEffect(() => {
      GetCountries().then((result) => {
        setCountriesList(result);
      });
  
      GetState().then((result) => {
        setLanguageList(result);
      });
    }, []);
  return (
    <div>
       <select
        onChange={(e) => {
          const country = stateList[e.target.value]; //here you will get full country object.
          setCountryid(country.id);
          GetState(country.id).then((result) => {
            setStateList(result);
          });
        }}
        value={countryid}
      >
        {countryList.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Contry
