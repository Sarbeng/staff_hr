
import { MdOutlineChevronLeft, MdOutlineChevronRight, MdOutlineInfo } from "react-icons/md";
import * as Yup from "yup";
import { useFormik } from "formik"
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";



export default function ProcurementRequest() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/dashboard/procurement')
}


  const formik = useFormik({

    initialValues: {
      product_category: "",
      description: "",
      quantity: "",
      unit_price: ""

    },
    validationSchema: Yup.object({
      product_category: Yup.string().required("Product Category"),
      description: Yup.string().min(3, "description too short, must be more than 3 characters"),
      quantity: Yup.number().required("Quanity field cannot be empty").min(0).positive(),
      unit_price: Yup.number().required("The unit price cannot be empty").min(1).positive("Unit Price must be 1 or more"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }

  })
  return (
    <>
      <div className="flex flex-col gap-8 pb-8">
        <section className="shadow bg-white px-4 md:p-8 ">
          <section id="heading" className="flex items-center justify-center mb-8">
            <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

              <div className="flex gap-2 items-center">
                <p className="text-primary-main capitalize">Procurement</p>
                <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Request Items</p>
              </div>

            </div>
          </section>
          <form onSubmit={formik.handleSubmit}>
            <section id="inputs" className="flex flex-col gap-4">
              <div id="inputGroup">
                <label className="capitalize" htmlFor="email">
                 Product Category
                </label>
                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.product_category && formik.errors.product_category ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                  name="product_category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.product_category}>
                  <option selected disabled>Select Category</option>
                  <option>cleaning materials</option>
                  <option>printers and computers</option>
                </select>
                {formik.touched.product_category && formik.errors.product_category ? (
                  <div className="text-red-600">{formik.errors.product_category}</div>
                ) : null}
              </div>
              <div id="inputGroup">
                <label className="capitalize text-sm" htmlFor="email">
                  Description
                </label>
                <textarea
                  className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.description && formik.errors.description ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                  name="description"

                  value={formik.values.description}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}

                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="flex items-center gap-2 text-red-600"><MdOutlineInfo /> {formik.errors.description}</div>
                ) : null}
              </div>
              <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Quantity
                                    </label>
                                    <input
                                         className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.quantity && formik.errors.quantity? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="quantity"
                                        type="text"
                                        value={formik.values.quantity}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}

                                    />
                                    {formik.touched.quantity && formik.errors.quantity ? (
                        <div className="text-red-600">{formik.errors.quantity}</div>
                      ) : null}
                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                       Unit Price
                                    </label>
                                    <input
                                       className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.unit_price && formik.errors.unit_price? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="unit_price"
                                        type="text"
                                        value={formik.values.unit_price}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}

                                    />
                                    {formik.touched.unit_price && formik.errors.unit_price ? (
                        <div className="text-red-600">{formik.errors.unit_price}</div>
                      ) : null}
                                </div>
                            </div>




            </section>
            <section id="buttonSection" className="flex w-full gap-4">
              <div className="w-1/2">
                <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" onClick={handleBack}><MdOutlineChevronLeft /> Back</Button>
              </div>
              <div className="w-1/2">
                <Button buttonStyle="bg-primary-main text-white w-full">Save & Continue <MdOutlineChevronRight /></Button>

              </div>

            </section>
          </form>
        </section>
      </div>
    </>
  )
}