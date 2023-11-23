import { Dispatch, ReactNode, SetStateAction } from "react";

export type CityContextProps = {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
};

export type CityProviderProps = {
  children: ReactNode;
};
