import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";
import { hashColor } from "./utils/colors";

export type CityContextProps = {
  city: OpenWeatherMapApiResProps | null;
  setCity: Dispatch<SetStateAction<OpenWeatherMapApiResProps | null>>;
};

export type CityProviderProps = {
  children: ReactNode;
};

export type GeocodingApiResProps = {
  lat: number;
  lon: number;
};

export type OpenWeatherMapApiResProps = {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: keyof typeof hashColor;
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

export type SwitchProps = {
  text: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};

export type CardProps = {
  title: string;
  value: string;
};

export interface SCTemperatureProps extends HTMLAttributes<HTMLHeadingElement> {
  main: keyof typeof hashColor;
}
