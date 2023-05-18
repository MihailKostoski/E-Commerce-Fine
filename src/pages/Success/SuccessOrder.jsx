import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { userRequest } from "../../Url/url";
import { Link } from "react-router-dom";
import { addOrder } from "../../redux/orderSlice";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/cartSlice";
import PageNotFound from "../PageNotFound/PageNotFound";
const SuccessOrder = () => {
  const location = useLocation();
  const stateLoc = location?.state;
  const dataStripe = stateLoc?.stripeData;
  const cart = stateLoc?.products;
  const currentUser = useSelector((state) => state?.user?.currentUser);
  const [orderId, setOrderId] = useState(null);
  const order = useSelector((state) => state.order.order);
  const dispatch = useDispatch();
  const [orderResponse, setOrderResponse] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const createOrder = async () => {
      if (order !== false) {
        try {
          const response = await userRequest.post("/orders", {
            userId: currentUser?._id,
            products: cart.products?.map((item) => ({
              productId: item._id,
              quantity: item._quantity,
            })),
            amount: cart?.total,
            address: dataStripe?.billing_details.address,
          });
          setOrderResponse(response.data);
          dispatch(addOrder(false));
          dispatch(removeCart());
        } catch (error) {
          console.error("Error creating order:", error);
          navigate("/cancel");
        }
      } else {
        console.log("Already ordered");
      }
    };

    const getOrder = async () => {
      try {
        const response = await userRequest.get("/orders");
        setOrderId(response.data);
      } catch (error) {
        console.error("Error getting order:", error);
      }
    };

    createOrder();
    getOrder();
  }, []); // Empty dependency array to run the effect only once

  console.log(orderId, "ord");
  console.log(order, "order");
  console.log(orderResponse, "orderRes");
  return (
    <>
      {stateLoc ? (
        <div className="bg-gray-100 h-screen">
          <div className="bg-white p-6  md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Payment Done!
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for completing your secure online payment.
              </p>
              <p> Have a great day! </p>
              <div className="py-10 text-center">
                <Link
                  to="/"
                  className="px-12 bg-gray-600 hover:bg-gray-900 text-white font-semibold py-3"
                >
                  GO BACK
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default SuccessOrder;
