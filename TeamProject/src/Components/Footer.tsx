// import React from "react";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="  px-6 py-12 mx-auto">
          <hr className="my-6 border-[#76C893] md:my-8 dark:border-[#76C893]" />

          <div className="flex items-center justify-between gap-6">
            <a href="#">
              <img className="w-auto h-[3rem]" src={logo} alt="" />
            </a>

            <div className="flex -mx-2">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href="https://github.com/wedyaan/FinalProject"
                className="text-blueGray-500 hover:text-gray-800 mx-1"
                target="_blank"
              />{" "}
              by
              <a
                href="https://github.com/wedyaan/FinalProject"
                className="text-blueGray-500 hover:text-blueGray-800 mx-1"
              >
                Greener Life
              </a>
              .
            </div>

            <div className="flex -mx-2">
              <a
                href="https://github.com/wedyaan/FinalProject"
                target="_blanck"
                className="mx-2 text-[#168AAD] transition-colors duration-300  hover:text-[#76C893]  "
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                </svg>
              </a>

              <a
                href="#"
                target="_blanck"
                className="mx-2 text-[#168AAD] transition-colors duration-300  hover:text-[#76C893]  "
                aria-label="Github"
              >
                <svg
                  className="w-8 h-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </a>

              <a
                href="mailto:wedyan-14@hotmail.com"
                target="_blanck"
                className="mx-2 text-[#168AAD] transition-colors duration-300  hover:text-[#76C893]  "
                aria-label="Github"
              >
                <svg
                  className="w-8 h-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  {" "}
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
