import { useState, useEffect } from "react";
import { Card, Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";

import { DataStore } from "aws-amplify";
import { Order, OrderStatus } from "../../models";
import { useGaradgeContext } from "../../contexts/GaradgeContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { garadge } = useGaradgeContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!garadge) {
      return;
    }
    DataStore.query(Order, (order) =>
      order
        .orderGaradgeId("eq", garadge.id)
        .or((orderStatus) =>
          orderStatus
            .status("eq", "NEW")
            .status("eq", "INPROGRESS")
            .status("eq", "ACCEPTED")
            .status("eq", "READY_FOR_PICKUP")
        )
    ).then(setOrders);
  }, [garadge]);

  useEffect(() => {
    const subscription = DataStore.observe(Order).subscribe((msg) => {
      const { opType, element } = msg;
      if (opType === "INSERT" && element.orderGaradgeId === garadge.id) {
        setOrders((existingOrders) => [element, ...existingOrders]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const renderOrderStatus = (orderStatus) => {
    const statusToColor = {
      [OrderStatus.NEW]: "green",
      [OrderStatus.INPROGRESS]: "orange",
      [OrderStatus.READY_FOR_PICKUP]: "red",
      [OrderStatus.ACCEPTED]: "purple",
    };

    return <Tag color={statusToColor[orderStatus]}>{orderStatus}</Tag>;
  };

  const tableColumns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Price",
      dataIndex: "total",
      key: "total",
      render: (price) => `${price.toFixed(1)} KSH`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: renderOrderStatus,
    },
  ];

  return (
    <Card title={"Orders"} style={{ margin: 20 }}>
      <Table
        dataSource={orders}
        columns={tableColumns}
        rowKey="id"
        onRow={(orderItem) => ({
          onClick: () => navigate(`order/${orderItem.id}`),
        })}
      />
    </Card>
  );
};

export default Orders;
