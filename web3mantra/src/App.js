import "./App.css";
import Counter from "./components/counterApp/Counter";
//import Header from "./components/moiveList/Header";
//import Moive from "./components/moiveList/Moive";
//import moives from "./components/moiveList/moives.json";
//import Header from "./Header";
//import ParentComponent from "./components/props/ParentComponent";
const App = () => {
  //const name = "Dhiraj";
  return (
    <div className="App">
      {/* <h2>React with w3mantra</h2>
      <p>{name}</p>
      <Header/> */}

      {/* <ParentComponent/> */}

      {/* <Header />
      {moives.map((element, index) => {
        return (
          <>
            <Moive
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          </>
        );
      })} */}


      <Counter/>
      
    </div>
  );
};
export default App;
