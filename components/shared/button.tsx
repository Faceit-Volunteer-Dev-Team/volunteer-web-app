import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
  onClick?: () => void; //
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva(
  "relative inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        primary: [
          "bg-transparent text-[#FF5500] border border-[#FF5500] hover:bg-opacity-20 transition-colors",
        ],
        secondary: [
          "bg-white bg-opacity-10 text-off-white border border-transparent-white hover:bg-opacity-20 transition-colors",
        ],
      },
      size: {
        small: "text-xs px-3 h-8",
        medium: "text-sm px-4 h-8",
        large: "text-md px-6 h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
    compoundVariants: [
      {
        variant: "primary",
        className: "font-bold text-[14px] leading-[16px] uppercase",
      },
    ],
  }
);

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={classNames("highlight", className)}>{children}</span>;

export const Button = ({
  children,
  variant,
  size,
  onClick,
  ...props
}: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};