import React from "react";

const Rightbar = () => {
  return (
    <>
      <div className="w-[243px] p-[24px] min-h-[951px]">
        <div className="grid grid-cols-1 gap-[20px]">
          <div className="flex justify-between items-center">
            <div>
              <h5 className="font-bold">Notifications</h5>
            </div>
            <div className="w-[42px] h-[13px] flex justify-center rounded-md items-center text-[8px] bg-[#EEEEED] ">
              1,234
            </div>
          </div>

          <div className="flex gap-[8px] items-center">
            <div className="cursor-pointer">
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" width="24" height="24" rx="8" fill="#FFD712" />
                <path
                  d="M11.6076 4.5L8.89258 7.2225"
                  stroke="#1F1F1F"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.3926 4.5L19.1076 7.2225"
                  stroke="#1F1F1F"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.5 8.8877C6.5 7.5002 7.2425 7.3877 8.165 7.3877H19.835C20.7575 7.3877 21.5 7.5002 21.5 8.8877C21.5 10.5002 20.7575 10.3877 19.835 10.3877H8.165C7.2425 10.3877 6.5 10.5002 6.5 8.8877Z"
                  stroke="#1F1F1F"
                />
                <path
                  d="M12.3198 13.5V16.1625"
                  stroke="#1F1F1F"
                  stroke-linecap="round"
                />
                <path
                  d="M15.77 13.5V16.1625"
                  stroke="#1F1F1F"
                  stroke-linecap="round"
                />
                <path
                  d="M7.625 10.5L8.6825 16.98C8.9225 18.435 9.5 19.5 11.645 19.5H16.1675C18.5 19.5 18.845 18.48 19.115 17.07L20.375 10.5"
                  stroke="#1F1F1F"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="">
              <h6 className="leading-[20px]">You got a new order.</h6>
              <p className="text-[#A5A29A] text-[12px] leading-[18px]">
                Just now
              </p>
            </div>
          </div>
          <div className="flex gap-[8px] items-center">
            <div className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="8" fill="#EEEEED" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 5.5C12 5.5 12.9152 5.5 13.7518 5.85384C13.7518 5.85384 14.5594 6.19544 15.182 6.81802C15.182 6.81802 15.8046 7.4406 16.1462 8.24824C16.1462 8.24824 16.5 9.08481 16.5 10C16.5 10 16.5 10.9152 16.1462 11.7518C16.1462 11.7518 15.8046 12.5594 15.182 13.182C15.182 13.182 14.5594 13.8046 13.7518 14.1462C13.7518 14.1462 12.9152 14.5 12 14.5C12 14.5 11.0848 14.5 10.2482 14.1462C10.2482 14.1462 9.4406 13.8046 8.81802 13.182C8.81802 13.182 8.19545 12.5594 7.85384 11.7518C7.85384 11.7518 7.5 10.9152 7.5 10C7.5 10 7.5 9.08481 7.85384 8.24824C7.85384 8.24824 8.19544 7.44059 8.81802 6.81802C8.81802 6.81802 9.4406 6.19544 10.2482 5.85384C10.2482 5.85384 11.0848 5.5 12 5.5ZM12 6.5C12 6.5 10.5503 6.5 9.52513 7.52513C9.52513 7.52513 8.5 8.55025 8.5 10C8.5 10 8.5 11.4497 9.52513 12.4749C9.52513 12.4749 10.5503 13.5 12 13.5C12 13.5 13.4497 13.5 14.4749 12.4749C14.4749 12.4749 15.5 11.4497 15.5 10C15.5 10 15.5 8.55025 14.4749 7.52513C14.4749 7.52513 13.4497 6.5 12 6.5Z"
                  fill="#1F1F1F"
                />
                <path
                  d="M15.2503 15.3704C16.7587 16.2414 17.6295 17.75 17.6295 17.75C17.6958 17.8648 17.805 17.9486 17.933 17.983C17.9753 17.9943 18.0188 18 18.0625 18C18.0677 18 18.073 17.9999 18.0782 17.9998C18.1606 17.9972 18.2411 17.9743 18.3125 17.933C18.4672 17.8437 18.5625 17.6787 18.5625 17.5C18.5625 17.4923 18.5623 17.4846 18.562 17.4769C18.5583 17.397 18.5355 17.3193 18.4955 17.25C17.4908 15.5094 15.7503 14.5044 15.7503 14.5044C14.0098 13.4995 12 13.4995 12 13.4995C9.9902 13.4995 8.2497 14.5044 8.2497 14.5044C6.50934 15.5093 5.50462 17.2498 5.50462 17.2498C5.46075 17.3258 5.4375 17.4123 5.4375 17.5L5.43758 17.5091C5.43832 17.5497 5.44402 17.5902 5.45455 17.6295C5.48888 17.7576 5.57269 17.8668 5.68754 17.933C5.76354 17.9769 5.84975 18 5.9375 18C5.94675 18 5.95601 17.9998 5.96525 17.9992C6.13375 17.9899 6.28617 17.8961 6.37054 17.75C7.24131 16.2414 8.74974 15.3704 8.74974 15.3704C10.2582 14.4995 12 14.4995 12 14.4995C13.7418 14.4995 15.2503 15.3704 15.2503 15.3704Z"
                  fill="#1F1F1F"
                />
              </svg>
            </div>
            <div className="">
              <h6 className="leading-[20px]">You got a new follower</h6>
              <p className="text-[#A5A29A] text-[12px] leading-[18px]">
                59 minutes ago
              </p>
            </div>
          </div>
          <hr />
          <div className=" flex justify-between items-center">
            <div className="my-[4px]">
              <div>
                <h6 className="flex gap-[6px]">
                  Revenue <span className="font-bold">$695</span>
                </h6>
                <div>
                  <p className="text-[#289D99] text-[8px]">+5.27% </p>
                </div>
              </div>
            </div>
            <div>
              <svg
                width="62"
                height="33"
                viewBox="0 0 62 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 29.6111C2.76604 26.9238 5.06415 21.7465 8.1283 22.5362C11.9585 23.5234 13.2565 28.5773 14.2019 29.6111C17.5396 33.2613 16.9925 29.6111 20.3302 19.9037C25.1537 5.87501 26.1849 19.9037 28.866 19.9037C30.7264 19.9037 31.354 9.05154 36.7453 12.9933C39.2623 14.8336 41.5057 14.6386 42.6547 10.3608C43.8038 6.08291 47.3604 2.79225 49.8226 4.76664C52.2849 6.74104 54.102 4.91386 54.6925 3.77945C56.6623 -0.0048069 58.1396 2.95678 60 6.08291"
                  stroke="#289D99"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className=" flex justify-between items-center">
            <div className="my-[4px]">
              <div>
                <h6 className="flex gap-[6px]">
                  Followers<span className="font-bold">2,123</span>
                </h6>
                <div>
                  <p className="text-[#289D99] text-[8px]">+5.27% </p>
                </div>
              </div>
            </div>
            <div>
              <svg
                width="62"
                height="33"
                viewBox="0 0 62 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 29.6111C2.76604 26.9238 5.06415 21.7465 8.1283 22.5362C11.9585 23.5234 13.2565 28.5773 14.2019 29.6111C17.5396 33.2613 16.9925 29.6111 20.3302 19.9037C25.1537 5.87501 26.1849 19.9037 28.866 19.9037C30.7264 19.9037 31.354 9.05154 36.7453 12.9933C39.2623 14.8336 41.5057 14.6386 42.6547 10.3608C43.8038 6.08291 47.3604 2.79225 49.8226 4.76664C52.2849 6.74104 54.102 4.91386 54.6925 3.77945C56.6623 -0.0048069 58.1396 2.95678 60 6.08291"
                  stroke="#289D99"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
