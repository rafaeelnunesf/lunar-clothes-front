import { useEffect, useState } from "react";
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

    try {
      const data = {
        id: popup,
        size: size[selectSize],
      };
      const response = await api.postBag(data);
      console.log(response);
      setPopup();
    } catch (err) {
      console.log(err);
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
