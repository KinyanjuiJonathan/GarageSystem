import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useGaradgeContext } from "../../contexts/GaradgeContext";

const SideMenu = () => {
  const navigate = useNavigate();
  const { garadge } = useGaradgeContext();

  const onClick = async (menuItem) => {
    if (menuItem.key === "signOut") {
      await Auth.signOut();

      window.location.reload();
    } else {
      navigate(menuItem.key);
    }
  };

  const mainMenuItems = [
    {
      key: "/",
      label: "Orders",
    },
    {
      key: "menu",
      label: "Services Offered",
    },
    {
      key: "order-history",
      label: "Order History",
    },
  ];

  const menuItems = [
    ...(garadge ? mainMenuItems : []),
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "signOut",
      label: "Sign out",
      danger: "true",
    },
  ];

  return (
    <>
      {garadge && <h4>{garadge.name}</h4>}
      <Menu items={menuItems} onClick={onClick} />
    </>
  );
};

export default SideMenu;
