export default function({params} : {params: {user : string}}){
    return(
    <div className="size-full bg-slate-700">
        {params.user}
    </div>)
}