import { createContext, useState } from "react";
import { CityContextProps, CityProviderProps } from "../protocols";

const CityContext = createContext<CityContextProps>({
  city: "",
  setCity: () => {},
});

export default CityContext;

export function CityProvider({ children }: CityProviderProps) {
  const [city, setCity] = useState("");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}
