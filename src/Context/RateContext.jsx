import React, { createContext, useState } from "react";

export const RateContext = createContext();

export function RateContextProvider(props) {
  const [rate, setRate] = useState();

  const obtenerRate = (rate) => {
    setRate(rate);
  };

  return (
    <RateContext.Provider value={{ rate, obtenerRate }}>
      {props.children}
    </RateContext.Provider>
  );
}
