import { Box } from "./style";

export default function DetailProductBag({ data }) {
  return (
    <Box>
      <p className="name">{data.description}</p>
      <div className="detailsProduct">
        <label>
          Color: <span>{data.color}</span>
        </label>
        <label>
          Size: <span>{data.size}</span>
        </label>
      </div>
    </Box>
  );
}
