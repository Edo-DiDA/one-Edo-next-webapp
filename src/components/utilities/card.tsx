import React from "react";
import Button from "./button";

type CardProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
};

const Card = ({ title, description, buttonText, onButtonClick }: CardProps) => {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden">
      <div className="p-3">
        <div className="aspect-video bg-neutral-700 rounded-lg " />
        <div className="p-4">
          <h4 className="font-medium text-neutral-50 mb-2">{title}</h4>
          <p className="text-sm text-neutral-400 ">{description}</p>
        </div>
        <Button
          className=" rounded-md"
          onClick={onButtonClick}
          text={buttonText}
        />
      </div>
    </div>
  );
};

export default Card;
