import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import InputSet from "./components/InputSet";
// import ItemContainer from "./components/ItemContainer";
// import NewIceCreamContainer from "./components/NewIceCreamContainer";
// import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UsersContainer /> */}
        {/* <ItemContainer cake /> */}
        {/* <ItemContainer /> */}
        {/* <CakeContainer /> */}
        <NewCakeContainer />
        <InputSet />

        {/* <HooksCakeContainer /> */}
        {/* <IceCreamContainer />
        <NewIceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
