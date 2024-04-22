import Navigation from "../shared/Navigation";
import blueLogo from "../assets/blue_logo.png";
import BlogHero from "../components/BlogHero";
import BlogCategories from "../components/BlogCategories";
import RelatedBlog from "../components/RelatedBlog";
import Footer from "../shared/Footer";

const Blog = () => {
  return (
    <div className="flex flex-col gap-8">
      <Navigation
        logoSrc={blueLogo}
        textColor="text-[#001D6E]"
        margin="ml-80 mt-6"
        showButtons={false}
      />
      <BlogHero />
      <BlogCategories />
      <div>
        <RelatedBlog />
        <Footer />
      </div>
    </div>
  );
};
export default Blog;
