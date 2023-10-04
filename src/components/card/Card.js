import React from "react";

export default function Card({
  cardsKey,
  CardsImage,
  cardsHeader,
  cardsDescrib,
  cardsSalary,
}) {
  return (
    <div className="product_card">
      <div className="main_in_product_card">
        <div className="img_in_card">
          <figure>
            <img src={CardsImage} alt={cardsKey} />
          </figure>
        </div>
        <div className="second_part_in_card">
          <div className="text_in_product_card">
            <div className="header_card">
              <h3>{cardsHeader}</h3>
            </div>

            <div className="describtion_in_product_card">
              <p>{cardsDescrib}</p>
            </div>

            <div className="salary_in_product_card">{cardsSalary} руб.</div>
          </div>
        </div>
      </div>
      <div className="button_in_product_card">
        <button>Купить</button>
      </div>
    </div>
  );
}
