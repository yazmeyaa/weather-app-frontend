import { createGlobalStyle } from 'styled-components'
import Armata from 'assets/fonts/Armata/Armata-Regular.ttf'
import Coda from 'assets/fonts/Coda/Coda-Regular.ttf'
import Roboto from 'assets/fonts/Roboto/Roboto-Regular.ttf'
import Inter from 'assets/fonts/Inter/Inter.ttf'

export const FontsImport = createGlobalStyle`
    &{

        @font-face {
		font-family: 'Roboto';
		src: url(${Roboto}) format('opentype'); 
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

        @font-face {
		font-family: 'Inter';
		src: url(${Inter}) format('truetype'); 
        font-weight: normal;
        }
    }
`
