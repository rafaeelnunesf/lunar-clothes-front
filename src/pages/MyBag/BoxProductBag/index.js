import { useContext, useState } from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import Fab from "@mui/material/Fab";
import Swal from "sweetalert2";

import { UserToken } from "../../../contexts/AuthContext";
import DetailProductBag from "../DetailProductBag";
import { BoxButtons, Product } from "./style";
import api from "../../../services/api";

export default function BoxProductBag({ data, reload }) {
  const [quantity, setQuantity] = useState(1);
  const { token } = useContext(UserToken);

  async function deleteProductBag() {
    try {
      await api.deleteProduct(data._id, token);

      Swal.fire({
        icon: "success",
        title: "Produto deletado!",
        showConfirmButton: false,
        timer: 1500,
      });

      reload();
    } catch (err) {
      console.log(err);
    }
  }

  function controlQuantity(add) {
    if (add) {
      setQuantity(quantity + 1);
    } else if (!add && quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  }

  return (
    <Product>
      <img src={data.image} alt={data.description} />
      <div>
        <DetailProductBag data={data} />
        <BoxButtons>
          <Fab aria-label="remove" onClick={() => controlQuantity(false)}>
            <IoRemoveOutline />
          </Fab>
          <span>{quantity}</span>
          <Fab aria-label="add" onClick={() => controlQuantity(true)}>
            <IoAddOutline />
          </Fab>
        </BoxButtons>
      </div>
      <p className="price">{data.price}</p>
      <div className="buttonDelete" onClick={() => deleteProductBag()}>
        <IoMdTrash />
      </div>
    </Product>
  );
}
