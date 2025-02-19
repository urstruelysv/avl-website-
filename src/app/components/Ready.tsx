"use client";

import React, {
  CSSProperties,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

/* -------------------------------------------------------------------------- */
/*                                Flex Component                              */
/* -------------------------------------------------------------------------- */

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: boolean;
  minHeight?: number | string;
  position?: CSSProperties["position"];
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  style?: React.CSSProperties;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      fill,
      minHeight,
      position,
      direction = "row",
      align = "stretch",
      justify = "flex-start",
      style,
      ...rest
    },
    ref
  ) => {
    const flexStyle: CSSProperties = {
      display: "flex",
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      ...style,
    };

    if (fill) {
      flexStyle.width = "100%";
      flexStyle.height = "100%";
    }
    if (minHeight) {
      flexStyle.minHeight =
        typeof minHeight === "number" ? `${minHeight}rem` : minHeight;
    }
    if (position) {
      flexStyle.position = position;
    }

    return (
      <div ref={ref} style={flexStyle} {...rest}>
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";

/* -------------------------------------------------------------------------- */
/*                              Background Component                          */
/* -------------------------------------------------------------------------- */

interface MaskProps {
  cursor?: boolean;
  x?: number;
  y?: number;
  radius?: number;
}

interface GradientProps {
  display?: boolean;
  opacity?: number | string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  tilt?: number;
  colorStart?: string;
  colorEnd?: string;
}

interface DotsProps {
  display?: boolean;
  opacity?: number | string;
  color?: string;
  size?: string; // e.g. "24", "64"
}

interface GridProps {
  display?: boolean;
  opacity?: number | string;
  color?: string;
  width?: string;
  height?: string;
}

interface LinesProps {
  display?: boolean;
  opacity?: number | string;
  size?: string;
}

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: CSSProperties["position"];
  gradient?: GradientProps;
  dots?: DotsProps;
  grid?: GridProps;
  lines?: LinesProps;
  mask?: MaskProps;
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(
  (
    {
      position = "fixed",
      gradient = {},
      dots = {},
      grid = {},
      lines = {},
      mask = {},
      children,
      style,
      ...rest
    },
    forwardedRef
  ) => {
    // Default dot settings
    const dotsColor = dots.color || "rgba(255,255,255,0.3)";
    const dotsSize = "var(--static-space-" + (dots.size || "24") + ")";

    // State for mouse positions (for masking)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
    const backgroundRef = useRef<HTMLDivElement>(null);

    // Forward our ref
    useEffect(() => {
      if (typeof forwardedRef === "function") {
        forwardedRef(backgroundRef.current);
      } else if (forwardedRef) {
        (
          forwardedRef as React.MutableRefObject<HTMLDivElement | null>
        ).current = backgroundRef.current;
      }
    }, [forwardedRef]);

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        if (backgroundRef.current) {
          const rect = backgroundRef.current.getBoundingClientRect();
          setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          });
        }
      };

      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    useEffect(() => {
      let animationFrameId: number;

      const updateSmoothPosition = () => {
        setSmoothPosition((prev) => {
          const dx = cursorPosition.x - prev.x;
          const dy = cursorPosition.y - prev.y;
          const easingFactor = 0.05;
          return {
            x: Math.round(prev.x + dx * easingFactor),
            y: Math.round(prev.y + dy * easingFactor),
          };
        });
        animationFrameId = requestAnimationFrame(updateSmoothPosition);
      };

      if (mask.cursor) {
        animationFrameId = requestAnimationFrame(updateSmoothPosition);
      }

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, [cursorPosition, mask]);

    const getMaskStyle = (): CSSProperties => {
      if (mask.cursor) {
        return {
          "--mask-position-x": `${smoothPosition.x}px`,
          "--mask-position-y": `${smoothPosition.y}px`,
          "--mask-radius": `${mask.radius || 50}vh`,
        } as CSSProperties;
      }
      if (mask.x != null && mask.y != null) {
        return {
          "--mask-position-x": `${mask.x}%`,
          "--mask-position-y": `${mask.y}%`,
          "--mask-radius": `${mask.radius || 50}vh`,
        } as CSSProperties;
      }
      return {};
    };

    // Remap function for gradient position
    const remap = (
      value: number,
      inputMin: number,
      inputMax: number,
      outputMin: number,
      outputMax: number
    ) => {
      return (
        ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) +
        outputMin
      );
    };

    const adjustedX =
      gradient.x != null ? remap(gradient.x, 0, 100, 37.5, 62.5) : 50;
    const adjustedY =
      gradient.y != null ? remap(gradient.y, 0, 100, 37.5, 62.5) : 50;

    // Inline styles for each layer
    const gradientStyle: CSSProperties = gradient.display
      ? ({
          position: "absolute",
          pointerEvents: "none",
          opacity: gradient.opacity,
          ["--gradient-position-x" as string]: `${adjustedX}%`,
          ["--gradient-position-y" as string]: `${adjustedY}%`,
          ["--gradient-width" as string]:
            gradient.width != null ? `${gradient.width / 4}%` : "25%",
          ["--gradient-height" as string]:
            gradient.height != null ? `${gradient.height / 4}%` : "25%",
          ["--gradient-tilt" as string]:
            gradient.tilt != null ? `${gradient.tilt}deg` : "0deg",
          ["--gradient-color-start" as string]:
            gradient.colorStart || "#ff6600",
          ["--gradient-color-end" as string]:
            gradient.colorEnd || "transparent",
        } as CSSProperties)
      : {};

    const dotsStyle: CSSProperties = dots.display
      ? ({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: dots.opacity,
          ["--dots-color" as string]: dotsColor,
          ["--dots-size" as string]: dotsSize,
        } as CSSProperties)
      : {};

    const gridStyle: CSSProperties = grid.display
      ? {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: grid.opacity,
          backgroundSize: `${grid.width || "32px"} ${grid.height || "32px"}`,
          backgroundPosition: "0 0",
          backgroundImage: `
            linear-gradient(
              90deg,
              ${grid.color || "rgba(255,255,255,0.3)"} 0,
              ${grid.color || "rgba(255,255,255,0.3)"} 1px,
              transparent 1px,
              transparent ${grid.width || "32px"}
            ),
            linear-gradient(
              0deg,
              ${grid.color || "rgba(255,255,255,0.3)"} 0,
              ${grid.color || "rgba(255,255,255,0.3)"} 1px,
              transparent 1px,
              transparent ${grid.height || "32px"}
            )
          `,
        }
      : {};

    const linesStyle: CSSProperties = lines.display
      ? {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: lines.opacity,
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 0.5px, transparent 0.5px, transparent ${
            dots.size || "24px"
          })`,
        }
      : {};

    const containerStyle: CSSProperties = {
      ...getMaskStyle(),
      ...style,
    };

    return (
      <Flex
        ref={backgroundRef}
        fill
        position={position}
        style={containerStyle}
        {...rest}
      >
        {gradient.display && <div style={gradientStyle} />}
        {dots.display && <div style={dotsStyle} />}
        {lines.display && <div style={linesStyle} />}
        {grid.display && <div style={gridStyle} />}
        {children}
      </Flex>
    );
  }
);
Background.displayName = "Background";

/* -------------------------------------------------------------------------- */
/*                        Landing Page (Main Component)                       */
/* -------------------------------------------------------------------------- */

export default function LandingPage() {
  return (
    <Flex fill minHeight="100vh" position="relative">
      {/* Background Layer */}
      <Background
        position="absolute"
        mask={{ cursor: true }}
        gradient={{
          colorEnd: "transparent",
          colorStart: "#ff6600",
          display: true,
          height: 100,
          opacity: 1,
          tilt: 0,
          width: 150,
          x: 0,
          y: 0,
        }}
        dots={{
          color: "rgba(255,255,255,0.5)",
          display: true,
          opacity: 1,
          size: "64",
        }}
        grid={{
          color: "rgba(255,255,255,0.3)",
          display: true,
          height: "32px",
          opacity: 1,
          width: "32px",
        }}
        lines={{
          display: false,
          opacity: 1,
          size: "24",
        }}
      />
      {/* Foreground Content */}
      <Flex
        position="relative"
        direction="column"
        align="center"
        justify="center"
        style={{
          zIndex: 1,
          padding: "2rem",
          textAlign: "center",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Good things take time
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          This page is under construction
        </p>
        {/* <button
          style={{
            backgroundColor: "#ff6600",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          upgrade now
        </button> */}
      </Flex>
    </Flex>
  );
}
