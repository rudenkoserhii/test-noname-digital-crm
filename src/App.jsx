import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Login } from './components/Login/Login';
import { SignUp } from "./components/SignUp/SignUp";
import { Home } from './pages/Home';
// import { lazy } from "react";
import { Context } from "./components/Context/Context";

// const Home = lazy(() => import("./pages/Home.jsx"));
// const SignUp = lazy(() => import("./components/SignUp/SignUp"));
// const Login = lazy(() => import("./components/Login/Login"));
// const Admin = lazy(() => import("./pages/Admin.jsx"));
// const Customer = lazy(() => import("./pages/Customer"));
// const Driver = lazy(() => import("./pages/Driver"));
// const Dispatcher = lazy(() => import("./pages/Dispatcher"));


export const App = () => {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/login" element={<Login />} />
          {/* <Route path="admin" element={<Admin />} />
          <Route path="driver" element={<Driver />} />
          <Route path="customer" element={<Customer />} />
          <Route path="dispatcher" element={<Dispatcher />} /> */}
        </Route>
      </Routes>
    </Context>
  );
};
