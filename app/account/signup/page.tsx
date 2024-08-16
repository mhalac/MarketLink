import { SignupForm } from "@/app/ui/singup/signup_form";


export default function SignupPage() {
  return (
    <div className="bg-cover flex justify-center  h-[100vh] w-[100vw] items-center bg-center background-signup relative">
      {/* Blurred background container */}
      <div className="absolute w-[30vw] min-h-[24.5rem] flex items-center justify-center h-auto bg-white bg-opacity-10 backdrop-blur-md z-10 rounded-md"></div>
      {/* SigninForm container */}
      <div className="relative w-[30vw] min-h-[24.5rem] outline flex items-center justify-center h-auto z-20">
        <SignupForm />
      </div>
    </div>
  );
}
