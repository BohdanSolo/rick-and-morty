export interface currentUserSliceTypes {
  name: string | undefined;
  email: string | undefined;
  img?: string | undefined;
}

export interface setCharactersSliceTypes {
  characters: charactersProps[];
  links: {
    prev: string | null;
    next: string | null;
  };
}

interface charactersProps {
  name: string;
  image: string;
  id: number | null;
}
