export interface Commerce {
    idCommerce: number,
    nameCommerce: string,
    maxCapacity: number
}

export interface Service {
    idService: number,
    idCommerce: number,
    nameService: string,
    initTime: string,
    finalTime: string,
    duration: number
}

export interface Turn {
    idTurn?: number,
    idService: number,
    labelService?: string,
    labelCommerce?: string,
    dateTurn: string,
    initTime: string,
    finalTime: string,
    status: boolean
}