import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Board from "./components/Board";
import Card, { CardData } from "./components/Card";
import { CategoryButtonData } from "./components/CategoryButton";
import { shuffleArray } from "./utils/utils";
import starscapebg from "./images/stars.jpeg";

const STARSHIP_DATA = gql`
  query queryStarships {
    allStarships {
      starships {
        name
        starshipClass
        maxAtmospheringSpeed
        costInCredits
        passengers
        filmConnection {
          totalCount
        }
      }
    }
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(${starscapebg});

  h1 {
    color: #fff;
    margin-bottom: 50px;
  }
`;

const App = () => {
  const { loading, data, error } = useQuery(STARSHIP_DATA);
  const [playersActive, setPlayersActive] = useState([true, true]);
  const [scores, updateScores] = useState([0, 0]);
  const [playerCardData, setPlayerCardData] = useState<CardData[]>([]);
  const [availableCards, setAvailableCards] = useState<CardData[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>();

  const onCategoryClick = (category: CategoryButtonData): void => {
    setActiveCategory(category["id"]);
  };

  useEffect(() => {
    if (!loading && data) {
      const randomisedCardData = shuffleArray(data.allStarships.starships);
      const [player1Card, computer1Card, ...rest] = randomisedCardData;

      setPlayerCardData((previousCardData) => [
        ...previousCardData,
        player1Card,
      ]);
      setPlayerCardData((previousCardData) => [
        ...previousCardData,
        computer1Card,
      ]);
      setAvailableCards(rest);
    }
  }, [loading, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: ${error.message}</p>;
  return (
    <StyledApp>
      <h1>Star Wars Top Trumps</h1>
      <Board>
        {playersActive[0] && (
          <Card
            data={playerCardData[0]}
            playerLabel="Player 1"
            score={scores[0]}
            showValues
            activeCategory={activeCategory}
            onCategoryClick={onCategoryClick}
          />
        )}
        {playersActive[1] && (
          <Card
            data={playerCardData[1]}
            playerLabel="Computer 1"
            score={scores[1]}
            activeCategory={activeCategory}
            readOnly
            onCategoryClick={onCategoryClick}
          />
        )}
      </Board>
    </StyledApp>
  );
};

export default App;
