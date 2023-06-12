import Country from "./components/Country";
import WorldMap from "./components/WorldMap";
import Search from "./components/Search";
import CountryCard from "./components/CountryCard";
import { useContext } from "react";
import { context } from "./context/Context";
function App() {
  const {countryData} = useContext(context)
  return (
    <div className="w-full min-h-screen bg-gray-200 px-2 py-2">
      <Search />
      <div className="md:mt-24 mt-40 grid grid-cols-1 md:grid-cols-3 gap-x-4">
        <div className="order-last md:order-none md:mb-0 md:col-span-2 overflow-hidden rounded-md">
          {/* For displaying world map */}
          <WorldMap />
        </div>
        <div className="mb-4 md:mb-0">
          {/* display country */}
          <Country />
        </div>
      </div>
      {/* display some neighbouring countries if available */}
      {countryData && 
      <div className="">
        <h3 className="text-4xl mb-5">{countryData.name.common}'s Neighbour Country</h3>
        <div className="bg-white shadow-md rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-x-2">
          <CountryCard countryData={countryData} />
        </div>
      </div>
      }
    </div>
  );
}

export default App;
