import { Card, Table, Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Service } from "../../models";
import { useGaradgeContext } from "../../contexts/GaradgeContext";

const GaradgeMenu = () => {
  const [services, setServices] = useState([]);
  const { garadge } = useGaradgeContext();

  useEffect(() => {
    if (garadge?.id) {
      DataStore.query(Service, (c) => c.garadgeID("eq", garadge.id)).then(
        setServices
      );
    }
  }, [garadge?.id]);

  const deleteService = (service) => {
    DataStore.delete(service);
    setServices(services.filter((d) => d.id !== service.id));
  };

  const tableColumns = [
    {
      title: "Menu Item",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price} KSH`,
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => (
        <Popconfirm
          placement="topLeft"
          title={"Are you sure you want to delete this service?"}
          onConfirm={() => deleteService(item)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Remove</Button>
        </Popconfirm>
      ),
    },
  ];

  const renderNewItemButton = () => (
    <Link to={"create"}>
      <Button type="primary">New Item</Button>
    </Link>
  );

  return (
    <Card title={"Menu"} style={{ margin: 20 }} extra={renderNewItemButton()}>
      <Table dataSource={services} columns={tableColumns} rowKey="id" />
    </Card>
  );
};

export default GaradgeMenu;
