import { Event } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ event }: { event: any }) => {
  return (
    <>
      <div
        className=" my-5 wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        data-wow-delay=".1s"
      >
        {/* Le lien pour l'image redirige vers la page de détails avec l'ID de l'événement */}
        <Link href={`/blog-details?id=${event.id}`} className="relative block h-[300px] w-full">
          <Image
            src={event?.acf.photo_principale}
            alt="image"
            fill
            className="object-cover object-center"
          />
        </Link>

        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8 ">
          <h3>
            {/* Le lien pour le titre redirige également vers la page de détails avec l'ID de l'événement */}
            <Link
              href={`/blog-details?id=${event.id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {event?.title?.rendered}
            </Link>
          </h3>

          {/* Le lien pour le texte extrait redirige aussi vers la page de détails avec l'ID de l'événement */}
          <Link
            href={`/blog-details?id=${event.id}`}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              {event?.excerpt?.rendered}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
