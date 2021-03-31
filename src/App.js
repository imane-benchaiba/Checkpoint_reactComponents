import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import maPhoto from "./moi.jpg"
import Photo from "./components/Profile/ProfilePhoto";
import Name from "./components/Profile/FullName";
import Address from "./components/Profile/Address";

function App() {

  return (
    <div>
        <Photo data={maPhoto}/>
        <Name />
        <Address />      
    </div>
  );
}

export default App;
