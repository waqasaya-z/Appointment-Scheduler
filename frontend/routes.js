import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './src/App'
import CreateSlot from './src/components/CreateSlot'
import BookSlot from './src/components/BookSlot'
import AvailableSlot from "./src/components/AvailableSlot";
import BookedAppointment from "./src/components/BookedAppointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
  },
  {
    path: "/create",
    element: React.createElement(CreateSlot),
  },
  {
    path: "/available",
    element: React.createElement(AvailableSlot),
  },
  {
    path: "/booking",
    element: React.createElement(BookSlot),
  },
  {
    path: "/appointment",
    element: React.createElement(BookedAppointment),
  },
]);

export default router;