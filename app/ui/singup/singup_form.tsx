import { signup } from "@/app/actions/auth";

export function SignupForm() {
  return (
    <form 

      action={signup} 
      className="space-y-[5vh] w-[30vw] flex flex-col items-center justify-center translate-y-[-5vh]"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-slate-50text-lg font-bold mb-2">
          Name
        </label>
        <input id="name" name="name" placeholder="Name" className="p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-slate-50text-lg font-bold mb-2">
          Email
        </label>
        <input id="email" name="email" type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-slate-50text-lg font-bold mb-2">
          Password
        </label>
        <input id="password" name="password" type="password" className="p-2 border border-gray-300 rounded-md" />
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md">
        Sign Up
      </button>
    </form>
  );
}