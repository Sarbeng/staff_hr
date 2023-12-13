

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronLeft, MdOutlineChevronRight, MdOutlineInfo } from "react-icons/md";
import { useEffect } from "react";
import axios from "../../../../api/axios";
import { useAuthUser } from "react-auth-kit";

export default function PromotionPage2() {
    //getting user token
    const auth = useAuthUser();
    const token = auth().token;
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/dashboard/promotionPage1')
    }

    const formik = useFormik({
        initialValues: {
            first_degree_details: "",
            pg_degree_details: "",
            prizes_grant_award: "",
        },
        validationSchema: Yup.object({
            first_degree_details: Yup.string().required("Please add details of your first degrees"),
            pg_degree_details: Yup.string().required("Please add details of your post graduate degrees"),
            prizes_grant_award: Yup.string().required("Please add details of your awards and prizes"),

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
                const update_url = '/promotion_update_1'

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
                    navigate('/dashboard/promotionpage3')
                }

            //navigate('/dashboard/promotionPage3')
            

        }
    })
    useEffect(() => {
        // const promotion_data_id = localStorage.getItem('promotion_data')
        // const staff_promotion_id = localStorage.getItem('staff_promotion_data')
        //console.log(promotion_data_id);
        //console.log(staff_promotion_id);
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
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 2 of 6</p>
                            </div>

                        </div>
                    </section>
                    <form onSubmit={formik.handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-4">
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                    Details of First Degrees (state when and where obtained, Class and / or Special distinctions (if any)
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.first_degree_details && formik.errors.first_degree_details ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="first_degree_details"

                                    value={formik.values.first_degree_details}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                  {formik.touched.first_degree_details && formik.errors.first_degree_details ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.first_degree_details}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Details of Post Graduate Degrees (state when and where obtained, class and/or special distinctions (if any)
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.pg_degree_details && formik.errors.pg_degree_details ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="pg_degree_details"

                                    value={formik.values.pg_degree_details}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
  {formik.touched.pg_degree_details && formik.errors.pg_degree_details ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.pg_degree_details}</div>
                                ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Prizes, Travel Grants and Awards; with Dates
                                </label>
                                <textarea
                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.prizes_grant_award && formik.errors.prizes_grant_award ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="prizes_grant_award"

                                    value={formik.values.prizes_grant_award}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                {formik.touched.prizes_grant_award && formik.errors.prizes_grant_award ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.prizes_grant_award}</div>
                                ) : null}
                            </div>



                        </section>
                        <section id="buttonSection" className="flex w-full gap-4">
                        <div className="w-1/2">
                        <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" onClick={handleBack}><MdOutlineChevronLeft/> Back</Button>
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