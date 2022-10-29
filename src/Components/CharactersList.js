import React from "react";

const CharactersList = ({characters, changeHandler}) => {

    function onChange(evt) {
        const id = evt.target.value;
        changeHandler(id);

    };
    
    const options = characters.map((character) =>  {
        return (
            <option value={character.id} key={character.id}>
                {character.name}
            </option>
        );
    });

    return (
        <>
        <label htmlFor="">
            <span>Select a character</span>
            <select onChange={onChange}>{options}</select>
        </label>
        
        </>
    );

}

export default CharactersList;