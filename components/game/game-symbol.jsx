import { GAME_SYMBOLS } from "./constants.js";
import { CrossIcon } from "./icons/cross-icon.jsx";
import { ZeroIcon } from "./icons/zero-icon.jsx";
import { TriangleIcon } from "./icons/triangle-icon.jsx";
import { SquareIcon } from "./icons/square-icon.jsx";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}
