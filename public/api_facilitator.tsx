export async function API_REQUEST(
  url: string,
  verb: string,
  data: string,
  //finished: CallableFunction,
  locally: boolean = true,
  cabecera: Headers = new Headers()
) {
  cabecera.append("Content-Type", "application/json");
  if (locally) {
    url = `http://localhost:3000/api${url}`;
  }

  if (verb == "GET") {
    const req = await fetch(url, {
      method: verb,
      headers: cabecera,
    });
    const response = await req.json();
    return response;
  }else{
    const req = await fetch(url, {
      method: verb,
      body: data,
      headers: cabecera,
    });
    const response = await req.json();
    return response;
  }


}
