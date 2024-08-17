import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import HeadButton from "./ui/header_button";
async function HomePage() {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <div className="bg-cover flex justify-center h-[100vh] w-[100vw] items-center bg-center background-signup">
        <header className="bg-slate-700 absolute flex flex-row space-x-12 items-center -translate-y-2 px-14 inset-x-[22vw] top-0 h-16">
            < HeadButton  />
            <HeadButton/>
            <HeadButton/>
            <HeadButton/>
            <HeadButton/>
            <HeadButton/>

        </header>
    </div>
  );
}

export default HomePage;
