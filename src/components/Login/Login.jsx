import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../public/firbase_init";
import { toast } from "react-toastify";

const Login = () => {
  const handleLogin = (e)=> {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    signInWithEmailAndPassword(auth,email,password)
    .then(result=> {
      console.log(result.uesr);
      toast("Login Successful");
    })
    .catch(error=> {
      console.log(error.message);
      toast(error.message);
    })
  }
  return (
    <form onSubmit={handleLogin}>
      <div className="max-w-xl mx-auto text-center font-bold mt-10">
        <h1 className="text-4xl">Login</h1>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent">Login</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
