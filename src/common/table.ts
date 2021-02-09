import {useRoute, useRouter} from "vue-router";
import http from "../api/http";
import {shallowReactive} from "vue";

export interface ColumnAttrEntity {
    canNewVisible: boolean;
    canNew: boolean;
    canEditVisible: boolean;
    canEdit: boolean;
    canListVisible: boolean;
    canSearch: boolean;
    canExport: boolean;
    canImport: boolean;
}

export interface ColumnEntityList {
    id: number;
    name: string;
    label: string;
    description: string;
    columnType: string;
    defVal: string;
    columnAttrEntity: ColumnAttrEntity;
    columnLink?: string;
    active: boolean;
}

export interface Table {
    id: number;
    name: string;
    label: string;
    description?: string;
    columnEntityList: ColumnEntityList[];
    buttonEntityList: any[];
    tableCateEntity?: any;
    active: boolean;
}


const tableData = shallowReactive({
    table: {} as Table,
    loading: true,
    error: null,
})

export function getTable() {
    const router = useRouter()
    const route = useRoute();
    console.log("tableCode " + route.params["tableCode"])

    http.getObj<Table>("/sys/table/" + route.params["tableCode"]).then(ret => {
        console.log(ret)
        tableData.loading = false;
        tableData.table = ret;
    }).catch(e => {
        tableData.error = e;
        tableData.loading = false;
    })
    return {};
}