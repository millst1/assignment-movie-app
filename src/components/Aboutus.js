import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigation from './Navigation';

function Aboutus() {
    return (
        <div className="container">
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Movie Project Assignment</Card.Title>
                    <Card.Text>
                       This website built in React using JavaScript, CSS and HTML is designed to pull data from an externally hosted service by providing a search term.
                       The returned response is then provided to a factory that produces cards populated with the data and displayed in a grid.
                    </Card.Text>
                   
                </Card.Body>
            </Card>
        </div>
    )
}

export default Aboutus;