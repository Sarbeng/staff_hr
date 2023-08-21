export default function TextArea ({label, name, value, ref, onChange, onBlur, htmlFor,style}) {
    return (
<>
        <label className="capitalize" htmlFor={htmlFor}>
            {label}
        </label>
        <textarea rows="3" className={`${style}  "w-full border border-primary-border rounded-lg py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused  bg-white "`}></textarea>

</>
    )
}