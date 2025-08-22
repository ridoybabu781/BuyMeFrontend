import React from "react";
import profileImage from "../../../../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <img src={profileImage} alt="Profile" />
        <button>
          <FontAwesomeIcon icon={faCamera} />
        </button>
      </div>
      <div>
        <table>
          <th>Ridoy Babu</th>
          <tr className="flex">
            <td>
              <h3>Your Number </h3>
              {"<"} Your Number {">"}
            </td>

            <td>
              <h3>Your DOB </h3>
              {"<"} Your DOB {">"}
            </td>
          </tr>
          <tr>
            <td>
              <h3>Your Address</h3>
              {"<"} Your Address {">"}
            </td>{" "}
            <td>
              <h3>Your Shipping Address</h3>
              {"<"} Your Shipping Address {">"}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
