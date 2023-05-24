import { Layout, Image } from "antd";
import SideMenu from "../src/components/SideMenu";
import AppRoutes from "./components/AppRoutes";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import GaradgeContextProvider from "./contexts/GaradgeContext";

const { Sider, Content, Footer } = Layout;

Amplify.configure(awsconfig);

function App() {
  return (
    <GaradgeContextProvider>
      <Layout>
        <Sider style={{ height: "100vh", backgroundColor: "white" }}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZsDq2fHs6FC4WOvl54F1bioM50v-7O2LrQ&usqp=CAU"
            preview={false}
          />
          <SideMenu />
        </Sider>
        <Layout>
          <Content>
            <AppRoutes />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Smart Garadge Dashboard ©2023
          </Footer>
        </Layout>
      </Layout>
    </GaradgeContextProvider>
  );
}

export default withAuthenticator(App);
