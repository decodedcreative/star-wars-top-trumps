import styled from "styled-components";
import starwarslogo from "../images/star-wars.png";
import CategoryButton, { CategoryButtonData } from "./CategoryButton";

const StyledCard = styled.div`
  border-radius: 4px;
  color: #000000;

  .card__player-label {
    background-color: #000000;
    color: #ffffff;
    padding: 20px;
    text-transform: uppercase;
    border: 2px solid #ffc625;
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  .card__name {
    background-color: #ffc625;
    padding: 20px;
    margin: 0;
    font-weight: normal;
    font-size: 1rem;
  }

  .card__image {
    width: 100%;
  }

  .card__categories {
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    background-color: #ffffff;
    height: 295px;
    justify-content: flex-end;
  }
`;

export type CardData = {
  costInCredits?: number;
  filmConnection?: {
    totalCount: number;
  };
  maxAtmospheringSpeed?: number | string;
  name?: string;
  passengers?: string;
  starshipClass?: string;
};

interface CardProps {
  data?: CardData;
  activeCategory: number | undefined;
  playerLabel?: string;
  score: number;
  readOnly?: boolean;
  showValues?: true;
  onCategoryClick: (category: CategoryButtonData) => void;
}

const Card = ({
  data,
  activeCategory,
  playerLabel,
  score,
  readOnly,
  showValues,
  onCategoryClick,
}: CardProps) => {
  const films = data?.filmConnection?.totalCount;
  return (
    <StyledCard>
      <h2 className="card__player-label">
        <span>{playerLabel}</span>
        <span>{score}</span>
      </h2>
      <h3 className="card__name">{data?.name}</h3>
      <img className="card__image" src={starwarslogo} alt="Star Wars logo" />
      <div className="card__categories">
        {!readOnly && <h4>Please select a category</h4>}
        <CategoryButton
          disabled={readOnly}
          label="Max Speed:"
          onClick={() =>
            onCategoryClick({
              id: 0,
              value: data?.maxAtmospheringSpeed,
            })
          }
        >
          {showValues ? data?.maxAtmospheringSpeed : "?"}
        </CategoryButton>
        <CategoryButton
          disabled={readOnly}
          label="Credit Cost:"
          onClick={() =>
            onCategoryClick({
              id: 1,
              value: data?.costInCredits,
            })
          }
        >
          {showValues ? data?.costInCredits : "?"}
        </CategoryButton>
        <CategoryButton
          disabled={readOnly}
          label="Passengers:"
          onClick={() =>
            onCategoryClick({
              id: 2,
              value: data?.passengers,
            })
          }
        >
          {showValues ? data?.passengers : "?"}
        </CategoryButton>
        <CategoryButton
          disabled={readOnly}
          label="Film appearances:"
          onClick={() =>
            onCategoryClick({
              id: 3,
              value: films,
            })
          }
        >
          {showValues ? films : "?"}
        </CategoryButton>
      </div>
    </StyledCard>
  );
};

export default Card;
