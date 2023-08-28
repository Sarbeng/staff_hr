
import { MdOutlineClose } from "react-icons/md";
import TextInput from "../../components/TextInput";
import * as Yup from "yup";
import { useFormik } from "formik"
import Button from "../../components/Button";
import SelectInput from "../../components/SelectInput";

interface Props {
  showModal?: boolean;
  handleModal?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function PromotionModal(props: Props) {


  const formik = useFormik({

    initialValues: {
      quantity: "",
      unit_price: "",

    },
    validationSchema: Yup.object({
      quantity: Yup.number().required("Expected days Taken cannot be empty").min(0).positive(),
      unit_price: Yup.number().required("The unit price cannot be empty").min(1).positive("Unit Price must be 1 or more"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }

  })
  return (
    <div>
      {props.showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t gap-3">
                  <div className="w-full bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                    <div className="flex gap-2 items-center">
                      <p className="text-primary-main">Procurement</p>
                      <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                      <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Request items</p>
                    </div>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={props.handleModal}
                    >
                      <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                        <MdOutlineClose />
                      </span>
                    </button>
                  </div>

                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <SelectInput optionValue={""} />
                    </div>
                    <div className="mb-4">
                      <TextInput
                        inputStyle={formik.touched.quantity && formik.errors.quantity ? ("error") : "default"}
                        name="quantity"
                        type="number"
                        label="Quantity"
                        handleBlur={formik.handleBlur}
                        handleChange={formik.handleChange}
                        value={formik.values.quantity}

                      />
                      {formik.touched.quantity && formik.errors.quantity ? (
                        <div className="text-red-600">{formik.errors.quantity}</div>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <TextInput
                        inputStyle={formik.touched.unit_price && formik.errors.unit_price ? ("error") : "default"}
                        name="unit_price"
                        type="number"
                        label="Unit Price"
                        value={formik.values.unit_price}
                        handleBlur={formik.handleBlur}
                        handleChange={formik.handleChange}
                      />
                      {formik.touched.unit_price && formik.errors.unit_price ? (
                        <div className="text-red-600">{formik.errors.unit_price}</div>
                      ) : null}
                    </div>

                    <div>
                      <Button buttonStyle="bg-primary-main w-full text-white mb-0" onClick={props.handleModal}>Add Item</Button>
                      <Button buttonStyle="text-red-600 w-full border" onClick={props.handleModal}>Cancel</Button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold capitalize px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.handleModal}
                  >
                    Disapprove
                  </button>
                  <button
                    className="bg-primary-main text-white active:bg-primary-pressed font-semibold capitalize  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.handleModal}
                  >
                    Approve Leave
                  </button>
                  
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  )
}