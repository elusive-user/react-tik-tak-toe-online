import { Header } from "../components/header";
import {
  GameField,
  GameInfo,
  GameSymbol,
  GameTitle,
  useGameState,
} from "../components/game";
import { useState } from "react";
import { UiModal } from "../components/uikit/ui-modal.jsx";
import { UiButton } from "../components/uikit/ui-button.jsx";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    winnerSymbol,
    handlePlayerTimeOver,
  } = useGameState(playersCount);

  return (
    <div className={"bg-slate-50 min-h-screen"}>
      <Header />
      <main className={"pt-6 mx-auto w-max"}>
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className={"mt-4"}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />

        {winnerSymbol && (
          <div className={"my-4"}>
            <GameSymbol symbol={winnerSymbol} />{" "}
          </div>
        )}

        <UiModal
          width={"md"}
          isOpen={!!winnerSymbol}
          onClose={() => console.log("close")}
        >
          <UiModal.Header>Игра завершена!</UiModal.Header>
          <UiModal.Body>
            <div className={"text-sm"}>
              Победитель: <span className={"text-teal-600"}>Paromovevg</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton size={"md"} variant={"outline"}>
              Вернуться
            </UiButton>
            <UiButton size={"md"} variant={"primary"}>
              Играть снова
            </UiButton>
          </UiModal.Footer>
        </UiModal>

        <GameField
          playersCount={playersCount}
          className={"mt-6"}
          cells={cells}
          nextMove={nextMove}
          currentMove={currentMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
