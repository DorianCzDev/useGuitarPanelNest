import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
--primary-bg-color: #131720;
--primary-bg-hover-color: #1a202d;
--primary-border-color: #293347;
--secondary-border-color: #212a3a;
--secondary-bg-color: #0766d0;
--secondary-bg-hover-color: #0552a8;
--accient-bg-color: #181c28;
--secondary-accient-bg-color: #0b0e13;
--primary-font-color: #d4d4d4;
--secondary-font-color: #a3a3a3;

}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
    font-family: 'Lato';
	box-sizing: border-box;
	color: #fff;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`;

export default GlobalStyles;
