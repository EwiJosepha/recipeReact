import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { debounceFetch } from "../../../service/debounce";
import Navdetails from "../../detailspage/Navdetails";
import Choosefav from "../../Choosefav/Choosefav";

function Meals() {
  const [chosenmeal, setChosenmeal] = useState("");
  const [showdetails, setShowdetails] = useState(false);
  const debounce = debounceFetch();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["mealss"],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${chosenmeal}`
      );
      // setMeals(data.Meals)

      console.log({ res, chosenmeal });
      return res?.data.meals;
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
  console.log(data);

  function dialogueBox(meals) {
    setShowdetails(!showdetails);
    const detailMeal = meals.idMeal;
    JSON.stringify(sessionStorage.setItem("mealidd", detailMeal));
  }

  function handleAddedrecipe(meals) {
    const recipeAdded = JSON.parse(sessionStorage.getItem("mealrecipe")) || [];
    const mealid = meals.idMeal;
    const recipe = recipeAdded.find((recipe) => {
      recipe.idMeal === mealid;
    });

    if (recipe) {
      const updatemeals = [...recipeAdded, meals];
      sessionStorage.setItem("mealrecipe", JSON.stringify(updatemeals));
    } else {
      const updatemeals = [...recipeAdded, meals];
      alert("adding meal to card")
      sessionStorage.setItem("mealrecipe", JSON.stringify(updatemeals));
    }
  }



  return (
    <>
     
        <div className="latest" id="latestt">
          <div className="searchbtn">
            <h2>Search Meals Here</h2>
            <br />
            <input type="text" onChange={handleFetch} />
          </div>
          <br />
          <div className="latestrecipe" id="latestrecipee">
            {data.map((meals) => {
              return (
                <>
                  <div className="bestmeal" id="bestmeall">
                    <img
                      src={meals.strMealThumb}
                      onClick={() => dialogueBox(meals)}
                    />

                    <div className="area">
                      <h5 id="popcatt">{meals.strMeal}</h5>
                    </div>
                    <div className="adddeletebtns">
                      <button
                        id="added"
                        onClick={() => handleAddedrecipe(meals)}
                      >
                        Add
                      </button>
                    </div>

                  </div>
                </>
              );
            })}

          </div>
          {showdetails && <Navdetails />}

        </div>
        <Choosefav />
    </>
  );
}

export default Meals;
