import { Link } from 'react-router';

const MailboxList = ({mailboxes}) => {
  return (
    <>
      <h2>Mailboxes</h2>
      <ul>
        {mailboxes.map((currentBox) => (
          <li key={currentBox._id}>
            <Link to={`/mailboxes/${currentBox._id}`}>
              Box#: {currentBox._id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MailboxList

