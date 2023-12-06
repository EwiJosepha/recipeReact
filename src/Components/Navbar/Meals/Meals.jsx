import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { debounceFetch } from "../../../service/debounce";
import Navdetails from "../../detailspage/Navdetails";
import Favorites from "../../Favorites/Iconfavorites";

function Meals() {
  const [chosenmeal, setChosenmeal] = useState("");
  const [showdetails, setShowdetails]= useState(true)
  const debounce = debounceFetch();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["mealss"],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${chosenmeal}`
      );
      // setMeals(data.Meals)

      console.log({ res, chosenmeal });
      return res?.data;
    },
  });

  function handleFetch(e) {
    const searchVal = e.target.value;
    setChosenmeal(searchVal);

    if (searchVal) debounce(refetch, 1000);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Sorry an error occured</h1>;
  }

  function dialogueBox () {
    setShowdetails(showdetails)
    console.log("hey");
  }

  return (

    <>

    <Navdetails />
    <Favorites/>
      <div className="latest" id="latestt">
        <h1 id="recipe">All Meals</h1>
        <div className="searchbtn">
          <h2>Search Meals Here</h2><br />
          <input type="text" onChange={handleFetch} />
        </div>
        <br />
        <div className="latestrecipe" id="latestrecipee">
          {data.meals.map((meals) => {
            return (
              <>
                <div
                  className="bestmeal"
                  id="bestmeall"
                >
                  <img src={meals.strMealThumb}  />

                  <div className="area">
                    {!showdetails?
                    <h5 id="popcatt" onClick={dialogueBox}>{meals.strMeal}</h5>: "hey"}
                  </div>
                  <div className="adddeletebtns">
                    <button id="added" onClick={()=>{
                          const mealls =JSON.parse(
                            sessionStorage.getItem("mealname")|| [])
                            const meallname = meals.strMeal
                            const prevmeals = mealls.find((meal)=>meal.strMeal === meallname)
                            if(prevmeals){
                              const updatemeals = [...mealls, data[0].meals]
                              const savetolocalstorage = sessionStorage.setItem(("mealname"), updatemeals)
                            }else{
                              const updatemeals = [...mealls, data[0]]
                              const savetolocalstorage = sessionStorage.setItem(("mealname"), updatemeals)                            }
                           
                            console.log(savetolocalstorage);
                        
                    }}>Add</button>
                    <button id="deleted">Delete</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* <Form />
      <Footer /> */}
    </>
  );
}

export default Meals;
