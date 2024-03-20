import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Error from "../pages/error";
import Main from '../pages/main';
import Form from '../pages/forms'

  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<Form />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router