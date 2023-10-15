import { Helmet, HelmetProvider } from "react-helmet-async";
import SignUpImg from "/register.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from './../../providers/AuthProvider';
import toast from "react-hot-toast";

const SignUp = () => {

  const { user, loading, signUpUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // If Already Signed In
  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  // Data from Input
  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Signing Up User
    signUpUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("Resistration completed");
            navigate("/");
          })
          .catch(error => {
            toast.error(error.message);
            console.log(error.message);
          })
      })
      .catch(error => {
        toast.error(error.message);
        console.log(error.message);
      })
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <section>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center">
              <h1 className="text-5xl font-bold">SignUp Now!</h1>
              <p className="my-5">Please SignUp to get access of unlimited features of our eManage website.</p>
              <img className="hidden lg:block" src={SignUpImg} alt="SignUp Image" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Full Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" />
                </div>
                <p className="mt-2">&#187; Already have an account?&nbsp;
                  <Link to="/signIn" className="link link-hover">Sing In here.</Link>
                </p>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default SignUp
