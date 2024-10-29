// import EffectComp from "./components/effect";
// import ComponentUseMemo from "./components/memo";
// import RefComp from "./components/ref";
// import StateComp from "./components/state";

import { createContext, useState } from "react";
// import ReducerComp from "./components/reducer";
// import Todos from "./components/todos";
import CallbackComp from "./components/callback";
// import ContextComp from "./components/context";

export const UserContext = createContext<string>("");

function App() {
  const [user] = useState<string>("Andi");
  return (
    <div>
      <UserContext.Provider value="{user}" >
      {/* <StateComp /> */}
      {/* <EffectComp/> */}
      {/* <RefComp/> */}
      {/* <ComponentUseMemo/> */}
      {/* <ContextComp/> */}
      {/* <ReducerComp/> */}
      <CallbackComp/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
