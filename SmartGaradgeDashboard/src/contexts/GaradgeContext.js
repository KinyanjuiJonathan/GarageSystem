import { createContext, useState, useEffect, useContext } from "react";
import { Auth, DataStore,  } from "aws-amplify";
import { Garadge } from "../models";

const GaradgeContext = createContext({});

const GaradgeContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [garadge, setGaradge] = useState();
  const sub = user?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
  }, []);

  useEffect(() => {
    
    if (!sub) {
      return;
    }
    // fetch Garadge and filter by adminSub
    DataStore.query (Garadge, (g) => g.adminSub ("eq", sub)).then(
      (garadges) => {
    console.log("garadge context:", garadges);
    setGaradge(garadges[0])
  }
    );
  }, [sub]);
  console.log("garadge context:", garadge);
  return (
    <GaradgeContext.Provider value={{ garadge, setGaradge, sub }}>
      {children}
    </GaradgeContext.Provider>
  );
};

export default GaradgeContextProvider;

export const useGaradgeContext = () => useContext(GaradgeContext);
