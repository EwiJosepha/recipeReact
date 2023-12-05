import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { debounceFetch } from "../../../service/debounce";

function Meals() {
  // const {mealid} = useContext(Appcontextt)
  const [chosenmeal, setChosenmeal] = useState("Sushi");
  // const [meals, setMeals] = useState([])
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

  return (
    <>
      <div className="latest" id="latestt">
        <h1 id="recipe">All Meals</h1>
        <div className="searchbtn">
          <input type="text" onChange={handleFetch} />
        </div>

        <div className="latestrecipe" id="latestrecipee">
          {data.meals.map((meals) => {
            return (
              <>
                <div
                  onClick={() => {
                    navigate("/details");
                    JSON.stringify(
                      localStorage.setItem("mealidd", meals.idMeal)
                    );
                    console.log(meals.idMeal);
                  }}
                  className="bestmeal"
                  id="bestmeall"
                >
                  <img src={meals.strMealThumb} />

                  <div className="area">
                    <h5 id="popcatt">{meals.strMeal}</h5>
                    <h5 id="area">{meals.strArea}</h5>
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
