import React from "react";
import { useDispatch } from "react-redux";
import { createHouse } from "../../redux/actions";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
  const dispatch = useDispatch()

const[personaje, setPersonaje] = React.useState({
  name: "",
  region: "",
  words: "",
})

const handleInput = (event)=>{
  const daniel= event.target.name
  const elias= event.target.value
  setPersonaje({...personaje, [daniel]:elias})
}

const handleSubmit = (evento)=>{
  evento.preventDefault()
  dispatch(createHouse(personaje)) //hay que pasar el estado como parametro
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleInput} value={personaje.name}/>

        <label>Region: </label>
        <input type="text" name="region" onChange={handleInput} value={personaje.region}/>

        <label>Words: </label>
        <input type="text" name="words" onChange={handleInput} value={personaje.words}/>

        <button type="submit" >Create</button>
      </form>
    </div>
  );
};

export default CreateHouse;
