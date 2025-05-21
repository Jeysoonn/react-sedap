import "./assets/tailwind.css";
// import Dashboard from "./pages/Dashboard.jsx";
import React from "react";
// import Orders from "./pages/Orders.jsx";
// import AddOrder from "./pages/AddOrder.jsx";
// import Customers from "./pages/Customers.jsx";
// import AddCustomer from "./pages/AddCustomer.jsx";
// import Error404 from "./pages/Error404.jsx";
// import Error403 from "./pages/Error403.jsx";
// import Error400 from "./pages/Error400.jsx";
import { Routes, Route } from "react-router-dom";
import { Suspense} from "react";
// import MainLayout from "./layouts/MainLayout.jsx";
// import AuthLayout from "./layouts/AuthLayout.jsx";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";

const Dashboard = React.lazy(() => import("./pages/Dashboard.jsx"));
const Orders = React.lazy(() => import("./pages/Orders.jsx"));
const AddOrder = React.lazy(() => import("./pages/AddOrder.jsx"));
const Customers = React.lazy(() => import("./pages/Customers.jsx"));
const AddCustomer = React.lazy(() => import("./pages/AddCustomer.jsx"));
const Error404 = React.lazy(() => import("./pages/Error404.jsx"));
const Error403 = React.lazy(() => import("./pages/Error403.jsx"));
const Error400 = React.lazy(() => import("./pages/Error400.jsx"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout.jsx"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout.jsx"));
const Login = React.lazy(() => import("./pages/auth/Login.jsx"));
const Register = React.lazy(() => import("./pages/auth/Register.jsx"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot.jsx"));
const Loading = React.lazy(() => import("./components/Loading.jsx"));
const Users = React.lazy(() => import("./pages/auth/Users.jsx"));

const MainLayoutQuiz = React.lazy(() => import("./layouts/MainLayoutQuiz.jsx"));
const LandingPageSedap = React.lazy(() => import("./pages/LandingPageSedap.jsx"));
const RegisterSedap = React.lazy(() => import("./pages/auth/RegisSedap.jsx"));
const LoginSedap = React.lazy(() => import("./pages/auth/LoginSedap.jsx"));
const ContactSedap = React.lazy(() => import("./pages/ContactSedap.jsx"));
const AboutSedap = React.lazy(() => import("./pages/AboutSedap.jsx"));
const ProductSedap = React.lazy(() => import("./pages/ProductSedap.jsx"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/add" element={<AddOrder />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="/error403" element={<Error403 />} />
          <Route path="/error400" element={<Error400 />} />
          <Route path="/users" element={<Users />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>

      <Routes>
        <Route element ={<MainLayoutQuiz/>}>
          <Route path="/quiz" element={<LandingPageSedap/>} />
          <Route path="/aboutsedap" element={<AboutSedap/>} />
          <Route path="/contactsedap" element={<ContactSedap/>} />
          <Route path="/loginsedap" element={<LoginSedap/>} />
          <Route path="/productsedap" element={<ProductSedap/>} />
          <Route path="/registersedap" element={<RegisterSedap/>} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
