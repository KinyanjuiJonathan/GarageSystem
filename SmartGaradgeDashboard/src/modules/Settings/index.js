import React, { useEffect, useState } from "react";
import { Form, Input, Card, Button, message } from "antd";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { DataStore } from "aws-amplify";
import { Garadge } from "../../models";
import { useGaradgeContext } from "../../contexts/GaradgeContext";

const Settings = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const { sub, garadge, setGaradge } = useGaradgeContext();

  useEffect(() => {
    if (garadge) {
      setName(garadge.name);
      setCoordinates({ lat: garadge.lat, lng: garadge.lng });
    }
  }, [garadge]);

  const getAddressLatLng = async (address) => {
    setAddress(address);
    const geocodedByAddress = await geocodeByAddress(address.label);
    const latLng = await getLatLng(geocodedByAddress[0]);
    setCoordinates(latLng);
  };

  const onSubmit = async () => {
    if (!garadge) {
      await createNewGaradge();
    } else {
      await updateGaradge();
    }
  };

  const createNewGaradge = async () => {
    const newGaradge = await DataStore.save(
      new Garadge({
        name,
        image:
          "https://uploads-ssl.webflow.com/5eb26df2dc812d1fb5a97649/620b83003ad91720fca2fcd1_Dembell%20smart%20garage%20modell%20bakc%20side%20view.jpg",
        deliveryFee: 0,
        minDeliveryTime: 15,
        maxDeliveryTime: 120,
        rating:3,
        address: address.label,
        lat: coordinates.lat,
        lng: coordinates.lng,
        adminSub: sub,
      })
    );
    setGaradge(newGaradge);
    message.success("Garadge has been created!");
  };

  const updateGaradge = async () => {
    const updatedGaradge = await DataStore.save(
      Garadge.copyOf(garadge, (updated) => {
        updated.name = name;
        if (address) {
          updated.address = address.label;
          updated.lat = coordinates.lat;
          updated.lng = coordinates.lng;
        }
      })
    );
    setGaradge(updatedGaradge);
    message.success("Garadge updated");
  };

  return (
    <Card title="Garadge Details" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item label="Garadge Name" required>
          <Input
            placeholder="Enter garadge name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Garadge Address" required>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyCii2P3pf_y0KrLHnjYXhdmvbzh8Mf8puk"
            selectProps={{
              value: address,
              onChange: getAddressLatLng,
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <span>
        {coordinates?.lat} - {coordinates?.lng}
      </span>
    </Card>
  );
};

export default Settings;
