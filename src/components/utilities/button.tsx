import React from "react";

type ButtonProps = {
  text?: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "success" | "warning" | "error" | "neutral";
  variant?: "solid" | "outlined" | "ghost";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({
  text,
  size = "medium",
  color = "primary",
  variant = "solid",
  leftIcon,
  rightIcon,
  className = "",
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "flex items-center justify-center rounded-md font-semibold transition-all";

  const sizeClasses = {
    small: "px-4 py-3 ",
    medium: "px-6 py-4 text-lg",
    large: "px-8 py-5 text-xl",
  };
  const iconSizeClasses = {
    small: "h-4 w-4",
    medium: "h-5 w-5",
    large: "h-6 w-6",
  };
  const colorClasses = {
    primary: {
      solid: "bg-primary-500 text-white hover:bg-primary-600",
      outlined:
        "border border-primary-500 text-primary-500 hover:bg-primary-50",
      ghost: "text-primary-500 hover:bg-primary-100",
    },
    success: {
      solid: "bg-success-500 text-white hover:bg-success-600",
      outlined:
        "border border-success-500 text-success-500 hover:bg-success-50",
      ghost: "text-success-500 hover:bg-success-100",
    },
    warning: {
      solid: "bg-warning-500 text-white hover:bg-warning-600",
      outlined:
        "border border-warning-500 text-warning-500 hover:bg-warning-50",
      ghost: "text-warning-500 hover:bg-warning-100",
    },
    error: {
      solid: "bg-error-500 text-white hover:bg-error-600",
      outlined: "border border-error-500 text-error-500 hover:bg-error-50",
      ghost: "text-error-500 hover:bg-error-100",
    },
    neutral: {
      solid: "bg-neutral-500 text-white hover:bg-neutral-600",
      outlined:
        "border border-neutral-500 text-neutral-500 hover:bg-neutral-50",
      ghost: "text-neutral-500 hover:bg-neutral-100",
    },
  };

  return (
    <button
      className={`${baseStyles} ${sizeClasses[size]} ${colorClasses[color][variant]} ${className}`}
      onClick={onClick}
    >
      {text ? (
        <>
          {leftIcon && (
            <span className={`mr-2 ${iconSizeClasses[size]}`}>{leftIcon}</span>
          )}
          <span>{text}</span>
          {rightIcon && (
            <span className={`ml-2 ${iconSizeClasses[size]}`}>{rightIcon}</span>
          )}
        </>
      ) : (
        <>
          {leftIcon && (
            <span className={iconSizeClasses[size]}>{leftIcon}</span>
          )}
          {rightIcon && (
            <span className={iconSizeClasses[size]}>{rightIcon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
