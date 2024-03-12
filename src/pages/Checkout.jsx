import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const numberOfItemsInCart = useSelector(
    (state) => state.cartState.numberOfItemsInCart,
  );

  if (numberOfItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
    </>
  );
};

export default Checkout;
