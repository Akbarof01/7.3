import { useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { customFetch } from "../utils";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const inputData = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", inputData);
      store.dispatch(loginUser(response.data));
      toast.success("You have logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage = error?.response?.data?.error?.message;
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      navigate("/");
      toast.success("Welcome, Guest User");
    } catch (error) {
      console.log(error);
      toast.error("Guest User Login Error. Please try again");
    }
  };

  return (
    <section></section>
  );
};

export default Login;
