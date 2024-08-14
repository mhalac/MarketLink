export async function API_REQUEST(
  url: string,
  verb: string,
  data: string,
  //finished: CallableFunction,
  locally: boolean = true,
  cabecera: Headers = new Headers()
) {
  
  console.log("body sera",data)
  cabecera.append("Content-Type", "application/json");
  cabecera.append("Access-Control-Allow-Origin","*")
  if (locally) {
    url = `http://localhost:3000/api${url}`;
  }

  let req = await fetch(url, {
    method: verb,
    body: data,
    headers: cabecera,
    
  });
  console.log(req)
  let response = await req.json();
  
  return response;
}
