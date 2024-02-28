import { useState } from "react";
import "./SplitABill.css";

export default function SplitABill({
  friends,
  setFriends,
  selected,
  setSelected,
}) {
  const [totalExpense, setTotalExpense] = useState("");
  const [frndExpense, setFrndExpense] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [whoPayed, setWhoPayed] = useState("you");

  {
    let friend = friends.find((friend) => friend.id === selected);
    console.log(friend);
    return (
      <div
        className="col-md-6 d-flex justify-content-center align-items-center " 
        style={{
          display: selected ? "block" : "none",
          backgroundColor: "#fbf3e0",
          height: "50%",
          margin: "auto", 
          borderRadius: "10px",
        }}
      >
        <div
          className="container-fluid"
          
        >
          <div className="row ">
            {/* heading */}
            <div className="col-12 p-5">
              <h1 className="text-center">Split A Bill With {friend?.name}</h1>
            </div>

            {/* bill value */}
            <div className="col-12 d-flex justify-content-between align-items-center p-1">
              <p>Bill Value</p>
              <input
                onChange={(e) => setTotalExpense(e.target.value)}
                type="number"
                style={{
                  width: "40%",
                  border: "none",
                }}
              />
            </div>

            {/* your expense */}
            <div className="col-12 d-flex justify-content-between align-items-center p-1">
              <p>Your Expense</p>
              <input
                onChange={(e) => setMyExpense(e.target.value)}
                type="number"
                style={{
                  width: "40%",
                  border: "none",
                }}
              />
            </div>

            {/* Friend expense */}
            <div className="col-12 d-flex justify-content-between align-items-center p-1">
              <p>{friend?.name} Expense</p>
              <input
                onChange={(e) => setFrndExpense(e.target.value)}
                type="number"
                style={{
                  width: "40%",
                  border: "none",
                }}
              />
            </div>

            {/* who payed the bill */}
            <div className="col-12 d-flex justify-content-between align-items-center p-1">
              <p>Who is paying the bill?</p>
              <select
                name=""
                id=""
                onChange={(e) => setWhoPayed(e.target.value)}
              >
                <option value="you">you</option>
                <option value="friend">friend</option>
              </select>
            </div>

            {/* split button */}
            <div className="col-12 mt-3 d-flex justify-content-center align-items-center">
              <a
                onClick={() => {
                  let myFriends = [...friends];
                  let selectedFriend = myFriends.find(
                    (friend) => friend.id === selected
                  );
                  selectedFriend.totalExpense = totalExpense;
                  selectedFriend.frndExpense = frndExpense;
                  selectedFriend.myExpense = myExpense;
                  selectedFriend.whoPayed = whoPayed;
                  setFriends(myFriends);
                  console.log(friends);

                  // clear input field
                  document.querySelector(".").style.display = "none";
                }}
                href="#"
                className="btn btn-primary splitBtn "
              >
                Split Bill
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
