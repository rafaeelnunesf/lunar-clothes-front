import styled from "styled-components";

const Product = styled.div`
  width: 100%;
  height: 104px;
  margin-bottom: 24px;

  background-color: white;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  position: relative;
  display: flex;

  img {
    width: 104px;
    height: 100%;
    object-fit: cover;
    object-position: left;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .price {
    position: absolute;
    bottom: 20px;
    right: 15px;

    font-size: 14px;
    font-weight: 600;
    color: black;
  }

  .buttonDelete {
    position: absolute;
    top: 11px;
    right: 15px;

    color: #eeeeee;
    font-size: 20px;

    :hover {
      cursor: pointer;
    }
  }
`;

const BoxButtons = styled.div`
  height: 40%;
  gap: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 36px;
    height: 36px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;

    font-size: 24px;
    color: #9b9b9b;
  }
`;

export { Product, BoxButtons };
