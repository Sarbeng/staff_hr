import {
  MdOutlineVisibility,
  MdOutlineEdit,
  MdOutlineDelete,
} from "react-icons/md";
//import { useState } from "react";
import procurementList from "../../../../data/procurementList";

export default function HodProcurementRecords() {
  // const [showModal, setShowModal] = useState(false);

  // const handleModal = (event: any) => {
  //   event.preventDefault();
  //   //event.currentTarget.disabled = true;
  //   setShowModal(!showModal);
  // };

  return (
    <div>
      {
        procurementList.map((procurement) => {
          return <section key={procurement.id}>

<div className="flex flex-col ">
  <h3 className="text-lg">Procurement List</h3>


  <div className="py-4">

    <div className="mb-4 overflow-scroll">
      <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
        <div className="flex flex-col max-w-xs w-40 gap-4">
          <h4 className="text-xs uppercase font-semibold">
            Product Category
          </h4>
          <p className="truncate ...  w-fit py-1 px-3 rounded-full text-sm">{procurement.product_category}</p>
        </div>
        <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="flex flex-col max-w-xs w-fit gap-4">
        <h4 className="text-xs uppercase font-semibold">
            Product Description
          </h4>
          <p className="truncate ...  w-72 py-1 px-3 rounded-full text-sm">{procurement.description} </p>
        </div>
        <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="flex flex-col max-w-xs w-fit gap-4">
        <h4 className="text-xs uppercase font-semibold">
            Quantity
          </h4>
          <p className="truncate ...  w-24 py-1 px-3 rounded-full text-sm">{procurement.quantity} </p>
        </div>
        <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="flex flex-col max-w-xs w-fit gap-4">
        <h4 className="text-xs uppercase font-semibold">
            Unit Price
          </h4>
          <p className="truncate ...  w-24 py-1 px-3 rounded-full text-sm">{procurement.unit_price} </p>
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
</div>
</section>
        })
      }
    </div>
  );
}
