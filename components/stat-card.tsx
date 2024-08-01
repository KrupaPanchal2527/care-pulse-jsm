import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  type: "appointments" | "pending" | "cancelled";
  count?: number;
  label: string;
  icon: string;
}

const StatCard = ({ count = 0, type, label, icon }: Props) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="w-fit size-8"
        />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>
      <p className="text-14-regular">{label}</p>
    </div>
  );
};

export default StatCard;
