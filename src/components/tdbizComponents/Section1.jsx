import { motion } from "framer-motion";
import React from "react";

const SectionOne = () => {
  const images = [
    {
      url: "mags/mag1.png",
    },
    {
      url: "mags/mag2.png",
    },
    {
      url: "mags/mag3.png",
    },
    {
      url: "mags/mag4.png",
    },
    {
      url: "mags/mag5.png",
    },
    {
      url: "mags/mag6.png",
    },
    {
      url: "mags/mag7.png",
    },
    {
      url: "mags/mag8.png",
    },
    {
      url: "mags/mag9.png",
    },
    {
      url: "mags/mag10.png",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex flex-col justify-between overflow-hidden mt-[96px] max-[768px]:max-w-[360px] lg:max-w-[1050px] lg:h-[260px] max-[768px]:h-[180px] bg-[#0F1123] rounded-lg mx-auto px-14 pt-[18px] max-[768px]:px-7 pb-8"
      >
        <p className=" font-SatoshiLight text-base font-normal ">
          Summarized project scope
        </p>
        <div className="flex flex-row justify-between overflow-hidden">
          <div className="flex flex-col gap-1 overflow-hidden">
            <h1 className="max-[768px]:text-[20px] max-[768px]:-mb-1 font-SatoshiBold font-bold text-3xl text-[#fff] overflow-hidden">
              TDBizz: The everyday app
            </h1>
            <span className=" font-SatoshiLight font-normal text-xl text-[#fff] overflow-hidden">
              Commerce. Logistics. Lifestyle
            </span>
          </div>
          <div className="lg:flex hidden flex-col gap-1">
            <p className="font-SatoshiLight text-end font-normal text-xl text-[#fff]">
              Product Designer
            </p>
            <span className=" font-SatoshiLight font-normal text-sm text-[#8183B3] text-end">
              Mobile app
            </span>
          </div>
        </div>
      </motion.div>

      {/* another section starts here  */}

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="py-7 mx-auto flex w-full  lg:mt-[72px]  justify-center"
      >
        <div
          className=" bg-no-repeat w-[652px] rounded-3xl  h-[600px] max-w-[652px] max-h-[708px]"
          style={{
            background: `url("/images/gifgiff2.gif")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            // backgroundSize: 400,
          }}
        ></div>
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row lg:py-14 py-6 px-12 max-w-[1002px] lg:gap-[76px] max-[768px]:gap-8 mx-auto max-[768px]:flex-col ">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gradient w-fit text-center font-SatoshiBold font-bold text-[40px]  max-[768px]:text-[30px] h-fit -mt-7"
        >
          Introduction
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]"
        >
          What better way can we do things than the processes we already have?
          Are there things we can leverage to improve some of these processes?
          Can we try and optimize some archaic means of doing things? This
          thought is what the project is about
        </motion.p>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex flex-row py-14 px-12 max-w-[1002px] lg:gap-16 mx-auto  max-[768px]:gap-8 max-[768px]:flex-col-reverse "
      >
        <div className=" font-SatoshiLight font-normal text-base leading-6 max-w-[590px]">
          <p>
            We already have loads of commerce platforms, loads of logistics
            penetration and quite a number of service-oriented products, but why
            should users have to learn multiple tools increasingly to achieve
            tasks? Let’s find a way to bring all these under one umbrella to
            make it easier for users to manuever
          </p>
        </div>
        <h1 className="gradient w-fit text-center max-[768px]:text-[30px] font-SatoshiBold font-bold text-[40px] h-fit -mt-7">
          Challenge
        </h1>
      </motion.div>

      {/* another section starts here  */}

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" max-w-[888px] max-h-[666px] py-7 mx-auto flex w-fit mt-[72px] max-[786px]:max-w-96 px-8"
      >
        <img src="\images\iPhone15Pro.png" alt="" />
      </motion.div>

      {/* another section starts here  */}

      <div className="flex flex-row lg:py-14 px-12 py-6 max-w-[1002px] lg:gap-[134px] max-[768px]:gap-8 mx-auto max-[768px]:flex-col ">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className="gradient w-fit text-center gap-[116px] font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px] h-fit -mt-6"
        >
          Research
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" font-SatoshiLight font-normal text-base leading-6 max-w-[600px]"
        >
          For the research, we have so much of data to work with for this
          project, for qualitative result, my approach was user observation,
          seller/buyer interview, competitive analysis to ensure adequate
          product understanding and definitive approach
        </motion.p>
      </div>

      {/* another section starts here  */}

      <div className=" max-w-[85%] items-center justify-center text-center mx-auto flex flex-col gap-[77px] max-[768px]:gap-[] ">
        <h1 className="gradient w-fit text-center gap-[116px] font-SatoshiBold font-bold text-[40px] max-[768px]:text-[30px]">
          UI Design
        </h1>
        <div className="w-full justify-center mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.8 },
                ease: "easeIn",
                duration: 1,
              }}
              key={index}
              className=" w-[340px] max-[390px]:w-[320px] h-[400px] lg:w-full lg:h-[560px] rounded-xl hover:transition"
            >
              <div
                className="w-full h-full rounded-xl"
                style={{
                  backgroundImage: `url("${image.url}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionOne;
