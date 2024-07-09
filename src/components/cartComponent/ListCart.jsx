import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQty,
  decreaseQty,
  deleteCart,
} from "../../redux-tookit/features/CartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
const ListCart = ({ setId }) => {
  const carts = useSelector((state) => state.CartSlice.carts);
  const [productId, setProductId] = useState([]);

  const dispatch = useDispatch();
  const handdleChecked = (e) => {
    const value = +e.target.value;
    setProductId((prevProductId) => {
      if (e.target.checked) {
        return [...prevProductId, value];
      } else {
        return prevProductId.filter((item) => item !== value);
      }
    });
  };

  useEffect(() => {
    setId(productId);
  }, [productId]);

  return (
    <div>
      <div className="flex flex-col">
        <ul className="flex items-center gap-3 mb-3">
          <Link to={"/"}>
            <li className="text-4xl font-bold text-orange-500">
              Soppe
            </li>
          </Link>
          |<li className="text-xl text-red-600">Giỏ hàng</li>
        </ul>

        <div className=" p-6 border-2 rounded-lg">
          {carts && carts.length > 0 ? (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Subtotal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {carts && carts.length > 0
                  ? carts.map((item) => (
                      <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4">
                          <Link to={`/product/${item.id}`}>
                            <img
                              src={item.thumbnail}
                              className="w-16 md:w-32 max-w-full max-h-full"
                              alt={item.title}
                            />
                          </Link>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {Math.ceil(item.price)}$
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <button
                              className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                              onClick={() =>
                                dispatch(
                                  decreaseQty({
                                    quantity: item.quantity,
                                    id: item.id,
                                  })
                                )
                              }
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <div>
                              <input
                                type="number"
                                id="first_product"
                                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                value={item.quantity}
                              />
                            </div>
                            <button
                              className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                              onClick={() =>
                                dispatch(
                                  increaseQty({
                                    quantity: item.quantity,
                                    id: item.id,
                                  })
                                )
                              }
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {Math.ceil(item.quantity * item.price)}$
                        </td>
                        <td className="px-6 py-4">
                          <a
                            onClick={() =>
                              dispatch(
                                deleteCart({
                                  id: item.id,
                                })
                              )
                            }
                            href="#"
                            className=" px-5 font-medium text-red-600 dark:text-red-500 hover:underline"
                          >
                            <DeleteIcon />
                          </a>

                          <input
                            value={item.id}
                            type="checkbox"
                            name="check"
                            id=""
                            className=" text-center"
                            onChange={handdleChecked}
                            checked={productId.includes(item.id)}
                          />
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          ) : (
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/red-supermarket-basket-isolated_1284-35982.jpg?w=740&t=st=1719996355~exp=1719996955~hmac=e34fca7fd2816694cb68acf10e6050fa7ba557725aa2278d1224e380c6b16479"
                alt=""
                className="w-56
     "
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListCart;
