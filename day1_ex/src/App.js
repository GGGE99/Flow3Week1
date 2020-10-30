import './App.css';
import upper, {text1,text2, text3} from "./file1";
import person, {males, females} from "./file2";
import {MultiWelcome} from "./file3";


function App() {
  return (
    <div>
    <h2>Ex 1</h2>
    <p>{upper("please uppercase me")}</p>
    <p>{text1}</p>
    <p>{text2}</p>
    <p>{text3}</p>
    <h2>Ex 2</h2>
  <p>{firstName}, {email}</p>
  {console.log(all)}
  {console.log(allExtra)}
  {console.log(personV2)}

  <h2>Ex 3</h2>
  <MultiWelcome/>
    </div>
  );
}
const {firstName, email } = person;
const all = [...males, ...females]
const allExtra = [...males, firstName, "Helle", ...females, "Tina"]

const personV2 = {...person, phone: 123456, friends: all}



export default App;
