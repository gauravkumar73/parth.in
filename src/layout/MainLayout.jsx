import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;