export interface ListQuery {
    label: string,
    name: string,
    type: QueryType,
}

export enum QueryType {
    Str,
    Num,
    Select,
    Date,
}
