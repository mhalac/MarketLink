

export async function API_REQUEST(
  url: string,
  verb: string,
  json: string = "",
  finished: CallableFunction,
  locally: boolean = true,
  cabecera: Headers = new Headers()
) {
    cabecera.append("Content-Type","application/json")
    if (locally){
        url = `http://localhost:3000/api/${url}`;
    }

    let req = await fetch(url, {
    
        method: verb,
        headers: cabecera,
  });
    console.log(url)
    let response = await req.json();
    finished(response);
}
