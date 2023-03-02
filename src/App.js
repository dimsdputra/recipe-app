import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="mx-12 my-8 xs:mx-16 sm:mx-20 md:mx-24 lg:mx-28 xl:mx-32">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
