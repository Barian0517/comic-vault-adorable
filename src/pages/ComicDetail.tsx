
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { BookOpen } from 'lucide-react';

const ComicDetail = () => {
  const { id } = useParams();
  
  // This is mock data - in a real app, you'd fetch this based on the ID
  const comic = {
    id,
    title: "The Cyber Chronicles",
    cover: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: "Alex Rivera",
    category: "Sci-Fi",
    description: "In a world where technology and humanity intertwine, follow the journey of a young programmer who discovers a hidden digital realm.",
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="comic-card overflow-hidden rounded-lg">
            <img 
              src={comic.cover} 
              alt={comic.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <Badge variant="outline">{comic.category}</Badge>
            <h1 className="text-4xl font-bold">{comic.title}</h1>
            <p className="text-lg text-muted-foreground">By {comic.author}</p>
            <p className="text-lg">{comic.description}</p>
            <Button className="w-full" size="lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Reading
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComicDetail;
