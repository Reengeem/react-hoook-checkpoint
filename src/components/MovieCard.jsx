import React from "react";
import { Card, Rate } from "antd";

const { Meta } = Card;
// Card to display the movies title and details====================================================
const MovieCard = ({ posterUrl, title, description, rating }) => (
  <Card hoverable cover={<img alt="example" src={posterUrl} />}>
    <Meta title={title} description={description.slice(0, 100)} />
    <div>
      <Rate disabled defaultValue={rating} />
    </div>
  </Card>
);
export default MovieCard;
