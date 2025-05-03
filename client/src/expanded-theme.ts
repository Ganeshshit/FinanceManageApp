
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string;
        main: string;
        light?: string;
        dark?: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}

// This empty export makes this file a module
export {}

