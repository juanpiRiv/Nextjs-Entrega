import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export function AuroraText({
  className,
  children,
  as: Component = "span",
  ...props
}) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn(
        "relative inline-block text-transparent bg-clip-text animate-[aurora-text-animation_12s_ease-in-out_infinite_alternate]",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(90deg, hsl(var(--color-1)), hsl(var(--color-2)), hsl(var(--color-3)), hsl(var(--color-4)))",
        backgroundSize: "200% 100%",
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}


