import { act, useState } from "react";

export default function SideBar() {
  const [active, setActive] = useState(1);
  const [hover, setHover] = useState(1);
  const [subNav, setSubNav] = useState("");
  const [prv, setPrv] = useState(0);

  return (
    <div className="w-[260px]">
      <div
        className="h-screen bg-[#003A47] w-[260px] flex"
        onMouseLeave={() => setActive(prv)}
      >
        <div
          className={`p-1 text-[#8ABAC5] text-sm cursor-pointer ${
            active === 2 || active === 5 || active === 7
              ? "w-[60px] transition-all duration-200"
              : "w-[260px] transition-all duration-200"
          }`}
          onMouseEnter={() => setPrv(active) || setActive(0)}
        >
          <div className="flex items-center text-2xl text-white font-semibold p-3 gap-1 mb-5">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M7.55553 25.7773V30.7551H0.0888672C2.39998 29.3329 4.88887 27.7329 7.55553 25.7773Z"
                fill="white"
              ></path>
              <path
                d="M7.55556 23.8203C4.88889 25.9536 2.31111 27.8203 0 29.3314V24.7981C0 24.2648 0.444444 23.8203 0.977778 23.8203H7.55556Z"
                fill="white"
              ></path>
              <path
                d="M25.5112 4.44531C23.7334 7.11198 21.5112 10.0453 18.7556 13.0675V5.42309C18.7556 4.88976 19.2001 4.44531 19.7334 4.44531H25.5112Z"
                fill="white"
              ></path>
              <path
                d="M26.3112 7.37891V29.69C26.3112 30.3122 25.7778 30.8456 25.1556 30.8456H18.7556V16.0011C20.8889 13.8678 22.7556 11.7345 24.4445 9.69002C24.6223 9.51224 24.7112 9.33446 24.8889 9.15668C25.4223 8.53446 25.8667 7.91224 26.3112 7.37891Z"
                fill="white"
              ></path>
              <path
                d="M16.7112 15.2891C15.8223 16.2668 14.9335 17.1557 13.9557 18.1335C12.4446 19.5557 11.0223 20.8891 9.51123 22.1335V16.2668C9.51123 15.7335 9.95568 15.2891 10.489 15.2891H16.7112Z"
                fill="white"
              ></path>
              <path
                d="M16.8001 17.957V30.757H9.51123V24.2681C11.7335 22.4904 13.9557 20.6237 16.2668 18.4904C16.4446 18.3126 16.6223 18.1348 16.8001 17.957Z"
                fill="white"
              ></path>
              <path
                d="M24.7112 3.11111H27.9112C27.9112 4.26667 27.9112 5.51111 27.9112 6.66667C28.7112 4.44444 29.4223 2.22222 30.2223 0C28.4445 0.977778 26.5778 2.04444 24.7112 3.11111Z"
                fill="white"
              ></path>
            </svg>
            <span
              className={`${
                active === 2 || active === 5 || active === 7
                  ? "hidden"
                  : "block whitespace-nowrap"
              }`}
            >
              Financfy
            </span>
          </div>
          <div
            className={`p-3 hover:bg-[#779ea6] hover:text-[#1d505d] m-1 rounded-md flex items-center gap-3 ${
              active === 1 || hover === 1
                ? "text-white bg-[#006980] hover:text-white"
                : "text-[#8ABAC5]"
            }`}
            onClick={() => setActive(1) || setPrv(0) || setHover(1)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M8.37907 10.1043C8.50232 9.2044 9.2044 8.50232 10.1043 8.37907C10.6205 8.30838 11.1811 8.25 11.625 8.25C12.0689 8.25 12.6295 8.30838 13.1457 8.37907C14.0456 8.50232 14.7477 9.2044 14.8709 10.1043C14.9416 10.6205 15 11.1811 15 11.625C15 12.0689 14.9416 12.6295 14.8709 13.1457C14.7477 14.0456 14.0456 14.7477 13.1457 14.8709C12.6295 14.9416 12.0689 15 11.625 15C11.1811 15 10.6205 14.9416 10.1043 14.8709C9.2044 14.7477 8.50232 14.0456 8.37907 13.1457C8.30838 12.6295 8.25 12.0689 8.25 11.625C8.25 11.1811 8.30838 10.6205 8.37907 10.1043Z"
                fill="currentColor"
              ></path>
              <path
                d="M0.129069 10.1043C0.252317 9.2044 0.954401 8.50232 1.85433 8.37907C2.37048 8.30838 2.93112 8.25 3.375 8.25C3.81888 8.25 4.37952 8.30838 4.89567 8.37907C5.7956 8.50232 6.49768 9.2044 6.62093 10.1043C6.69162 10.6205 6.75 11.1811 6.75 11.625C6.75 12.0689 6.69162 12.6295 6.62093 13.1457C6.49768 14.0456 5.7956 14.7477 4.89567 14.8709C4.37952 14.9416 3.81888 15 3.375 15C2.93112 15 2.37048 14.9416 1.85433 14.8709C0.954401 14.7477 0.252317 14.0456 0.129069 13.1457C0.0583789 12.6295 0 12.0689 0 11.625C0 11.1811 0.0583789 10.6205 0.129069 10.1043Z"
                fill="currentColor"
              ></path>
              <path
                d="M8.37907 1.85433C8.50232 0.954401 9.2044 0.252317 10.1043 0.129069C10.6205 0.0583789 11.1811 0 11.625 0C12.0689 0 12.6295 0.0583789 13.1457 0.129069C14.0456 0.252317 14.7477 0.954401 14.8709 1.85433C14.9416 2.37048 15 2.93112 15 3.375C15 3.81888 14.9416 4.37952 14.8709 4.89567C14.7477 5.7956 14.0456 6.49768 13.1457 6.62093C12.6295 6.69162 12.0689 6.75 11.625 6.75C11.1811 6.75 10.6205 6.69162 10.1043 6.62093C9.2044 6.49768 8.50232 5.7956 8.37907 4.89567C8.30838 4.37952 8.25 3.81888 8.25 3.375C8.25 2.93112 8.30838 2.37048 8.37907 1.85433Z"
                fill="currentColor"
              ></path>
              <path
                d="M0.129069 1.85433C0.252317 0.954401 0.954401 0.252317 1.85433 0.129069C2.37048 0.0583789 2.93112 0 3.375 0C3.81888 0 4.37952 0.0583789 4.89567 0.129069C5.7956 0.252317 6.49768 0.954401 6.62093 1.85433C6.69162 2.37048 6.75 2.93112 6.75 3.375C6.75 3.81888 6.69162 4.37952 6.62093 4.89567C6.49768 5.7956 5.7956 6.49768 4.89567 6.62093C4.37952 6.69162 3.81888 6.75 3.375 6.75C2.93112 6.75 2.37048 6.69162 1.85433 6.62093C0.954401 6.49768 0.252317 5.7956 0.129069 4.89567C0.0583789 4.37952 0 3.81888 0 3.375C0 2.93112 0.0583789 2.37048 0.129069 1.85433Z"
                fill="currentColor"
              ></path>
            </svg>
            <span
              className={`${
                active === 2 || active === 5 || active === 7
                  ? "hidden"
                  : "block whitespace-nowrap"
              }`}
            >
              Dashboard
            </span>
          </div>
          <div
            className={`p-3 hover:bg-[#779ea6] hover:text-[#1d505d] m-1 rounded-md flex items-center justify-between ${
              active === 2 || hover === 2
                ? "text-white bg-[#006980] hover:text-white"
                : "text-[#8ABAC5]"
            }`}
            onClick={() =>
              setActive(2) ||
              setSubNav("Transaction") ||
              setPrv(0) ||
              setHover(2)
            }
          >
            <div className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M10.7598 1.42422C10.7278 1.62422 10.7118 1.82421 10.7118 2.02421C10.7118 3.82418 12.1678 5.27936 13.9598 5.27936C14.1598 5.27936 14.3518 5.25616 14.5518 5.22416V11.6793C14.5518 14.392 12.9518 16 10.2318 16H4.32074C1.59998 16 0 14.392 0 11.6793V5.76015C0 3.04019 1.59998 1.42422 4.32074 1.42422H10.7598ZM10.9206 6.28815C10.7038 6.26415 10.4886 6.36014 10.3598 6.53614L8.42467 9.0401L6.20791 7.29613C6.07191 7.19213 5.91191 7.15133 5.75191 7.16813C5.59272 7.19213 5.44872 7.27933 5.35192 7.40733L2.98476 10.4881L2.93596 10.5601C2.79996 10.8153 2.86396 11.1433 3.10395 11.3201C3.21595 11.3921 3.33595 11.4401 3.47195 11.4401C3.65675 11.4481 3.83194 11.3513 3.94394 11.2001L5.95191 8.61531L8.23188 10.3281L8.30388 10.3753C8.55987 10.5113 8.87987 10.4481 9.06386 10.2073L11.3758 7.22413L11.3438 7.24013C11.4718 7.06413 11.4958 6.84014 11.4078 6.64014C11.3206 6.44014 11.1278 6.30415 10.9206 6.28815ZM14.0719 0C15.1359 0 15.9998 0.863987 15.9998 1.92797C15.9998 2.99196 15.1359 3.85594 14.0719 3.85594C13.0079 3.85594 12.1439 2.99196 12.1439 1.92797C12.1439 0.863987 13.0079 0 14.0719 0Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span
                className={`${
                  active === 2 || active === 5 || active === 7
                    ? "hidden"
                    : "block whitespace-nowrap"
                }`}
              >
                Transaction
              </span>
            </div>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`-rotate-90 flex-shrink-0 ${
                active === 2 || active === 5 || active === 7
                  ? "hidden"
                  : "block whitespace-nowrap"
              }`}
            >
              <path
                d="M1 1L4 4L7 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div
            className={`p-3 hover:bg-[#779ea6] hover:text-[#1d505d] m-1 rounded-md flex items-center gap-3 ${
              active === 3 || hover === 3
                ? "text-white bg-[#006980] hover:text-white"
                : "text-[#8ABAC5]"
            }`}
            onClick={() => setActive(3) || setPrv(0) || setHover(3)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              version="1.1"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M0 993.28c0 16.896 17.93024 30.72 39.83872 30.72l132.80256 0c21.90848 0 39.83872-13.824 39.83872-30.72L212.48 440.32c0-16.896-17.93024-30.72-39.83872-30.72L39.83872 409.6C17.93024 409.6 0 423.424 0 440.32L0 993.28z"></path>
              <path d="M405.76 993.28c0 16.896 17.92512 30.72 39.83872 30.72l132.80256 0c21.90848 0 39.83872-13.824 39.83872-30.72l0-368.64c0-16.896-17.93024-30.72-39.83872-30.72L445.59872 593.92c-21.90848 0-39.83872 13.824-39.83872 30.72L405.76 993.28z"></path>
              <path d="M851.35872 409.6c-21.90848 0-39.83872 13.824-39.83872 30.72l0 552.96c0 16.896 17.93024 30.72 39.83872 30.72l132.80256 0c21.90848 0 39.83872-13.824 39.83872-30.72L1024 440.32c0-16.896-17.93024-30.72-39.83872-30.72L851.35872 409.6z"></path>
              <path d="M509.44 5.12C345.90208 5.12 213.32992 137.69216 213.32992 301.23008s132.57216 296.11008 296.11008 296.11008 296.11008-132.57216 296.11008-296.11008S672.97792 5.12 509.44 5.12zM526.71488 479.30368l0 34.14016-37.01248 0 0-35.11296c-61.69088-7.1168-98.85696-42.28096-110.71488-105.55904l54.33344-15.26784c4.5056 49.78688 32.23552 74.09664 83.13856 72.95488 44.11392 0 66.16576-17.52576 66.16576-52.59776 5.64224-24.86272-19.8144-43.53024-76.3648-55.99232-81.44384-16.96768-119.93088-50.31936-115.39456-100.10624 3.12832-58.40896 34.67776-90.81856 98.83648-97.29536l0-32.97792 37.01248 0 0 32.80896c56.7552 5.69856 92.51328 37.62176 103.7568 95.77472l-54.6304 15.26784c-7.92064-41.84064-30.53056-62.19776-67.8656-61.0816-40.71936 1.14688-61.66016 16.96768-62.7712 47.50848-2.2784 20.36224 20.9152 36.21376 69.56544 47.50848 84.83328 16.96768 126.4384 53.74464 124.1856 110.29504C634.5728 441.75872 595.80416 474.9824 526.71488 479.30368z"></path>
            </svg>
            <span
              className={`${
                active === 2 || active === 5 || active === 7
                  ? "hidden"
                  : "block whitespace-nowrap"
              }`}
            >
              Chart of accounts
            </span>
          </div>
          <div
            className={`p-3 hover:bg-[#779ea6] hover:text-[#1d505d] m-1 rounded-md flex items-center gap-3 ${
              active === 4 || hover === 4
                ? "text-white bg-[#006980] hover:text-white"
                : "text-[#8ABAC5]"
            }`}
            onClick={() => setActive(4) || setPrv(0) || setHover(4)}
          >
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M0 14.8C0 15.1183 0.126428 15.4235 0.351472 15.6485C0.576516 15.8736 0.88174 16 1.2 16H2.4V0H1.2C0.88174 0 0.576516 0.126428 0.351472 0.351472C0.126428 0.576515 0 0.88174 0 1.2V14.8ZM3.2 0V16H11.2C11.6243 16 12.0313 15.8314 12.3314 15.5314C12.6314 15.2313 12.8 14.8243 12.8 14.4V1.6C12.8 1.17565 12.6314 0.768687 12.3314 0.468629C12.0313 0.168571 11.6243 0 11.2 0L3.2 0ZM8.8 6.4H4.8V5.6H8.8V6.4ZM11.2 4.8H4.8V4H11.2V4.8Z"
                fill="currentColor"
              ></path>
            </svg>
            <span
              className={`${
                active === 2 || active === 5 || active === 7
                  ? "hidden"
                  : "block whitespace-nowrap"
              }`}
            >
              Journal
            </span>
          </div>
          <div
            className={`p-3 hover:bg-[#779ea6] hover:text-[#1d505d] m-1 rounded-md flex items-center justify-between ${
              active === 5 || hover === 5
                ? "text-white bg-[#006980] hover:text-white"
                : "text-[#8ABAC5]"
            }`}
            onClick={() =>
              setActive(5) || setSubNav("Banking") || setPrv(0) || setHover(5)
            }
          >
            <div className="flex items-center gap-3">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M2.33329 8.58425V11.9176C2.33329 12.6092 2.89163 13.1676 3.58329 13.1676C4.27496 13.1676 4.83329 12.6092 4.83329 11.9176V8.58425C4.83329 7.89258 4.27496 7.33425 3.58329 7.33425C2.89163 7.33425 2.33329 7.89258 2.33329 8.58425ZM7.33329 8.58425V11.9176C7.33329 12.6092 7.89163 13.1676 8.58329 13.1676C9.27496 13.1676 9.83329 12.6092 9.83329 11.9176V8.58425C9.83329 7.89258 9.27496 7.33425 8.58329 7.33425C7.89163 7.33425 7.33329 7.89258 7.33329 8.58425ZM1.91663 17.3342H15.25C15.9416 17.3342 16.5 16.7759 16.5 16.0842C16.5 15.3926 15.9416 14.8342 15.25 14.8342H1.91663C1.22496 14.8342 0.666626 15.3926 0.666626 16.0842C0.666626 16.7759 1.22496 17.3342 1.91663 17.3342ZM12.3333 8.58425V11.9176C12.3333 12.6092 12.8916 13.1676 13.5833 13.1676C14.275 13.1676 14.8333 12.6092 14.8333 11.9176V8.58425C14.8333 7.89258 14.275 7.33425 13.5833 7.33425C12.8916 7.33425 12.3333 7.89258 12.3333 8.58425ZM7.80829 0.242578L1.22496 3.70924C0.883293 3.88424 0.666626 4.24258 0.666626 4.62591C0.666626 5.20091 1.13329 5.66758 1.70829 5.66758H15.4666C16.0333 5.66758 16.5 5.20091 16.5 4.62591C16.5 4.24258 16.2833 3.88424 15.9416 3.70924L9.35829 0.242578C8.87496 -0.0157552 8.29163 -0.0157552 7.80829 0.242578Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span
                className={`${
                  active === 2 || active === 5 || active === 7
                    ? "hidden"
                    : "block whitespace-nowrap"
                }`}
              >
                Banking
              </span>
            </div>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`-rotate-90 flex-shrink-0 ${
                active === 2 || active === 5 || active === 7
                  ? "hidden"
                  : "block "
              }`}
            >
              <path
                d="M1 1L4 4L7 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div
            className={`p-3 hover:bg-[#779ea6] hover:text-[#1d505d] m-1 rounded-md flex items-center gap-3 ${
              active === 6 || hover === 6
                ? "text-white bg-[#006980] hover:text-white"
                : "text-[#8ABAC5]"
            }`}
            onClick={() => setActive(6) || setPrv(0) || setHover(6)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M8.31579 12.5391C11.7405 12.5391 14.6316 13.1026 14.6316 15.2789C14.6316 17.4553 11.7219 18 8.31579 18C4.89112 18 2 17.4356 2 15.2602C2 13.0838 4.90882 12.5391 8.31579 12.5391ZM16.3149 6.21053C16.7328 6.21053 17.072 6.55532 17.072 6.9782V7.96873H18.0851C18.5021 7.96873 18.8421 8.31352 18.8421 8.7364C18.8421 9.15928 18.5021 9.50408 18.0851 9.50408H17.072V10.4955C17.072 10.9184 16.7328 11.2632 16.3149 11.2632C15.8979 11.2632 15.5579 10.9184 15.5579 10.4955V9.50408H14.5465C14.1286 9.50408 13.7895 9.15928 13.7895 8.7364C13.7895 8.31352 14.1286 7.96873 14.5465 7.96873H15.5579V6.9782C15.5579 6.55532 15.8979 6.21053 16.3149 6.21053ZM8.31579 2C10.6354 2 12.4948 3.88348 12.4948 6.23313C12.4948 8.58278 10.6354 10.4663 8.31579 10.4663C5.99615 10.4663 4.13673 8.58278 4.13673 6.23313C4.13673 3.88348 5.99615 2 8.31579 2Z"
                fill="currentColor"
              ></path>
            </svg>
            <span
              className={`${
                active === 2 || active === 5 || active === 7
                  ? "hidden"
                  : "block whitespace-nowrap"
              }`}
            >
              Customers
            </span>
          </div>
          <div
            className={`p-3 hover:bg-[#779ea6] hover:text-[#1d505d] m-1 rounded-md flex items-center justify-between ${
              active === 7 || hover === 7
                ? "text-white bg-[#006980] hover:text-white"
                : "text-[#8ABAC5]"
            }`}
            onClick={() =>
              setActive(7) || setSubNav("Sales") || setPrv(0) || setHover(7)
            }
          >
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M4 8.5022H6C6.55223 8.5022 7 9.05443 7 9.5022V16.0022C7 16.5544 6.55223 17.0022 6 17.0022H4C3.44777 17.0022 3 16.45 3 16.0022V9.5022C3 8.94997 3.44777 8.5022 4 8.5022Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M9 10.0022H11C11.5522 10.0022 12 10.5544 12 11.0022V16.0022C12 16.5544 11.5522 17.0022 11 17.0022H9C8.44777 17.0022 8 16.45 8 16.0022V11.0022C8 10.45 8.44777 10.0022 9 10.0022Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M14 8.0022H16C16.5522 8.0022 17 8.55443 17 9.0022V16.0022C17 16.5544 16.5522 17.0022 16 17.0022H14C13.4478 17.0022 13 16.45 13 16.0022V9.0022C13 8.44997 13.4478 8.0022 14 8.0022Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M4.81457 5.46678L9.81457 7.46678C9.95977 7.52471 10.1236 7.51131 10.2575 7.43073L14.7227 4.75228L14.6636 5.06233C14.639 5.19291 14.6672 5.32796 14.7423 5.43756C14.8173 5.54727 14.933 5.6225 15.0636 5.64683C15.0947 5.65274 15.1261 5.65575 15.1576 5.65575C15.274 5.65564 15.3866 5.61491 15.4761 5.54058C15.5656 5.46625 15.6265 5.36312 15.6481 5.24883L15.9116 3.85932C15.9363 3.72874 15.908 3.59369 15.8329 3.48398C15.7579 3.37438 15.6423 3.29904 15.5116 3.27483L14.1221 3.01188V3.01177C13.9901 2.98264 13.8519 3.00809 13.7391 3.08253C13.6261 3.15697 13.5482 3.27382 13.523 3.40676C13.4978 3.53957 13.5274 3.67696 13.6052 3.78756C13.6828 3.89816 13.8021 3.97249 13.9356 3.99381L14.0171 4.00932L9.95565 6.44581L5.18565 4.53778C5.01969 4.47149 4.83097 4.49883 4.69068 4.60943C4.55028 4.71992 4.47952 4.89703 4.50519 5.07395C4.53075 5.25073 4.64872 5.40052 4.81468 5.4668L4.81457 5.46678Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span
                className={`${
                  active === 2 || active === 5 || active === 7
                    ? "hidden"
                    : "block whitespace-nowrap"
                }`}
              >
                Sales
              </span>
            </div>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`-rotate-90 flex-shrink-0 ${
                active === 2 || active === 5 || active === 7
                  ? "hidden"
                  : "block whitespace-nowrap"
              }`}
            >
              <path
                d="M1 1L4 4L7 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div
            className={`p-3 hover:bg-[#779ea6] hover:text-[#1d505d] m-1 rounded-md flex items-center gap-3 ${
              active === 8 || hover === 8
                ? "text-white bg-[#006980] hover:text-white"
                : "text-[#8ABAC5]"
            }`}
            onClick={() => setActive(8) || setPrv(0) || setHover(8)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.392 12.2242C10.392 11.7201 10.049 11.2805 9.55993 11.1581L8.84888 10.98C8.6491 10.9302 8.42973 10.9997 8.29741 11.1743L8.00393 11.561C7.56414 12.1406 6.6927 12.1406 6.25287 11.5611L5.95722 11.1715C5.83389 10.997 5.61165 10.9073 5.39214 10.9632L3.54869 11.4357C1.97418 11.8393 0.902344 13.2192 0.902344 14.8422V16.5032C0.902344 16.7977 1.14101 17.0363 1.43547 17.0363H9.94161C10.2057 17.0363 10.3918 16.77 10.392 16.506V12.2242ZM15.5198 10.4861C15.6686 10.5609 15.8441 10.4527 15.8441 10.2861V9.87492C15.8441 9.61129 15.6304 9.39758 15.3668 9.39758H15.1982C14.9345 9.39758 14.7208 9.61132 14.7208 9.87499V10.2897C14.7208 10.4546 14.8945 10.5618 15.0419 10.4877C15.1159 10.45 15.1976 10.4302 15.2807 10.43C15.3637 10.4297 15.4456 10.4489 15.5198 10.4861Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5672 9.39755H16.9108V11.511C16.9108 11.8055 16.6721 12.0442 16.3776 12.0442C16.2739 12.0442 16.177 12.0145 16.0951 11.9631L15.2829 11.5551L14.4256 11.9859C14.0686 12.1648 13.6568 11.8973 13.6571 11.511L13.6549 9.39755H11.9919C11.6975 9.39755 11.4588 9.63635 11.4588 9.93068V16.5059C11.4588 16.8004 11.6975 17.0391 11.9919 17.0391H18.5672C18.8617 17.0391 19.1003 16.8004 19.1003 16.5059V9.93068C19.1003 9.63621 18.8617 9.39755 18.5672 9.39755ZM10.7185 6.58973C10.7185 8.5723 9.11136 10.1795 7.1288 10.1795C5.14623 10.1795 3.53906 8.5723 3.53906 6.58973C3.53906 4.60717 5.14623 3 7.1288 3C9.11136 3 10.7185 4.60717 10.7185 6.58973Z"
                fill="currentColor"
              ></path>
            </svg>
            <span
              className={`${
                active === 2 || active === 5 || active === 7
                  ? "hidden"
                  : "block whitespace-nowrap"
              }`}
            >
              Suppliers
            </span>
          </div>
        </div>
        <div
          className={`${
            active === 2 || active === 5 || active === 7
              ? "w-[200px] bg-[rgb(0,44,54)] transition-all duration-200"
              : "hidden transition-all duration-200"
          }`}
          onMouseEnter={() => setPrv(active)}
        >
          <div className="text-center text-[#d9ebef] border-b p-3">
            {subNav}
          </div>
          {subNav === "Transaction" && (
            <div className="flex flex-col gap-2 text-[white] text-sm mt-12">
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Cash flow
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Cash transfer
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Cash in
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Cash out
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Balk entries
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Cash out approval
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Cash in request
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Advance cash out
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Import
              </div>
            </div>
          )}
          {subNav === "Banking" && (
            <div className="flex flex-col gap-2 text-[white] text-sm mt-12">
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Bank Transactions
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Rules
              </div>
            </div>
          )}
          {subNav === "Sales" && (
            <div className="flex flex-col gap-2 text-[white] text-sm mt-12">
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                All sales
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Estimate
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Invoice
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Receive payment
              </div>
              <div className="hover:bg-[#8ABAC5] cursor-pointer px-4 py-1">
                Recurring invoice
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
