export default function ListItem({ user }) {
    const { pos, first_name, last_name, bio, list, local_party, group, tags } = user;
    const img_src = `/img/ppl/${list.toLowerCase()}/${pos}.jpg`;
    return (
        <article className="hidden profile flex items-start space-x-6 p-6 text-base md:text-xl" data-radio={list.toLowerCase()}>

            <img src={img_src} alt="" className="w-[60px] h-[88px] flex-none rounded-md bg-slate-100 object-cover"/>

            <div className="min-w-0 relative flex-auto">
                <h2 className="font-semibold text-slate-100 truncate">{pos + ". " + first_name + " " + last_name}</h2>
                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">

                    <div className="text-slate-200">
                        <dt className="sr-only">Partido</dt>
                        <dd className="px-1.5 ring-1 ring-slate-600 rounded">{local_party}</dd>
                    </div>
                    <div className="ml-2">
                        <dt className="sr-only">Grupo</dt>
                        <dd>{group}</dd>
                    </div>
                    {/*<div>*/}
                    {/*    <dt className="sr-only">Grupo</dt>*/}
                    {/*    <dd className="flex items-center">*/}
                    {/*        <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-400" aria-hidden="true">*/}
                    {/*            <circle cx="1" cy="1" r="1" />*/}
                    {/*        </svg>*/}
                    {/*        {group}*/}
                    {/*    </dd>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <dt className="sr-only">Runtime</dt>*/}
                    {/*    <dd className="flex items-center">*/}
                    {/*        <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-400" aria-hidden="true">*/}
                    {/*            <circle cx="1" cy="1" r="1" />*/}
                    {/*        </svg>*/}
                    {/*        {movie.runtime}*/}
                    {/*    </dd>*/}
                    {/*</div>*/}
                    <div className="flex-none w-full mt-2 font-normal">
                        <dt className="sr-only">Bio</dt>
                        <dd className="text-slate-400">{bio}</dd>
                    </div>
                </dl>
            </div>
        </article>
    )
}