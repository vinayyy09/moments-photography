import React from "react";
import pic1 from "../public/pic1.jpg";
import pic2 from "../public/pic2.jpg";
import pic3 from "../public/pic3.jpg";
import pic4 from "../public/pic4.jpg";
import pic5 from "../public/pic5.jpg";
import pic6 from "../public/pic6.jpg";
import pic7 from "../public/pic7.jpg";
import pic8 from "../public/pic8.jpg";

import Instagramimg from "./Instagramimg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-extrabold">Follow Us on Instagram</p>
      <p className="pb-4">@Moments_Photography</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
        <Instagramimg socialImg={pic1} />
        <Instagramimg socialImg={pic2} />
        <Instagramimg socialImg={pic3} />
        <Instagramimg socialImg={pic4} />
        <Instagramimg socialImg={pic5} />
        <Instagramimg socialImg={pic6} />
        <Instagramimg socialImg={pic7} />
        <Instagramimg socialImg={pic8} />
      </div>
    </div>
  );
};

export default Instagram;
