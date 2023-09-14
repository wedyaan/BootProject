export default function Report() {
  return (
    <div>
      <h1>
        {/* <!-- Container for demo purpose --> */}
        <div className="container mt-20 mb-0 mx-auto md:px-6">
          {/* <!-- Section: Design Block --> */}
          <div className="relative h-[310px] overflow-hidden bg-cover   bg-no-repeat  ">
            <img
              src="https://user-images.githubusercontent.com/78824988/177554992-f94c6194-be7e-4c4e-a948-a0a656e0e71d.jpg"
              alt="banner"
              className=" object-cover rounded  "
            />
          </div>
          <section className="mb-32 flex  justify-center items-center ">
            <div className="container px-6 md:px-12 mt-12">
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)]  py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                <section className="py-6 dark:bg-gray-800 dark:text-gray-50 lg2:items-center  ">
                  <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x lg2:text-center">
                    <div className="py-6 md:py-0 md:px-6">
                      <h1 className="text-4xl font-bold">
                        Save The Environment
                      </h1>
                      <p className=" pb-8 pt-3  text-[18px]  w-[90%]  leading-6">
                        To report any concerns regarding environmental issues,
                        please reach out to the appropriate regulatory
                        authority.
                      </p>

                      <div className="space-y-4  ">
                        <p className="flex items-center   ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28.266"
                            height="24.951"
                            viewBox="0 0 28.266 24.951"
                            data-font="14"
                            className="  text-[#1E6091]  "
                          >
                            <path
                              id="sms"
                              d="M130.41,64.961H110.657a4.271,4.271,0,0,0-4.256,4.256V81.27a4.271,4.271,0,0,0,4.256,4.256h1.527V88.9a1.068,1.068,0,0,0,.552.91,1.036,1.036,0,0,0,.455.1.973.973,0,0,0,.585-.195l5.783-4.191H130.41a4.271,4.271,0,0,0,4.256-4.256V69.217a4.271,4.271,0,0,0-4.256-4.256Zm2.242,16.309a2.246,2.246,0,0,1-2.242,2.242H119.234a.907.907,0,0,0-.585.195l-4.418,3.216v-2.4a1.012,1.012,0,0,0-1.007-1.007H110.69a2.246,2.246,0,0,1-2.242-2.242V69.217a2.246,2.246,0,0,1,2.242-2.242h19.753a2.246,2.246,0,0,1,2.242,2.242V81.27Z"
                              transform="translate(-106.4 -64.961)"
                              fill="#1E6091"
                              data-font="14"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              className="h-6 w-6"
                            ></path>
                          </svg>
                          <span className="ml-6">199099</span>
                        </p>

                        {/* phone  */}
                        <p className="flex items-center   ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27.463"
                            height="23.68"
                            viewBox="0 0 27.463 23.68"
                            data-font="14"
                            stroke-width="2"
                            stroke="currentColor"
                            className="h-6 w-6 text-[#1E6091]"
                          >
                            <path
                              id="fax"
                              d="M178.832,119.366c.619,0,1.124-.01,1.629,0a3.959,3.959,0,0,1,3.35,1.714,3.633,3.633,0,0,1,.662,2.161c-.007,2.274-.03,4.548.008,6.821a3.888,3.888,0,0,1-3.9,3.9c-.537,0-1.074,0-1.72,0-.011.645-.028,1.228-.031,1.812-.005,1.451-.037,1.487-1.476,1.487h-13.13c-.2,0-.4.005-.6,0-.712-.028-.917-.212-.945-.912-.024-.6,0-1.193-.012-1.79,0-.163-.033-.326-.063-.6-.532,0-1.036-.019-1.539,0a3.936,3.936,0,0,1-4.049-4.1c.058-2.158,0-4.32.014-6.48a3.843,3.843,0,0,1,4.028-4.016c.5,0,1.006,0,1.56,0,.022-.385.049-.661.051-.937.006-1.251-.006-2.5.008-3.751.009-.859.194-1.054,1.061-1.057q6.991-.031,13.982-.037c.911,0,1.1.21,1.105,1.113.009,1.222,0,2.444,0,3.666v1.006Zm0,13.14c.717,0,1.309.042,1.893-.008a2.391,2.391,0,0,0,2.331-2.456c.032-2.243.038-4.488,0-6.731a2.445,2.445,0,0,0-2.575-2.489c-.2-.005-.4,0-.6,0l-17.893,0c-.4,0-.8-.009-1.193.007a2.3,2.3,0,0,0-2.285,2.2c-.049,2.413-.045,4.828,0,7.242a2.162,2.162,0,0,0,1.6,2.1,5.769,5.769,0,0,0,2.57.12c0-.8-.014-1.538,0-2.272.019-.8.225-1,1.035-1q7.029-.01,14.058,0c.878,0,1.041.178,1.054,1.056.009.707,0,1.414,0,2.242Zm-1.511-1.766c-1.24-.17-12.536-.108-13.11.066a23.764,23.764,0,0,0,.081,5h12.983a24.04,24.04,0,0,0,.046-5.066Zm.055-15.612c-1.131-.178-12.588-.126-13.163.043a17.751,17.751,0,0,0,.059,4.117c1.08.158,12.463.106,13.1-.071v-4.089Z"
                              transform="translate(-157.02 -113.581)"
                              data-font="14"
                              className="h-6 w-6"
                            ></path>
                          </svg>
                          <span className="ml-6">00966-11-434-6654</span>
                        </p>

                        {/* phone */}

                        <p className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#1E6091"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="h-6 w-6 text-[#1E6091]"
                          >
                            <path
                              className="h-6 w-6"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                          <span className="ml-6">199099</span>
                        </p>

                        {/* mail */}
                        <p className="flex items-center">
                          <svg
                            fill="#1E6091"
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                            className="h-6 w-6 text-[#1E6091]"
                          >
                            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                          </svg>
                          <span className="ml-6">info@199099.gov.sa</span>
                        </p>
                      </div>
                    </div>
                    {/* <form
                     
                      className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
                    >
                      <label className="block">
                        <span className="mb-1">Full name</span>
                        <input
                          type="text"
                          placeholder="Leroy Jenkins"
                          className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
                        />
                      </label>


                      <label className="block">
                        <span className="mb-1">Email address</span>
                        <input
                          type="email"
                          placeholder="leroy@jenkins.com"
                          className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea
                          rows={4}
                          className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"
                        ></textarea>
                      </label>
                      <button
                        type="button"
                        className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri"
                      >
                        Submit
                      </button>
                    </form> */}

                    <form className="">
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleInput90"
                          placeholder="Name"
                        />
                        <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                          Name
                        </label>
                      </div>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="email"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleInput91"
                          placeholder="Email address"
                        />
                        <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                          Email address
                        </label>
                      </div>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <textarea
                          className="peer border-2 block min-h-[auto] w-full rounded   bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          placeholder="Your message"
                          rows={4}
                        ></textarea>
                        <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                          Message
                        </label>
                      </div>
                      {/* <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                        <input
                          className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value=""
                          id="exampleCheck96"
                          checked
                        />
                        <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                          Send me a copy of this message
                        </label>
                      </div> */}
                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mb-6 inline-block w-full rounded bg-[#1E6091] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </section>
          {/* <!-- Section: Design Block --> */}
        </div>
        {/* <!-- Container for demo purpose --> */}
      </h1>
    </div>
  );
}
