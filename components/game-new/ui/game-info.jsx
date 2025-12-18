import { StarIcon } from "./icons/star-icon.jsx";
import { UserIcon } from "./icons/user-icon.jsx";
import { HistoryIcon } from "./icons/history-icon.jsx";

export function GameInfo({ playersCount, isRatingGame, timeMode }) {
  return (
    <div className={"flex items-center gap-3 text-xs text-slate-400"}>
      {isRatingGame && <StarIcon />}
      <div className={"flex items-center gap-1"}>
        <UserIcon /> {playersCount}
      </div>

      <div className={"flex items-center gap-1"}>
        <HistoryIcon /> {timeMode}
      </div>
    </div>
  );
}
