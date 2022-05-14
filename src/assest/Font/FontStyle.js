/** @format */

import { createGlobalStyle } from "styled-components";
import MontLight from "../Font/Montserrat-Light.ttf";
import MontBold from "../Font/Montserrat-Bold.ttf";
import MontMedium from "../Font/Montserrat-Medium.ttf";

const FontStyle = createGlobalStyle`
    @font-face {
        font-family: Mont-Light;
        src: url(${MontLight});
    }

    @font-face {
        font-family: Mont-Bold;
        src: url(${MontBold});
    }
    @font-face {
        font-family: Mont-Medium;
        src: url(${MontMedium});
    }
`;
export default FontStyle;
