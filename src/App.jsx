import { useState } from "react";
import "./App.css";
import Friends from "./Components/Friends/Friends.jsx";
import SplitABill from "./Components/SplitABill/SplitABill.jsx";

function App() {

    const [friends, setFriends] = useState([
        {
            name: "Ali",
            img: "https://picsum.photos/200",
            bill: 200,
            selected: false
        },
        {
            name: "Ahmed",
            img: "https://picsum.photos/200",
            bill: 300,
            selected: false
        },
        {
            name: "Asad",
            img: "https://picsum.photos/200",
            bill: 400,
            selected: false
        },
    ]);
  return (
    <div className="container">
      <div className="row">
        <Friends friends={friends} setFriends={setFriends} />
      </div>
      {/* <AddFriend /> */}
      <SplitABill />
    </div>
  );
}

export default App;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={a1da7024b3993a3549bb57305e9e57ca}
