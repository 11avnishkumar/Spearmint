import React, { createContext, useState } from 'react'
export const context = createContext() // intialize an emtpy context

const Context = ({children}) => {
  const [countryData, setCountryData] = useState(null); // rest api countries data
  const [getSearch,setSearch] = useState(''); // search keyword
  const [clickedCountry,setClickedCountry] = useState(null) // reverse geocode
  return (
    <context.Provider value={{countryData, setCountryData,getSearch,setSearch,clickedCountry,setClickedCountry}}>
       {children}
    </context.Provider>
  )
}

export default Context