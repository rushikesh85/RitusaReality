import { useState } from 'react';

// Sample data - replace with your actual images
const sampleImages = [
    { id: 1, url: 'https://via.placeholder.com/400x300', title: 'Property 1', category: 'Residential' },
    { id: 2, url: 'https://via.placeholder.com/400x300', title: 'Property 2', category: 'Commercial' },
    { id: 3, url: 'https://via.placeholder.com/400x300', title: 'Property 3', category: 'Residential' },
    { id: 4, url: 'https://via.placeholder.com/400x300', title: 'Property 4', category: 'Commercial' },
    { id: 5, url: 'https://via.placeholder.com/400x300', title: 'Property 5', category: 'Residential' },
    { id: 6, url: 'https://via.placeholder.com/400x300', title: 'Property 6', category: 'Residential' },
];

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Residential', 'Commercial'];

    const filteredImages = filter === 'All'
        ? sampleImages
        : sampleImages.filter(img => img.category === filter);

    return (
        <div className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="mb-4">Property Gallery</h1>
                    <p className="text-slate-600 text-lg md:text-xl">
                        Explore our collection of premium properties
                    </p>
                </div>

                <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`px-6 py-2 border-2 rounded-lg font-medium transition-all ${filter === category
                                    ? 'bg-primary border-primary text-white'
                                    : 'bg-white border-slate-300 text-slate-700 hover:border-primary hover:text-primary'
                                }`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredImages.map(image => (
                        <div
                            key={image.id}
                            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-72 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl md:text-2xl mb-2 text-white">{image.title}</h3>
                                <p className="opacity-90">{image.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
