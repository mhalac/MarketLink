import React, { useState } from "react";


export function MailInput() {
  const [mail, setMail] = useState("");

  return (
    <input
      type="email"
      className="text-slate-950 rounded-full h-11 w-2/3 font-oswald text-sm outline placeholder:text-gray-700 pl-14"
      value={mail}
      onChange={(e) => {
        setMail(e.target.value);
      }}
    />
  );
}

export function PasswordInput() {
  const [password, setPassword] = useState("");

  return (
    <input
      type="password"
      className="text-slate-950 rounded-full h-11 w-2/3 font-oswald outline text-sm placeholder:text-gray-700 pl-14"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    />
  );
}
