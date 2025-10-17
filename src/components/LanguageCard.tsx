import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = { name: string; slug: string; description: string };

export default function LanguageCard({ name, slug, description }: Props) {
  return (
    <motion.div whileHover={{ y: -4 }} className="card card-hover p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-xs bg-brand-100 text-brand-700 px-2 py-1 rounded-full">Beginner</span>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4">
        <Link className="btn btn-primary" to={`/languages/${slug}`}>Explore</Link>
      </div>
    </motion.div>
  );
}
