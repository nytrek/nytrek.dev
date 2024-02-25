import { cn } from "@/utils/cn";
import { content } from "./data";

export const About: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("grid gap-y-6 text-lg leading-8", className)}
      data-testid="about"
      {...props}
    >
      {content.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
