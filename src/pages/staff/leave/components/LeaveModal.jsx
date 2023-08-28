
import { MdOutlineClose } from "react-icons/md";
import TextInput from "../../components/TextInput";
import * as Yup from "yup";
import {useFormik} from "formik"
import Button from "../../components/Button";

interface Props {
  showModal?: boolean;
  handleModal?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function LeaveModal(props: Props) {
//   const [showModal, setShowModal] = useState(true);
//   const handleModal = (event: any) => {
//     event.preventDefault();
//     event.currentTarget.disabled = true;
//     setShowModal(!showModal);
//   };


  const formik = useFormik({
        
    initialValues: {
        days_taken:"134",
        start_date:"",
        emergency_name__and_address:"sjkdhsjhds",
        emergency_contact:"198372837"

    },
    validationSchema: Yup.object({
        days_taken: Yup.number().required("Expected days Taken cannot be empty").min(0).positive(),
        start_date: Yup.date().required("Start Date cannot be empty"),
        emergency_name__and_address: Yup.string().required("Emergency Name and Address cannot be empty").min(5,"Must be at least 8 characters long"),
        emergency_contact: Yup.number().required("Emergency Contact be empty").min(10,"number is not up to 10")
    }),
    onSubmit:(values) => {
        alert(JSON.stringify(values,null,2))
    }

  })

  return (
    
    <>
      {props.showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t gap-3">
                  <div className="w-full bg-green-50 py-4  px-3 rounded-lg flex justify-center items-center gap-3">
                    <h3 className="text-lg text-white p-4 w-14 h-14 rounded-full bg-green-600">
                      45
                    </h3>
                    <p className="text-green-600">Leave Days Entitled</p>
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
                    <div className="mb-4">
                      <TextInput
                        inputStyle={formik.touched.days_taken && formik.errors.days_taken ? ("error"): "default"}
                        name="days_taken"
                        type="number"
                        label="Leave days to be taken"
                        handleBlur={formik.handleBlur}
                        handleChange={formik.handleChange}
                        value={formik.values.days_taken}

                      />
                      {formik.touched.days_taken && formik.errors.days_taken ? (
                <div className="text-red-600">{formik.errors.days_taken}</div>
              ) : null}
                    </div>
                    <div className="mb-4">
                      <TextInput
                      inputStyle={formik.touched.start_date && formik.errors.start_date ? ("error"): "default"}
                        name="start_date"
                        type="date"
                        label="Expected Start Date"
                        handleBlur={formik.handleBlur}
                        handleChange={formik.handleChange}
                        value={formik.values.start_date}
                      />
                      {formik.touched.start_date && formik.errors.start_date ? (
                <div className="text-red-600">{formik.errors.start_date}</div>
              ) : null}
                    </div>
                    <div className="mb-4">
                      <TextInput
                      inputStyle={formik.touched.emergency_name__and_address && formik.errors.emergency_name__and_address ? ("error"): "default"}
                        name="emergency_name__and_address"
                        type="text"
                        label="Emergency Name & Address"
                        value={formik.values.emergency_name__and_address}
                        handleBlur={formik.handleBlur}
                        handleChange={formik.handleChange}
                      />
                      {formik.touched.emergency_name__and_address && formik.errors.emergency_name__and_address ? (
                <div className="text-red-600">{formik.errors.emergency_name__and_address}</div>
              ) : null}
                    </div>
                    <div className="mb-4">
                      <TextInput
                      inputStyle={formik.touched.emergency_contact && formik.errors.emergency_contact ? ("error"): "default"}
                        name="emergency_contact"
                        type="text"
                        label="Emergency Contact"
                        value={formik.values.emergency_contact}
                        handleBlur={formik.handleBlur}
                        handleChange={formik.handleChange}
                      />
                      {formik.touched.emergency_contact && formik.errors.emergency_contact ? (
                <div className="text-red-600">{formik.errors.emergency_contact}</div>
              ) : null}
                    </div>
                    <div>
                    <Button buttonStyle="bg-primary-main w-full text-white mb-0" onClick={props.handleModal}>Approve Leave</Button>
                    <Button buttonStyle="text-red-600 w-full border" onClick={props.handleModal}>Disapprove Leave</Button>
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
    </>
  );
}
