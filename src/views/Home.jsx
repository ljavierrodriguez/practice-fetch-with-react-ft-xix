import React, { useEffect, useState } from 'react'
import CardInfo from '../components/CardInfo';

const Home = () => {

    const [url] = useState("https://rickandmortyapi.com");

    const [characters, setCharacters] = useState(null);

    useEffect(() => {

        getCharacters(`${url}/api/character`);

    }, [])

    const getCharacters = async (url) => {

        try {

            const response = await fetch(url);
            const data = await response.json();

            const { results } = data;

            results.forEach(async ({ origin: { name, url } }, i) => {
                /* console.log("consultando " + name);
                console.log(url); */
                if (url) {
                    const resp = await fetch(url);
                    const info = await resp.json();
                    //console.log(info);
                    data.results[i].origin.info = info;
                }
            });

            setCharacters(data);

        } catch (error) {
            console.log(error.message);
        }

    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between py-3">
                    <button className={"btn btn-primary btn-sm " + (characters?.info?.prev ? "" : "disabled")}
                        onClick={() => getCharacters(characters?.info?.prev)}
                    >
                        Prev
                    </button>
                    <button className={"btn btn-primary btn-sm " + (characters?.info?.next ? "" : "disabled")}
                        onClick={() => getCharacters(characters?.info?.next)}
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className="row">
                {
                    !!characters &&
                    characters.results.map(({ id, name, image, origin, species }) => {
                        return (
                            <div className="col-md-6" key={id}>
                                <CardInfo name={name} image={image} origin={origin} species={species} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between py-3">
                    <button className={"btn btn-primary btn-sm " + (characters?.info?.prev ? "" : "disabled")}
                        onClick={() => getCharacters(characters?.info?.prev)}
                    >
                        Prev
                    </button>
                    <button className={"btn btn-primary btn-sm " + (characters?.info?.next ? "" : "disabled")}
                        onClick={() => getCharacters(characters?.info?.next)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home