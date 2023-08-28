

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";

export default function AppraisalFormBPage11() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            inspires_and_guides: "",
            treats_with_respect: "",
            creates_nice_climate:"",
            positive_role_model:"",
            operates_with_integrity:"",
        },
        validationSchema: Yup.object({
            inspires_and_guides: Yup.string().required("This field cannot be empty"),
            treats_with_respect: Yup.string().required("This field cannot be empty"),
            creates_nice_climate: Yup.string().required(
                "This field cannot be empty"
            ),
            positive_role_model: Yup.string().required("This field cannot be empty"),
            operates_with_integrity: Yup.string().required("This field cannot be empty"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/hod_appraisalPage12')

        }
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading
                        formName="Appraisal Form B"
                        pageNumber="Page 11 of 13"
                        pageHeader="Leading Others"
                    />
                     <form onSubmit={formik.handleSubmit}>
            <section id="inputs" className="flex flex-col gap-4">
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Inspires and guides individuals toward higher levels of performance
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.inspires_and_guides &&
                    formik.errors.inspires_and_guides
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="inspires_and_guides"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.inspires_and_guides}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.inspires_and_guides &&
                formik.errors.inspires_and_guides ? (
                  <div className="text-red-600">
                    {formik.errors.inspires_and_guides}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Treats people with dignity, respect, and fairness
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.treats_with_respect &&
                    formik.errors.treats_with_respect
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="treats_with_respect"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.treats_with_respect}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.treats_with_respect &&
                formik.errors.treats_with_respect ? (
                  <div className="text-red-600">
                    {formik.errors.treats_with_respect}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Creates a climate in which people want to do their best
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.creates_nice_climate &&
                    formik.errors.creates_nice_climate
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="creates_nice_climate"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.creates_nice_climate}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.creates_nice_climate &&
                formik.errors.creates_nice_climate ? (
                  <div className="text-red-600">
                    {formik.errors.creates_nice_climate}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Serves as a positive role model
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.positive_role_model &&
                    formik.errors.positive_role_model
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="demonstrates_professionalism"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.positive_role_model}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.positive_role_model &&
                formik.errors.positive_role_model ? (
                  <div className="text-red-600">
                    {formik.errors.positive_role_model}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Operates with integrity, honesty, and courage
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.operates_with_integrity &&
                    formik.errors.operates_with_integrity
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="demonstrates_professionalism"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.operates_with_integrity}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.operates_with_integrity &&
                formik.errors.operates_with_integrity ? (
                  <div className="text-red-600">
                    {formik.errors.operates_with_integrity}
                  </div>
                ) : null}
              </div>
            </section>
            <section
              id="buttonSection"
              className="flex w-full gap-4 items-end justify-end"
            >
              <div className="w-1/2">
                {/* <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" ><MdOutlineChevronLeft/> Back</Button> */}
              </div>
              <div className="w-1/2 ">
                <Button buttonStyle="bg-primary-main text-white w-full">
                  Save & Continue <MdOutlineChevronRight />
                </Button>
              </div>
            </section>
          </form>
                </section>
            </div>
        </>
    );
}