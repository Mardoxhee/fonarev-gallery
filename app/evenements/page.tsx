import SingleBlog from "@/components/year/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getEvents } from './../../lib/request';
import dynamic from "next/dynamic";

// Charger le composant client dynamiquement
const MonthFilter = dynamic(() => import('./../../components/yearFilter'), { ssr: false });

const Blog = async () => {
  const events = await getEvents(1); // Récupérer les événements avec une valeur par défaut

  return (
    <>
      <Breadcrumb
        pageName="Liste d'événements"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="pt-10 pb-0">
        <div className="container">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Filtrer les événements par mois
          </h2>
          {/* Inclure le composant client */}
          <MonthFilter />
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
