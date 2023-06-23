import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./features/home/home/home";
import NoMatch from "./features/home/no-match/no-match";
import "./styles/styles.scss";
import Contact from "./features/home/contact/contact";
import ProgressBar from "./features/home/progress bar/progressbar";

import LoaderPage from "./features/home/loader/loaderpage";
import SelectPage from "./features/home/select/selectpage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="progressbar" element={<ProgressBar />} />
        <Route path="loaderpage" element={<LoaderPage />} />
        <Route path="selectpage" element={<SelectPage />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
