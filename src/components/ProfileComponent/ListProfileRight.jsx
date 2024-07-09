import React from "react";

const ListProfileRight = ({ profile }) => {
  return (
    <div className="w-4/5 flex flex-col my-3 mx-6 bg-slate-50 px-3">
      <div className="box-1 p-3 border-solid border-b-2 border-gray-200">
        <h1 className=" text-xl">Hồ Sơ Của Tôi</h1>
        <p> Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>

      <div className="flex flex-row ">
        <div className="w-3/4 py-3">
          <div class="flex flex-col justify-center max-w-[550px]">
            <div class=" flex flex-wrap">
              <div class="w-full px-3 ">
                <div class="mb-5">
                  <label
                    for="fName"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    value={profile.slice(0, 13)}
                    placeholder="First Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 ">
                <div class="mb-5">
                  <label
                    for="fName"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="fName"
                    id="fName"
                    value={profile}
                    placeholder="Email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div class=" flex flex-wrap">
              <div class="w-full px-3">
                <div class="mb-5">
                  <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value="2004-03-11"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div class="mb-5 w-full mx-3">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Gender
              </label>
              <div class="flex space-x-6">
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    class="h-5 w-5"
                    checked
                  />
                  <label
                    for="radioButton1"
                    class="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Male
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton2"
                    class="h-5 w-5"
                  />
                  <label
                    for="radioButton2"
                    class="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Female
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton2"
                    class="h-5 w-5"
                  />
                  <label
                    for="radioButton2"
                    class="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Other
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <button class="hover:shadow-form rounded-md bg-orange-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/4 flex flex-col justify-center items-center">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&P=0&h=180"
            alt="img"
            className="w-[100px]"
          />
          <div class="mx-auto">
            <label
              for="example5"
              class="mb-1 text-sm font-medium text-gray-700"
            >
              Upload file
            </label>
            <label class="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
              <div class="space-y-1 text-center">
                <div class="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
                <div class="text-gray-600">
                  <a
                    href="#"
                    class="font-medium text-primary-500 hover:text-primary-700"
                  >
                    Click to upload
                  </a>{" "}
                  or drag and drop
                </div>
                <p class="text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
              <input id="example5" type="file" class="sr-only" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProfileRight;
