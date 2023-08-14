const tableTailwind = () => {
    return <>
        <div className="relative bg-primary-surface rounded-xl overflow-auto"><div className="shadow-sm overflow-hidden my-8">
                <table className="border-collapse table-auto w-full text-sm">
                    <thead className="">
                        <tr>
                            <th className="border-b p-4 pl-8 pt-0 pb-3 text-left">Staff Details</th>
                            <th className="border-b p-4 pt-0 pb-3 text-left">Department</th>
                            <th className="border-b p-4 pr-8 pt-0 pb-3 text-left">Current Position</th>
                            <th className="border-b p-4 pr-8 pt-0 pb-3 text-left">Applied Position</th>
                            <th className="border-b p-4 pr-8 pt-0 pb-3 text-left">Submission Date</th>
                            <th className="border-b p-4 pr-8 pt-0 pb-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800">
                        <tr>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Malcolm Lockyer</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">1961</td>
                        </tr>
                        <tr>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">Witchy Woman</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">The Eagles</td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">1972</td>
                        </tr>
                        <tr>
                            <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Shining Star</td>
                            <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">Earth, Wind, and Fire</td>
                            <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">1975</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
    </>
}

export default tableTailwind;