export default function List({ children }) {
    return (
        <div className="relative z-10 rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y my-auto xl:mt-18 bg-slate-800 divide-slate-200/5 highlight-white/10">
            <ul className="divide-y divide-slate-200/5">
                {children}
            </ul>
        </div>
    )
}
