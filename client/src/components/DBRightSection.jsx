import React from "react";
import { Routes,Route } from "react-router-dom";
import { DBHeader, DBHome, DBItems, DBNewItem, DBOrders, DBUsers } from "../components";

const DBRightSection = () => {
  return (
    <div className="flex flex-col py-12 px-12 flex-1 h-full">
      <DBHeader />
      <div className="flex flex-col flex-1 overflow-y-scroll scrollbar-none">
        <Routes>
          <Route path="/home" element={<DBHome/>}></Route>
          <Route path="/orders" element={<DBOrders/>}></Route>
          <Route path="/items" element={<DBItems/>}></Route>
          <Route path="/newItem" element={<DBNewItem/>}></Route>
          <Route path="/users" element={<DBUsers/>}></Route>

        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
