import { GameSymbol } from './game-symbol'
import {clsx} from "clsx";

export function GameCell({ isWinner, onClick, symbol }) {
    return (
        <button
            className={clsx('border border-gray-600 flex items-center justify-center bg-transparent mt-[-1px] ml-[-1px]', isWinner && 'bg-red-500/10')}
            onClick={onClick}
        >
            {symbol ? <GameSymbol symbol={symbol} /> : null}
        </button>
    )
}