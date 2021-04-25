import { Card } from "antd";
import { useHistory } from "react-router-dom";
const { Meta } = Card;

const Cart = (props) => {
  const history = useHistory();
  return (
    <Card
      onClick={() => history.push(`/details/${props.movie.id}`)}
      hoverable
      style={{ width: 240, marginBottom: "1rem" }}
      cover={
        <img
          alt="example"
          src={`http://image.tmdb.org/t/p/w300${props.movie.poster_path}`}
        />
      }
    >
      <Meta
        title={props.movie.original_title}
        description={props.movie.release_date}
      />
    </Card>
  );
};

export default Cart;
