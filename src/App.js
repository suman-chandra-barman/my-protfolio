import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import "react-photo-view/dist/react-photo-view.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
