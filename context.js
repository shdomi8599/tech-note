import React from "react";

const CookappsContext = React.createContext();

export const CookappsProvider = CookappsContext.Provider;
export const CookappsConsumer = CookappsContext.Consumer;

export default CookappsContext;
