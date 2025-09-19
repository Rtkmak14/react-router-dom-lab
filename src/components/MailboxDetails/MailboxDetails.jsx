import { useParams } from 'react-router'

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  const singleMailbox = mailboxes.find(
    (box) => box._id === Number(mailboxId)
  );

  return (
    <>
      <h2>{singleMailbox._id}</h2>
      <dl>
        <dt>Owner:</dt>
        <dd>{singleMailbox.boxOwner}</dd>
        <dt>Size:</dt>
        <dd>{singleMailbox.boxSize}</dd>
      </dl>
    </>
  );
};

export default MailboxDetails

