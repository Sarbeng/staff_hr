

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronLeft, MdOutlineChevronRight, MdOutlineInfo } from "react-icons/md";
import axios from "../../../../api/axios";
import { useAuthUser } from "react-auth-kit";


export default function AppraisalPage2() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/dashboard/appraisalPage1')
    }

    const auth = useAuthUser();
    const token= auth().token;

    const onSubmit = async (values) => {
        const postUrl = "/appraisal_update"
       
        const response = await axios.post(postUrl,values,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error) => {
            console.log(error.response.data)
        })

        if (response) {
            console.log(response.data)
            navigate('/dashboard/appraisalPage3')

        }
    }

    const formik = useFormik({
        initialValues: {
            accomplishments: "",
            barriers_challenges: "",
            barriers_challenges_goal: "",
        },
        validationSchema: Yup.object({
            accomplishments: Yup.string().required("Please add Your Most Significant Accomplishments This Past Year"),
            barriers_challenges: Yup.string().required("Please this is a required field"),
            barriers_challenges_goal: Yup.string().required("Please add Particulars Of Conferences"),

        }),
        onSubmit:onSubmit
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <section id="heading" className="flex items-center justify-center mb-8">
                        <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                            <div className="flex gap-2 items-center">
                                <p className="text-primary-main capitalize">Appraisal Form A</p>
                                <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 2 of 3</p>
                            </div>

                        </div>
                    </section>
                    <form onSubmit={formik.handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-4">
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                List your most significant accomplishments this past year
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.accomplishments && formik.errors.accomplishments ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="accomplishments"

                                    value={formik.values.accomplishments}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                  {formik.touched.accomplishments && formik.errors.accomplishments ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.accomplishments}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                List any barriers or challenges that you have: *
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.barriers_challenges && formik.errors.barriers_challenges ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="barriers_challenges"

                                    value={formik.values.barriers_challenges}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
  {formik.touched.barriers_challenges && formik.errors.barriers_challenges ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.barriers_challenges}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                How has this barrier(s)/challenge(s) helped you to accomplish your goals:
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.barriers_challenges_goal && formik.errors.barriers_challenges_goal ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="barriers_challenges_goal"

                                    value={formik.values.barriers_challenges_goal}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                {formik.touched.barriers_challenges_goal && formik.errors.barriers_challenges_goal ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.barriers_challenges_goal}</div>
                                ) : null}
                            </div>



                        </section>
                        <section id="buttonSection" className="flex w-full gap-4">
                        <div className="w-1/2">
                        <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" onClick={handleBack}><MdOutlineChevronLeft/> Back</Button>
                        </div>
                        <div className="w-1/2">
                        <Button buttonStyle="bg-primary-main text-white w-full" type="submit">Save & Continue <MdOutlineChevronRight/></Button>
                           
                        </div>
                        
                        </section>
                    </form>
                </section>
            </div>
        </>
    );
}