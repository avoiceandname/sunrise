import React from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const SpiralSketch: Sketch = (p5) => {
  const numRings = 200;
  const minRadius = 10;
  const maxRadius = 400;
  const spiralSpacing = 1;
  const spiralAngle = 0.04;
  const gradientStartColor = [255, 255, 0]; // Yellow
  const gradientEndColor = [255, 165, 0]; // Orange

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.noLoop();
  };

  p5.draw = () => {
    p5.background(255, 244, 236);
    const centerX = p5.width / 2;
    const centerY = p5.height / 2;

    let currentRadius = minRadius;
    let angle = 0;

    for (let i = 0; i < numRings; i++) {
      const radius = currentRadius + i * spiralSpacing;
      const diameter = radius * 2;

      const gradientColor = [];
      for (let j = 0; j < 3; j++) {
        gradientColor[j] = p5.lerp(
          gradientStartColor[j],
          gradientEndColor[j],
          p5.map(i, 0, numRings, 0, 1)
        );
      }
      p5.stroke(gradientColor);
      p5.noFill();

      const x = centerX + p5.cos(angle) * radius;
      const y = centerY + p5.sin(angle) * radius;
      p5.ellipse(x, y, diameter);

      angle += spiralAngle;
    }
  };
};

const SpiralSketchPage = () => {
  return <NextReactP5Wrapper sketch={SpiralSketch} />;
};

export default SpiralSketchPage;
