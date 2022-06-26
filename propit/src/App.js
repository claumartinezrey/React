import logo from './logo.svg';
import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName={"Claudia"}
        lastName = {"Martinez"}
        age={28}
        hairColor={"brown"} 
      />
      <PersonCard 
        firstName={"Yurian"}
        lastName = {"Oropesa"}
        age={34}
        hairColor={"black"} 
      />
      <PersonCard 
        firstName={"Gloria"}
        lastName = {"Rey"}
        age={57}
        hairColor={"black"} 
      />
      <PersonCard 
        firstName={"Mimi"}
        lastName = {"Morell"}
        age={65}
        hairColor={"light brown"} 
      />
    </div>
  );
}

export default App;
