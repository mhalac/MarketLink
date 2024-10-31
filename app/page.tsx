"use client"
import LandingUI from "./ui/landing_ui";
import "@/app/globals.css"
export default function LandingPage() {
  return (
    <div className="h-screen bg-cover bg-center flex justify-center items-center">
      <LandingUI />
    </div>
  );
}
