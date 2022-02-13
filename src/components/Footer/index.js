import styled from "styled-components";
import { MdOutlinePersonOutline, MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsHandbag, BsShop } from "react-icons/bs";
import { IconContext } from "react-icons";
export default function Footer() {
  function handleClick(e) {
    let colorSvg = e.children[0].style;
    let colorLabel = e.children[1].style;
    colorLabel.color === "red"
      ? (colorLabel.color = "#9B9B9B")
      : (colorLabel.color = "red");
    colorSvg.color === "red"
      ? (colorSvg.color = "#9B9B9B")
      : (colorSvg.color = "red");
  }
  const arrayIcons = [
    { icon: <AiOutlineHome />, label: "Home" },
    { icon: <BsShop />, label: "Shop" },
    { icon: <BsHandbag />, label: "Bag" },
    { icon: <MdAddShoppingCart />, label: "Add" },
    { icon: <MdOutlinePersonOutline />, label: "Profile" },
  ];
  return (
    <IconContext.Provider value={{ color: "#9B9B9B", size: "25px" }}>
      <ContainerFooter>
        {arrayIcons.map(({ icon, label }) => (
          <IconFooter key={label} onClick={(e) => handleClick(e.currentTarget)}>
            {icon}
            <p>{label}</p>
          </IconFooter>
        ))}
      </ContainerFooter>
    </IconContext.Provider>
  );
}

const ContainerFooter = styled.div`
  background: #fff;
  border-radius: 12px 12px 0px 0px;
  height: 83px;
  width: 100vw;
  margin: 0 -16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;

  position: fixed;

  bottom: 0;
  z-index: 1;
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.08);
`;

const IconFooter = styled.div`
  p {
    font-family: Metropolis;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    color: #9b9b9b;
  }
`;
