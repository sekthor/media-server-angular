export class Media {
    mediaId: number;
    title: string;
    thumbnail: string;
    description: string;
    mediaType: string;
    releaseYear: number
    tags: string[];
}

export class Movie extends Media {
    filePath: string;
}

export class Show extends Media{
    seasons: Season[];
}

export class Season {	
    seasonId: number;
    seasonNo: number;
    episodes: Episode[];
}

export class Episode {
    episodeId: number;
    episodeNo: number;
    name: string;
    filePath: string;
}
