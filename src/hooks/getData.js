import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export const getDestination = async () => {
  let res;
  try {
    res = await axios.get(
      "http://localhost:5002/api/v1/space-tourism/destinations"
    );
    const { data } = res.data;
    //console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCrewData = async () => {
  let res;
  try {
    res = await axios.get("http://localhost:5002/api/v1/space-tourism/crew");
    const { data } = res.data;
    //console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
