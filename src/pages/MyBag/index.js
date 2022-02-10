import { BsChevronLeft } from "react-icons/bs";
import Fab from "@mui/material/Fab";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";

import Button from "../../components/formComponents/Button";
import Container from "./style";

export default function MyBag() {
  return (
    <Container>
      <BsChevronLeft className="headerIcon" />
      <h2>Carrinho</h2>
      <div className="product">
        <img src="https://cea.vtexassets.com/arquivos/ids/36723511/Top-Cropped-Degage-Frente-Unica-com-Amarracao-Preto-9992584-Preto_1.jpg?v=637541224698030000" />
        <div className="boxDivider">
          <div className="descriptionProduct">
            <p className="name">Pullover</p>
            <div className="detailsProduct">
              <label>
                Color: <span>Black</span>
              </label>
              <label>
                Size: <span>L</span>
              </label>
            </div>
          </div>
          <div className="buttonsQtd">
            <Fab aria-label="remove">
              <IoRemoveOutline />
            </Fab>
            <span>1</span>
            <Fab aria-label="add">
              <IoAddOutline />
            </Fab>
          </div>
        </div>
        <p className="price">R$51,99</p>
        <div className="buttonDelete">
          <IoMdTrash />
        </div>
      </div>
      <Button fieldButton={"CHECKOUT"}></Button>
    </Container>
  );
}
