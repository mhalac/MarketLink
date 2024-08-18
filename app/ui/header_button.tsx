"use client"
import { useRouter } from "next/navigation";

export default function HeadButton(props:any) {
  const router = useRouter();
  function url_redirect() {
    router.push(props.direccion);
    }
  return (
      <button className="transition ease-in-out duration-150  hover:-translate-y-2 px-10 py-2 bg-purple-500 text-white oswald-medium hover:bg-indigo-400" onClick={url_redirect}>
        
        {props.title}

      </button>
    );
  }
  