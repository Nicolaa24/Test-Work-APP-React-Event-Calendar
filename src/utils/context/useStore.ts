import React from "react";
import { StoreContext } from "./StoreContext";

export const useStore = () => React.useContext(StoreContext);