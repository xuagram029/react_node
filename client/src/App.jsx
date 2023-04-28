import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css'
import Books from './Books';
import AddBook from './AddBook';
import Update from "./Update";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Books />,
    },
    {
      path: "/add",
      element: <AddBook />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
