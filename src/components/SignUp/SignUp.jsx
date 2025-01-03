import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../../public/firbase_init";
import { toast } from "react-toastify";

const SignUp = () => {

  const handleRegister = (e)=> {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(email,password,name,photo);
    // create user with email and password
    createUserWithEmailAndPassword(auth,email,password)
    .then(result => {
      console.log(result);
    }).catch(error=> {
      console.log(error);
    })

    const profile = {
      displayName: name,
      photoURL: photo
    }

    updateProfile(auth.currentUser,profile)
    .then(()=> {
      toast("Profile Updated");
    })
    .catch((error)=> {
      toast(error.message);
    })
  }
  return (
    <div className="max-w-xl mx-auto text-center font-bold mt-10">
      <h1 className="text-4xl mb-20">Signup</h1>
      <form onSubmit={handleRegister}>
      <div className="form-control">
            <label className="label mb-1">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
      <label className="input input-bordered flex items-center gap-2 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="email" name="email" className="grow" placeholder="Email" />
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
        <input type="password" name="password" className="grow" placeholder="Password" />
      </label>
      <button type="submit" className="btn btn-accent mt-5 font-bold text-white w-full">Signup</button>
      </form>
      
    </div>
  );
};

export default SignUp;
