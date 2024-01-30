# leva-controls

Some control hints for [leva](https://www.npmjs.com/package/leva) that I can easily copy and paste.

```tsx
import { useControls } from 'leva';
import { BlendFunction } from 'postprocessing';

export const { ambientColor, ambientIntensity, directionalColor, directionalIntensity, directionalPosition } = useControls({
    ambientColor: '#ffc48d',
    ambientIntensity: {
        value: 0.25,
        min: 0,
        max: 4,
        step: 0.05,
    },
    directionalColor: '#ffffff',
    directionalPosition: [20, 20, 2],
    directionalIntensity: {
        value: 1,
        min: 0,
        max: 4,
        step: 0.05,
    },
});

export const { brightness, constrast, hue, saturation, middleGrey, maxLuminance, colorBlendFunction, hueSaturationBlend } = useControls({
    colorBlendFunction: {
        label: "C:avg Blend",
        options: [
            BlendFunction.OVERLAY,
            BlendFunction.NORMAL,
            BlendFunction.ADD,
            BlendFunction.COLOR_BURN,
            BlendFunction.COLOR_DODGE,
            BlendFunction.DARKEN,
            BlendFunction.LIGHTEN,
            BlendFunction.MULTIPLY
        ]
    },
    hueSaturationBlend: {
        label: "hue/sat Blend",
        value: 25,
        options: [
            BlendFunction.OVERLAY,
            BlendFunction.NORMAL,
            BlendFunction.ADD,
            BlendFunction.COLOR_BURN,
            BlendFunction.COLOR_DODGE,
            BlendFunction.DARKEN,
            BlendFunction.LIGHTEN,
            BlendFunction.MULTIPLY
        ]
    },
    brightness: {
        value: -0.15,
        min: -1,
        max: 1,
        step: 0.1
    },
    constrast: {
        value: 0.25,
        min: -1,
        max: 1,
        step: 0.1
    },
    hue: {
        value: 0,
        min: 0,
        max: Math.PI,
        step: 0.1
    },
    saturation: {
        value: 0.1,
        min: 0,
        max: Math.PI,
        step: 0.1
    },
    middleGrey: {
        min: 0,
        max: 1,
        value: 0.6,
        step: 0.1
    },
    maxLuminance: {
        min: 0,
        max: 64,
        value: 16,
        step: 1
    }
});

export const { textPosition, textRotation, textColor, parentRotation, textSize } = useControls({
    textPosition: [-2.234099999999996, 4.4, 11.195300000000007],
    textRotation: [-0.6860000000000003, 0.03199999999999987, 0],
    textColor: '#52595f',
    textSize: 0.22,
    parentRotation: [0, 0.84, 0]
});
```