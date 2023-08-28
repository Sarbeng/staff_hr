

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import {
    MdOutlineChevronLeft,
    MdOutlineChevronRight,
    MdOutlineInfo,
    MdOutlineUploadFile,
} from "react-icons/md";
import { } from "react";

export default function PromotionDocUpload() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/promotionPage4");
    };

    const formik = useFormik({
        initialValues: {
            upload_cv: "",
            upload_papers: "",
        },
        validationSchema: Yup.object({
            upload_cv: Yup.string().required("Please check and upload your CV"),
            upload_papers: Yup.string().required("Please check and upload your papers"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate("/promotionDocUpload");
        },
    });
    return (
        <>
            <div className="flex flex-col gap8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <section
                        id="heading"
                        className="flex items-center justify-center mb-8"
                    >
                        <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">
                            <div className="flex flex-col md:flex-row gap-2 items-center">
                                <p className="text-primary-main capitalize">
                                    Application for Procurement
                                </p>
                                <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">
                                    Page 6 of 6
                                </p>
                            </div>
                        </div>
                    </section>
                    <form onSubmit={formik.handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-8">
                            
                            <div id="fileInput" className=" flex items-center gap-8 border border-black rounded-lg h-16">
                            <div className="flex h-full w-48 bg-primary-main rounded-l-lg text-white items-center px-4">
                                <div className=" flex gap-2" >Upload CV<span className="text-2xl"><MdOutlineUploadFile/></span></div>
                            </div>
                            <label className="block">
                                <span className="sr-only">Choose CV</span>
                                <input
                                    type="file"
                                    className="block w-full text-sm text-slate-500
                                                file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-primary-surface file:text-primary-main
                                                hover:file:bg-blue-100
                                                "
                                                name="upload_cv"
                                                onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.upload_cv}
                                />
                                
                            </label>
                            {formik.touched.upload_cv && formik.errors.upload_cv ? (
                        <div className="text-red-600 flex items-center gap-2"><MdOutlineInfo/>{formik.errors.upload_cv}</div>
                      ) : null}
                            </div>
                            <div id="fileInput" className=" flex items-center gap-8 border border-black rounded-lg h-16 ">
                            <div className="flex h-full w-48 bg-primary-main rounded-l-lg text-white items-center px-4">
                                <div className=" flex gap-2" >Upload Papers<span className="text-2xl"><MdOutlineUploadFile/></span></div>
                            </div>
                            <label className="block">
                                <span className="sr-only">Choose CV</span>
                                <input
                                    type="file"
                                    className="block w-full text-sm text-slate-500
                                                file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-primary-surface file:text-primary-main
                                                hover:file:bg-blue-100
                                                "
                                                name="upload_papers"
                                                onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.upload_papers}
                                />
                            </label>
                            {formik.touched.upload_papers && formik.errors.upload_papers ? (
                        <div className="text-red-600 flex items-center gap-2"><MdOutlineInfo/>{formik.errors.upload_papers}</div>
                      ) : null}
                            </div>
                          
                           
                        </section>
                        <section id="buttonSection" className="flex flex-col md:flex-row w-full  gap-4">
                            <div className="w-full md:w-1/2">
                                <Button
                                    buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full"
                                    onClick={handleBack}
                                >
                                    <MdOutlineChevronLeft /> Back
                                </Button>
                            </div>
                            <div className="  w-full md:w-1/2">
                                <Button buttonStyle="bg-primary-main text-white w-full">
                                    Submit Application <MdOutlineChevronRight />
                                </Button>
                            </div>
                        </section>
                    </form>
                </section>
            </div>
        </>
    );
}
