import { useState } from "react";
import Button from "../../../components/formComponents/Button";
import { Box, ButtonSize, PopUp } from "./style";

export default function BoxSize() {
  const [selectSize, setSelectSize] = useState();
  const size = ["XZ", "S", "M", "L", "XL"];
  console.log(selectSize);

  function addMyBag(e) {
    e.preventDefault();

    console.log("adicionar ao carrinho:");
    console.log(size[selectSize]);
  }

  return (
    <Box>
      <PopUp>
        <p>Selecione o tamanho</p>
        <form onSubmit={addMyBag}>
          <div className="listSizes">
            {size.map((oneSize, i) => (
              <ButtonSize
                key={i}
                onClick={() => setSelectSize(i)}
                index={i}
                select={selectSize}
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
