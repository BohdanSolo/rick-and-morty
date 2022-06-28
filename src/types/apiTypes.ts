export interface CharacterTypes {
    "id": number,
    "name": string,
    "image": string,
    "status": string,
    "species"?: string,
    "type?": string,
    "gender"?: string,
    "origin"?: {
        "name"?: string,
        "url"?: string,
    },
    "location"?: {
        "name"?: string,
        "url"?: string,
    },
    "episode"?: string[],
    "url"?: string,
    "created"?: string,
}

export interface InfoTypes {
    "count": string,
    "pages": string,
    "next": string | null,
    "prev": string | null,
}

export interface ResponseCharactersTypes {
    info: InfoTypes,
    results: CharacterTypes[]
}

