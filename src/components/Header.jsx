export default function Header() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  return (
    <div className="w-full h-[70px] bg-slate-200 flex justify-between items-center px-5">
      <div className="p-2 flex items-center gap-5">
        <svg
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-500 transition-all duration-500"
        >
          <path d="M1 7L18 7Z" fill="#FDFDFE"></path>
          <path
            d="M0.505025 6.50503C0.231658 6.77839 0.231658 7.22161 0.505025 7.49497L4.9598 11.9497C5.23316 12.2231 5.67638 12.2231 5.94975 11.9497C6.22311 11.6764 6.22311 11.2332 5.94975 10.9598L1.98995 7L5.94975 3.0402C6.22311 2.76684 6.22311 2.32362 5.94975 2.05025C5.67638 1.77689 5.23317 1.77689 4.9598 2.05025L0.505025 6.50503ZM18 7.7C18.3866 7.7 18.7 7.3866 18.7 7C18.7 6.6134 18.3866 6.3 18 6.3L18 7.7ZM1 7.7L18 7.7L18 6.3L1 6.3L1 7.7Z"
            fill="#006980"
          ></path>
          <path d="M10 1L18 0.999999Z" fill="#FDFDFE"></path>
          <path
            d="M10 1L18 0.999999"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path d="M10 13L18 13Z" fill="#FDFDFE"></path>
          <path
            d="M10 13L18 13"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <div className="flex flex-col">
          <span className="font-semibold text-sm flex items-center gap-2">
            Hello, Karim haque!{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_930_9945)">
                <path
                  d="M4.02229 12.1223C3.89737 12.0973 3.79744 12.0723 3.67252 12.0223C3.54761 11.9724 3.44767 11.9474 3.34774 11.8974C3.12289 11.7975 2.92302 11.6726 2.72315 11.5227C2.32342 11.2479 1.99864 10.8731 1.7488 10.4234C1.49897 9.99868 1.34907 9.49901 1.32409 9.02433C1.2991 8.7745 1.32409 8.54965 1.34907 8.29981C1.37405 8.1749 1.39904 8.07496 1.42402 7.95004C1.449 7.82513 1.49897 7.72519 1.52395 7.60028L1.54894 7.95004C1.54894 8.07496 1.57392 8.1749 1.5989 8.29981C1.62389 8.52466 1.67385 8.74951 1.72382 8.94938C1.82375 9.3741 1.97365 9.77383 2.1985 10.1486C2.42335 10.5233 2.67319 10.8731 2.99797 11.1979C3.14787 11.3478 3.32276 11.4977 3.49764 11.6476C3.57259 11.7225 3.67252 11.7975 3.77246 11.8724L4.02229 12.1223ZM3.94734 13.0217C3.87239 13.0716 3.77246 13.0966 3.67252 13.1216C3.57259 13.1466 3.49764 13.1716 3.39771 13.1716C3.22282 13.1966 3.02296 13.2215 2.82309 13.1966C2.44834 13.1716 2.0486 13.0716 1.72382 12.8968C1.37405 12.7219 1.07425 12.4471 0.874384 12.1223C0.774451 11.9724 0.674517 11.7975 0.599567 11.6226C0.574584 11.5477 0.549601 11.4477 0.524617 11.3478C0.524617 11.2728 0.499634 11.1979 0.499634 11.098C0.574584 11.1729 0.624551 11.2479 0.674517 11.2978C0.749468 11.3728 0.799434 11.4477 0.849401 11.4977C0.974318 11.6226 1.07425 11.7475 1.19917 11.8475C1.449 12.0723 1.69884 12.2722 1.99864 12.4221C2.27345 12.572 2.59824 12.6969 2.89804 12.7968C3.04794 12.8468 3.22282 12.8718 3.39771 12.9217C3.47266 12.9467 3.57259 12.9467 3.64754 12.9717C3.77246 12.9967 3.84741 12.9967 3.94734 13.0217M9.59358 0.879749C9.7185 0.904733 9.81843 0.954699 9.94335 1.00467C10.0683 1.05463 10.1682 1.1046 10.2681 1.15457C10.493 1.27948 10.6929 1.4044 10.8927 1.5543C11.2925 1.8541 11.6172 2.25384 11.8421 2.70354C12.0669 3.15324 12.1919 3.6529 12.1919 4.12759C12.1919 4.37742 12.1669 4.60227 12.1169 4.85211C12.0919 4.97702 12.0669 5.07696 12.017 5.20187C11.967 5.32679 11.942 5.42672 11.8921 5.52666L11.8671 5.17689C11.8671 5.05197 11.8671 4.95204 11.8421 4.82712L11.7671 4.15257C11.6922 3.72785 11.5423 3.30314 11.3424 2.9034C11.1426 2.50367 10.8927 2.1539 10.5929 1.82912C10.443 1.65423 10.2681 1.50433 10.1182 1.32945C10.0433 1.2545 9.94335 1.17955 9.84342 1.1046L9.59358 0.879749M11.7671 0.779816C11.8671 0.804799 11.942 0.829782 12.017 0.879749C12.0919 0.904733 12.1919 0.954699 12.2668 1.00467C12.4167 1.1046 12.5666 1.20453 12.7165 1.32945C12.9913 1.57928 13.2162 1.87908 13.3411 2.22885C13.491 2.57862 13.541 2.95337 13.491 3.32812C13.466 3.503 13.416 3.67789 13.3661 3.85277C13.3411 3.92772 13.2911 4.02765 13.2661 4.1026C13.2162 4.17755 13.1912 4.2525 13.1162 4.32746V3.82779C13.1162 3.6529 13.0913 3.503 13.0913 3.3531C13.0413 3.02832 12.9913 2.72852 12.8664 2.4537C12.7415 2.1539 12.5916 1.90407 12.4167 1.62925C12.3168 1.50433 12.2168 1.35443 12.1169 1.22952C12.0669 1.15457 12.017 1.1046 11.942 1.02965C11.8921 0.904733 11.8171 0.829782 11.7671 0.779816"
                  fill="#3D3D3D"
                ></path>
                <path
                  d="M2.49832 4.50235C1.99866 4.7272 1.82377 5.3268 2.04862 5.82647L5.19653 12.3971L6.94536 11.5726L3.79746 4.97704C3.57261 4.47737 2.99799 4.25252 2.49832 4.50235M10.7678 9.72388L12.6166 8.84946L9.01898 1.35445C8.76915 0.85478 8.16955 0.629929 7.6449 0.879763C7.14523 1.1296 6.92038 1.7292 7.17021 2.25385L10.7678 9.72388Z"
                  fill="#FFDD67"
                ></path>
                <path
                  d="M7.66992 0.854748C7.61995 0.879732 7.56999 0.904715 7.52002 0.954682C7.9947 0.829765 8.49437 1.05462 8.71922 1.50432L12.3168 8.99933L12.6416 8.84943L9.04401 1.35442C8.79417 0.829765 8.19457 0.604915 7.66992 0.854748"
                  fill="#EBA352"
                ></path>
                <path
                  d="M6.94552 11.5476L8.86924 10.6232L5.19668 2.9783C4.94685 2.45365 4.29728 2.20381 3.77263 2.45365C3.24798 2.70348 3.02313 3.35305 3.27296 3.8777L6.94552 11.5476Z"
                  fill="#FFDD67"
                ></path>
                <path
                  d="M3.77246 2.47864C3.72249 2.50363 3.67253 2.52861 3.62256 2.57858C4.09724 2.45366 4.64688 2.67851 4.87173 3.15319L7.14521 7.92502L7.69485 8.2498L5.19651 3.00329C4.94668 2.45366 4.32209 2.22881 3.77246 2.47864"
                  fill="#EBA352"
                ></path>
                <path
                  d="M8.56942 10.0236L10.4931 9.09925L6.82058 1.45434C6.57075 0.929686 5.92118 0.679852 5.39653 0.954669C4.87188 1.2045 4.64703 1.85407 4.89686 2.37872L8.56942 10.0236Z"
                  fill="#FFDD67"
                ></path>
                <path
                  d="M5.39648 0.929692C5.34652 0.954675 5.29655 1.00464 5.24658 1.02963C5.72127 0.904708 6.2709 1.12956 6.49575 1.60424L9.06904 7.00065L9.61867 7.32544L6.82053 1.45434C6.5707 0.904709 5.92113 0.679858 5.39648 0.929692M2.49841 4.50231C2.44844 4.5273 2.39848 4.55228 2.34851 4.60225C2.79821 4.47733 3.2729 4.70218 3.47276 5.15188L5.34652 9.07427L5.89615 9.39906L3.79755 5.00198C3.5727 4.47733 2.99808 4.25248 2.49841 4.50231Z"
                  fill="#EBA352"
                ></path>
                <path
                  d="M15.1898 3.75282C14.5153 3.22817 13.416 3.80278 12.8664 5.60159C12.4916 6.85076 12.4417 7.22551 11.6422 7.60026L11.1925 6.67587C11.1925 6.67587 4.09722 10.0986 4.37204 10.6482C4.37204 10.6482 5.22147 13.2965 6.67051 14.5207C8.81908 16.3694 13.8407 14.3957 14.0656 9.62391C14.1905 6.85076 15.9144 4.32744 15.1898 3.75282Z"
                  fill="#FFDD67"
                ></path>
                <path
                  d="M15.19 3.75279C15.0651 3.65286 14.9152 3.60289 14.7653 3.57791C14.7903 3.60289 14.8402 3.60289 14.8652 3.62788C15.6147 4.2025 14.8402 5.52661 14.4155 6.72582C14.0657 7.67519 13.7659 8.64954 13.8159 9.59891C14.0158 13.7461 9.84355 15.7198 7.34521 14.9703C9.79359 15.9947 14.3406 14.0459 14.1407 9.72382C14.0907 8.77445 14.3655 7.85007 14.7403 6.85073C15.14 5.65153 15.9145 4.32741 15.19 3.75279"
                  fill="#EBA352"
                ></path>
                <path
                  d="M11.8671 7.50037C10.3181 7.67525 8.0446 9.89877 9.64353 12.3222C8.46932 9.87379 10.393 8.22488 11.6172 7.65027C11.7421 7.55033 11.8671 7.50037 11.8671 7.50037"
                  fill="#EBA352"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_930_9945">
                  <rect
                    width="15.9894"
                    height="15.9894"
                    fill="white"
                    transform="translate(0 0.00531006)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>{" "}
          </span>
          <span className="text-xs">{formattedDate}</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 p-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-primary"
          >
            <g clip-path="url(#clip0_3551_17503)">
              <path
                d="M4.35391 3.69106L3.02822 2.36538C2.84512 2.18228 2.54847 2.18228 2.36538 2.36538C2.18228 2.54847 2.18228 2.84512 2.36538 3.02822L3.69106 4.35391C3.87416 4.537 4.17081 4.537 4.35391 4.35391C4.537 4.17081 4.537 3.87416 4.35391 3.69106ZM2.375 7.53125H0.46875C0.209656 7.53125 0 7.74091 0 8C0 8.25909 0.209656 8.46875 0.46875 8.46875H2.375C2.63409 8.46875 2.84375 8.25909 2.84375 8C2.84375 7.74091 2.63409 7.53125 2.375 7.53125ZM15.5312 7.53125H13.625C13.3659 7.53125 13.1562 7.74091 13.1562 8C13.1562 8.25909 13.3659 8.46875 13.625 8.46875H15.5312C15.7903 8.46875 16 8.25909 16 8C16 7.74091 15.7903 7.53125 15.5312 7.53125ZM13.6346 2.36538C13.4515 2.18228 13.1549 2.18228 12.9718 2.36538L11.6461 3.69106C11.463 3.87416 11.463 4.17081 11.6461 4.35391C11.8292 4.537 12.1258 4.537 12.3089 4.35391L13.6346 3.02822C13.8177 2.84512 13.8177 2.5485 13.6346 2.36538ZM8 0C7.74091 0 7.53125 0.209656 7.53125 0.46875V2.375C7.53125 2.63409 7.74091 2.84375 8 2.84375C8.25909 2.84375 8.46875 2.63409 8.46875 2.375V0.46875C8.46875 0.209656 8.25909 0 8 0ZM10.625 4.69059C9.60316 3.88434 8.28125 3.59375 6.9875 3.90313C5.4875 4.25 4.27816 5.44059 3.9125 6.93125C3.54688 8.43122 3.96875 9.94997 5.04684 11.0093C5.43125 11.3938 5.65625 11.9968 5.65625 12.6156V12.7188C5.65625 12.9812 5.86247 13.1875 6.125 13.1875H9.875C10.1375 13.1875 10.3438 12.9812 10.3438 12.7188V12.6156C10.3438 12.0062 10.5781 11.3843 10.9906 10.9812C11.7782 10.1843 12.2188 9.125 12.2188 8C12.2188 6.70625 11.6375 5.49684 10.625 4.69059ZM8 6.59375C7.29281 6.59375 6.778 7.06284 6.64319 7.60588C6.58184 7.85284 6.33334 8.01047 6.07509 7.94828C5.82425 7.88603 5.67088 7.6315 5.73316 7.38066C5.96541 6.44316 6.84597 5.65625 8 5.65625C8.25909 5.65625 8.46875 5.86591 8.46875 6.125C8.46875 6.38409 8.25909 6.59375 8 6.59375ZM6.125 14.125V14.5938C6.125 15.3692 6.75581 16 7.53125 16H8.46875C9.24419 16 9.875 15.3692 9.875 14.5938V14.125H6.125Z"
                fill="#006980"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_3551_17503">
                <rect width="16" height="16" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <span className="text-[#296b83]">Take a tour</span>
        </div>
        <div className="bg-[#006980] p-2 text-white rounded-md text-sm">
          + Add new cash book
        </div>
        <div>
          <img src="united-states.png" className="w-5 h-5 inline" /> EN
        </div>
        <button className="p-2 rounded-full bg-white w-10 h-10 flex items-center justify-center">
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.1238 5.69652C1.80793 3.16952 3.77832 0.9375 6.32498 0.9375H7.60217C8.81781 0.9375 9.90228 1.44555 10.67 2.2514C9.4644 2.29354 8.5 3.28415 8.5 4.5C8.5 5.74264 9.50736 6.75 10.75 6.75C11.1073 6.75 11.4451 6.66671 11.7452 6.5185C11.7803 7.11777 12.0444 7.68727 12.4922 8.10315L12.5251 8.13372C13.7351 9.25741 13.9699 11.0849 13.0833 12.478C12.4552 13.4649 11.3665 14.0625 10.1967 14.0625H4.0311C2.67493 14.0625 1.43795 13.2877 0.846077 12.0675L0.768564 11.9077C0.133576 10.5986 0.430648 9.02816 1.49991 8.04146C2.01592 7.56529 2.27041 6.86937 2.18332 6.17266L2.1238 5.69652Z"
              fill="#006980"
            ></path>
            <path
              d="M4.55005 15.3C4.79857 15.1136 5.15115 15.164 5.33754 15.4125L5.56254 15.7125C6.35005 16.7625 7.92505 16.7625 8.71255 15.7125L8.93755 15.4125C9.12394 15.164 9.47652 15.1136 9.72505 15.3C9.97357 15.4864 10.0239 15.839 9.83755 16.0875L9.61255 16.3875C8.37505 18.0375 5.90005 18.0375 4.66255 16.3875L4.43755 16.0875C4.25115 15.839 4.30152 15.4864 4.55005 15.3Z"
              fill="#006980"
            ></path>
            <path
              d="M12.3873 4.5C12.3873 5.32843 11.7158 6 10.8873 6C10.0589 6 9.38733 5.32843 9.38733 4.5C9.38733 3.67157 10.0589 3 10.8873 3C11.7158 3 12.3873 3.67157 12.3873 4.5Z"
              fill="#006980"
            ></path>
          </svg>
        </button>
        <img src="no_profile_picture.png" className="w-10 h-10" />
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
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
    </div>
  );
}