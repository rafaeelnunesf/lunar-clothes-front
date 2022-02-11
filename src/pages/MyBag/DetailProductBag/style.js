import styled from "styled-components";

const Box = styled.div`
  padding: 11px;
  gap: 4px;

  .name {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 6px;
    color: black;
  }
  .detailsProduct {
    display: flex;
    gap: 13px;

    label {
      color: #9b9b9b;
      font-size: 11px;

      span {
        color: black;
      }
    }
  }
`;

export { Box };
