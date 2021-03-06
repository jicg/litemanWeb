import {useRoute, useRouter} from "vue-router";
import http from "../api/http";
import {computed, shallowReactive} from "vue";
import {SetupContext} from "@vue/runtime-core";
import {ListQuery, QueryType, Option} from "./comp_list";

//region
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
    selectUse?: ColumnSelectUse;
    columnLink?: string;
    active: boolean;
}

export interface ColumnSelectUse {
    columnSelect: ColumnSelect;
    columnSelectDef?: String;
}

export interface SelectOption {
    id: number;
    label: string;
    value: string;
    active: boolean;
}

export interface ColumnSelect {
    id: number;
    label: string;
    code: string;
    selectOptions: SelectOption[];
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

export function getQs(table: Table): ListQuery[] {
    if (!table.columnEntityList) return [];
    //public enum ColumnType {Int, String, Float, Boolean, Date, Clob,Auto }
    return table.columnEntityList.map<ListQuery>(column => {
        let type = QueryType.Str;
        let options = [] as Option[];
        let optionDef: String = "";
        if (column.columnType == "Date") {
            type = QueryType.Date
        } else if (column.columnType == "Select") {
            type = QueryType.Select;
            optionDef = column.selectUse?.columnSelectDef || "";
            options = column.selectUse?.columnSelect?.selectOptions.map<Option>(it => {
                return {
                    label: it.label,
                    value: it.value,
                };
            }) || [];
        }
        return {
            name: column.name,
            label: column.label,
            type: type,
            options: options,
            optionDef: optionDef
        };
    });
}

export function getTable(props: any, ctx: SetupContext) {
    const router = useRouter()
    const route = useRoute();
    let tableCode = route.params["tableCode"];
    if (!tableCode) {
        tableCode = props.tableCode || "";
    }
    const tableData = shallowReactive({
        table: {} as Table,
        loading: true,
        error: null,
        qs: [] as ListQuery[],

    })
    http.getObj<Table>("/sys/table/" + tableCode).then(ret => {
        tableData.table = ret;
        tableData.qs = getQs(ret);
        tableData.loading = false;
    }).catch(e => {
        tableData.error = e;
        tableData.loading = false;
    })

    // let qs = computed(() => getQs(tableData.table));

    let query = (data: any) => {
        console.log(data);
    }
    return {tableData, tableCode, query};
}

//endregion