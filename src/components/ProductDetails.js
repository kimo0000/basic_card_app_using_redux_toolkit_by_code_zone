import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";




function ProductDetails() {

   const { productID } = useParams();
   
   const [product, setProduct] = useState([]);


   useEffect(() => {
     fetch(`http://localhost:9000/products/${productID}`)
       .then((res) => res.json())
       .then((data) => {
         return setProduct(data);
       });
   }, [productID]);



   return (
     <>
       <h3 style={{ marginTop: "80px" }}>Product Details</h3>

       <Container>
         <Row>
               <Col key={product.id}>
                 <Card style={{ width: "18rem", margin: "10px" }}>
                   <Card.Img
                     variant="top"
                     src={product.image}
                     style={{ height: "260px" }}
                   />
                   <Card.Body>
                     <Card.Title>{product.title}</Card.Title>
                     <Card.Text>{product.price}$</Card.Text>
                     <Card.Text>{product.category}</Card.Text>
                     <Card.Text>
                       {product.description}
                     </Card.Text>
                   </Card.Body>
                 </Card>
               </Col>
         </Row>
       </Container>
     </>
   );
}

export default ProductDetails;