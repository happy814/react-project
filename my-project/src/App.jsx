import "./App.css";
import About from "./componend/About";
import ContactUs from "./componend/ContactUs";
import Footer from "./componend/Footer";
import Hero from "./componend/Hero";
import Navbar from "./componend/Navbar";
import Portfolio from "./componend/Portfolio";
import Reviews from "./componend/Reviews";
import Services from "./componend/Services";

function App() {
  return (
    <>
      <main className="overflow-x-hidden antialiased text-neutral-800  ">
        <Navbar></Navbar>
        <Hero></Hero>
        <Services></Services>
        <Portfolio></Portfolio>
        <About></About>
        <Reviews></Reviews>
        <div className="bg-slate-500">
          <ContactUs></ContactUs>
          <Footer></Footer>
        </div>
      </main>
    </>
  );
}

export default App;
