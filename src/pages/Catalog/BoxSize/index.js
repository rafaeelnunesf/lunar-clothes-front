import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Button from "../../../components/formComponents/Button";
import api from "../../../services/api";
import { Box, ButtonSize, PopUp } from "./style";

export default function BoxSize({ popup, setPopup }) {
  const [size, setSize] = useState();
  const [selectSize, setSelectSize] = useState();

  useEffect(() => {
    if (!size) {
      return requestSizes();
    }
    // eslint-disable-next-line
  }, []);

  async function requestSizes() {
    try {
      const response = await api.getSizes(popup);
      setSize(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function addMyBag(e) {
    e.preventDefault();

    if (selectSize === undefined) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Choose a size!",
      });
      return;
    }
    try {
      const data = {
        id: popup,
        size: size[selectSize],
      };
      const response = await api.postBag(data);
      setPopup();
      Swal.fire({
        icon: "success",
        title: "product added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  }

  function handleClick(i) {
    if (selectSize === i) {
      setSelectSize();
    } else {
      setSelectSize(i);
    }
  }
  console.log(popup);

  return (
    <Box>
      <PopUp show={size}>
        <p>Selecione o tamanho</p>
        <form onSubmit={addMyBag}>
          <div className="listSizes">
            {size?.map((oneSize, i) => (
              <ButtonSize
                key={i}
                onClick={() => handleClick(i)}
                select={selectSize === i}
                type="button"
              >
                {oneSize}
              </ButtonSize>
            ))}
          </div>
          <Button fieldButton={"ADICIONAR AO CARRINHO"}></Button>
        </form>
      </PopUp>
    </Box>
  );
}
