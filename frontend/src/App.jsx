import React from "react";
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import HomeTransactions from "./pages/HomeTransactions";
import MonthlyTransactions from "./pages/MonthlyTransactions";

const App = () => {
  return(
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<HomeTransactions />} />
      <Route path="/month/:month/:year" element={<MonthlyTransactions />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  )
};

export default App;