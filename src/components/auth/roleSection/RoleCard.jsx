// src/components/form/RoleCard.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

const RoleCard = ({
  role,
  icon: Icon,
  title,
  description,
  selected,
  onClick,
}) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.()}
    className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md focus:outline-none ${selected
        ? "border-indigo-500 bg-indigo-50 shadow-md"
        : "border-gray-200 hover:border-gray-300"
      }`}
  >
    <div className="flex flex-col items-center text-center space-y-3">
      <div
        className={`p-3 rounded-full ${selected ? "bg-indigo-500" : "bg-gray-100"
          }`}
      >
        <Icon
          className={`h-6 w-6 ${selected ? "text-white" : "text-gray-600"}`}
        />
      </div>
      <div>
        <h3
          className={`font-semibold ${selected ? "text-indigo-900" : "text-gray-900"
            }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm mt-1 ${selected ? "text-indigo-700" : "text-gray-600"
            }`}
        >
          {description}
        </p>
      </div>
      {selected && <CheckCircle className="h-5 w-5 text-indigo-500" />}
    </div>
  </div>
);

export default RoleCard;
