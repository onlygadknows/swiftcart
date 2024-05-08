import { Card } from "react-bootstrap"
import '../assets/styles/custom_product.css';
import { Link } from "react-router-dom";
import Rating from "./Rating";


const Product = ({ product }) => {Link
  return (
    <Card className="my-3 p-3 rounded product-card">
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" className="product-image" />
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div" className="product-title">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Text>
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>

  )
}

export default Product
