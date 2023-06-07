import React, { useEffect, useContext} from 'react'
import { context } from '../context/Context'
import CountryCard from './CountryCard';
const Country = () => {
    // get all the context data 👇
    const { getSearch, countryData, setCountryData, clickedCountry, } = useContext(context)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${getSearch || clickedCountry}`);
                if (!response.ok) {
                    throw new Error('Request failed');
                }
                const data = await response.json();
                const country = Array.isArray(data) ? data[0] : data;
                setCountryData(country); // get the country data to render countries and also set for context api
                
            } catch (error) {
                console.error(error);
            }
        };

        if (getSearch || clickedCountry) fetchData();
    }, [getSearch, clickedCountry]);

    return (
        <div className="rounded-lg bg-white shadow-md p-4">
            {!countryData ?
                <div className='flex justify-center items-center h-[560px] text-center text-gray-500'>
                    <div>
                        <p className='text-4xl mb-4'>Country Details will appear here...</p>
                        <p className='text-xl'>Some examples are India,United States</p>
                    </div>
                </div>
                :
                <CountryCard countryData={countryData} />}
        </div>
    );
};

export default Country;
