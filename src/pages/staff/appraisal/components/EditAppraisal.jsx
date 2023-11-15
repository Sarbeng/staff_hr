import { MdOutlineClose } from "react-icons/md";
import Button from "../../../../components/Button";
import { useEffect, useState } from "react";
import axios from "../../../../api/axios";
import { useAuthUser } from "react-auth-kit";
import { useRef } from "react";


export default function EditAppraisal(props) {
    const [openTab, setOpenTab] = useState(1);
    const [userData, setUserData] = useState();
    const accomplishmentsInputElement = useRef();
    const emailInputElement = useRef();
    const staffNoInputElement = useRef();
    const fullnameInputElement = useRef();
    const appointDateInputeElement = useRef();
    const jobTitleInputeElement = useRef();
    const supervisorsNameInputElement = useRef();
    const supervisorsRankInputElement = useRef();
    const yearUnderReviewInputeElement = useRef();
    const barriersChallengesGoalInputeElement = useRef();
    const barriersChallengesInputeElement = useRef();
    const strengthImprovementInputeElement = useRef();
    const newKnowledgeInputeElement = useRef();
    const otherInformationInputeElement = useRef();


    //getting token
    const auth = useAuthUser();
    const token = auth().token;

    const getUserData = async () => {
        const appraisalcheckUrl = "/appraisal_check";
        const response = await axios.get(appraisalcheckUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept": "application/json"
            }
        }).catch((error) => {
            console.log(error.response.data)
        })

        if (response) {
            console.log(response.data)
            setUserData(response.data.appraisal)
        }
    }

    useEffect(() => {
        getUserData();
    }, [])

    // console.log(userData)
    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            //fullname: fullnameInputElement.current.value,
            //email: emailInputElement.current?.value,
            staff_no: staffNoInputElement.current?.value,
            //appoint_date: appointDateInputeElement.current?.value,
            //title: jobTitleInputeElement.current?.value,
            supervisor_name: supervisorsNameInputElement.current?.value,
            supervisors_rank: supervisorsRankInputElement.current?.value,
            yr_onreview: yearUnderReviewInputeElement.current?.value,
            accomplishments: accomplishmentsInputElement.current?.value,
            barriers_challenges: barriersChallengesInputeElement.current?.value,
            barriers_challenges_goal: barriersChallengesGoalInputeElement.current?.value,
            strength_improvement: strengthImprovementInputeElement.current?.value,
            new_knowledge: newKnowledgeInputeElement.current?.value,
            other_information: otherInformationInputeElement.current?.value

        }
        console.log(data)

        const postURl = "/appraisal_update"

        const response = await axios.post(postURl,data,{
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept":"application/json"
            }
        }).catch((error) => {
            console.log(error.response.data)
        })

        if (response) {
            console.log(response.data)
        }
    }


    return (
        <div>
            {props.isEditOpen ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div className="relative my-6 mx-auto w-full md:w-11/12 max-w-xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t gap-3">
                                    <div className="w-full bg-primary-surface overflow-x-scroll py-4  px-3 rounded-lg flex  gap-3">
                                        <div className="flex gap-2 items-center">
                                            <ul className="flex space-x-2">
                                                <li>
                                                    <a
                                                        href="#"
                                                        onClick={() => setOpenTab(1)}
                                                        className={` ${openTab === 1 ? "bg-primary-main text-white" : "bg-white"} "inline-block flex items-center w-36 justify-center py-2 px-4 rounded shadow capitalize"`}
                                                    >
                                                        User Data
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        onClick={() => setOpenTab(4)}
                                                        className={` ${openTab === 4 ? "bg-primary-main text-white" : "bg-white"} "inline-block flex items-center w-40 justify-center py-2 px-4 rounded shadow capitalize"`}


                                                    >
                                                        Supervisor Data
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        onClick={() => setOpenTab(2)}
                                                        className={` ${openTab === 2 ? "bg-primary-main text-white" : "bg-white"} "inline-block flex items-center w-64 justify-center py-2 px-4 rounded shadow capitalize"`}


                                                    >
                                                        Barriers & Accomplishments
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        onClick={() => setOpenTab(3)}
                                                        className={` ${openTab === 3 ? "bg-primary-main text-white" : "bg-white"} "inline-block flex items-center w-48 justify-center py-2 px-4 rounded shadow capitalize"`}


                                                    >
                                                        Knowledge & Strength
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={props.setIsEditOpen}
                                        >
                                            <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                <MdOutlineClose />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">

                                    <form onSubmit={handleSubmit}>
                                        <section id="user-data" className={openTab == 1 ? 'block' : 'hidden'}>
                                            <div className="flex gap-2 md:gap-4 flex-col md:mb-4  w-full">
                                                <div
                                                    id="inputGroup"
                                                    className="flex flex-col  "
                                                >
                                                    <label className="capitalize" htmlFor="email">
                                                        Fullname
                                                    </label>
                                                    <input
                                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                                        name="fullname"
                                                        ref={fullnameInputElement}
                                                        type="text"
                                                        placeholder="Not Set"
                                                        defaultValue={`${userData.fname} ${userData.mname} ${userData.lname}`}

                                                    />
                                                </div>

                                                <div id="inputGroup" className="flex flex-col">
                                                    <label className="capitalize" htmlFor="email">
                                                        Staff No.
                                                    </label>
                                                    <input
                                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                                        name="staff_no"
                                                        type="text"
                                                        ref={staffNoInputElement}
                                                        defaultValue={userData.staff_no}
                                                    />
                                                </div>
                                                <div id="inputGroup" className="flex flex-col">
                                                    <label className="capitalize" htmlFor="email">
                                                        Email
                                                    </label>
                                                    <input
                                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                                        name="email"
                                                        type="email"
                                                        placeholder="Not Set"
                                                        disabled
                                                        ref={emailInputElement}
                                                        defaultValue={userData.email}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex gap-2 md:gap-4 mb-4 flex-col w-full">
                                                <div
                                                    id="inputGroup"
                                                    className="flex flex-col   "
                                                >
                                                    <label className="capitalize" htmlFor="email">
                                                        Appointment Date
                                                    </label>
                                                    <input
                                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                                        name="appoint_date"
                                                        type="date"
                                                        placeholder="Not Set"
                                                        ref={appointDateInputeElement}
                                                        disabled
                                                        defaultValue={userData.appoint_date}
                                                    />
                                                </div>

                                                <div id="inputGroup" className="flex flex-col">
                                                    <label className="capitalize" htmlFor="email">
                                                        Job Title
                                                    </label>
                                                    <input
                                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                                        name="title"
                                                        type="text"
                                                        ref={jobTitleInputeElement}
                                                        defaultValue={userData.title}
                                                    />
                                                </div>

                                            </div>

                                        </section>
                                        <section id="supervisor-data" className={openTab == 4 ? "flex flex-col gap-4" : 'hidden'}>
                                            <div className="flex gap-2 md:gap-4 flex-col w-full">
                                                <div
                                                    id="inputGroup"
                                                    className="flex flex-col "
                                                >
                                                    <label className="capitalize" htmlFor="email">
                                                        Supervisors name
                                                    </label>
                                                    <input
                                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                                        name="supervisors_name"
                                                        type="text"
                                                        placeholder="Not Set"
                                                        ref={supervisorsNameInputElement}
                                                        defaultValue={userData.supervisor_name}
                                                    />
                                                </div>

                                                {/* <div id="inputGroup" className="flex flex-col">
                          <label className="capitalize" htmlFor="email">
                            Supervisors Staff no
                          </label>
                          <input
                            className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                            name="phone"
                            type="text"
                            defaultValue={userData.supervisor_staff_no}
                          />
                        </div> */}
                                                <div id="inputGroup" className="flex flex-col">
                                                    <label className="capitalize" htmlFor="email">
                                                        Supervisors Rank
                                                    </label>
                                                    <input
                                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                                        name="supervisor_rank"
                                                        type="text"
                                                        ref={supervisorsRankInputElement}
                                                        placeholder="Not Set"
                                                        defaultValue={userData.supervisors_rank}
                                                    />
                                                </div>
                                                <div id="inputGroup" className="flex flex-col">
                                                    <label className="capitalize" htmlFor="email">
                                                        Year under Review
                                                    </label>
                                                    <input
                                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main  focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                                        name="yr_onreview"
                                                        type="text"
                                                        ref={yearUnderReviewInputeElement}
                                                        placeholder="Not Set"
                                                        defaultValue={userData.yr_onreview
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </section>
                                        <section id="barriers" className={openTab == 2 ? "flex flex-col gap-4" : 'hidden'}>


                                            <div id="inputGroup">
                                                <label className="capitalize text-sm" htmlFor="email">
                                                    List your most significant accomplishments this past year
                                                </label>
                                                <textarea
                                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus-within:ring-primary-focused  bg-white`}
                                                    name="accomplishments"
                                                    ref={accomplishmentsInputElement}
                                                    defaultValue={userData.accomplishments}


                                                />

                                            </div>
                                            <div id="inputGroup">
                                                <label className="capitalize text-sm" htmlFor="email">
                                                    List any barriers or challenges that you have: *
                                                </label>
                                                <textarea
                                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus-within:ring-primary-focused  bg-white`}
                                                    name="barriers_challenges"
                                                    ref={barriersChallengesInputeElement}

                                                    defaultValue={userData.barriers_challenges}


                                                />

                                            </div>
                                            <div id="inputGroup">
                                                <label className="capitalize text-sm" htmlFor="email">
                                                    How has this barrier(s)/challenge(s) helped you to accomplish your goals:
                                                </label>
                                                <textarea
                                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus-within:ring-primary-focused  bg-white`}
                                                    name="barriers_challenges_goal"
                                                    ref={barriersChallengesGoalInputeElement}
                                                    defaultValue={userData.barriers_challenges_goal}


                                                />

                                            </div>



                                        </section>
                                        <section id="improvement" className={openTab == 3 ? "flex flex-col gap-4" : 'hidden'}>


                                            <div id="inputGroup">
                                                <label className="capitalize text-sm" htmlFor="email">
                                                    Please list your area(s) of strength and area(s) of improvement:
                                                </label>
                                                <textarea
                                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus-within:ring-primary-focused  bg-white`}
                                                    name="strength_improvement"
                                                    ref={strengthImprovementInputeElement}
                                                    defaultValue={userData.strength_improvement}


                                                />

                                            </div>
                                            <div id="inputGroup">
                                                <label className="capitalize text-sm" htmlFor="email">
                                                    What skills or new knowledge would you like to develop to improve your performance?: *
                                                </label>
                                                <textarea
                                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus-within:ring-primary-focused  bg-white`}
                                                    name="new_knowledge"
                                                    ref={newKnowledgeInputeElement}
                                                    defaultValue={userData.new_knowledge}


                                                />

                                            </div>
                                            <div id="inputGroup">
                                                <label className="capitalize text-sm" htmlFor="email">
                                                    Is there any other information you would like to share with your supervisor regarding your work performance?: *
                                                </label>
                                                <textarea
                                                    className={`mt-2 mb-2 h-24 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus-within:ring-primary-focused  bg-white`}
                                                    name="barriers_challenges_goal"
                                                    ref={otherInformationInputeElement}
                                                    defaultValue={userData.other_information}


                                                />

                                            </div>



                                        </section>
                                        <section id="buttonSection" className="flex w-full gap-4">
                                            <div className="w-1/2">
                                                <Button
                                                    buttonStyle="bg-primary-main flex flex-col w-full text-white mb-0"
                                                    type="submit"
                                                >
                                                    Submit
                                                </Button>
                                            </div>
                                            <div className="w-1/2">
                                                <Button
                                                    buttonStyle="text-red-600 w-full border"
                                                    type="button"
                                                    onClick={props.setIsEditOpen}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </section>
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
            ) : null}
        </div>
    );
}
