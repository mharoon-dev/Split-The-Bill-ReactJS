export default function AddFriend() {
  return (
    <div className="addFrndDiv" style={{ display: "none" }}>
    <div
      style={{
        padding: "10px 15px",
        backgroundColor: "#fbf3e0",
        marginTop: "15px",
      }}
    >
      <div className="input-group mb-3 w-100">
        <label
          className="d-flex align-items-center align-items-center me-2"
          style={{
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          Friend Name
        </label>
        <input
          type="text"
          className="form-control frndInput"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <div className="input-group mb-3 w-100">
        <label
          className="d-flex align-items-center align-items-center me-2"
          style={{
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          Friend Image
        </label>
        <input
          type="text"
          className="form-control frndInput"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <div className="mt-2  d-flex justify-content-around align-items-center w-100">
        <a
          href="#"
          className="btn btn-primary selectBtn mx-auto"
          style={{
            padding: "5px 30px",
          }}
        >
          Add
        </a>
        <a
          href="#"
          className="btn btn-primary closeBtn mx-auto"
          style={{
            padding: "5px 30px",
          }}
          onClick={() => {
            (document.querySelector(".addFrndDiv").style.display = "none")(
              (document.querySelector(".AddFrend").style.display = "block")
            )
          }}
        >
          Close
        </a>
      </div>
    </div>
  </div>
  )
}
