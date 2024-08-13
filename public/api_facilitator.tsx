export async function API_REQUEST(
  url: string,
  verb: string,
  json: string,
  finished: CallableFunction,
  locally: boolean = true,
  cabecera: Headers = new Headers()
) {
  cabecera.append("Content-Type", "application/json");
  cabecera.append("Access-Control-Allow-Origin","*")
  if (locally) {
    url = `http://localhost:3000/api${url}`;
  }

  let req = await fetch(url, {
    method: verb,
    body: JSON.stringify(json),
    headers: cabecera,
    
  });
  console.log(req.body)
  let response = await req.json();
  finished(response);
}
