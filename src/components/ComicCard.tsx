
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

interface ComicCardProps {
  id: string;
  title: string;
  cover: string;
  author: string;
  category: string;
}

const ComicCard = ({ id, title, cover, author, category }: ComicCardProps) => {
  return (
    <Link to={`/comic/${id}`} className="comic-card block">
      <div className="relative">
        <img src={cover} alt={title} className="comic-card-image" />
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="glass-panel">
            {category}
          </Badge>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-lg leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{author}</p>
      </div>
    </Link>
  );
};

export default ComicCard;
