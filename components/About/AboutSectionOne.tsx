"use client"
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from 'next/link';
import { useSearchParams, useRouter } from "next/navigation";



const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className=" mb-5 flex items-center text-lg font-medium text-body-color hover:bg-primary hover:text-white transition-colors duration-200 p-2 rounded-md">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary hover:text-white hover:bg-white transition-colors duration-200">
        {checkIcon}
      </span>
      {text}
    </p>

  );

  const searchParams = useSearchParams()
  const router = useRouter()

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 lg:fixed w-full">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="mx-4 flex flex-wrap items-center lg:justify-between justify-center">
            <div className="w-full px-4 lg:w-1/2 pt-10 lg:pt-0">
              <SectionTitle
                title="Crafted for Startup, SaaS and Business Sites."
                paragraph="Lorem ipsum dei gloraim paradiso rei dei feifniezLorem ipsum dei gloraim paradiso rei dei feifniezLorem ipsum dei gloraim paradiso rei dei feifniezLorem ipsum dei gloraim paradiso rei dei feifniezLorem ipsum ..."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap flex-col">
                  <h3 className="my-5 font-bold ml-3">Choisir l&lsquo;année</h3>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2 flex flex-col">
                    <Link href="/evenements?year=2023&page=1" className="">
                      <List text="2023" />
                    </Link>
                    <Link href="/evenements?year=2024">
                      <List text="2024" />
                    </Link>



                    {/* <List text="Use for lifetime" /> */}
                  </div>

                  {/* <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div> */}
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/3 lg:h-[800px] h-[400px] bg-cover bg-center hidden lg:block" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
