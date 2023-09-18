export type GameProtocol = {
    id: number;
    name: string;
    release: string;
    studio: string;
}

export type NewGame = Omit<GameProtocol,"id">


export type ApplicationError = {
    name: string;
    message: string;
  };
  
  export type RequestError = {
    status: number;
    data: object | null;
    statusText: string;
    name: string;
    message: string;
  };
  