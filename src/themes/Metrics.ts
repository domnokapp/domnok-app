import { PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale();
const pixelScaler = (size: number) => size / fontScale;

const metrics = {
  tiny: pixelScaler(2),
  smaller: pixelScaler(4),
  small: pixelScaler(6),
  medium: pixelScaler(10),
  large: pixelScaler(16),
  larger: pixelScaler(20),
  huge: pixelScaler(32),
  extraHuge: pixelScaler(62),

  borderRadius: pixelScaler(6),
  largeBorderRadius: pixelScaler(8),
  largerBorderRadius: pixelScaler(20),
  roundBorderRadius: pixelScaler(100),

  inputHeight: pixelScaler(45),
  section: pixelScaler(24),
};

const fontSizes = {
  huge: pixelScaler(24),
  larger: pixelScaler(20),
  large: pixelScaler(16),
  regular: pixelScaler(14),
  medium: pixelScaler(12),
  small: pixelScaler(11),
  tiny: pixelScaler(8),
};

export { fontSizes, metrics, pixelScaler };