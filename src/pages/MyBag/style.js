import styled from "styled-components";

const Container = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  padding: 12px 16px 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .headerIcon {
    font-size: 20px;
    align-self: flex-start;
    font-weight: 900;
  }

  h2 {
    font-size: 34px;
    font-weight: 900;
    margin: 34px 0 24px 0;
    align-self: flex-start;
  }

  .product {
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

    .boxDivider {
      .descriptionProduct {
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
      }
      .buttonsQtd {
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
      }
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
    }
  }
`;

export default Container;
