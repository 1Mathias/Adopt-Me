import { useState } from 'react';

let counter = 0;
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
    counter++;
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [bred, setBreed] = useState("");
    const breeds = [];

    return (
        <div className="search-params">
            <h2></h2>
            <form>
                <label htmlFor="location">
                    Location
                    <input onChange={(e) => setLocation(e.target.value)} id="location" value={location} placeholder="Location" />
                </label>
                <button>Submit</button>
                <label htmlFor='animal'>
                    Animal
                    <select id='animal' key={animal} value={animal} onChange={e => { setAnimal(e.target.value) }}>

                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>

                <label htmlFor='animal'>
                    Breed
                    <select id='animal' key={animal} value={animal} onChange={e => { setBreed(e.target.value) }}>

                        {breeds.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
            </form>
        </div>
    );
};

export default SearchParams;
