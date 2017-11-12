import { injectGlobal } from 'styled-components'
import 'sanitize.css/sanitize.css'
import 'Assets/fonts/roboto/index.css'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    font-size: 62.5%;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  body, button, input, textarea, select {
    padding-top: 5.2rem;
    line-height: 1.66;
    font-weight: normal;
    font-family: 'Roboto', Roboto, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    background: #352357;
    background-image: linear-gradient(-180deg, #1C2344 0%, #352357 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-size: 1.32rem;
    color: white;
  }
  *:focus {
    outline: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    opacity: 0.1;
  }
  img:not([src=""]) {
    animation: fadein 0.2s 0.4s both;
  }
  @keyframes fadein {
    to { opacity: 1; }
  }
  ::-webkit-input-placeholder {
    color: #A7AAAF;
  }
  :placeholder-shown { /* Standard one last! */
    color: #A7AAAF;
  }
  .clearfix:before,
  .clearfix:after {
    content: "";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  .clearfix {
    zoom: 1; /* For IE 6/7 (trigger hasLayout) */
  }
`;