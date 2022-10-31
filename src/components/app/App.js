
import { useState } from "react";
import "../../style/style.scss";
import MainPage from '../../pages/MainPage';
import OurCoffeePage from "../../pages/OurCoffeePage";
import SingleCoffeePage from "../../pages/SingleCoffeePage";
import PleasurePage from "../../pages/PleasurePage";
import firstImg from "../../resources/best/1.png"
import secondImg from "../../resources/best/2.png";
import thirdImg from "../../resources/best/3.png";
import Context from "../../context";

const App = () => {

  const coffeeData = [
    {
        name:'AROMISTICO Coffee 1 kg',
        country: 'Brazil',
        price: '6.39$',
        img: firstImg
    },
    {
        name:'Jacobs Coffee 1 kg',
        country: 'Kenya',
        price: '6.39$',
        img: secondImg
    },
    {
        name:'Nescafe Coffee 1 kg',
        country: 'Columbia',
        price: '6.39$',
        img: thirdImg
    },
    {
        name:'Egoist Coffee 1 kg',
        country: 'Brazil',
        price: '6.39$',
        img: firstImg
    },
    {
        name:'Ambassador Coffee 1 kg',
        country: 'Kenya',
        price: '6.39$',
        img: secondImg
    },
    {
        name:'Samur Coffee 1 kg',
        country: 'Columbia',
        price: '6.39$',
        img: thirdImg
    },
]

const [items, setItems] = useState(coffeeData);

const filterItems = (items, filter) => {
  switch(filter){
      case "fromBrazil":
          setItems(coffeeData.filter(item => item.country ==="Brazil"));
          break;
      case "fromKenya":
          setItems(coffeeData.filter(item => item.country === "Kenya"));
          break;
      case "fromColumbia":
          setItems(coffeeData.filter(item => item.country === "Columbia"));
          break;
      case "all":
          setItems(coffeeData);
          break;
      default:
          return items;
  }
}

const searchItem = (searchStr) => {
  var reg = new RegExp(`${searchStr}`, "iy");
  setItems(coffeeData.filter(item => {
     var buf = reg.exec(item.name);
     if (buf && buf.index == 0) return true;
     return false;
  }));
}

  return (
    <div className="App">
      {/* <MainPage/> */}
      {/* <SingleCoffeePage/> */}
      <Context.Provider value={{coffeeData, items, filterItems, searchItem}}>
        {/* <OurCoffeePage/> */}
        <PleasurePage/>
      </Context.Provider>
      
    </div>
  );
}

export default App;
