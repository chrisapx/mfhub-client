import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { useSearchParams } from "react-router-dom";
import { SiGooglemeet } from "react-icons/si";
import { HelpCircleIcon, UserCircle02Icon } from "hugeicons-react";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedModel, setSelectedModel] = useState("");
  const [currency, setCurrency] = useState('USD')

  const handleSelectItem = () => {
    searchParams.set("_panelOpen", true);
    searchParams.set("_panelOperation", 'select');
    setSearchParams(searchParams);
  };

  const handleLearnMore = (model) => {
    setSelectedModel(model);
    searchParams.set("_panelOpen", true);
    searchParams.set("_panelOperation", 'Learn more or details');
    setSearchParams(searchParams);
  }

  const handleOrderNow =(model) => {
    setSelectedModel(model);
    searchParams.set("_panelOpen", true);
    searchParams.set("_panelOperation", 'orderFlow');
    setSearchParams(searchParams);
  }

  return (
    <div 
      className="h-screen relative flex flex-col items-center bg-[url('images/Frame1-mobile.png')] md:bg-[url('images/Frame1.png')] bg-cover bg-center bg-black bg-opacity-90"
    >
      <section className="flex items-center justify-center gap-4 py-2 bg-orange-100 w-full">
        <p className="font-medium text-sm">New offer on pallet bed available now.</p>
        <button 
          onClick={() => handleOrderNow("Veyra 5'6")}
          className="text-white bg-black font-semibold px-4 py-2 text-xs rounded-md"
        >
          Grab offer now
        </button>
      </section>

      <section className="w-full">
        <nav className="w-full flex justify-between items-center px-[4vw] py-3 bg-white sticky top-0 z-10">
          <div className="px-4">
              <img src="favicons/favicon.ico" alt="Logo" className="h-8" />
          </div>

          <div className="flex gap-2">
            <p className="font-semibold text-sm opacity-80 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">Collection</p>
            <p className="font-semibold text-sm opacity-80 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer" onClick={handleSelectItem}>Shop</p>
          </div>

          <div className="flex gap-2 items-center bg-white">
            <button className="hover:bg-black hover:bg-opacity-10 p-1 rounded-md">
              <HelpCircleIcon className="text-xs text-gray-700"/>
            </button>
            <button className="hover:bg-black hover:bg-opacity-10 p-1 rounded-md">
              <UserCircle02Icon className="text-xs text-gray-700"/>
            </button>
          </div>
        </nav>
        {/* <section className="bg-gray-100 h-[50vh]">
          This is the nale
        </section> */}
      </section>

      <section className="text-center my-8 px-[8vw]">
        <h1 className="text-[4rem] font-bold mb-4 text-white">Veyra 5'6</h1>
        <p className="text-white text-[3rem] font-medium">
          Now selling at just $74, inclusive of tax
        </p>
      </section>

      <section className="flex items-center gap-6">
        <button 
          onClick={() => handleOrderNow("Verya 5'6")}
          className="rounded-md text-sm w-[40vw] md:w-[15vw] px-2 py-3 bg-blue-500 text-white font-semibold">Order Now</button>
        <button 
          onClick={() => handleLearnMore("Verya 5'6")}
          className="rounded-md text-sm w-[40vw] md:w-[15vw] px-2 py-3 bg-white text-gray-700 font-semibold">Learn More</button>
      </section>

      <button 
        disabled
        className="absolute bottom-0 w-full shadow text-gray-700 font-semibold bg-gray-200 text-center py-3 cursor-not-allowed"
        title="Schedule a call to deeply explain what you would love to order"
        >
        <div className="flex gap-4 items-center justify-center">
          <div className="text-lg text-blue-600"><SiGooglemeet/></div>
          <p>Schedule a design call</p>
        </div>
      </button>

      <Sidebar 
        visible={searchParams.get('_panelOpen') === 'true'} 
        onHide={() => {
          searchParams.set("_panelOpen",  false );
          setSearchParams(searchParams)
        }} 
        position="right" 
        className="w-full md:w-[33vw] p-0"
        content={({ hide }) => (
          <div className="p-5 h-[100vh] overflow-y-auto">
            <p>{searchParams.get('_panelOperation')}</p>
            <p>{selectedModel}</p>
            
          </div>
        )}
      />
    </div>
  );
};

export default Home;