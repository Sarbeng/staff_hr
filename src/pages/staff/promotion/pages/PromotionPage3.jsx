

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronLeft, MdOutlineChevronRight, MdOutlineInfo } from "react-icons/md";
import axios from "../../../../api/axios";
import { useAuthUser } from "react-auth-kit";

export default function PromotionPage3() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/dashboard/promotionPage2')
    }

    //retrieve the user token
    const auth = useAuthUser();
    const token = auth().token;

    const formik = useFormik({
        initialValues: {
            previous_post_duties: "",
            teaching_duties_experience: "",
            conference_seminars_etc: "",
        },
        validationSchema: Yup.object({
            previous_post_duties: Yup.string().required("Please add previous posts And Duties held before joining this university"),
            teaching_duties_experience: Yup.string().required("Please add Posts And Duties held in this university"),
            conference_seminars_etc: Yup.string().required("Please add Particulars Of Conferences"),

        }),
        onSubmit: async (values) => {
            alert(JSON.stringify(values, null, 2));
            const promotion_data_id = localStorage.getItem('promotion_data')
            const staff_promotion_id = localStorage.getItem('staff_promotion_data')

            const localData ={
                promo_id :  promotion_data_id,
                staff_id : staff_promotion_id
            }
            const data = {
            ...values,
            promotion_data_id,
            staff_promotion_id
            }
            console.log(
                data
            )

            //connecting to axios and posting to update database
                const update_url = '/promotion_update_2'

                const response = await axios.post(update_url,{...data},{
                    headers: {
                        Authorization:    `Bearer ${token}`,
                        "Accept": "application/json"
                    }
                }).catch((error) => {
                    console.log(error)
                })

                if (response) {
                   // alert("Another")
                    console.log(response)
                   // navigate('/dashboard/promotionpage4')
                }

            //navigate('/dashboard/promotionPage3')
            

        

           // navigate('/promotionPage4')

        }
    })
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <section id="heading" className="flex items-center justify-center mb-8">
                        <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                            <div className="flex gap-2 items-center">
                                <p className="text-primary-main capitalize">Application for Promotion</p>
                                <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 3 of 6</p>
                            </div>

                        </div>
                    </section>
                    <form onSubmit={formik.handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-4">
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Previous Posts and Duties held, with Dates, before joining the University
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.previous_post_duties && formik.errors.previous_post_duties ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="previous_post_duties"

                                    value={formik.values.previous_post_duties}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                  {formik.touched.previous_post_duties && formik.errors.previous_post_duties ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.previous_post_duties}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Posts and Duties with Dates, held in this University
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.teaching_duties_experience && formik.errors.teaching_duties_experience ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="teaching_duties_experience"

                                    value={formik.values.teaching_duties_experience}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
  {formik.touched.teaching_duties_experience && formik.errors.teaching_duties_experience ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.teaching_duties_experience}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Particulars of Conferences; Special Seminars, and Workshops in which you have participated. (Please list Papers you
read (if any)
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.conference_seminars_etc && formik.errors.conference_seminars_etc ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="conference_seminars_etc"

                                    value={formik.values.conference_seminars_etc}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                {formik.touched.conference_seminars_etc && formik.errors.conference_seminars_etc ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.conference_seminars_etc}</div>
                                ) : null}
                            </div>



                        </section>
                        <section id="buttonSection" className="flex w-full gap-4">
                        <div className="w-1/2">
                        <Button type="button" buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" onClick={handleBack}><MdOutlineChevronLeft/> Back</Button>
                        </div>
                        <div className="w-1/2">
                        <Button type="submit" buttonStyle="bg-primary-main text-white w-full">Save & Continue <MdOutlineChevronRight/></Button>
                           
                        </div>
                        
                        </section>
                    </form>
                </section>
            </div>
        </>
    );
}