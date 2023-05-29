import React, { useState } from "react";
import { SubHeading, Title } from "../../components/ui/Design";
import { ButtonMain } from "../../components/ui/Buttons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../../redux/services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/reducer/auth/authSlice";

const initialState = {
  email: "",
  password: "",
};
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const [loading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }
    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      await dispatch(SET_NAME(data.name));
      setIsLoading(false);
      navigate("/admin/dashboard");
      await dispatch(SET_LOGIN(true));
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <section className="login grid-cols-2 md:grid-cols-2 mobile:grid-cols-1 bg-gray-50 py-16">
        <div className=" m-auto max-w-xl ">
          <form className="bg-gray-50 p-8 py-24 shadows border-[6px] border-white">
            <div className="flex justify-center">
              <Title>Log in</Title>
            </div>
            <div>
              <SubHeading>Email</SubHeading>
              <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="jhbajhb@gmail.com" className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-orange-500 focus:border-orange-500" required />
            </div>
            <br />
            <div>
              <SubHeading>password</SubHeading>
              <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="*******" className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-orange-500 focus:border-orange-500" required />
            </div>
            <br />
            <div className="flex justify-center">
              <ButtonMain handleClick={handleLogin} text="login" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
