import "@/app/globals.css"

export default async function Tienda({ params }: { params: { tienda: string } }) {
  const req = await fetch("http://localhost:3000/api/listado/" + params.tienda[0],{
    method:"GET"
  })
  const json = await req.json()
  console.log(json)
  return (
    <div className="bg-fuchsia-500 w-[50%] h-[93%] grid grid-cols-3 rounded-bl-2xl rounded-br-2xl grid-rows-5 justify-center outline">
      <h1 className="xl:text-8xl md:text-4xl mt-20 col-span-3 text-center">
        Tiendas
      </h1>
    </div>
);
}
