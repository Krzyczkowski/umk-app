import { useState } from "react";

let usersList = [
    {
        id:10,
        imie:"Adam",
        nazwisko:"Kowalski",
        rokUrodzenia:2000,
        mail:"a@a.pl"
    },
    {
        id:21,
        imie:"Adam2",
        nazwisko:"Kowalski2",
        rokUrodzenia:2000,
        mail:"a@a.pl"
    },
    {
        id:211,
        imie:"Adam23",
        nazwisko:"Kowalski2",
        rokUrodzenia:2000,
        mail:"a@a.pl"
    }
]


function Select() {
    
  const [selected, setSelected] = useState(usersList[0]);
  const handleChange = event => {
    setSelected(usersList.find(user => user.id==event.target.value));
  };


  return (
    <div className="Select">
      <select onChange={handleChange}>
        { usersList.map(user => <option value={user.id}>{user.imie}</option>)}
      </select>
      <div>
        {selected.imie} <br></br>
         {selected.id}
      </div>
    </div>

  );
}




export default Select;
