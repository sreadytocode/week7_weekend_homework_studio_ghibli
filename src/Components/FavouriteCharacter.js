import React from "react";
import Button from '../Components/Button';

function FavouriteCharacter({characters, findCharacter}) {

    const favouriteCharacters = characters.filter(character => character.isFavourite)
    
    return (
        <>
            <h2>Favourite Characters:</h2>
                <ul>
                    {favouriteCharacters.map(characters => {
                        return (
                            <li key={characters.id}>
                                <h3>{characters.name}</h3>
                            </li>
                        )
                    })}
                </ul>
        </>
    )
}

export default FavouriteCharacter;