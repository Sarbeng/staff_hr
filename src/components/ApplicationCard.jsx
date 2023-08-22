import {Link} from "react-router-dom"
export default function ApplicationCard ({to, icon, heading, onClick, Style, iconStyle}) {
    return <>
        <Link to={to}>
        <button className="bg-primary-main text-white shadow-sm p-8 border border-primary-border rounded-lg w-56" onClick={onClick}>
      <div className="flex flex-col place-items-center items-center gap-8">
      <span className="text-5xl" > {icon}</span>
        <h3 className="text-base text-center">{heading}</h3>
      </div>
    </button>
        </Link>
    </>
}