import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { fetchProducts } from "../redux_toolkit/slices/ProductSlice";
import { addProduct } from "../redux_toolkit/slices/ActionsSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Products() {

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();


  const [valueButton, setValueButton] = useState("All");
  const [isActive, setIsActive] = useState(0);
  
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])
    
    // console.log(products);


   const filtredProducts = (value, index) => {
      setIsActive(index);
      setValueButton(value);
   }


  return (
    <>
      <h3 style={{marginTop: "80px"}}>Products</h3>
      
      <div className="btns p-3">
        <button
          id="All"
          className={isActive === 0 ? "btns m-1 btn btn-success" : "btns m-1"}
          onClick={(e) => filtredProducts(e.target.innerText, 0)}
        >
          All
        </button>
        <button
          id="men's clothing"
          className={isActive === 1 ? "btns m-1 btn btn-success" : "btns m-1"}
          onClick={(e) => filtredProducts(e.target.innerText, 1)}
        >
          men's clothing
        </button>
        <button
          id="jewelery"
          className={isActive === 2 ? "btns m-1 btn btn-success" : "btns m-1"}
          onClick={(e) => filtredProducts(e.target.innerText, 2)}
        >
          jewelery
        </button>
        <button
          id="electronics"
          className={isActive === 3 ? "btns m-1 btn btn-success" : "btns m-1"}
          onClick={(e) => filtredProducts(e.target.innerText, 3)}
        >
          electronics
        </button>
        <button
          id="women's clothing"
          className={isActive === 4 ? "btns m-1 btn btn-success" : "btns m-1"}
          onClick={(e) => filtredProducts(e.target.innerText, 4)}
        >
          women's clothing
        </button>
      </div>
      <Container>
        <Row>
          {products
            .filter((item) => {
              return valueButton === "All"
                ? item
                : item.category === valueButton;
            })
            .map((product) => {
              return (
                <Col key={product.id}>
                  <Card style={{ width: "18rem", margin: "10px" }}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ height: "260px" }}
                    />
                    <Card.Body>
                      <Card.Title>{product.title.slice(0, 35)}...</Card.Title>
                      <Card.Text>{product.price}$</Card.Text>
                      <Card.Text>{product.category}</Card.Text>
                      <Card.Text>
                        {product.description.slice(0, 55)}...
                      </Card.Text>
                      <Button
                        variant="primary"
                        style={{ marginRight: "6px" }}
                        onClick={() => dispatch(addProduct(product))}
                      >
                        Add To Card
                      </Button>
                      <Link
                        to={`/ProductDetails/${product.id}`}
                        variant="success"
                        className="btn btn-info"
                      >
                        Go To Details
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default Products;
