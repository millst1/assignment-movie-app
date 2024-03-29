import React from "react";
import Card from 'react-bootstrap/Card';

function Aboutus() {
    return (
        <div className="container">
            <Card style={{ width: '100%', margin: '32px' }}>
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