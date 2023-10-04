import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import Card from "../components/card/Card";

export default function Home() {
  let { data, SearchValue, color, category, value } = useContext(DataContext);
  return (
    <section className="home">
      <div className="product_card_item">
        {data
          .filter((item) => {
            if (
              (item?.title
                ?.toLowerCase()
                ?.trim()
                ?.includes(SearchValue?.toLowerCase()?.trim()) ||
                item?.brand
                  ?.toLowerCase()
                  ?.trim()
                  ?.includes(SearchValue?.toLowerCase()?.trim())) &&
              item.category.includes(category) &&
              item.color.includes(color) &&
              value[0] <= item.price &&
              value[1] >= item.price
            ) {
              return item;
            }
          })
          .map((item, index) => {
            return (
              <Card
                key={item.id}
                CardsImage={item.thumbnail}
                cardsHeader={item.title}
                cardsDescrib={item.description}
                cardsSalary={item.price}
              />
            );
          })}
      </div>
    </section>
  );
}
