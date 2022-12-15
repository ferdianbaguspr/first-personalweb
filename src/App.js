import Introduction from "./components/Introduction";
import Navigationbar from "./components/Navigationbar";
import Skill from "./components/Skill";
import Footerr from "./components/Contact";


function App() {
  return (
    <div>
      <Navigationbar />
          <Introduction />
          <Skill />
          <Footerr />
    </div>
  );
}

export default App;
