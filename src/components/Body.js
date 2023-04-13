import { Outlet } from "react-router-dom";

const Body = () => {
  
  return (
    <div className="bg-stone-900">
      <Outlet/>
    </div>
  );
};

export default Body;
