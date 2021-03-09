import { Button, Card } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Movies = (props) => {
    const { title, poster_path, overview, id } = props.movie;
    console.log(props.movie);
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{overview}</Card.Text>
                    <Button as={Link} to={`/ditail/${id}`} variant="primary"> Show Ditail</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Movies;