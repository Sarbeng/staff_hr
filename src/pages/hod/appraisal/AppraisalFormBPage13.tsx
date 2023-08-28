
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { MdOutlineChevronRight, MdOutlineInfo } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";

export default function AppraisalFormBPage13() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      summary_of_current_year: "",
      identify_development_needs: "",
      overall_summary: "",
      overall_rating: "",
    },
    validationSchema: Yup.object({
        summary_of_current_year: Yup.string().required("This field cannot be empty"),
        identify_development_needs: Yup.string().required("This field cannot be empty"),
        overall_summary: Yup.string().required(
        "This field cannot be empty"
      ),
      overall_rating: Yup.string().required("This field cannot be empty"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/dashboard/appraisal");
    },
  });
  return (
    <>
      <div className="flex flex-col gap-8 pb-8">
        <section className="shadow bg-white px-4 py-4 md:p-8 ">
          <FormHeading formName="Appraisal Form B" pageNumber="Page 13 of 13" />
          <form onSubmit={formik.handleSubmit}>
            <section id="inputs" className="flex flex-col gap-4">
              <div id="inputGroup">
                <label className="capitalize text-sm" htmlFor="email">
                  Summary of Current Year Objectives
                </label>
                <textarea
                  className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.summary_of_current_year &&
                    formik.errors.summary_of_current_year
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="summary_of_current_year"
                  value={formik.values.summary_of_current_year}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.summary_of_current_year &&
                formik.errors.summary_of_current_year ? (
                  <div className="flex items-center gap-2 text-red-600">
                    <MdOutlineInfo />{" "}
                    {formik.errors.summary_of_current_year}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize text-sm" htmlFor="email">
                  Identify Development Needs (Specified areas)
                </label>
                <textarea
                  className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.identify_development_needs &&
                    formik.errors.identify_development_needs
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="identify_development_needs"
                  value={formik.values.identify_development_needs}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.identify_development_needs &&
                formik.errors.identify_development_needs ? (
                  <div className="flex items-center gap-2 text-red-600">
                    <MdOutlineInfo />{" "}
                    {formik.errors.identify_development_needs}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize text-sm" htmlFor="email">
                  Supervisor’s Overall Summary
                </label>
                <textarea
                  className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.overall_summary &&
                    formik.errors.overall_summary
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="overall_summary"
                  value={formik.values.overall_summary}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.overall_summary &&
                formik.errors.overall_summary ? (
                  <div className="flex items-center gap-2 text-red-600">
                    <MdOutlineInfo />{" "}
                    {formik.errors.overall_summary}
                  </div>
                ) : null}
              </div>

              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                  Supervisor’s Overall Rating
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.overall_rating &&
                    formik.errors.overall_rating
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="demonstrates_professionalism"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.overall_rating}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.overall_rating &&
                formik.errors.overall_rating ? (
                  <div className="text-red-600">
                    {formik.errors.overall_rating}
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
