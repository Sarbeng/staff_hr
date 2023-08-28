

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";

export default function AppraisalFormBPage9() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      identifies_issues: "",
      probes_understanding: "",
      analyzes_information: "",
      chooses_appropriate_action: "",
      involves_others: "",
    },
    validationSchema: Yup.object({
      identifies_issues: Yup.string().required("This field cannot be empty"),
      probes_understanding: Yup.string().required("This field cannot be empty"),
      demonstrates_professionalism: Yup.string().required(
        "This field cannot be empty"
      ),
      chooses_appropriate_action: Yup.string().required(
        "This field cannot be empty"
      ),
      involves_others: Yup.string().required("This field cannot be empty"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/dashboard/hod_appraisalPage10");
    },
  });
  return (
    <>
      <div className="flex flex-col gap-8 pb-8">
        <section className="shadow bg-white px-4 py-4 md:p-8 ">
          <FormHeading
            formName="Appraisal Form B"
            pageNumber="Page 9 of 13"
            pageHeader="Decision Making"
          />
          <form onSubmit={formik.handleSubmit}>
            <section id="inputs" className="flex flex-col gap-4">
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                  Identifies issues, problems and opportunities and determines
                  that action is needed
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.identifies_issues &&
                    formik.errors.identifies_issues
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="identifies_issues"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.identifies_issues}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.identifies_issues &&
                formik.errors.identifies_issues ? (
                  <div className="text-red-600">
                    {formik.errors.identifies_issues}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                  Probes all relevant sources to better understand problem,
                  issue or opportunity
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.probes_understanding &&
                    formik.errors.probes_understanding
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="probes_understanding"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.probes_understanding}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.probes_understanding &&
                formik.errors.probes_understanding ? (
                  <div className="text-red-600">
                    {formik.errors.probes_understanding}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                  Analyzes information and generates options for addressing
                  issue, problem or opportunity
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.analyzes_information &&
                    formik.errors.analyzes_information
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="analyzes_information"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.analyzes_information}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.analyzes_information &&
                formik.errors.analyzes_information ? (
                  <div className="text-red-600">
                    {formik.errors.analyzes_information}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                  Chooses appropriate action by evaluating options and
                  considering implications in a timely manner
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.chooses_appropriate_action &&
                    formik.errors.chooses_appropriate_action
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="demonstrates_professionalism"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.chooses_appropriate_action}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.chooses_appropriate_action &&
                formik.errors.chooses_appropriate_action ? (
                  <div className="text-red-600">
                    {formik.errors.chooses_appropriate_action}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                  Involves others as needed to ensure quality and commitment of
                  decision
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.involves_others &&
                    formik.errors.involves_others
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="demonstrates_professionalism"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.involves_others}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.involves_others &&
                formik.errors.involves_others ? (
                  <div className="text-red-600">
                    {formik.errors.involves_others}
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
