import { useNavigate } from "react-router-dom";
import CustomButton from "./style";

export default function Button({ fieldButton }) {
  let navigate = useNavigate();
  return <CustomButton type="submit">{fieldButton}</CustomButton>;
}
