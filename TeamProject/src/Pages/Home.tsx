// import header from "../assets/header.jpg";
import vid from "../assets/production_id_4205697 (2160p).mp4";
import headerImg from "../assets/header.jpg";

export default function Home() {
  return (
    <div>
      {/* <!-- Section: Design Block --> */}
      <section className="  overflow-hidden pt-4 pb-10   ">
        {/* <!-- Background image --> */}
        <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[600px]     ">
{/*           <div className="absolute top-0 right-0 bottom-0 left-0   w-full  ">
            <video
              src={vid}
              autoPlay
              loop
              muted
              className="lg2:block lg4:hidden"
            />
          </div> */}

          <div className="bg-no-repeat bg-[50%] h-[500px]   ">
            <img
              src={headerImg}
              alt=""
              className="h-[600px] w-full object-cover       "
            />
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0   h-[600px] w-full object-cover overflow-hidden    bg-[hsla(0,0%,0%,0.35)]">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-10 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[#a4f5a9]">
                  GREENER LIFE <br />
                  {/* <span className="text-3xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias asperiores, illum est et nostrum autem id labore
                    ducimus provident voluptatum minus harum.
                  </span> */}
                </h1>
                {/* <a
                  className="mb-2 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  About Us
                </a>
                <a
                  className="inline-block rounded-full px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-20 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Our Functions
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-2.5 text-white dark:text-neutral-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
          <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        {/* <!-- Background image --> */}
      </section>
      {/* <!-- Section: Design Block --> */}

      {/* about us section  */}
      <div className="  bg-white mt-10">
        <div className="container m-auto text-gray-600 md:px-12 xl:px-6">
          <div className="  md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://img.freepik.com/free-vector/save-planet-concept-with-people-taking-care-earth_23-2148522570.jpg?w=360&t=st=1694346104~exp=1694346704~hmac=e4ab03f4b75a2365a81a4ae48fdbe7cd59dfe4f668c7a96372eba9fd33073a8e"
                alt="image"
                loading="lazy"
                className=" rounded-3xl w-[550px] h-[558.031px] lg3:hidden  "
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-3xl text-[#52B69A] font-bold md:text-4xl">
                What is Greener Life ?
              </h2>
              <p className="mt-6 text-gray-600 leading-9 text-2xl">
                Greener Life refers to a concept and lifestyle focused on
                promoting sustainable and environmentally friendly practices to
                create a healthier planet. It encompasses various aspects of
                daily life, including personal choices, consumption habits, and
                environmental consciousness.
              </p>
              <p className="mt-4 text-gray-600 leading-11 text-2xl  ">
                The Greener Life movement aims to raise awareness, inspire
                positive change, and encourage individuals, communities, and
                organizations to take responsibility for their impact on the
                environment and work towards a more sustainable and greener
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* aboout us section  */}
      {/* take action  */}

      {/* company sections */}

      <section className="mt-12">
        <h3 className=" text-3xl text-center font-bold text-neutral-800 dark:text-neutral-200">
          Friendly-Products Companies
        </h3>
        <div className=" flex justify-center gap-20">
          <div className="">
            <img
              src="https://logodownload.org/wp-content/uploads/2019/09/saudi-aramco-logo-0.png"
              alt="lenovo"
              className="w-[13rem] h-[13rem] "
            />
          </div>
          {/* 
          <div className="">
            <img
              src="https://logodownload.org/wp-content/uploads/2019/09/saudi-aramco-logo-0.png"
              alt="lenovo"
              className="w-[13rem] h-[13rem] "
            />
          </div> */}
          <div className="">
            <img
              src="https://dwglogo.com/wp-content/uploads/2019/03/3350px-SABIC_logo.png"
              alt="lenovo"
              className="w-[13rem] h-[13rem] "
            />
          </div>

          <div className="">
            <img
              src="https://1.bp.blogspot.com/-KZS0l57wFHg/YElZCrhi4QI/AAAAAAAAWH8/4swzBo6eKKAVjkkNcy3b-akbjxyRirFIwCLcBGAsYHQ/w1200-h630-p-k-no-nu/%25D8%25B4%25D8%25B1%25D9%2583%25D8%25A9%2B%25D8%25A7%25D9%2584%25D8%25B3%25D8%25B9%25D9%2588%25D8%25AF%25D9%258A%25D8%25A9%2B%25D9%2584%25D9%2584%25D9%2583%25D9%2587%25D8%25B1%25D8%25A8%25D8%25A7%25D8%25A1.png"
              alt="lenovo"
              className="w-[13rem] h-[13rem] "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
