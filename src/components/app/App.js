import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../style/style.scss";
import Context from "../../context";
import firstImg from "../../resources/best/1.png";
import secondImg from "../../resources/best/2.png";
import thirdImg from "../../resources/best/3.png";
import MainPage from "../../pages/MainPage";

const OurCoffeePage = lazy(() => import("../../pages/OurCoffeePage"));
const SingleCoffeePage = lazy(() => import("../../pages/SingleCoffeePage"));
const PleasurePage = lazy(() => import("../../pages/PleasurePage"));
const CoffeePage = lazy(() => import("../../pages/CoffeePage"));

const App = () => {
  const coffeeData = [
    {
      name: "AROMISTICO Coffee 1 kg",
      country: "Brazil",
      price: "6.39$",
      img: firstImg,
      description: "Aromistico coffee. Great flavor.",
    },
    {
      name: "Jacobs Coffee 1 kg",
      country: "Kenya",
      price: "6.39$",
      img: secondImg,
      description: "Jacobs coffee. Great flavor.",
    },
    {
      name: "Nescafe Coffee 1 kg",
      country: "Columbia",
      price: "6.39$",
      img: thirdImg,
      description: "Nescafe coffee. Great flavor.",
    },
    {
      name: "Egoist Coffee 1 kg",
      country: "Brazil",
      price: "6.39$",
      img: firstImg,
      description: "Egoist Coffee. Great flavor.",
    },
    {
      name: "Ambassador Coffee 1 kg",
      country: "Kenya",
      price: "6.39$",
      img: secondImg,
      description: "Ambassador coffee. Great flavor.",
    },
    {
      name: "Samurai Coffee 1 kg",
      country: "Columbia",
      price: "6.39$",
      img: thirdImg,
      description: "Samurai coffee. Great flavor.",
    },
  ];

  const [items, setItems] = useState(coffeeData);
  const [filter, setFilter] = useState("all");

  const filterItems = (items, filter) => {
    switch (filter) {
      case "fromBrazil":
        setItems(coffeeData.filter((item) => item.country === "Brazil"));
        break;
      case "fromKenya":
        setItems(coffeeData.filter((item) => item.country === "Kenya"));
        break;
      case "fromColumbia":
        setItems(coffeeData.filter((item) => item.country === "Columbia"));
        break;
      case "all":
        setItems(coffeeData);
        break;
      default:
        return items;
    }
    setFilter(filter);
  };

  const searchItem = (searchStr) => {
    var reg = new RegExp(`${searchStr}`, "iy");
    setItems(
      coffeeData.filter((item) => {
        var buf = reg.exec(item.name);
        if (buf && buf.index == 0) return true;
        return false;
      })
    );
  };

  return (
    <Router>
      <div className="App">
        <main>
          <Context.Provider
            value={{ coffeeData, items, filterItems, searchItem, filter }}
          >
            <Suspense>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/coffee" element={<CoffeePage />}>
                  <Route index element={<OurCoffeePage />} />
                  <Route path=":name" element={<SingleCoffeePage />} />
                </Route>
                <Route path="/goods" element={<PleasurePage />} />
              </Routes>
            </Suspense>
          </Context.Provider>
        </main>
      </div>
    </Router>
  );
};

export default App;
