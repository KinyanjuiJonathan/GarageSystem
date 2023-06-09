import DetailedOrder from "../../modules/DetailedOrder";
import Orders from "../../modules/Orders";
import GaradgeMenu from "../../modules/GaradgeMenu";
import CreateMenuItem from "../../modules/CreateMenuItem";
import OrderHistory from "../../modules/OrderHisotry";
import Settings from "../../modules/Settings";
import { Routes, Route } from "react-router-dom";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />} />
      <Route path="menu" element={<GaradgeMenu />} />
      <Route path="menu/create" element={<CreateMenuItem />} />
      <Route path="order-history" element={<OrderHistory />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
