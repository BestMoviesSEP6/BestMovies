import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../routes/search";
import SignIn from "../routes/signin";
import SignUp from "../routes/signup";
import Favorites from "../routes/favorites";
import Movie from "../routes/moviePage";
import Home from "../routes/home";
import PersonPage from "./PersonPage";
import TopRated from "../routes/TopRated";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="movie" element={<Movie />} />
        <Route path="person" element={<PersonPage />} />
        <Route path="toprated" element={<TopRated/>} />
        <Route
          path="*"
          element={
            <main
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                color: "#fff",
              }}
            ></main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
