import { Dimensions, PixelRatio } from "react-native";

const { width: LARGHEZZA_SCHERMO, height: ALTEZZA_SCHERMO } = Dimensions.get("window");

const [dimensioneCorta, dimensioneLunga] = 
    LARGHEZZA_SCHERMO < ALTEZZA_SCHERMO
        ? [LARGHEZZA_SCHERMO, ALTEZZA_SCHERMO]
        : [ALTEZZA_SCHERMO, LARGHEZZA_SCHERMO];

const larghezzaLineaGuidaBase = 375;
const altezzaLineaGuidaBase = 812;

export const scala = (size: number) =>
    Math.round(
        PixelRatio.roundToNearestPixel(
            (dimensioneCorta / larghezzaLineaGuidaBase) * (size as number)
        )
    );

export const scalaVerticale = (size: number) =>
    Math.round(
        PixelRatio.roundToNearestPixel(
            (dimensioneLunga / altezzaLineaGuidaBase) * (size as number)
        )
    );