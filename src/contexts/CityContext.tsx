import { createContext, useState } from "react";
import {
  CityContextProps,
  CityProviderProps,
  OpenWeatherMapApiResProps,
} from "../protocols";

const CityContext = createContext<CityContextProps>({
  city: null,
  setCity: () => {},
});

export default CityContext;

export function CityProvider({ children }: CityProviderProps) {
  const [city, setCity] = useState<OpenWeatherMapApiResProps | null>(null);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}
