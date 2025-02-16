'use client';
import Cta from '@/components/Cta/Cta';
import TextHeading from '@/components/TextHeading/TextHeading';
import { IContact } from '@/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

function ContactPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>();

  const onSubmit = async (data: IContact) => {
    const toastId = toast.loading('Submitting your message...');
    setLoading(true);

    try {
      const res = await fetch(
        'https://next-portfolio-server-bay.vercel.app/api/v1/mails',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const message = await res.json();

      setLoading(false);

      if (message.success)
        toast.success('Message submitted successfully!', { id: toastId });
      else toast.error(message.message, { id: toastId });
      router.push('/');
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong', { id: toastId });
    }
  };

  return (
    <div className="max-w-lg mt-4 mx-auto p-6 bg-backgroundLight shadow-md rounded-lg text-textGray">
      <div className="text-center">
        <TextHeading text="Contact With Me!" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Please provide your name' })}
            className="border p-2 w-full rounded text-backgroundDark "
            placeholder="Name exmp. Arthur"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="text"
            {...register('email', { required: 'Please provide your email!' })}
            className="border p-2 w-full rounded text-backgroundDark "
            placeholder="Auhtor name exmp. James"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            placeholder="Your message..."
            {...register('message', {
              required: 'Please drop your message here',
            })}
            className="border p-2 w-full rounded text-backgroundDark "
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <Cta disabled={loading} fullWidth={true} text="Submit" />
      </form>
    </div>
  );
}

export default ContactPage;
