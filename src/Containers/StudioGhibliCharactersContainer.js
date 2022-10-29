import React, {useEffect, useState} from 'react';
import Heading from '../Components/Heading';
import CharactersList from '../Components/CharactersList';
import CharacterSelect from '../Components/CharacterSelect';
import Button from '../Components/Button'; 
import FavouriteCharacter from '../Components/FavouriteCharacter'

function StudioGhibliContainer() {
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState([]);
    const [favCharacter, setFavCharacter] = useState([]);

    async function fetchCharacters(){
        const response = await fetch('https://ghibliapi.herokuapp.com/people');
        const data = await response.json();
        setCharacters(data)
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    function findCharacterById(id) {
        return characters.find((character) => character.id === id)
    };

    // function addCharacterToFavourites(oldCharacter) {
    //     const newCharacter = {...oldCharacter, isFavourite: true};
    //     const newCharacters = [...characters];
    //     const index = newCharacters.indexOf(oldCharacter);
    //     newCharacters.splice(index, 1, newCharacter);
    //     setCharacters(newCharacters);
    // };

    const handleFavourite = (id) => {
        const updatedCharacters = characters.map((character) => {
            return character.id === id
                ? {...character, isFavourite: !character.isFavourite}
                : character
        })
        setCharacters(updatedCharacters)
    };

    
    return (
        <>
            <Heading text="Studio Ghibli Characters Website"/>
            <CharactersList characters={characters}
            changeHandler={(id) => {
                const character = findCharacterById(id);
                setCharacter(character);
            }}/>
            <CharacterSelect character={character} handleFavourite={handleFavourite}/>
            <FavouriteCharacter characters={characters} findCharacter={findCharacterById}/>
        </>
    )

};

export default StudioGhibliContainer;
