import Country from "./components/Country";
import WorldMap from "./components/WorldMap";
import Search from "./components/Search";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-200 px-2 py-2">
      <Search/>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-x-4">
        <div className="order-last md:mb-0 md:col-span-2 overflow-hidden rounded-md">
          {/* For displaying world map */}
          <WorldMap/>
        </div>
        <div className="mb-4 md:mb-0">
          {/* display country */}
          <Country />
        </div>
      </div>
    </div>
  );
}

export default App;
