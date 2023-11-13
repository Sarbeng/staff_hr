

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronLeft, MdOutlineChevronRight, MdOutlineInfo } from "react-icons/md";
import axios from "../../../../api/axios";
import { useAuthUser } from "react-auth-kit";

export default function AppraisalSign() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/dashboard/appraisalPage2')
    }

    // get token
    const auth = useAuthUser();
    const token = auth().token;

    const onSumbit = async (values) => {
        
        const postUrl = "/appraisal_sig"
        const response = await axios.post(postUrl,values,{
            headers: {
                "Accept" : "application/json",
                Authorization: `Bearer ${token}`
            }
        }).catch((error) => {
            console.log(error.response.data)
        })

        if (response) {
            alert(JSON.stringify(values, null, 2));
            console.log(response.data)
            navigate('/dashboard/appraisal')
        }
    }

    const formik = useFormik({
        initialValues: {
            signature: "",
        },
        validationSchema: Yup.object({
            signature: Yup.string().required("Please enter in your full name"),
        }),
        onSubmit: onSumbit
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
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 4 of 4</p>
                            </div>

                        </div>
                    </section>
                    <section className="flex flex-col gap-4">
                        <p className=""> Dear {auth()?.user_data.fname},
                        </p>
                        <p>
                        By entering your full name in the provided field, you are consenting to the usage and submission of the data you have entered. Your full name will serve as a digital signature, confirming your agreement with the information provided in the form.


                        </p>
                        <p>
                        This consent ensures that you acknowledge and authorize the processing of the data you have submitted. We take your privacy seriously and will handle your information in accordance with HR Policy. If you have any concerns or questions about how your data is used, please refer to Human Resources.
                        </p>
                    </section>
                    <form onSubmit={formik.handleSubmit} className="mt-14">
                        <section id="inputs" className="flex flex-col gap-4">
                            <div id="inputGroup">
                                <label className="capitalize text-sm" htmlFor="email">
                                Please enter in your fullname 
                                </label>
                                <input
                                    className={`mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.signature && formik.errors.signature ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                    name="signature"

                                    value={formik.values.signature}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}

                                />
                                  {formik.touched.signature && formik.errors.signature ? (
                                    <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo/> {formik.errors.signature}</div>
                                ) : null}
                            </div>



                        </section>
                        <section id="buttonSection" className="flex w-full gap-4">
                        <div className="w-1/2">
                        <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" onClick={handleBack}><MdOutlineChevronLeft/> Back</Button>
                        </div>
                        <div className="w-1/2">
                        <Button buttonStyle="bg-primary-main text-white w-full">Submit Appraisal Form <MdOutlineChevronRight/></Button>
                           
                        </div>
                        
                        </section>
                    </form>
                </section>
            </div>
        </>
    );
}