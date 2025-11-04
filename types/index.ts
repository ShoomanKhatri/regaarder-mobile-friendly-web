export interface Video {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    views: number;
    creator: Creator;
    requestedBy?: string;
    timestamp: string;
    isRequested?: boolean;
}

export interface Creator {
    id: string;
    name: string;
    username: string;
    avatar: string;
    isVerified: boolean;
    isTopCreator: boolean;
    rating?: number;
    bio?: string;
    stats?: {
        videos: number;
        fulfilled: number;
        followers: number;
    };
}

export interface Request {
    id: string;
    creator: Creator;
    title: string;
    description: string;
    timestamp: string;
    amount?: number;
    isTrending?: boolean;
    isSponsored?: boolean;
}

export interface TabItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
}
