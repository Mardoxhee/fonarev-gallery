
import SharePost from "@/components/year/SharePost";
import TagButton from "@/components/year/TagButton";
import MasonryComponent from "@/components/masonry";
import Breadcrumb from "@/components/Common/Breadcrumb";

const BlogDetailsPage = () => {




  return (
    <>
      <Breadcrumb
        pageName="Photos Evénement"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="pt-[50px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-12/12 ">
              <MasonryComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
