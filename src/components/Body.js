import { Outlet } from "react-router-dom";

const Body = () => {
  
  return (
    <div className="bg-stone-900 w-full min-h-screen">
      
      <Outlet/>
    </div>
  );
};

export default Body;
