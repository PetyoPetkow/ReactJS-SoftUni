import { Route, Routes } from "react-router-dom";

import OrigamiLayout from "../components/Origami/OrigamiLayout";
import Origami from "../components/Origami/Origami";

const OrigamiRoutes = () => {
  return (
    <Routes>
      <Route path="/origami" element={<OrigamiLayout />}>
        <Route path=":id" element={<Origami />}></Route>
      </Route>
    </Routes>
  );
};

export default OrigamiRoutes;
