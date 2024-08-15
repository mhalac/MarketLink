import { SignupForm } from "@/app/ui/singup/singup_form";

export default function SignupPage() {
  return (
    <div className="bg-cover flex justify-center h-[100vh] w-[100vw] items-center bg-center background-signup">
      <div className="w-[30vw] min-h-[24.5rem] bg-purple-600 flex items-center justify-center h-auto">
        <SignupForm />
      </div>
    </div>
  );
}
