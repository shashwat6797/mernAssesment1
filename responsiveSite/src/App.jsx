import Banner from "./components/Banner";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar className="d-sm-none" />
      <Banner />
      <Feed />
    </div>
  );
}

export default App;
