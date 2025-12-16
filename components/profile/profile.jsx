import Image from "next/image";
import avatarSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-start text-teal-600",
        className,
      )}
    >
      <Image width={48} height={48} src={avatar} alt={"avatar"} />

      <div className={"overflow-hidden"}>
        <div className={"text-lg leading-tight truncate"}>{name}</div>
        <div className={"text-slate-400 text-xs leading-tight"}>
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}
