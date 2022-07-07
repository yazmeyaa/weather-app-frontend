import { createGlobalStyle } from 'styled-components'
import Armata from 'assets/fonts/Armata/Armata-Regular.ttf'
import Coda from 'assets/fonts/Coda/Coda-Regular.ttf'

export const FontsImport = createGlobalStyle`
    &{

        @font-face {
		font-family: 'Roboto';
		src: url('../fonts/Roboto/Roboto-Regular.ttf') format('opentype'); 
        font-weight: normal;
        }

        @font-face {
            font-family: 'Coda';
            src: url(${Coda});
        }

        @font-face {
		font-family:'Armata' ;
		src: local('Armata')
        url(${Armata}) format('truetype');
		font-weight: normal;
	    }

    }
`
