import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Button from "../../../components/formComponents/Button";
import api from "../../../services/api";
import { Box, ButtonSize, PopUp } from "./style";

export default function BoxSize({ popup, setPopup }) {
  const [size, setSize] = useState();
  const [selectSize, setSelectSize] = useState();

  useEffect(() => {
    const request = api.getSizes(popup);
    request.then((response) => {
      setSize(response.data);
    });
    // eslint-disable-next-line
  }, []);

  async function addMyBag(e) {
    e.preventDefault();
    console.log(selectSize);
    try {
      if (selectSize === undefined) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Choose a size!",
        });
        return;
      }
      const data = {
        id: popup,
        size: size[selectSize],
      };
      const response = await api.postBag(data);
      console.log(response);
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

  if (!size) return <h1>Loading</h1>;
  return (
    <Box>
      <PopUp>
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
