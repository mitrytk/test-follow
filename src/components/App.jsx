import { Route, Routes } from "react-router";

import SharedLayout from "./SharedLayout/SharedLayout";
import Home from "pages/Home/Home";
import Tweets from "pages/Tweets/Tweets";
import NotFound from "pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
