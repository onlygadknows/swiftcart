import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGetProductsQuery,
  useCreateProductMutation,
} from "../../slices/productsApiSlice";
import { formatDate } from "../../utils/dateConvertUtils";
import { toast } from "react-toastify";
import { useDeleteProductMutation } from "../../slices/productsApiSlice";
import "../../assets/styles/custom_css.css";
import Paginate from "../../components/Paginate";

const ProductListScreen = () => {
  const {pageNumber} = useParams();
  const { data, refetch, isLoading, error } = useGetProductsQuery({pageNumber});

  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();

  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();

  const deleteHandler = async (productId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        await deleteProduct(productId);
        refetch();
        toast.success('Product deleted!')
      } catch (err) {
        toast.error(err.data?.message || err.error);
      }
    }
  };

  const createProductHandler = async () => {
    if (window.confirm("Are you sure you want to create a new product?")) {
      //will change this into new modal for better UX
      try {
        await createProduct();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h2>Welcome, Admin!</h2>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3" onClick={createProductHandler}>
            <FaEdit /> Add New Product
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped hover bordered responsive className="table-sm" variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>STOCK</th>
                <th>BRAND</th>
                <th>CATEGORY</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>
                    {" "}
                    <span>&#x20B1;</span> {product.price}
                  </td>
                  <td>{product.countInStock}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>
                  <div className="buttons">
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm m-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                   
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                    </div>
               
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={data.pages} page={data.page} isAdmin={true} />
        </>
      )}
    </>
  );
};

export default ProductListScreen;
