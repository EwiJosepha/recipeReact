import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./Components/Navbar/Navbar";
import Landingimage from "./Components/Navbar/Landingpage/Landingimage";
import Meals from "./Components/Navbar/Meals/Meals";
import { Appcontextt } from "./Components/Hoks/Context";
import { useState } from "react";
import Addedmeals from "./Components/addededmeals/Addedmeals";

function App() {
  const client = new QueryClient();
  const [addedmeals, setAddedmeals]= useState('')
  return <>
  <Appcontextt.Provider value={{addedmeals}}>
     <QueryClientProvider client={client}>
      <Navbar />
      <Landingimage />
      <Meals/>
      <Addedmeals />
     </QueryClientProvider>
     </Appcontextt.Provider>
  </>;
}

export default App;
