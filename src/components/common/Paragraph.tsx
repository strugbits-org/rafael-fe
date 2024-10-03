import { forwardRef, type ComponentPropsWithoutRef } from "react";

export type ParagraphProps = ComponentPropsWithoutRef<"p">;
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <p
        className={`font-segoe text-black dark:text-white ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);

export default Paragraph;
