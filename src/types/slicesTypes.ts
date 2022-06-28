export interface CurrentUserSliceTypes {
    name: string | undefined;
    email: string | undefined;
    img?: string | undefined;
}

export interface SetCharactersSliceTypes {
    characters: CharactersProps[];
    info: {
        pages: number;
        notFoundError: boolean;
    };
}

export interface CharactersProps {
    name: string;
    image: string;
    status: string;
    id: number | null;
}

export interface SingleCharacterTypes {
    character: CharacterTypesInfo;
}

export interface CharacterTypesInfo {
    name: string;
    id: number | null;
    image: string;
    status: string;
    species: string,
    gender: string;
    location: string;
    episode: string[];
    created: string;
}


export interface FavoriteTypes {
    favoriteCharacters: CharactersProps[];
}

