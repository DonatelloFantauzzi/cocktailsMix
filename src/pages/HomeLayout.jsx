import { Link, Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const value = "qualcosa";
  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
}
export default HomeLayout;
