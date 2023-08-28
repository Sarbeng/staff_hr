
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";

export default function AppraisalFormBPage8() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
        works_within_accepted_practices: "",
        works_witin_work_schedule: "",
        demonstrates_professionalism:""
    },
    validationSchema: Yup.object({
        works_within_accepted_practices: Yup.string().required("field cannot be empty"),
        works_witin_work_schedule: Yup.string().required("field cannot be empty"),
        demonstrates_professionalism: Yup.string().required("field cannot be empty"),
    }),
    onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        navigate('/dashboard/appraisalPage9')

    }
})
  return (
    <>
      <div className="flex flex-col gap-8 pb-8">
        <section className="shadow bg-white px-4 py-4 md:p-8 ">
          <FormHeading
            formName="Appraisal Form B"
            pageNumber="Page 8 of 13"
            pageHeader="Work Habits"
          />
          <form onSubmit={formik.handleSubmit}>
            <section id="inputs" className="flex flex-col gap-4">
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Conducts work within the established (and accepted) department practices
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.works_within_accepted_practices &&
                    formik.errors.works_within_accepted_practices
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="works_within_accepted_practices"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.works_within_accepted_practices}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.works_within_accepted_practices &&
                formik.errors.works_within_accepted_practices ? (
                  <div className="text-red-600">
                    {formik.errors.works_within_accepted_practices}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Conducts work according to the established and approved work schedule
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.works_witin_work_schedule &&
                    formik.errors.works_witin_work_schedule
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="works_witin_work_schedule"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.works_witin_work_schedule}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.works_witin_work_schedule &&
                formik.errors.works_witin_work_schedule ? (
                  <div className="text-red-600">
                    {formik.errors.works_witin_work_schedule}
                  </div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                Demonstrates professionalism and workplace etiquette
                </label>
                <select
                  className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${
                    formik.touched.demonstrates_professionalism &&
                    formik.errors.demonstrates_professionalism
                      ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                      : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                  }  bg-white`}
                  name="demonstrates_professionalism"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.demonstrates_professionalism}
                >
                  <option selected disabled>
                    Select Rank
                  </option>
                  <option>Administrator</option>
                  <option>Administrator 2</option>
                </select>
                {formik.touched.demonstrates_professionalism &&
                formik.errors.demonstrates_professionalism ? (
                  <div className="text-red-600">
                    {formik.errors.demonstrates_professionalism}
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
