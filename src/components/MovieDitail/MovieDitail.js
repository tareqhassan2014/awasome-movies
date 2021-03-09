import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MovieDitail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState();


    const apiKey = '870967436c1517d581daf3b245495790'
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [id])

    return (
        <Jumbotron>
            <img src={`https://image.tmdb.org/t/p/w1280${movie && movie.poster_path}`} alt=""/>
            <h1>{movie && movie.title}</h1>
            <p>{movie && movie.overview}</p>
            <p>
                <Button as={Link} to="/" variant="primary">Go Back</Button>
            </p>
        </Jumbotron>
    );
};

export default MovieDitail;