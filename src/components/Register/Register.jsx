import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./../../../public/firbase_init";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.checkbox.checked;
    console.log(email, password);
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{1,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "At least one uppercase, one lowercase,one number and one special character"
      );
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password should be 6 caracters or longer");
      return;
    }
    if(!terms){
      setErrorMessage("Please Accept Our Terms And Condition");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setErrorMessage("");
        toast("User Create Successfull");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast(error.message);
        // ..
      });
  };
  return (
    <div className="max-w-xl mx-auto mt-20 relative">
      <form onSubmit={handleSubmit}>
        
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="grow"
            placeholder="Password"
          />
        </label>
        <div
          className="btn btn-xs absolute right-5 top-[68px]"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start">
            <input type="checkbox" name="checkbox" className="checkbox mr-2" />
            <span className="label-text">Accept Our Terms And Condition</span>
          </label>
        </div>
        <button
          className="btn btn-accent mt-3 text-white font-bold w-full"
          type="submit"
        >
          Register
        </button>
      </form>
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default Register;
