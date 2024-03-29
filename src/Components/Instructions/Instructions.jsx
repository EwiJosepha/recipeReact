import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
// import Similar;
import "./Instruction.css"

function Instruction() {
  let currentmeal;
  const getid = JSON.parse(sessionStorage.getItem("mealidd"));
  console.log(getid);
  const [ingredients, setIngredients] = useState([]);
  const [measurements, setMeasurements] = useState([])

  const { data } = useQuery({
    queryKey: ["instructions"],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getid}`
      );
      console.log(res.data);

      return res.data.meals;
    },
  });


  const createArrayFromObjectKeys = (obj, target_key) => {
    const target_legnth = target_key.length;
    const array_items = [];

    for (let key of Object.keys(obj)) {
      if (
        key.slice(0, target_legnth) === target_key &&
        obj[key].trim() !== ""
      ) {
        array_items.push(obj[key]);
      }
    }

    return array_items;
  };

  useEffect(() => {
    if (data) {
      const res = data[0];
      const arrStrIngds = createArrayFromObjectKeys(res, "strIngredient");
      const measure = createArrayFromObjectKeys(res,"strMeasure")
      setIngredients(arrStrIngds);
      setMeasurements(measure)
    }

    console.log({ data });
  }, [data]);


  console.log(measurements);

  return (
    <>
      {/* <div className="containersflex"> */}
        <div className="twowrapper">
        <h4 id="ingredients">Ingredients</h4>
          <div className="ul2">
            <div className="container">
              <ul type="circle" id="display-ingredients">
                {ingredients?.map((ingr, index) => (
                  <li key={index}>{ingr}</li>
                ))}
              </ul>
            </div>
          </div>

          <h4 id="instructions">Instructions</h4>
          <div className="instruc" id="instrucc">
           {data?.map((instrutions)=>{
              return <p>{instrutions.strInstructions}</p>
            })}
          </div>
        </div>

        <div className="fourimage">
        <h4 id="measu"><b>Measurements</b></h4>
        <div className="card">
        <div className="container">
      </div>
          {measurements?.map((measurements)=>{
            return(
              <>
              <p id="measur">{measurements}</p>
              </>
            ) 
          })}
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Instruction;
