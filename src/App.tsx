import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { store } from "./app/store";
import { Provider } from "react-redux";
import router from "routes";
import Theme from "theme/Theme";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
