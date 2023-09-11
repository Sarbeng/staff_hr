import { MdOutlineVisibility, MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
//import ProcurementModal from "../Procurement/ProcurementRequest";
import { useEffect, useState } from "react";
import axios from "axios";
import hodPromotionDetails from "../../../../data/hodPromotionDetails";

export default function PromotionRecords() {
  // const [showModal, setShowModal] = useState(false);

  // const handleModal = (event: any) => {
  //   event.preventDefault();
  //   //event.currentTarget.disabled = true;
  //   setShowModal(!showModal);
  // };

  const [promotionRecords, setPromotionRecords] = useState(hodPromotionDetails);
  //const [errorMessage, setErrorMessage] = useState('');

  

  return (
    <div>
      <section>


        <div className="flex flex-col ">
          <h3 className="text-lg">Your Current Promotion</h3>

          {
            promotionRecords.map((promotion) => {
              return (
                <div className="py-4" key={""}>

                  <div className="mb-4 overflow-scroll">
                    <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
                      <div className="flex flex-col max-w-xs w-56 gap-4">

                        <p className="truncate ... bg-primary-surface w-fit py-1 px-3 rounded-full text-sm capitalize">Status: {promotion.status} </p>
                        <p className="text-sm" ><span className="text-slate-400">{promotion.date}</span></p>
                      </div>
                      <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                      <div className="flex flex-col max-w-xs w-fit gap-4">
                        <h4 className="text-base capitalize ">
                          Postion Applied: <span className="text-slate-400">{promotion.position_applied}</span>
                        </h4>
                      </div>
                      <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                      <div className="flex flex-col max-w-xs w-32 gap-4 justify-center items-center">

                        <p className="flex bg-orange-50 text-orange-600 h-14 w-14 justify-center items-center rounded-full text-xl ">{promotion.progress}</p>
                        <p className="truncate ...">



                          <span className="capitalize"> Progress</span>
                        </p>
                      </div>
                      <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                      <div className="flex gap-4 px-8">
                        <button
                          // href={leaveList.viewIcon.link}
                          className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"

                        >
                          <span className="text-2xl"><MdOutlineVisibility /></span>
                          <p className="truncate ... text-xs">
                            View
                          </p>
                        </button>

                        <div className="flex gap-3">
                          <button

                            className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"

                          >
                            <span className="text-2xl">
                              <MdOutlineEdit />
                            </span>
                            <p className="truncate ... text-xs">Edit</p>
                          </button>
                          <button

                            className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"

                          >
                            <span className="text-2xl text-red-600">
                              <MdOutlineDelete />
                            </span>
                            <p className="truncate ... text-xs">Delete</p>
                          </button>
                        </div>

                      </div>

                      {/* <!-- Pin to top right corner --> */}
                    </div>
                  </div>


                </div>
              );
            })
          }

        </div>
      </section>
    </div>
  )
}

