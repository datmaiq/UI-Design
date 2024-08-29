import React from "react";
const TAGS: string[] = ["SaiGon", "New York", "Relaxing", "Person", "Fashion"];
function Collections() {
  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 font-black shadow-lg">
      <h1 className="font-meri text-3xl font-bold">Popular Collection</h1>
      <div className="mt-6 space-x-2">
        {TAGS.map((tag) => (
          <a
            className="inline-block font-normal rounded-lg bg-white px-4 py-3 hover:text-blue-400 "
            id={tag}
          >
            {tag}
          </a>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grids-cols-2 lg:grid-cols-3 ">
        <div className="bg-white rounded-3xl p-6">
          <div>
            <img
              src="https://storage.googleapis.com/digital-platform/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0.jpg"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://images.pexels.com/photos/3208317/pexels-photo-3208317.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
            <img
              src="https://maisonoffice.vn/wp-content/uploads/2021/03/top-toa-nha-cao-nhat-tphcm-1.jpg"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
            <img
              src="https://top10tphcm.com/wp-content/uploads/2020/11/toa-nha-landmark81.jpg"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
          </div>

          <div className="flex pt-6">
            <p className="font-popi grow text-2xl font-medium">Saigon</p>
            <p className="font-popi  flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <div>
            <img
              src="https://storage.googleapis.com/digital-platform/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0.jpg"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://images.pexels.com/photos/3208317/pexels-photo-3208317.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
            <img
              src="https://maisonoffice.vn/wp-content/uploads/2021/03/top-toa-nha-cao-nhat-tphcm-1.jpg"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
            <img
              src="https://top10tphcm.com/wp-content/uploads/2020/11/toa-nha-landmark81.jpg"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
          </div>

          <div className="flex pt-6">
            <p className="font-popi grow text-2xl font-medium">Relax</p>
            <p className="font-popi  flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              300
            </p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <div>
            <img
              src="https://storage.googleapis.com/digital-platform/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0/hinh_anh_top_10_toa_nha_cao_nhat_viet_nam_hien_nay_landmark_81_dung_thu_may_so_1_f5980c8db0.jpg"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://images.pexels.com/photos/3208317/pexels-photo-3208317.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
            <img
              src="https://maisonoffice.vn/wp-content/uploads/2021/03/top-toa-nha-cao-nhat-tphcm-1.jpg"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
            <img
              src="https://top10tphcm.com/wp-content/uploads/2020/11/toa-nha-landmark81.jpg"
              alt=""
              className="aspect-video rounded-2xl w-full"
            />
          </div>

          <div className="flex pt-6">
            <p className="font-popi grow text-2xl font-medium">NewYork</p>
            <p className="font-popi  flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              200
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
