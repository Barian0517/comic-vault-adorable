import React from 'react';
import Layout from '../components/Layout';
import ComicCard from '../components/ComicCard';
import { Badge } from '../components/ui/badge';

const FEATURED_COMICS = [
  {
    id: '1',
    title: "The Cyber Chronicles",
    cover: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: "Alex Rivera",
    category: "Sci-Fi"
  },
  {
    id: '2',
    title: "Digital Dreams",
    cover: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    author: "Sarah Chen",
    category: "Fantasy"
  },
  {
    id: '3',
    title: "Tech Tales",
    cover: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    author: "Mark Thompson",
    category: "Adventure"
  },
  {
    id: '4',
    title: "Code Warriors",
    cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    author: "Diana Wright",
    category: "Action"
  },
];

const Index = () => {
  return (
    <Layout>
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <Badge variant="outline" className="mb-2">Featured Comics</Badge>
            <h2 className="text-3xl font-bold">Trending Now</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURED_COMICS.map((comic) => (
            <ComicCard key={comic.id} {...comic} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
