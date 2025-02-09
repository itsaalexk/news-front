require("@testing-library/jest-dom");
const React = require("react");
const { TextEncoder, TextDecoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.React = React;
