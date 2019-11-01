export class BezierPair {
  // P1

  /** @default 0.0 */
  X1: Number;
  /** @default 0.0 */
  Y1: Number;

  // P2

  /** @default 1.0 */
  X2: Number;
  /** @default 1.0 */
  Y2: Number;
  constructor(p1x?: Number, p1y?: Number, p2x?: Number, p2y?: Number);
}

/**
 * @param origin value
 * @param dest value
 * @param current step, clamped to `[0.0, total]`
 * @param total steps for the animation, clamped to `[0.0, Number.MAX_VALUE]`
 * @param curve to apply, default `CSS_Linear`
 *
 * @returns value at `current` step
 */
export function CorrectorLevel(
  origin: Number, dest: Number,
  current: Number, total: Number,
  curve?: BezierPair): Number;

/** 0, 0, 1, 1 */
declare const CSS_Linear: BezierPair;
/** 0.25, 0.1, 0.25, 1 */
declare const CSS_Ease: BezierPair;

/** 0.42, 0, 1, 1 */
declare const CSS_EaseIn: BezierPair;
/** 0.47, 0, 0.74, 0.71 */
declare const CSS_EaseInSine: BezierPair;
/** 0.55, 0.09, 0.68, 0.53 */
declare const CSS_EaseInQuadratic: BezierPair;
/** 0.55, 0.06, 0.68, 0.19 */
declare const CSS_EaseInCubic: BezierPair;
/** 0.9, 0.03, 0.69, 0.22 */
declare const CSS_EaseInQuartic: BezierPair;
/** 0.76, 0.05, 0.86, 0.06 */
declare const CSS_EaseInQuintic: BezierPair;
/** 0.95, 0.05, 0.8, 0.04 */
declare const CSS_EaseInExponential: BezierPair;
/** 0.6, 0.04, 0.98, 0.34 */
declare const CSS_EaseInCircular: BezierPair;
/** 0.6, -0.28, 0.74, 0.05 */
declare const CSS_EaseInBackward: BezierPair;

/** 0, 0, 0.58, 1 */
declare const CSS_EaseOut: BezierPair;
/** 0.39, 0.58, 0.57, 1 */
declare const CSS_EaseOutSine: BezierPair;
/** 0.25, 0.46, 0.45, 0.94 */
declare const CSS_EaseOutQuadratic: BezierPair;
/** 0.22, 0.61, 0.36, 1 */
declare const CSS_EaseOutCubic: BezierPair;
/** 0.17, 0.84, 0.44, 1 */
declare const CSS_EaseOutQuartic: BezierPair;
/** 0.23, 1, 0.32, 1 */
declare const CSS_EaseOutQuintic: BezierPair;
/** 0.19, 1, 0.22, 1 */
declare const CSS_EaseOutExponential: BezierPair;
/** 0.08, 0.82, 0.17, 1 */
declare const CSS_EaseOutCircular: BezierPair;
/** 0.18, 0.89, 0.32, 1.28 */
declare const CSS_EaseOutBackward: BezierPair;

/** 0.42, 0, 0.58, 1 */
declare const CSS_EaseInOut: BezierPair;
/** 0.45, 0.05, 0.55, 0.95 */
declare const CSS_EaseInOutSine: BezierPair;
/** 0.46, 0.03, 0.52, 0.96 */
declare const CSS_EaseInOutQuadratic: BezierPair;
/** 0.65, 0.05, 0.36, 1 */
declare const CSS_EaseInOutCubic: BezierPair;
/** 0.77, 0, 0.18, 1 */
declare const CSS_EaseInOutQuartic: BezierPair;
/** 0.86, 0, 0.07, 1 */
declare const CSS_EaseInOutQuintic: BezierPair;
/** 1, 0, 0, 1 */
declare const CSS_EaseInOutExponential: BezierPair;
/** 0.79, 0.14, 0.15, 0.86 */
declare const CSS_EaseInOutCircular: BezierPair;
/** 0.68, -0.55, 0.27, 1.55 */
declare const CSS_EaseInOutBackward: BezierPair;

/*
  Mozilla Firefox Quantum
  See https://design.firefox.com/photon/motion/duration-and-easing.html
 */

/** 0.07, 0.95, 0, 1 */
declare const CSS_Phothon: BezierPair;

/*
  Google Material Design
  See https://material.io/design/motion/speed.html#easing
*/

/** 0.4, 0.0, 0.2, 1 */
declare const CSS_MaterialStandardCurve: BezierPair;
/** 0.0, 0.0, 0.2, 1 */
declare const CSS_MaterialDecelerationCurve: BezierPair;
/** 0.4, 0.0, 1, 1 */
declare const CSS_MaterialAccelerationCurve: BezierPair;
/** 0.4, 0.0, 0.6, 1 */
declare const CSS_MaterialSharpCurve: BezierPair;