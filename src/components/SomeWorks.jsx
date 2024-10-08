import React from "react";
import { motion } from "framer-motion";

const SomeWorks = ({ mywork }) => {
  return (
    <div
      ref={mywork}
      className="flex flex-col max-w-[1200px] mx-auto mt-[100px] px-7 mb-6"
    >
      <div className="max-w-[668px] block pb-12">
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
          className="gradient2 w-fit font-SatoshiBold font-bold bg-clip-text text-[30px] xl:text-[40px]"
        >
          Some of my work
        </motion.h1>
        <motion.p
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
          className=" font-SatoshiLight text-base text-wrap max-w-[650px]  "
        >
          A brief look into some selected works
        </motion.p>
      </div>
      <div className=" max-w-[100%] mx-auto justify-center items-center ">
        <div className=" w-full gap-8 lg:gap-0 flex flex-col xl:flex-row justify-between mb-11 items-center">
          <motion.a
            href="/equity"
            rel="noreferrer"
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
            className=""
          >
            {/* <img
              src="\images\Rectangle 41.svg"
              className="rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            /> */}
            <div className=" w-[320px] h-[300px] lg:w-[560px] lg:h-[438px] rounded-xl ">
              <div
                className="w-full h-full lg:h-[438px] rounded-xl  "
                style={{
                  backgroundImage: `url("/images/bda676f2ac85a87ba6540f7e31367ac7.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              ></div>
            </div>
            <div className="flex items-start pt-3 flex-col">
              <p className=" inline-block text-[16px] xl:text-[22px] xl:text-nowrap font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                People - Equity & Law
              </p>
              <span className="text-[#fff] font-normal text-xs pb-4 -mt-3 font-SatoshiLight">
                B2B SaaS
              </span>
            </div>
          </motion.a>
          <motion.a
            href="/uishowcase"
            rel="noreferrer"
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
            className=""
          >
            {/* <img
              src="\images\Rectangle 41 (1).svg"
              className="rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            /> */}
            <div className=" w-[320px] h-[300px] lg:w-[560px] gap-10 lg:gap-0 lg:h-[438px] rounded-xl ">
              <div
                className=" w-full h-full rounded-xl  "
                style={{
                  backgroundImage: `url("/images/allallallall.jpg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              ></div>
            </div>
            <div className="flex items-start pt-3 flex-col">
              <p className=" inline-block text-[16px] xl:text-[22px] xl:text-nowrap  font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                UI designs (showcase)
              </p>
              <span className="text-[#fff] font-normal text-xs -mt-3 pb-4 font-SatoshiLight">
                Random
              </span>
            </div>
          </motion.a>
        </div>
        <div className=" flex flex-col justify-center sm:flex-row lg:flex-row xl:flex-row gap-9 mb-11 items-center">
          <motion.a
            href="/elearning"
            rel="noreferrer"
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
            className=""
          >
            <img
              src="images\imageOne.png"
              className=" rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            />
            <div className="flex justify-between items-start pt-3 flex-col">
              <p className="inline-block text-[16px] xl:text-[22px] xl:text-nowrap  font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                Discite E-learning (Case study)
              </p>
              <span className="text-[#fff] font-normal -mt-3 text-xs pb-4 font-SatoshiLight">
                Edtech
              </span>
            </div>
          </motion.a>
          <motion.a
            href="/tdbizz"
            rel="noreferrer"
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
            className=" items-center"
          >
            <img
              src="\images\imageTwo.png"
              className="rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            />
            <div className="flex items-start pt-3 flex-col">
              <p className=" inline-block text-[16px] xl:text-[22px] xl:text-nowrap  font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                TDBizz multipurpose (Showcase)
              </p>
              <span className="text-[#fff] font-normal -mt-3  text-xs pb-4 font-SatoshiLight">
                Commerce. Ride. Services - UI/UX
              </span>
            </div>
          </motion.a>
        </div>
        <div className=" flex flex-col justify-between max-[768px]:justify-center gap-9 sm:flex-row md:flex-col lg:flex-row mb-11 items-center">
          <motion.a
            href="/proattire"
            rel="noreferrer"
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
            className=""
          >
            <img
              src="\images\Rectangle 38.svg"
              className="rounded-xl"
              alt="img34"
            />
            <div className="flex items-start pt-3 flex-col">
              <p className=" inline-block text-[16px] xl:text-[22px] xl:text-nowrap  font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                Fashion marketplace (Case study)
                <br />
              </p>
              <span className="text-[#fff] font-normal -mt-3  text-xs pb-4 font-SatoshiLight">
                Commerce - UI/UX
              </span>
            </div>
          </motion.a>
          <motion.a
            href="/tradepla"
            rel="noreferrer"
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
            className=""
          >
            {/* <img
              src="\images\Rectangle 39.svg"
              className="rounded-xl w-[340px] sm:w-[450px] xl:w-[590px]"
              alt=""
            /> */}

            <div
              className=" lg:h-[488px] h-[288px] max-[390px]:w-[320px] lg:w-[360px] w-[350px] rounded-2xl bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(/images/stanming.png)`,
                // backgroundSize: 500,
              }}
            ></div>
            <div className="flex items-start pt-3 flex-col">
              <p className="inline-block text-[16px] xl:text-[22px] xl:text-nowrap  font-SatoshiBold leading-tight font-bold pb-4 overflow-y-hidden">
                Tradepla (Showcase)
                <br />
              </p>
              <span className="text-[#fff] font-normal text-xs -mt-3 pb-4 font-SatoshiLight">
                Fintech - UI/UX
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default SomeWorks;
