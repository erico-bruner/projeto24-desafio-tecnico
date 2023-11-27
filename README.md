# Overview

This project is a frontend application of the technical challenge proposed by [@Driven](https://www.driven.com.br/). In this application you can search for cities and view their climate, both current and forecast.

# Demo

https://technical-challenge-api.onrender.com

# How it works?

This project is a frontend to serve a weather website application. It has an input where you can type the name of a city and view its weather and forecast. To access the weather forecast, you need to navigate to the "Próximos dias" menu.

# Technologies

For this project, the following were used:

- React (v 18.2.0);
- TypeScript;
- Styled-components;
- Postgres;
- Recharts;
- Date-fns;

# How to run in development

- Clone this repository
- Install all dependencies

  ```bash
  npm i
  ```
- Configure the `.env` file using the `.env.example` file (this file must contain the Open Weather Map library access key, see the library for more information: https://openweathermap.org/)

- Run the frontend in a development environment:

  ```bash
  npm run dev
  ```
  
