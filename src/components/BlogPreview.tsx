
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        id: 'future-of-work-eq',
        title: 'The Future of Work: Why Emotional Intelligence is the #1 Skill',
        excerpt: 'Explore how EQ is becoming the most critical skill in the AI-driven workplace.',
        date: '2024-01-15',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Leadership'
    },
    {
        id: 'building-high-performing-teams',
        title: 'Building High-Performing Teams Through EQ Assessment',
        excerpt: 'Learn how to identify and develop emotional intelligence gaps in your team.',
        date: '2024-01-12',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Team Building'
    },
    {
        id: 'micro-learning-eq',
        title: 'Micro-Learning: The Secret to EQ Development',
        excerpt: 'Discover why bite-sized learning is more effective than traditional training.',
        date: '2024-01-10',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Learning'
    }
];

const BlogPreview: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent mb-4">
                            Latest Insights
                        </h2>
                        <p className="text-xl text-gray-600">
                            Expert advice on building emotional intelligence and high-performing team cultures.
                        </p>
                    </div>
                    <Link
                        to="/blogs"
                        className="group flex items-center gap-2 text-rebuttl-blue font-bold hover:gap-4 transition-all duration-300"
                    >
                        View all articles
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="group overflow-hidden border-gray-100 hover:shadow-xl transition-all duration-300">
                            <Link to={`/blogs/${post.id}`} className="block relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-rebuttl-blue">
                                    {post.category}
                                </div>
                            </Link>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {new Date(post.date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </div>
                                </div>
                                <Link to={`/blogs/${post.id}`}>
                                    <h3 className="text-xl font-bold mb-3 hover:text-rebuttl-blue transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <Link
                                    to={`/blogs/${post.id}`}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-rebuttl-blue hover:gap-3 transition-all"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
