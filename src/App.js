import "./App.css";
import "./style/MainStyle.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Layout } from "./components/layouts/layout";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import { Login } from "./pages/login/login";
import AdminDashboard from "./admin/Dashboard";
import { AdminLayout } from "./components/layouts/AdminLayout";
import Courses from "./pages/courses/Courses";
import SingleExtraCourse from "./pages/courses/SingleExtraCourse";
import PageNotFound from "./components/commons/PageNotFound";
import axios from "axios"

import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";

import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

import SingleService from "./pages/services/SingleService";
import SingleCountry from "./pages/countries/SingleCountry";
import { AddCountry } from "./admin/AddCountry";
import { AddAbout } from "./admin/AddAbout";
import { AddCourse } from "./admin/AddCourse";
import { AddFaq } from "./admin/AddFaq";
import { AddService } from "./admin/AddService";
import { AddBlog } from "./admin/AddBlog";
import { AddTeam } from "./admin/AddTeam";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./redux/services/authService";
import { SET_LOGIN } from "./redux/reducer/auth/authSlice";

axios.defaults.withCredentials = true

function App() {
  const dispatch = useDispatch();
  //aos
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />

        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/courses"
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path="/teams"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/testpreparation/:slug"
            element={
              <Layout>
                <SingleExtraCourse />
              </Layout>
            }
          />
          <Route
            path="/service/:slug"
            element={
              <Layout>
                <SingleService />
              </Layout>
            }
          />
          <Route
            path="/country/:slug"
            element={
              <Layout>
                <SingleCountry />
              </Layout>
            }
          />

          {/* ////for admin routes start */}
          <Route
            path="/admin/dashboard"
            element={
              <Layout>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </Layout>
            }
          />
          <Route
            path="/admin/add-about"
            element={
              <Layout>
                <AdminLayout>
                  <AddAbout />
                </AdminLayout>
              </Layout>
            }
          />
          <Route
            path="/admin/add-courses"
            element={
              <Layout>
                <AdminLayout>
                  <AddCourse />
                </AdminLayout>
              </Layout>
            }
          />
          <Route
            path="/admin/add-country"
            element={
              <Layout>
                <AdminLayout>
                  <AddCountry />
                </AdminLayout>
              </Layout>
            }
          />
          <Route
            path="/admin/add-faq"
            element={
              <Layout>
                <AdminLayout>
                  <AddFaq />
                </AdminLayout>
              </Layout>
            }
          />
          <Route
            path="/admin/add-service"
            element={
              <Layout>
                <AdminLayout>
                  <AddService />
                </AdminLayout>
              </Layout>
            }
          />
          <Route
            path="/admin/add-blog"
            element={
              <Layout>
                <AdminLayout>
                  <AddBlog />
                </AdminLayout>
              </Layout>
            }
          />
          <Route
            path="/admin/add-team"
            element={
              <Layout>
                <AdminLayout>
                  <AddTeam />
                </AdminLayout>
              </Layout>
            }
          />

          {/* {///for admin routeds ends} */}
          <Route
            path="/*"
            element={
              <Layout>
                <PageNotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
