function Addedmeals () {
  const mealname = sessionStorage.getItem('mealname')
  console.log(mealname);

  return (
    <>

          
      <div className="favorites">
        <h1 id="super">Super Delicious</h1>
        <div className="carousel">
       
          <div className="top">
            
         
              <img src="" />
          

            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p id="delicious">Delicious Fancy GLAZES BLUEBERRY</p>

            <div className="imagetitll">
              <img
                src="https://media.istockphoto.com/id/182924845/fr/photo/spaghetti-%C3%A0-la-bolognaise-avec-feuilles-de-basilic.webp?b=1&s=170667a&w=0&k=20&c=g60SDvd1ZYj4PScloP5L0LSowPAvE64ANLbFsych864="
                alt="popular Meals"
                id="pi"
              />
              <span>Tricia Albert</span>
            </div>
            <div className="date">
              <i className="fa-regular fa-message">Yesterday</i>
              <i className="fa-regular fa-calendar-minus">456</i>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )

}
 export default Addedmeals