export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-login">
        <div>
          <label className="login-label oswald-login text-4xl">
            LOGIN
          </label>
        </div>
        <div className="login-div outline outline-slate-100 outline-4 rounded-lg">
          <button className="oswald-login w-32 h-20 text-xl bg-green-400 rounded-lg sticky top-2/3 left-1/4"> Click me!</button>

        </div>

      </div>
    </div>
  );
}
