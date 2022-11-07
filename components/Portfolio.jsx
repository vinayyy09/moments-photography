import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-black text-3xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2 ">
          <Image
            src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
            layout="responsive"
            width="677"
            height="550"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1605445361997-087ac1adf9d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            width="215"
            height="200"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1604756912602-c20e94f8f9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            width="215"
            height="200"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1592988472434-5b7ed7d60309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            width="215"
            height="200"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1645093367060-5b198e1ae8c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            width="215"
            height="200"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
