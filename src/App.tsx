import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./features/home/home/home";
import NoMatch from "./features/home/no-match/no-match";
import "./styles/styles.scss";
import Contact from "./features/home/contact/contact";
import ProgressBar from "./features/home/progress bar/progressbar";

import LoaderPage from "./features/home/loader/loaderpage";
import SelectPage from "./features/home/select/selectpage";
import Animals from "./features/home/animals/animals";
import AnimalCreate from "./features/home/animals/animal-create";
import { v4 as uuidv4 } from "uuid";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="progressbar" element={<ProgressBar />} />
        <Route path="loaderpage" element={<LoaderPage />} />
        <Route path="selectpage" element={<SelectPage />} />
        <Route path="animals" element={<Animals />} />
        <Route path="animals/new" element={<AnimalCreate />} />
        <Route
          path="animals/:animalID"
          element={<>Došli ste na stranicu neke životinje</>}
        />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
