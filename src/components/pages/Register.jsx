import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect } from "react";
import { Store } from "../../store/index";
import { getError } from "../../lib/utils";
import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const Register = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const submitHandler = async (values, { setSubmitting }) => {
    try {
      const { data } = await Axios.post(`${apiBaseUrl}/api/users/signup`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
    setSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section className="mt-header layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="text-center mb-60 md:mb-30">
                <h1 className="text-30">Register</h1>
                <div className="text-18 fw-500 mt-20 md:mt-15">
                  Let&apos;s create your account!
                </div>
                <div className="mt-5">
                  Already have an account?{" "}
                  <Link to="/login" className="text-accent-1">
                    Log In!
                  </Link>
                </div>
              </div>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={submitHandler}
              >
                {({ isSubmitting }) => (
                  <Form className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30">
                    <div className="form-input mt-30">
                      <Field
                        type="email"
                        name="email"
                        placeholder=" "
                        validateOnBlur
                      />
                      <label className="lh-1 text-16 text-light-1">
                        Your Email
                      </label>
                      <ErrorMessage name="email" component="div" />
                    </div>

                    <div className="row mt-30 ">
                      <div className="col form-input ">
                        <Field type="text" name="firstName" placeholder=" " />
                        <label className="lh-1 ml-15 text-16 text-light-1">
                          First Name
                        </label>
                        <ErrorMessage name="firstName" component="div" />
                      </div>
                      <div className="col form-input">
                        <Field type="text" name="lastName" placeholder=" " />
                        <label className="lh-1 ml-15 text-16 text-light-1">
                          Last Name
                        </label>
                        <ErrorMessage name="lastName" component="div" />
                      </div>
                    </div>

                    <div className="form-input mt-30">
                      <Field type="password" name="password" placeholder=" " />
                      <label className="lh-1 text-16 text-light-1">
                        Password
                      </label>
                      <ErrorMessage name="password" component="div" />
                    </div>

                    <div className="form-input mt-30">
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder=" "
                      />
                      <label className="lh-1 text-16 text-light-1">
                        Confirm Password
                      </label>
                      <ErrorMessage name="confirmPassword" component="div" />
                    </div>

                    {/* <div className="form-input mt-30">
                      <Field as="select" name="userType">
                        <option value="HILLS">Hills</option>
                        <option value="HAWAII">Hawaii</option>
                      </Field>
                      <label className="lh-1 text-16 text-light-1">
                        User Type
                      </label>
                      <ErrorMessage name="userType" component="div" />
                    </div> */}

                    <button
                      type="submit"
                      className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30"
                      disabled={isSubmitting}
                    >
                      Register
                      <i className="icon-arrow-top-right ml-10"></i>
                    </button>

                    <div className="relative line mt-50 mb-30">
                      <div className="line__word fw-500">OR</div>
                    </div>

                    <div className="row y-gap-15">
                      <div className="col">
                        <button
                          type="button"
                          className="button -md -outline-blue-1 text-blue-1 col-12"
                          onClick={() =>
                            (window.location.href = "/api/auth/facebook")
                          }
                        >
                          <i className="icon-facebook mr-10"></i>
                          Continue Facebook
                        </button>
                      </div>

                      <div className="col">
                        <button
                          type="button"
                          className="button -md -outline-red-1 text-red-1 col-12"
                          onClick={() =>
                            (window.location.href = "/api/auth/google")
                          }
                        >
                          <i className="icon-google mr-10"></i>
                          Continue Google
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
