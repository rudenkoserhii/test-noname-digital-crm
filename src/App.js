import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { lazy } from "react";
import { Context } from "./components/Context/Context";

const Home = lazy(() => import("./pages/Home.jsx"));
const Admin = lazy(() => import("./pages/Admin.jsx"));
const Customer = lazy(() => import("./pages/Customer"));
const Driver = lazy(() => import("./pages/Driver"));
const Dispatcher = lazy(() => import("./pages/Dispatcher"));

export const App = () => {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="driver" element={<Driver />} />
          <Route path="customer" element={<Customer />} />
          <Route path="dispatcher" element={<Dispatcher />} />
        </Route>
      </Routes>
    </Context>
  );
};

