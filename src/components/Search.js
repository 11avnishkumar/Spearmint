import React, { useContext, useState } from 'react'
import { context } from '../context/Context'
const Search = () => {
    const [keyword, setKeyword] = useState('')
    const { setSearch } = useContext(context)
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(keyword)
    }
    return (
        <div className='fixed z-[999] left-2 right-2 bg-white/50 backdrop-filter backdrop-blur-lg rounded-md shadow-md px-3 py-3  flex justify-between items-center gap-2 flex-col md:flex-row md:gap-x-4'>
            <form>
                <div className='w-[25rem]'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:outline-none"  placeholder="Search country details..." required onChange={(e) => setKeyword(e.target.value)} />
                        <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-black  focus:ring-4 focus:outline-none  font-medium rounded-lg text-lg px-4 py-2" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </form>
            {/* select filter */}
            <div>
                <select  className="block w-[25rem] p-4 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:text-white focus:ring-0 focus:outline-none">
                    <option selected>Select Region</option>
                    <option value="US">United States</option>
                    <option value="CA">Asia</option>
                    <option value="FR">Europe</option>
                    <option value="DE">Africa</option>
                </select>
            </div>
        </div>
    )
}

export default Search