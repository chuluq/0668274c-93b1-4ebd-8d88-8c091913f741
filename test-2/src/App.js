import { BrowserRouter, Route, Routes } from "react-router-dom";
import { links } from "contants/links";
import Homepage from "pages/home";
import Login from "pages/account/login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            {links.map((link, index) => {
              return index === 0 ? (
                <Route key={link.id} index element={link.component} />
              ) : (
                <Route key={link.id} path={link.url} element={link.component} />
              );
            })}
          </Route>
          <Route path="/account/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
