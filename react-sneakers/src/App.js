import Card from "./components/Card";
import React from 'react';
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
  const [item , setItem] = React.useState([]);
  const [cartOpened , setCartOpened ] = React.useState(false);

  fetch('https://61658369cb73ea001764209c.mockapi.io/items')
  .then((res) => {
    return res.json();
  }).then((json) => {
    setItem(json);
  })


  return (
    <div className="wrapper clear">
<div>
{cartOpened && <Drawer onCloseCard = { () => setCartOpened(false)}/>}
</div>
   <Header  onClickCard = { () => setCartOpened(true)}/>
        <div className="content p-10">
          <div className="d-flex align-center justify-between mb-40">
          <h1>Toate Crosurile</h1>
          <div className="search-block">
            <img  width={17} height={17} src="./img/search.png" alt="search"/> 
              <input placeholder="Search..."/>
          </div>
          </div>
          <div className="d-flex flex-wrap">
            {item.map ((obj) => (
                <Card 
                title={obj.title}
                price ={obj.price}
                image ={obj.imageUrl}
                onClickFavorite = {()=> console.log('Ai adaugat in Favorite')}
                onClickButton = {() =>console.log('Ai pus in cos')}/> 
            ))}
            </div>
        </div> 
      
    </div>
  );
}

export default App;
