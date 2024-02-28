import AddFriend from "../AddFriend/AddFriend.jsx";
import "./Friends.css";

export default function Friends({ friends, setFriends }) {
  return (
    <div className="col-md-4  p-1" style={{ border: "1px solid black" }}>
      {/* friends list  */}
      <div>
        {friends?.map((friend) => {
          return (
            <div className="frndDiv mt-2 p-md-2 d-flex justify-content-between align-items-center w-100 ">
              <div className="d-flex justify-content-between align-items-center">
                <img
                  className="card-title m-0 frndImg "
                  src={friend.img}
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                  }}
                />
                <h5 className="card-text ms-1 frndName">{friend.name}</h5>
              </div>

              <div>
                <a href="#" className="btn btn-primary selectBtn">
                  Select
                </a>
              </div>
            </div>
          );
        })}

        {/* add friend div */}

            <AddFriend />



        {/* add friend button */}
        <div className="mt-2 p-md-2 d-flex justify-content-between align-items-center w-100">
          <a
            href="#"
            onClick={() => {
              (document.querySelector(".addFrndDiv").style.display = "block")(
                (document.querySelector(".AddFrend").style.display = "none")
              );
            }}
            className="btn btn-primary selectBtn AddFrend ms-auto"
          >
            Add Friend
          </a>
        </div>
      </div>
    </div>
  );
}
