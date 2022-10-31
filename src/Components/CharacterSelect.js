import React from 'react';
import Button from './Button';

const CharacterSelect = ({character, handleFavourite}) => {

    if (!character) {
        return null
    }

    const handleClick = () => {
        handleFavourite(character.id)
      }
    
      const favourite = character.isFavourite ? 'Remove from favourites' : 'Add to favourites'

    return (
        <>
            <h3>Character: {character.name}</h3>
            <Button text={favourite} clickHandler={handleClick} className="button"/>
            <h4>Details:</h4>
            <ul>
                
                    <h5>Gender: {character.gender}</h5>
            

                
                    <h5>Age: {character.age} years old</h5>
               

                
                    <h5>Eye colour: {character.eye_color}</h5>
                

                
                    <h5>Hair colour: {character.hair_color}</h5>
                
            </ul>
            
            

        </>
    )
}

export default CharacterSelect;