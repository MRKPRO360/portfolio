import Messages from '@/components/Messages/Messages';
import TextHeading from '@/components/TextHeading/TextHeading';

// const messages = [
//   {
//     id: 1,
//     name: 'Alice Johnson',
//     email: 'alice@example.com',
//     message: 'Hey there! How are you?',
//   },
//   {
//     id: 2,
//     name: 'Bob Smith',
//     email: 'bob@example.com',
//     message: 'Just checking in. Let me know if you need anything.',
//   },
//   {
//     id: 3,
//     name: 'Charlie Brown',
//     email: 'charlie@example.com',
//     message: 'Looking forward to our meeting next week.',
//   },
// ];

async function MessagesPage() {
  const res = await fetch(
    'https://next-portfolio-server-bay.vercel.app/api/v1/mails'
  );
  const messages = await res.json();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <TextHeading text="Your Messages" />
      </div>
      <Messages messages={messages.data} />
    </div>
  );
}
export default MessagesPage;
