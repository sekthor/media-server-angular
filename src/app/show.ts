import { Season } from './season';

export class Show {
    mediaId: number;
    title: string;
    thumbnail: string;
    description: string;
    mediaType: string;
    releaseYear:number;
    tags: string[];
    seasons: Season[];
}