import { Contacts, Link, List } from './contacts.styles'
import { ReactComponent as Telegram } from 'assets/icons/contacts-icons/telegram.svg'
import { ReactComponent as GitHub } from 'assets/icons/contacts-icons/github.svg'
import { ReactComponent as LinkedIn } from 'assets/icons/contacts-icons/linkedin.svg'

export const FooterContacts = () => {
    return (
        <Contacts>
            <strong>Contact with me</strong>
            <List>
                <li>
                    <Link target="_blank" href="https://t.me/future_undefined">
                        <Telegram width="24px" height="24px" />
                    </Link>
                </li>
                <li>
                    <Link target="_blank" href="https://github.com/yazmeyaa">
                        <GitHub width="24px" height="24px" />
                    </Link>
                </li>
                <li>
                    <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/yazmeyaa/"
                    >
                        <LinkedIn width="24px" height="24px" />
                    </Link>
                </li>
            </List>
        </Contacts>
    )
}
