# Outstanding Requirements

Due to the time constraints for this project, the solution demonstrated in this repository is unfortunately incomplete. The following issues would be resolved if more time was invested. Functional requirements are described below to help outline the steps required for completion.

## Known Issues

### Clicking of category buttons on Player 1's Card currently only log the clicked category to the console.

To meet the project's requirements of comparing Player 1's chosen category with those of his/her opponent:

- When Player 1 clicks a Category Button capture the clicked category and its value in state
- If Player 1’s button label is equal to a Computer player's button label, change the active state of this button.
- Write comparison function (which is called on Player 1 Category Button click) to determine winning (highest) value for clicked card category
- Add Winner label above winning card, or a centralised Draw label if scores are tied
- Call updateScores method and increment the winning player's score total
- `useEffect` method in `App.tsx` currently grabs card data from the API, randomises it and displays the first two cards. The rest of the cards are stored in state. In order for the game to proceed beyond one round, the card data would need to come from state (`Available Cards`) for the second round.

### Design / CSS

- A splash/intro page would be added with branded imagery and two buttons `Play` and `Rules` or `Instructions`
- Would suggest showing the back of Computer Player 1's card when the app first loads. Once Player 1 chooses a category, Computer 1's card could flip over to reveal name of opponent and scores.
- Hover state is currently only a change of colour(s). Would chat to designer about ideas for further change of state such as toggling the appearance of an icon, box-shadow, etc so colour-blind users would still notice a change. The fact the text colour and background colour change helps in this regard and hover states aren’t actually an assessed accessibility requirement anyway. However its good to make applications as usable as possible regardless.
- Would spend more time with design making the buttons look more “clickable”

### Improvements

- Add unit test coverage using React Testing Library
- Potentially restructure `components` folder to contain sub-directories for each component i.e - `Board -> Board.tsx, BoardStyles.tsx, BoardQueries.tsx` etc.
