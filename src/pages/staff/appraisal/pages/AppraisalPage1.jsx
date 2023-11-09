
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronRight } from "react-icons/md";
import { useAuthUser } from "react-auth-kit";
import axios from "../../../../api/axios"
import { useEffect, useState, object } from "react"


export default function AppraisalPage1() {
    //link to api
    const insertAppraisalUrl = "appraisal_show";
    //retrieving token
    const auth = useAuthUser();
    const token = auth().token;

    // storing state in variable
    const [appraisalShow, setAppraisalShow] = useState();
 

     


    const getAppraisalUserData = async () => {
        const response = await axios.get(insertAppraisalUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept": "application/json"
            }
        }).catch((error) => {
            console.log(error.response.data)
        })

        if (response) {
            console.log(response.data)
            setAppraisalShow(response.data)
        }
    }

    useEffect(() => {
        getAppraisalUserData()
    }, [])
    const navigate = useNavigate()



    //console.log(appraisalShow)
    const staff_data = appraisalShow?.staff_data[0];
    const supervisor = appraisalShow?.unit_head[0];
    console.log(staff_data?.fullname)
    
    
   //const mergedObj = {...staff_data, ...supervisor}

    //console.log(mergedObj)
      


    const handleSubmit = async (event) => {
        event.preventDefault()

        const postUrl = "/appraisal_insert";

        const response = await axios.post(postUrl,{...staff_data,...supervisor},{
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept": "application/json"
            }
        }).catch(error => {
            console.log(error)
        })

        if (response) {
            console.log(response.data)
            navigate('/dashboard/appraisalPage2')
        }
    }
    return (
        <>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <section id="heading" className="flex items-center justify-center mb-8">
                        <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                            <div className="flex gap-2 items-center">
                                <p className="text-primary-main capitalize">Appraisal Form A</p>
                                <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 1 of 3</p>
                            </div>

                        </div>
                    </section>
                    <form onSubmit={handleSubmit}>
                        <section id="inputs" className="flex flex-col gap-4">

                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Name of Employee
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                        name="fullname"
                                        type="text"
                                        value={staff_data?.fullname}
                                        onChange={(event) =>setFullname(event.target.value) }

                                    />

                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="staff_no">
                                        Staff No.
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused  bg-white`}
                                        name="staff_no"
                                        type="text"
                                        value={staff_data?.staff_no}


                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="email"
                                        type="email"
                                        placeholder="Not Set"
                                        value={staff_data?.email}


                                    />
                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Phone no.
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="phone"
                                        type="text"
                                        value={staff_data?.phone}



                                    />

                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Appointment Date
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="apointment_date"
                                        type="date"
                                        value={staff_data?.appoint_date}


                                    />

                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Job Title
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="title"
                                        type="text"
                                        value={staff_data?.title}



                                    />

                                </div>
                            </div>

                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Supervisors name
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="supervisors_name"
                                        type="text"
                                        value={supervisor?.supervisor_name}

                                    />

                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Supervisors Staff no
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="supervisors_staff_no"
                                        type="text"
                                        value={supervisor?.supervisor_staff_no}

                                    />

                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Supervisors Rank
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="supervisors_rank"
                                        type="text"
                                        value={supervisor?.supervisors_rank}

                                    />

                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Year under Review
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="year_under_review"
                                        type="text"
                                        value={staff_data?.year_under_review}


                                    />

                                </div>
                            </div>

                        </section>
                        <section id="buttonSection" className="flex w-full gap-4 items-end justify-end">
                            <div className="w-1/2">
                                {/* <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" ><MdOutlineChevronLeft/> Back</Button> */}
                            </div>
                            <div className="w-1/2 ">
                                <Button buttonStyle="bg-primary-main text-white w-full" type="submit">Save & Continue <MdOutlineChevronRight /></Button>

                            </div>

                        </section>
                    </form>
                </section>
            </div>
        </>
    );
}