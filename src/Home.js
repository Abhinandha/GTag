import React, { useState } from "react";

function Home() {  
  const [reason, setReason] = useState("");  
  const [reasonerror, setReasonError] = useState("");

  function onSubmit(e) {
      setReason("");
      if (!reason) {
        setReasonError("Select Reason");
      }
    }
  return (
    <div className="body">
      <div className="home">
        <div className="form">
            <label className="title">REASON FOR </label>
            <br />
            <select
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
              }}
            >
              <option value="">Select reason</option>
              <option value="AMEND">AMEND</option>
              <option value="CREATE">CREATE</option>
              <option value="CANCEL">CANCEL</option>
            </select>
            <p className="text-danger">{!reason ? reasonerror : ""}</p>
          <br />

          <button onClick={onSubmit} >SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
export default Home;