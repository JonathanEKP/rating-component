import React, { createContext, useState } from "react";

export const RateContext = createContext();

export function RateContextProvider(props) {
  const [rate, setRate] = useState();

  const obtenerRate = (rate) => {
    setRate(rate);
    const buttons = document.querySelectorAll(".btn-rate");
    buttons.forEach((btn) => {
      if (btn.classList.contains("btn-rate-active")) {
        btn.classList.remove("btn-rate-active");
      }
      if (btn.value == rate) {
        btn.classList.add("btn-rate-active");
      }
    });
  };

  return (
    <RateContext.Provider value={{ rate, obtenerRate, setRate }}>
      {props.children}
    </RateContext.Provider>
  );
}
