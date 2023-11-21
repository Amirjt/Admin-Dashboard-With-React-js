import { useRoutes } from "react-router-dom";
import { useState } from "react";
import routes from "./routes";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

function App() {
  const [isShow, setIsShow] = useState(false);
  const router = useRoutes(routes);
  return (
    <>
      <Header />
      <div className="flex md:mt-[70px] mt-[50px] w-full">
      <Sidebar isShow={isShow} setIsShow={setIsShow} />
      <div className={`w-full ml-20 mt-2 p-3 ${ isShow && "ml-[340px]"}`}>
      {router}
      </div>
      </div>
    </>
  );
}

export default App;
