import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import Fab from "@mui/material/Fab";

import DetailProductBag from "../DetailProductBag";
import { BoxButtons, Product } from "./style";

export default function BoxProductBag({ data, index }) {
  return (
    <Product>
      <img src={data.image} alt={data.description + index} />
      <div>
        <DetailProductBag data={data} />
        <BoxButtons>
          <Fab aria-label="remove">
            <IoRemoveOutline />
          </Fab>
          <span>1</span>
          <Fab aria-label="add">
            <IoAddOutline />
          </Fab>
        </BoxButtons>
      </div>
      <p className="price">{data.price}</p>
      <div className="buttonDelete">
        <IoMdTrash />
      </div>
    </Product>
  );
}
