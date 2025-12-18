import { GameSymbol } from "./game-symbol.jsx";

export function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <>
      <div className={"flex gap-1 items-center text-xl leading-tight "}>
        Ход: <GameSymbol symbol={currentMove} className={"h-5 w-5"} />
      </div>

      <div
        className={
          "flex gap-1 items-center text-xs leading-tight text-slate-400"
        }
      >
        Следующий: <GameSymbol symbol={nextMove} className={"w-3 h-3"} />
      </div>
    </>
  );
}
