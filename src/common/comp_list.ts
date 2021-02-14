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


export const shortcuts = [{
    text: '最近一周',
    value: (() => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        return [start, end]
    })(),
}, {
    text: '最近一个月',
    value: (() => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        return [start, end]
    })(),
}, {
    text: '最近三个月',
    value: (() => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        return [start, end]
    })(),
}]