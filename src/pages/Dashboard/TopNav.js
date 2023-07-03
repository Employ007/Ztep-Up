import React from "react";

const TopNav = () => {
  return (
    <>
      <div className="w-[100%] py-[24px] pl-[24px] pr-[32px] bg-[#fff] flex items-center justify-between">
        <div className="flex gap-[16px] items-center">
          <div>
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.56309 1.4834L1 7.04649L6.56309 12.6096"
                stroke="#A5A29A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.0001 1.39014L3.43701 6.95323L9.0001 12.5163"
                stroke="#A5A29A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <h5 className="font-bold text-[#A5A29A]">Dashboards</h5>
          </div>

          <div>
            <p className=" text-[#A5A29A] text-[16px] leading-[20px] font-[400]">
              /
            </p>
          </div>
          <div>
            <h5 className="font-bold">Default</h5>
          </div>
        </div>

        <div className="flex gap-[32px] items-center">
          <div className="py-[3px] px-[7.48px] border-[1px] border-solid rounded-lg flex gap-[5.5px] items-center">
            <div className="">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3501 13.3563C13.2568 13.4483 13.1311 13.4999 13.0001 13.5001C12.8673 13.4995 12.7398 13.4481 12.6438 13.3563L9.94385 10.6501C8.80671 11.6052 7.34474 12.0845 5.86285 11.9879C4.38095 11.8913 2.99355 11.2264 1.99 10.1317C0.986453 9.0371 0.444243 7.59729 0.476455 6.1126C0.508667 4.62791 1.11282 3.21298 2.1629 2.1629C3.21298 1.11282 4.62791 0.508667 6.1126 0.476455C7.59729 0.444243 9.0371 0.986453 10.1317 1.99C11.2264 2.99355 11.8913 4.38095 11.9879 5.86285C12.0845 7.34474 11.6052 8.80671 10.6501 9.94385L13.3501 12.6438C13.3973 12.6904 13.4349 12.7458 13.4605 12.807C13.4861 12.8681 13.4993 12.9338 13.4993 13.0001C13.4993 13.0664 13.4861 13.132 13.4605 13.1932C13.4349 13.2544 13.3973 13.3098 13.3501 13.3563ZM6.2501 11.0001C7.18956 11.0001 8.10792 10.7215 8.88906 10.1996C9.67019 9.67764 10.279 8.93579 10.6385 8.06784C10.998 7.19989 11.0921 6.24483 10.9088 5.32342C10.7255 4.40201 10.2732 3.55564 9.60885 2.89134C8.94455 2.22704 8.09819 1.77465 7.17678 1.59137C6.25537 1.40809 5.3003 1.50215 4.43235 1.86167C3.5644 2.22119 2.82255 2.83001 2.30062 3.61114C1.77868 4.39227 1.5001 5.31064 1.5001 6.2501C1.50175 7.50937 2.00273 8.71659 2.89317 9.60703C3.78361 10.4975 4.99083 10.9984 6.2501 11.0001Z"
                  fill="#A5A29A"
                />
              </svg>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none"
              />
            </div>
          </div>
          <div>
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4362 10.18C17.0297 15.6629 19.3599 17.3199 19.3599 17.3199H1C1 17.3199 4.05998 15.144 4.05998 7.52797C4.05998 5.79664 4.70476 4.13623 5.85248 2.912C7.0002 1.68776 8.55684 1 10.18 1C10.524 1 10.8651 1.03091 11.1999 1.09128"
                stroke="#1F1F1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.3198 7.11997C19.0098 7.11997 20.3797 5.74996 20.3797 4.05998C20.3797 2.37001 19.0098 1 17.3198 1C15.6297 1 14.2598 2.37001 14.2598 4.05998C14.2598 5.74996 15.6297 7.11997 17.3198 7.11997Z"
                stroke="#1F1F1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9442 20.3799C11.7649 20.689 11.5076 20.9457 11.1978 21.124C10.8881 21.3024 10.537 21.3963 10.1796 21.3963C9.82222 21.3963 9.47114 21.3024 9.16147 21.124C8.8518 20.9457 8.59435 20.689 8.41504 20.3799"
                stroke="#1F1F1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
