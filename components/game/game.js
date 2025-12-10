import { GameCell } from './game-cell'
import { GameInfo } from './game-info'
import { useGameState } from './use-game-state';
import {ResetButton} from "./reset-button.jsx";


export function Game() {
    const {
        cells,
        currentStep,
        winnerSymbol,
        isDraw,
        resetGame,
        toggleCell,
        getWinnerCell
    } = useGameState();

    return (
        <div className={"flex flex-col items-center w-40 mx-auto my-24 border border-black p-5"}>
            <GameInfo
                isDraw={isDraw}
                winnerSymbol={winnerSymbol}
                currentStep={currentStep}
            />
            <div className={"grid grid-cols-[repeat(3,30px)] grid-rows-[repeat(3,30px)] pt-[1px] pl-[1px]"}>
                {cells.map((symbol, index) => (
                    <GameCell
                        key={index}
                        symbol={symbol}
                        isWinner={getWinnerCell(index)}
                        onClick={() => toggleCell(index)}
                    />
                ))}
            </div>
            <ResetButton onClick={resetGame} />
        </div>
    )
}