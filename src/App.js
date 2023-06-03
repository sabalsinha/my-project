import HomePage from "./component/HomePage";

function App() {
  return (
    <>
      <nav className=" bg-blue-400 fixed  w-full z-20 top-0 left-0 border-b border-gray-200  dark:border-gray-600">
        <div class="max-w-screen-xl text-center flex flex-wrap items-center justify-between  p-6 ">
          <h1 className=" text-center text-lg font-bold">Email Checker</h1>
        </div>
      </nav>
      <div></div>

      <div className="flex   items-center justify-center mt-20   ">
        <div className="  flex flex-col items-center justify-center bg-slate-200 box-border h-96 w-96 p-4 border-6 rounded-lg gap-4">
          <div>
            <h3 className=" underline text-xl font-bold">Enter Email</h3>
          </div>
          <div>
            <input type="email" placeholder="enter@mail.com" />
          </div>
          <div className=" ">
            <button className=" px-2.5 py-2  bg-blue-400 rounded-lg   ">
              Check
            </button>
          </div>
        </div>
      </div>

      <footer class="bg-blue-200 text-black py-6 mt-8">
        <div class="container mx-auto flex justify-between">
          <div>
            <h2 class="text-lg font-bold">GetMail</h2>
            <p>Gamma-1, Noida, India</p>
            <p>Email: sabalsinha10@gmail.com</p>
            <p>Phone: 77177385**</p>
          </div>
          <div className="ml-2">
            <h2 class="text-lg font-bold">Quick Links</h2>
            <ul class="mt-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* </header> */}
      <div>
        <HomePage></HomePage>
        {/* <Service></Service> */}
      </div>
    </>
  );
}

export default App;
