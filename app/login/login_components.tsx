import React, { useState } from 'react';

export function MailInput() {
  const [mail, setMail] = useState('example@example.com');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (mail === 'example@example.com') {
      setMail(''); // Clear input if it has the placeholder text
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (mail === '') {
      setMail('example@example.com'); // Restore placeholder if input is empty
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value); // Update state with user input
  };

  return (
    <input
      type="email"
      className="text-slate-950 rounded-full h-11 relative top-24 w-1/3 -left-2 font-oswald text-sm placeholder:text-gray-700 pl-14"
      value={mail}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={isFocused ? '' : 'example@example.com'} // Show placeholder based on focus state
    />
  );
}