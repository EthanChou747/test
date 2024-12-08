# LedDisplay

Create an LED display with configurable display time on micro:bit.

## 中文 (繁體)

在 micro:bit 上創建具有可配置顯示時間的 LED 圖示。

## Usage 使用方法

### JavaScript

```typescript
LedDisplay.drawLedDisplay(
  [
    [false, false, false, false, false],
    [false, true, true, true, false],
    [false, true, false, true, false],
    [false, true, true, true, false],
    [false, false, false, false, false],
  ],
  1000
);
```
