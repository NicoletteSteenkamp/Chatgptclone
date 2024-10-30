
import Sidebar from "./sidebar";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./searchbar";


function Home() {


  return (
    <div>
    <section className="header">
  <Header />
    </section>
      <section className="sidebar">
      <Sidebar/>
      </section>
      <main>
        
        <SearchBar/>
      </main>
      <footer>
      <Footer/>
      </footer>
      
    </div>
  );
}

export default Home;
