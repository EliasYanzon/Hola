import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHouse } from "../../redux/actions";
import CharacterCard from "../CharacterCard/CharacterCard";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
  const houseId = props.match.params.houseId;
  const dispatch = useDispatch();
  const casa = useSelector( (state)=> state.houses );

  React.useEffect(() => {
    dispatch(getHouse(houseId));
  }, [dispatch, houseId]); // array de dependencias significa: que lo que se use en la funcion depende de lo que contenga el array

  // React.useEffect( () => {
  //   useDispatch( getHouse(houseId) ); // otra opcion
  // },[])

  return (
        <div>
          {casa.name}
          {casa.words}
          {casa.characters?.map( // truquito el "?" para corroborar que no viene vacio
            (caracter, index) => (
              <CharacterCard 
              imageUrl={caracter.imageUrl}
              id={caracter.id}
              fullName={caracter.fullName}
              title={caracter.title}
              family={caracter.family}
              houseId={caracter.houseId}
              />
            )
          )}
        </div>
        )
};

export default HouseDetail;