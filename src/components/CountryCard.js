import React from 'react'
const CountryCard = ({ countryData }) => {
    return (
        <div>
            <h3 className='text-4xl mb-4 text-center uppercase font-bold'>{countryData.name.common}</h3>
            <div className="mb-4">
                <img src={countryData.flags.svg} alt={countryData.name.common} className="w-full h-full  object-cover" />
            </div>
            <div>
                <div className='mb-2 flex justify-start items-center gap-x-4'>
                    <span className='inline-block w-52 text-xl font-semibold'>Capital</span>
                    <span className='inline-block font-bold'>{countryData.capital}</span>
                </div>
                <div className='mb-2 flex justify-start items-center gap-x-4'>
                    <span className='inline-block w-52 text-xl font-semibold'>Currency</span>
                    {/* <span className='inline-block font-bold'>{countryData.currencies.INR.symbol}, {countryData.currencies.INR.name}</span> */}
                    {Object.entries(countryData.currencies).map(([currencyCode, currencyData]) => (
                        <span className='inline-block font-bold' key={currencyCode}>
                            {currencyData.symbol}, {currencyData.name}
                        </span>
                    ))}

                </div>
                <div className='mb-2 flex justify-start items-center gap-x-4'>
                    <span className='inline-block w-52 text-xl font-semibold'>Population</span>
                    <span className='inline-block font-bold'>{countryData.population}</span>
                </div>
                <div className='mb-2 flex justify-start items-center gap-x-4'>
                    <span className='inline-block w-52 text-xl font-semibold'>Latlang</span>
                    <span className='inline-block font-bold'>{countryData.latlng[0]}, {countryData.latlng[1]}</span>
                </div>
                <div className='mb-2 flex justify-start items-center gap-x-4'>
                    <span className='inline-block w-52 text-xl font-semibold'>Language</span>
                    {Object.values(countryData.languages).map((language) => (
                        <span className='inline-block font-bold' key={language}>
                            {language},{' '}
                        </span>
                    ))}
                </div>
                <div className='mb-2 flex justify-start items-center gap-x-4'>
                    <span className='inline-block w-52 text-xl font-semibold'>Area</span>
                    <span className='inline-block font-bold'>{countryData.area}</span>
                </div>
                <div className='mb-2 flex justify-start items-center gap-x-4'>
                    <span className='inline-block w-52 text-xl font-semibold'>Timezone</span>
                    <span className='inline-block font-bold'>{countryData.timezones}</span>
                </div>
                <div className='flex justify-start items-center gap-x-4'>
                    <span className='inline-block w-52 text-xl font-semibold'>Region</span>
                    <span className='inline-block font-bold'>{countryData.subregion}</span>
                </div>
            </div>
        </div>
    )
}

export default CountryCard