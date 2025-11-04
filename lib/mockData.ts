// Mock data for development and testing

import { Video, Creator, Request } from '@/types';

export const mockCreators: Creator[] = [
    {
        id: 'krypton-t',
        name: 'Krypton T',
        username: 'kryptont',
        avatar: '/placeholder-avatar.jpg',
        isVerified: true,
        isTopCreator: true,
        rating: 4.8,
        bio: 'Creator of "What if the cold war went hot? an alternate history" and other amazing content.',
        stats: {
            videos: 24,
            fulfilled: 18,
            followers: 1200,
        },
    },
    {
        id: 'blue-apron',
        name: 'Blue Apron',
        username: 'blueapron',
        avatar: '/placeholder-avatar.jpg',
        isVerified: true,
        isTopCreator: false,
    },
];

export const mockVideos: Video[] = [
    {
        id: '1',
        title: 'What if the cold war went hot? an alternate history',
        thumbnail: '/placeholder-video.jpg',
        duration: '4:30',
        views: 12000,
        creator: mockCreators[0],
        requestedBy: 'OceanDreamer',
        timestamp: '1 month ago',
        isRequested: true,
    },
    {
        id: '2',
        title: 'Ancient Rome: The Rise and Fall of an Empire',
        thumbnail: '/placeholder-video.jpg',
        duration: '8:15',
        views: 15000,
        creator: mockCreators[0],
        timestamp: '2 weeks ago',
        isRequested: false,
    },
    {
        id: '3',
        title: 'Future of Technology: AI and Beyond',
        thumbnail: '/placeholder-video.jpg',
        duration: '12:30',
        views: 8000,
        creator: mockCreators[0],
        timestamp: '3 days ago',
        isRequested: false,
    },
];

export const mockRequests: Request[] = [
    {
        id: '1',
        creator: mockCreators[1],
        title: 'Sustainable Cooking: Farm to Table Series',
        description: 'Create a series showcasing sustainable cooking practices using locally sourced ingredients. Visit local farms and interview farmers about their practices. Show the journey from farm to table.',
        timestamp: '8h ago',
        amount: 900,
        isTrending: true,
        isSponsored: true,
    },
    {
        id: '2',
        creator: mockCreators[0],
        title: 'World War 2: Untold Stories',
        description: 'A documentary series exploring lesser-known stories from World War 2. Focus on personal accounts and previously undiscovered archives.',
        timestamp: '1 day ago',
        amount: 1500,
        isTrending: true,
        isSponsored: false,
    },
];
