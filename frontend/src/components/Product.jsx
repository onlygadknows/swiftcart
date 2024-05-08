import { Card } from "react-bootstrap"
import '../assets/styles/custom_product.css';
import { Link } from "react-router-dom";


const Product = ({ product }) => {Link
  return (
    <Card className="my-3 p-3 rounded custom-shadow">
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" className="product-image" />
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong className="product-name">{product.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>

  )
}

export default Product
