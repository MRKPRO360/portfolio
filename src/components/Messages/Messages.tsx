'use client';
import { IMessage } from '@/types';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Calendar } from 'lucide-react';
function Messages({ messages }: { messages: IMessage[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {messages.map((message, key) => (
        <motion.div
          key={message._id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: key * 0.1 }}
          className="p-4 bg-backgroundLight rounded-sm flex flex-col gap-3"
        >
          <div className="flex items-center gap-3 border-dotted border-b-[3px] border-backgroundDark">
            <User className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">{message.name}</span>
          </div>
          <div className="flex items-center gap-3 border-dotted border-b-[3px] border-backgroundDark">
            <Mail className="w-5 h-5" />
            <span>{message.email}</span>
          </div>
          <div className="flex items-center gap-3 border-dotted border-b-[3px] border-backgroundDark">
            <MessageSquare className="w-5 h-5 text-green-500" />
            <p>{message.message}</p>
          </div>
          <div className="flex items-center gap-3 border-dotted border-b-[3px] border-backgroundDark">
            <Calendar className="w-5 h-5 text-amber-400" />
            <span>{new Date(message.createdAt).toLocaleString()}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Messages;
