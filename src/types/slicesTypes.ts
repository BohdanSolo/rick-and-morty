export interface currentUserSliceTypes {
  name: string | undefined | null;
  email: string | undefined | null;
  img?: string | undefined | null;
}

export interface setCharactersSliceTypes {
  characters: charactersProps[];
  info: {
    pages: number;
  };
}

export interface charactersProps {
  name: string;
  image: string;
  status: string;
  id: number | null;
}

export interface singleCharacterTypes {
  user: {
    name: string,
    id: number | null,
    image: string,
    status: string,
    gender: string,
    location: string
    episode: string[],
    created: string,
  }
}
