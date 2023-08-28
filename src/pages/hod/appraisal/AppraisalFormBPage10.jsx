
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";

export default function AppraisalFormBPage10() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            maintains_effective_performance: "",
            copes_effectively: "",
            presents_positive_disposition:"",
        },
        validationSchema: Yup.object({
            maintains_effective_performance: Yup.string().required("This field cannot be empty"),
            copes_effectively: Yup.string().required("This field cannot be empty"),
            presents_positive_disposition: Yup.string().required(
                "This field cannot be empty"
            ),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/dashboard/hod_appraisalPage11')

        }
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading
                        formName="Appraisal Form B"
                        pageNumber="Page 10 of 13"
                        pageHeader="Composure"
                    />
                    <form onSubmit={formik.handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-4">

                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Maintains effective performance under pressure
                                </label>
                                <select
                                    className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.maintains_effective_performance &&
                                            formik.errors.maintains_effective_performance
                                            ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                                            : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                                        }  bg-white`}
                                    name="maintains_effective_performance"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.maintains_effective_performance}
                                >
                                    <option selected disabled>
                                        Select Rank
                                    </option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.maintains_effective_performance &&
                                    formik.errors.maintains_effective_performance ? (
                                    <div className="text-red-600">
                                        {formik.errors.maintains_effective_performance}
                                    </div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Copes effectively and develops effective approaches to deal with pressure or stress
                                </label>
                                <select
                                    className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.copes_effectively &&
                                            formik.errors.copes_effectively
                                            ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                                            : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                                        }  bg-white`}
                                    name="copes_effectively"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.copes_effectively}
                                >
                                    <option selected disabled>
                                        Select Rank
                                    </option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.copes_effectively &&
                                    formik.errors.copes_effectively ? (
                                    <div className="text-red-600">
                                        {formik.errors.copes_effectively}
                                    </div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Presents a positive disposition and maintains constructive interpersonal relationships when under stress
                                </label>
                                <select
                                    className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.presents_positive_disposition &&
                                            formik.errors.presents_positive_disposition
                                            ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500"
                                            : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"
                                        }  bg-white`}
                                    name="presents_positive_disposition"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.presents_positive_disposition}
                                >
                                    <option selected disabled>
                                        Select Rank
                                    </option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.presents_positive_disposition &&
                                    formik.errors.presents_positive_disposition ? (
                                    <div className="text-red-600">
                                        {formik.errors.presents_positive_disposition}
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