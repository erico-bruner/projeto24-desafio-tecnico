import { Dispatch, ReactNode, SetStateAction } from "react";

export type CityContextProps = {
  city: openWeatherMapApiResProps | null;
  setCity: Dispatch<SetStateAction<openWeatherMapApiResProps | null>>;
};

export type CityProviderProps = {
  children: ReactNode;
};

export type geocodingApiResProps = {
  lat: number;
  lon: number;
};

export type openWeatherMapApiResProps = {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
};

export type switchProps = {
  text: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};
