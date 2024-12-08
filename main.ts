namespace LedDisplay {
    /**
     * 繪製 LED 圖示並設定顯示時間
     * @param leds 用滑鼠點選哪些LED要發光，25個布林值數組
     * @param duration 顯示時間，單位毫秒
     */
    //% blockId=draw_led_display block="繪製LED圖示 $leds|顯示時間 %duration ms"
    //% leds.shadow="matrixLEDs"
    //% duration.min=100 duration.max=10000
    //% group="LED Display"
    export function drawLedDisplay(leds: boolean[][], duration: number): void {
        basic.clearScreen();
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                if (leds[y][x]) {
                    led.plot(x, y);
                } else {
                    led.unplot(x, y);
                }
            }
        }
        basic.pause(duration);
        basic.clearScreen();
    }
}
