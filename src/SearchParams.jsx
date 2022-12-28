import { useState, useEffect } from 'react';
import Pet from "./Pet"
import useBreedList from './useBreedList';
import Results from "./Results"

let counter = 0;
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
    counter++;
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);


    useEffect(() => {
        requestPets();
    }, [])

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,

        );
        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <h2></h2>
            <form onSubmit={e => {
                e.preventDefault();
                requestPets()
            }}>
                <label htmlFor="location">
                    Location
                    <input onChange={(e) => setLocation(e.target.value)} id="location" value={location} placeholder="Location" />
                </label>

                <label htmlFor='animal'>
                    Animal
                    <select id='animal' key={animal} value={animal} onChange={(e) => {
                        setAnimal(e.target.value)
                        setBreed("")
                    }}>
                        <option />

                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>

                <label htmlFor='animal'>
                    Breed
                    <select id='breed' key={breed} value={breed} onChange={e => { setBreed(e.target.value) }}>

                        {breeds.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
            {/* {
                pets.map((pet) => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            } */}
        </div>
    );
};

export default SearchParams;
