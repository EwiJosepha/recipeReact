import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./Components/Navbar/Navbar";
import Landingimage from "./Components/Navbar/Landingpage/Landingimage";
import Meals from "./Components/Navbar/Meals/Meals";

function App() {
  const client = new QueryClient();
  return <>
     <QueryClientProvider client={client}>
      <Navbar />
      <Landingimage />
      <Meals/>
     </QueryClientProvider>
  </>;
}

export default App;
