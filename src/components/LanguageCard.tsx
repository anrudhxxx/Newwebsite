import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {
  lang: string;
  title: string;
  color: string;
  description: string;
  count: number;
};

export default function LanguageCard({ lang, title, color, description, count }: Props) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-2xl bg-white p-5 shadow-soft border">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: color + '22', color }}>{count} lessons</span>
      </div>
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
      <Link to={`/languages/${lang}`} className="mt-4 inline-block rounded-xl bg-black text-white px-3 py-1 text-sm">
        Browse
      </Link>
    </motion.div>
  );
}
