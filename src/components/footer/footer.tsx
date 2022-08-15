import { FooterContacts as Contacts } from './contacts/contacts'
import { FooterWrapper, APILogo } from './footer.styles'

export const Footer = () => {
    return (
        <FooterWrapper>
            <Contacts />
            <APILogo>
                Powered by
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.weatherapi.com/"
                >
                    <img
                        src="https://cdn.weatherapi.com/v4/images/weatherapi_logo.png"
                        alt="WeatherAPI logo"
                    />
                </a>
            </APILogo>
        </FooterWrapper>
    )
}
