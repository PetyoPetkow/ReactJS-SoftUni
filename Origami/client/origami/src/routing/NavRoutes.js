import { Route, Routes } from "react-router-dom";

import About from "../components/About/About";
import Main from "../components/Main/Main";
import NotFound from "../components/NotFound/NotFound";
import Origami from "../components/Origami/Origami";
import OrigamiLayout from "../components/Origami/OrigamiLayout";

const NavRoutes = ({ posts }) => {
  return (
    <Routes>
      <Route path="/" element={<Main posts={posts}></Main>} />
      <Route path="/about" element={<About />}>
        <Route index element={<About />} />
        <Route path=":page" element={<About />} />
      </Route>
      <Route path="/origami" element={<OrigamiLayout />}>
        <Route path=":id" element={<Origami />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NavRoutes;
