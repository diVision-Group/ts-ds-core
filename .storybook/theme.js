import { create } from '@storybook/theming/create.js';
import { version } from "../package.json";
import logo from './transdev-negativo.svg';

export default create({
    base: 'light',
    colorPrimary: '#F263C0',
    colorSecondary: '#1D0259',
    appBg: '#0D0126',
    appBorderRadius: 8,
    barTextColor: '#202020',
    barSelectedColor: '#0D0126',
    inputBg: '#0d0126',
    inputBorder: '#f263c0',
    inputTextColor: '#f2f2f2',
    brandTitle: `Ts Design System v${version}`,
    brandUrl: '/',
    brandImage: logo,
    brandTarget: '_self',
});