import React from "react";
import { Card } from "react-bootstrap";

function ItemFavProduct(){
    return (
        <>
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>
                        Product Description
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}


export default ItemFavProduct;
