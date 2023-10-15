import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
import SignInImg from "/login.png";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const SignIn = () => {

  const { loading, user, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // If Already Signed In
  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  // Singin In User
  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Resistration completed");
        navigate("/");
      })
  }

  return (
    // <div onClick={() => {
    //   Swal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire(
    //         'Deleted!',
    //         'Your file has been deleted.',
    //         'success'
    //       )
    //     }
    //   })
    // }} className="cursor-pointer">
    //   Sign In
    // </div>

    <HelmetProvider>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <section>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <div className="text-center">
              <h1 className="text-5xl font-bold">SignIn Now!</h1>
              <p className="my-5">Please SignIn to get access of unlimited features of our eManage website.</p>
              <img className="hidden lg:block" src={SignInImg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSignIn}>
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
                  <p className="mt-3">&#187; Need an account?&nbsp;
                    <Link to="/signUp" className="link link-hover">Sing Up here.</Link>
                  </p>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign In</button>
                  </div>
                </form>
                <div className="form-control">
                  <p className="divider font-bold">OR</p>
                  <div className="form-control">
                    <button className="btn btn-primary">Sign In with Google</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default SignIn
