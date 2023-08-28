

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";

export default function AppraisalFormBPage12() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            clarifies_behavior: "",
            clear_objectives: "",
            provides_necessary_information:"",
            timely_feedback:"",
            works_with_employees:"",
        },
        validationSchema: Yup.object({
            clarifies_behavior: Yup.string().required("This field cannot be empty"),
            clear_objectives: Yup.string().required("This field cannot be empty"),
            provides_necessary_information: Yup.string().required(
                "This field cannot be empty"
            ),
            timely_feedback: Yup.string().required("This field cannot be empty"),
            works_with_employeesy: Yup.string().required("This field cannot be empty"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/hod_appraisalPage13')

        }
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading
                        formName="Appraisal Form B"
                        pageNumber="Page 12 of 13"
                        pageHeader="Mentoring Others"
                    />
                     <form onSubmit={formik.handleSubmit}>
            <section id="inputs" className="flex flex-col gap-4">
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Clarifies expected behaviors and levels of performance
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.clarifies_behavior &&
                    formik.errors.clarifies_behavior
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="clarifies_behavior"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.clarifies_behavior}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.clarifies_behavior &&
                formik.errors.clarifies_behavior ? (
                  <div className="text-red-600">
                    {formik.errors.clarifies_behavior}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Sets clear objectives and measures
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.clear_objectives &&
                    formik.errors.clear_objectives
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="clear_objectives"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.clear_objectives}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.clear_objectives &&
                formik.errors.clear_objectives ? (
                  <div className="text-red-600">
                    {formik.errors.clear_objectives}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Provides the necessary information, support, and resources for staff to be effective
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.provides_necessary_information &&
                    formik.errors.provides_necessary_information
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="provides_necessary_information"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.provides_necessary_information}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.provides_necessary_information &&
                formik.errors.provides_necessary_information ? (
                  <div className="text-red-600">
                    {formik.errors.provides_necessary_information}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Provides timely feedback and guidance on performance
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.timely_feedback &&
                    formik.errors.timely_feedback
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="demonstrates_professionalism"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.timely_feedback}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.timely_feedback &&
                formik.errors.timely_feedback ? (
                  <div className="text-red-600">
                    {formik.errors.timely_feedback}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Works with employees to reinforce effective efforts and progress or improve performance
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.works_with_employees &&
                    formik.errors.works_with_employees
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="demonstrates_professionalism"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.works_with_employees}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.works_with_employees &&
                formik.errors.works_with_employees ? (
                  <div className="text-red-600">
                    {formik.errors.works_with_employees}
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