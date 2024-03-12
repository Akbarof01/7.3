import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItemsList, CartTotals, SectionTitle } from "../components";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);

  const numberOfItemsInCart = useSelector(
    (state) => state.cartState.numberOfItemsInCart,
  );

  if (numberOfItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
