import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { UserToken } from "../../../contexts/AuthContext";

import Button from "../../../components/formComponents/Button";
import valideSizeProduct from "../../../validation/valideSizeProduct";
import { Box, ButtonSize, PopUp } from "./style";

export default function BoxSize({ popup, setPopup }) {
  const [size, setSize] = useState();
  const [selectSize, setSelectSize] = useState();
  const { token } = useContext(UserToken);
  const navigate = useNavigate();

  useEffect(() => {
    requestSizes();
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

    await valideSizeProduct(selectSize, popup, setPopup, navigate, token);
  }

  function handleClick(oneSize) {
    if (selectSize === oneSize) {
      setSelectSize();
    } else {
      setSelectSize(oneSize);
    }
  }

  return (
    <Box>
      <PopUp show={size}>
        <p>Selecione o tamanho</p>
        <form onSubmit={addMyBag}>
          <div className="listSizes">
            {size?.map((oneSize, i) => (
              <ButtonSize
                key={i}
                onClick={() => handleClick(oneSize)}
                select={selectSize === oneSize}
                type="button"
              >
                {oneSize}
              </ButtonSize>
            ))}
          </div>
          <Button fieldButton={"ADD TO CART"}></Button>
        </form>
      </PopUp>
    </Box>
  );
}
