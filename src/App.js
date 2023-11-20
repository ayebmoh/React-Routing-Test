import {  createBrowserRouter , Route , createRoutesFromElements, RouterProvider  } from "react-router-dom";

/* pages */
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/Errors/NotFound";
import CareerDetails, { CareerDetailsLoader } from "./pages/careers/CareerDetail";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerError from "./pages/careers/CareerError";

/* layouts */
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/Careerlayout";



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route  index element={<Home />} />
    <Route  path="about" element={<About />} />
    <Route path='help' element={<HelpLayout />}>
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} action={contactAction}/>
    </Route>
    <Route path="careers" element={<CareersLayout />} 
    errorElement={<CareerError />}>
      <Route index 
      element={<Careers />}
      loader={careersLoader}
      />
      <Route path=":id"  
      element={<CareerDetails />}
      loader={CareerDetailsLoader}
      />
    </Route>
    <Route path='*' element={<NotFound />}/>
  </Route>
  )
)

function App() {
  
  return (
      <RouterProvider router={router} />
  );
}

export default App
