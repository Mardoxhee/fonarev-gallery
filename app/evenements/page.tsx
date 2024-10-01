import SingleBlog from "@/components/year/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PaginationWrapper from "./../../components/year/paginationWrapper"; // Import du composant client PaginationWrapper
import { getEvents } from './../../lib/request'

const Blog = async () => {
  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
  ];

  const events = await getEvents(1); // Utilisez ici une valeur par défaut, car la page sera calculée côté client

  return (
    <>
      <Breadcrumb
        pageName="Liste d'événements"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="pt-10 pb-0">
        <div className="container">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Filtrer les évenements par mois
          </h2>
          <div className="flex flex-wrap justify-center -mx-2">
            {months.map((month, index) => (
              <a
                key={index}
                href={`#${month.toLowerCase()}`}
                className="mx-2 mb-4 flex items-center justify-center rounded-md bg-primary bg-opacity-[15%] px-6 py-2 text-base font-medium text-primary transition hover:bg-primary hover:text-white"
              >
                {month}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[20px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {events?.map((evenement: any) => (
              <div
                key={evenement.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog event={evenement} />
              </div>
            ))}
          </div>
          {/* <PaginationWrapper totalPages={12} /> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
