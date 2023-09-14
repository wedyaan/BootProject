import { useState } from "react";

export default function Cfpcalculator() {
  const [distance, setDistance] = useState<number>();
  const [oilType, setOilType] = useState<string>("Gasoline");
  const [fuelConsumption, setFuelConsumption] = useState<number>();
  const [co2Emission, setCo2Emission] = useState<number | null>(null);

  const calculateCo2Emission = () => {
    if (distance > 0 && fuelConsumption > 0) {
      let emissionFactor = 0;

      if (oilType === "Gasoline") {
        emissionFactor = 2.31;
      } else if (oilType === "diesel") {
        emissionFactor = 2.68;
      }

      // Calculate CO2 emission in kg

      const fuel_consumption = (fuelConsumption * distance) / 100;
      const co2EmissionKg = fuel_consumption * emissionFactor;
      setCo2Emission(co2EmissionKg);
    } else {
      setCo2Emission(null);
    }
  };

  return (
    <div className="font-sans  ">
      <div className="relative min-h-screen flex flex-col  justify-center items-center bg-gray-50     ">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 1800"
          fill="#52B69A"
          className="w-[125rem] h-[80%]   left-0 top-20  opacity-40   p-[44]    "
        >
          <path d="M70.93 687.44C94 439 234.2 293.95 381.02 188.24 527.84 82.53 887.27-.87 1159.77 82.53c272.5 83.4 553.55 115.11 673.78 302.45 120.23 187.35 114.36 417.56 87.35 671.27-27.02 253.71-150.35 364.12-335.93 543.83-185.58 179.71-590.81 176.19-973.73 106.89C228.33 1637.67 257 1468 149.63 1259.45c-91.86-178.42-96.18-383.72-78.7-572.02Z"></path>
        </svg> */}
        <div className="relative  max-w-sm w-full   ">
          <div className="card bg-blue-400 shadow-lg  w-[30%] h-[30%] rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-[#52B69A] shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-10 py-20 bg-gray-100 shadow-md">
            <label className="block mt-3 text-2xl text-gray-700 text-center font-semibold">
              Claculate carbon dioxide (CO2) your car caused
            </label>

            <div className="mt-10">
              <div>
                <input
                  id="distance"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  type="text"
                  placeholder="Distance (km)"
                  className="mt-1 block w-full p-3 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  id="fuelConsumption"
                  value={fuelConsumption}
                  onChange={(e) => setFuelConsumption(Number(e.target.value))}
                  type="text"
                  placeholder="Consumption (L/100km)"
                  className="mt-1 p-3  block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-14 mb-14 flex justify-center gap-8  ">
                <label htmlFor="oilType" className="text-2xl">
                  Fuel type:
                </label>
                <select
                  id="oilType"
                  className="bg-[#ccc] border-none"
                  value={oilType}
                  onChange={(e) => setOilType(e.target.value)}
                >
                  <option value="Gasoline">Gasoline</option>
                  <option value="diesel">Diesel</option>
                </select>
              </div>

              <div className="mt-7">
                <button
                  onClick={calculateCo2Emission}
                  className="bg-blue-500 w-full text-2xl py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Calculate
                </button>
              </div>

              {/* {co2Emission !== null && (
                <section className="diagonal2">
                  <div className="wrapper2">
                    <p>CO2 Emission: {co2Emission} kg</p>
                  </div>
                </section>
              )} */}
            </div>
            {co2Emission !== null && (
              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2 text-[25px] ">CO2 Emission:</label>

                  <a
                    href="#"
                    className="  text-blue-400 text-[20px]  transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    {co2Emission} kg
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
