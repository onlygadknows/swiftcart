import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  useUpdateProductMutation,
  useGetProductDetailsQuery,
} from "../../slices/productsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/FormContainer";

const ProductEditScreen = () => {
  const { id: productId } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  console.log(product);

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedProduct = {
        _id: productId,
        name,
        price,
        image,
        brand,
        countInStock,
        description
    }

    const result = await updateProduct(updatedProduct);
    if(result.error) {
        toast.error(result.error);
    } else {
        toast.success('Product updated successfully!')
        navigate('/admin/productlist')
    }
  }

  return <>
  <Link to="/admin/productlist" className="btn btn-light my-3">
    Go back
  </Link>

  <FormContainer>
    <h1>Edit Product</h1>
    {loadingUpdate && <Loader />}

    {isLoading ? <Loader /> : error ? <Message variant="danger">
        {error}
    </Message> : (
        <Form onSubmit={submitHandler}>
            {/* image input placeholder */}
            <Form.Group controlId="name" className="my-2">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="price" className="my-2">
                <Form.Label>Price</Form.Label>
                <Form.Control type="name" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="brand" className="my-2">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder="Enter Brand Name" value={brand} onChange={(e) => setBrand(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="description" className="my-2">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="countInStock" className="my-2">
                <Form.Label>Count in Stock</Form.Label>
                <Form.Control type="number" placeholder="How many stocks?" value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="my-2">EDIT</Button>
        </Form>
    )}
  </FormContainer>
  </>;
};

export default ProductEditScreen;
