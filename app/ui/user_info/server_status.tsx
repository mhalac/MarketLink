export default async function GetStatus() {
    
    const data = await fetch('http://localhost:3000/api/server/status',{
        method: "GET"
    })
    const status = (await data.json()).text;
    console.log(status)
    return(
        <div>
            <p>{status}</p>
        </div>
    )
}