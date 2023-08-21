import  Button  from "../../../../components/Button";
import {MdOutlineClose, } from "react-icons/md";
import { useFormik } from "formik";
import SelectInput from "../../../../components/SelectInput";
import TextInput from "../../../../components/TextInput";
import TextArea from "../../../../components/Textarea";
//import { useState } from "react";

export default function AddAssessorModal ({handleModal, showModal}) {
    //const [showModal,setShowModal] = useState(false);

    const selectValues = [
      {
        id:1,
        text:"one"
      },
      {
        id:2,
        text:"one"
      }
    ]
    const formik = useFormik({
        initialValues: {},
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
          }
    });
    return (
        <>
        {showModal && <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-lg">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-fit bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t gap-3">
                <div className="w-full bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                  <div className="flex gap-2 items-center">
                    <p className="text-primary-main font-semibold">Add Assessor</p>
                    
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleModal}
                  >
                    <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <MdOutlineClose />
                    </span>
                  </button>
                </div>

              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto h-[40rem] overflow-y-scroll">
                <form onSubmit={formik.handleSubmit}>
                  <div id="firstname lastname" className="flex md:flex-row flex-col gap-4 w-full">

                    <TextInput name={"first_name"} label={"first name"}/>
                    <TextInput name={"last_name"} label={"Last name"}/>
                  </div>
                  <div id="phone email" className="flex md:flex-row flex-col gap-4 w-full">

                   <div className="w-1/2">
                   <TextInput name={"phone_number"} label={"Phone number"} />
                   </div>
                   <div className="w-1/2">
                   <TextInput name={"email"} label={"Email"}/>
                   </div>
                  </div>
                  <div id="country city" className="flex md:flex-row flex-col gap-4 w-full">

                    <div className="w-1/2">
                    <TextInput name={"country"} label={"country"}/>
                    </div>
                   <div className="w-1/2">
                   <TextInput name={"city"} label={"city"}/>
                   </div>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <TextArea label={"Address"}/>
                    <SelectInput disabledOption={"assessor rank"} label={"Assesors Level of Educuation"} options={selectValues}/>
                    <SelectInput disabledOption={"current institution"} label={"Current Institution"} options={selectValues}/>
                    <SelectInput disabledOption={"area of specialty"} label={"Area of specialty"} options={selectValues}/>
                  </div>

                 

                  <div>
                    <Button buttonStyle="bg-primary-main w-full text-white mb-0" onClick={handleModal}><h2>Add Assessor</h2></Button>
                    <Button buttonStyle="text-red-600 w-full border" onClick={handleModal}><h3>Cancel</h3></Button>
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
        </>}
      </>
    );
}