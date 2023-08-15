import TextInput from "./components/TextInput";
import { useFormik, } from "formik";
import * as Yup from "yup";
import UccLogo from "./assets/UccLogo";
import { BsGoogle } from "react-icons/bs";
import { PasswordInput } from "./components/PasswordInput";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { MdOutlineErrorOutline } from "react-icons/md";
import { useSignIn } from "react-auth-kit";
//import AuthContext from "../../context/UserContext"

export default function LoginPage() {
  //const {setAuth } = useContext(AuthContext);
  // const [success, setSuccess] = useState(null);
  const signIn = useSignIn()
  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setError(null)
    //connecting to the logiin api
    const response = await axios.post('http://127.0.0.1:8000/api/auth/login', values).catch((err) => {
      if (err) {
        setError(err.response.data.error)
        console.log(err.response.data.error)
      }
    })
    if (response) {
      // alert("Welcome Back in. Authenticating...")



      signIn({
        token: response.data.access_token,
        expiresIn: response.data.expires_in,
        tokenType: response.data.token_type,
        authState: { username: response.data.user.username, roles:response.data.user.roles, role:response.data.user.role }
      })

      navigate("/dashboard/home")
    }
  }

  const formik = useFormik({
    initialValues: {
      staff_no: "",
      password: "",
    },
    validationSchema: Yup.object({
      staff_no: Yup.string().required("staff_no field cannot be empty"),
      password: Yup.string().required("Password field cannot be empty"),
    }),
    validateOnBlur: true,
    onSubmit,
  });


  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen md:bg-slate-100 text-primary-main">
        <div className="p-4 md:p-16 bg-white w-full md:w-[524px] rounded-lg">
          <div className={`${error ? "bg-red-50 text-red-600 px-4 py-4 rounded-lg mb-8" : ""}`}>{error ? error : ""}</div>
          <form onSubmit={formik.handleSubmit}>
            {/* the logo section of the form goes here */}
            <UccLogo />
            {/* end of logo section */}
            <div className="mb-2">
              <TextInput
                inputStyle={
                  formik.touched.staff_no && formik.errors.staff_no
                    ? "error"
                    : "default"
                }
                label="Staff Number"
                name="staff_no"
                type="staff_no"
                handleBlur={formik.handleBlur}
                value={formik.values.staff_no}
                handleChange={formik.handleChange}
              />
              {formik.touched.staff_no && formik.errors.staff_no ? (
                <div className="flex items-center gap-2 text-red-600"> <span className="text-lg"><MdOutlineErrorOutline /></span>{formik.errors.staff_no}</div>
              ) : null}
            </div>
            <div className="">
              <PasswordInput
                inputStyle={
                  formik.touched.password && formik.errors.password
                    ? "error"
                    : "default"
                }
                label="Password"
                name="password"
                type="password"
                handleBlur={formik.handleBlur}
                value={formik.values.password}
                handleChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
            <div>
              <Button buttonStyle={` w-full text-white ${formik.isValid ? "bg-primary-main " : "bg-primary-border"}`} disabled={!formik.isValid} type="submit">
                Sign In
              </Button>
            </div>
          </form>
          {/* the divider goes here */}
          <div className="flex justify-center items-center gap-3 mt-4 mb-4">
            <hr className="h-0.5 bg-primary-border w-full" />
            <p>or</p>
            <hr className="h-0.5 bg-primary-border w-full" />
          </div>

          {/* the google signin button lies here, it is to redirect the user to google to signIn to the page */}

          <div id="googleSignIn">
            <Button buttonStyle="bg-red-700 w-full text-white " >
              <BsGoogle />
              <a href="https://www.google.com">Sign In with Google </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
