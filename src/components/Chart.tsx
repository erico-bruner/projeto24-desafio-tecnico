import { useContext, useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CityContext from "../contexts/CityContext";
import axios from "axios";
import { format } from "date-fns";

export default function Chart() {
  const { city } = useContext(CityContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    handleSearchCity();
  }, []);

  const CustomYAxisTick = ({ x, y, payload }: any) => (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} fontSize={12} textAnchor="end" fill="#666">
        {`${payload.value}°C`}
      </text>
    </g>
  );

  function dataConvert(data: number) {
    const diasSemana = [
      "(Dom)",
      "(Seg)",
      "(Ter)",
      "(Qua)",
      "(Qui)",
      "(Sex)",
      "(Sáb)",
    ];
    const dateObject = new Date(data * 1000);
    const dataFormatada = format(dateObject, "dd/MM");
    return dataFormatada + ` ${diasSemana[dateObject.getDay()]}`;
  }

  async function handleSearchCity() {
    try {
      const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY;
      const openWeatherMapApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${city?.coord.lat}&lon=${city?.coord.lon}&cnt=40&&lang=pt_br&units=metric&appid=${apiKey}`;
      const respOpen = await axios.get(openWeatherMapApiUrl);

      console.log(respOpen.data.list);

      const datas = respOpen.data.list.map((item: any) => {
        return {
          date: dataConvert(item.dt),
          temperatura: Math.round(item.main.temp),
        };
      });

      setData(datas);
      console.log("FORMATADO: ", data);
    } catch (error) {
      console.error("Erro ao obter coordenadas:", error);
    }
  }

  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid />
      <XAxis dataKey="date" />
      <YAxis tick={<CustomYAxisTick />} />
      <Tooltip formatter={(value) => `${value}°C`} />

      <Line type="monotone" dataKey="temperatura" stroke="#4F43AE" />
    </LineChart>
  );
}
