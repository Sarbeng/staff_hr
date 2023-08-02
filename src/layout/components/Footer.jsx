

export default function Footer () {
    const current_year = new Date();
    return(
        <footer className="flex  justify-center items-center relative  left-0 right-0 w-full bg-primary-surface shadow-sm h-16 bottom-0">© Copyright MIS Section, {current_year.getFullYear()}</footer>
    )
}