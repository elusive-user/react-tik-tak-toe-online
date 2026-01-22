import { useInterval } from "../lib/timers.js";
import {
  GAME_STATE_ACTIONS,
  gameReducer,
  initGameState,
} from "./model/game-reducer.js";
import { computeWinner } from "./model/compute-winner.js";
import { getNextMove } from "./model/get-next-move.js";
import { computeWinnerSymbol } from "./model/compute-winner-symbol.js";
import { useCallback, useMemo, useReducer } from "react";
import { PLAYERS } from "./constants.js";
import { GameLayout } from "./ui/game-layout.jsx";
import { BackLink } from "./ui/back-link.jsx";
import { GameTitle } from "./ui/game-title.jsx";
import { GameInfo } from "./ui/game-info.jsx";
import { computePlayerTimer } from "./model/compute-player-timer.js";
import { PlayerInfo } from "./ui/player-info.jsx";
import { GameMoveInfo } from "./ui/game-move-info.jsx";
import { GameCell } from "./ui/game-cell.jsx";
import { GameOverModal } from "./ui/game-over-modal.jsx";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 10000,
      currentMoveStart: Date.now(),
    },
    initGameState,
  );

  useInterval(
    1000,
    !!gameState.currentMoveStart,
    useCallback(() => {
      dispatch({
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      });
    }, []),
  );

  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const handleCellClick = useCallback((index) => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

  const { cells, currentMove } = gameState;

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode={"1 мин на ход"} />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              symbol={player.symbol}
              timer={timer}
              timerStartAt={timerStartAt}
              isRight={index % 2 === 1}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            index={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={handleCellClick}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            timer={gameState.timers[player.symbol]}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
      />
    </>
  );
}
