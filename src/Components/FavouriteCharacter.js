import React from "react";

function FavouriteCharacter({characters}) {
    
    
    const favouriteCharacters = characters.filter(character => character.isFavourite)
    

    return (
        <>
            <h2>Favourite Characters:</h2>
                <ul>
                    {favouriteCharacters.map(characters => {
                        return (
                            <>
                            <li key={characters.id}>
                                <h3>{characters.name} {characters.isFavourite && ""}</h3>
                            </li>
                            </>
                        )
                    })}
                </ul>
        </>
    )
}

export default FavouriteCharacter;