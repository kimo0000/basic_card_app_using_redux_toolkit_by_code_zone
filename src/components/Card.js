import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  clearAll,
  addQuantity,
  decQuantity,
} from "../redux_toolkit/slices/ActionsSlice";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";


function Card() {

  const cardProducts = useSelector((state) => state.actions);
  
  console.log(cardProducts);
  const dispatch = useDispatch();


  let totalPrice = 0;

  if (cardProducts.length === 0) {
     totalPrice = 0
  } else {
    totalPrice = cardProducts.reduce((acc, product) => {
       acc += product.price * product.quantity;
       return acc;
    }, 0);
  }


  return (
    <>
      <h3 style={{ margin: "140px 0 20px" }}>Card Products</h3>

      {cardProducts.length > 0 && (
        <>
          <h4 style={{ color: "red", fontWeight: "bold" }}>
            Total Prices : {totalPrice.toFixed(2)}$
          </h4>
          <button
            className="btn btn-danger"
            style={{ margin: "15px" }}
            onClick={() => dispatch(clearAll())}
          >
            Clear All
          </button>
        </>
      )}

      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>PRICE PRODUCT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {cardProducts.length === 0 ? (
              <tr>
                <td colSpan={7}>Table Is Empty Now !</td>
              </tr>
            ) : (
              cardProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title.slice(0, 18)}...</td>
                  <td>{product.category}</td>
                  <td>{product.price}$</td>
                  <td>
                    {product.quantity}
                    <p>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={() => dispatch(decQuantity(product))}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => dispatch(addQuantity(product))}
                      >
                        +
                      </button>
                    </p>
                  </td>
                  <td>{(product.price * product.quantity).toFixed(2)}$</td>
                  <td style={{ display: "flex", gap: "6px" }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteProduct(product))}
                    >
                      Delete
                    </button>
                    {/* <button className="btn btn-primary">Edit</button> */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Card;