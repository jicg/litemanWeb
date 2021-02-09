import {shallowReactive} from "vue";
import http from "../api/http";
import {useRoute, useRouter} from "vue-router";

export class Menu {
    id: number = 0;
    code: string = "";
    name: string = "";
    icon: string = "";
    sort: number = 100;
    uri: string = "";
    tableCode: string = "";
    description: string | undefined;
    menuCode: string | undefined;
    childList: Menu[] = [];
    active: boolean = true;
}

export function loadParam() {
    let route = useRoute();
    const router = useRouter()
    console.log(route.params)
}

const menusData = shallowReactive({
    menus: [] as Menu[],
    loading: true,
    error: null,
})

export function getMenus() {
    const router = useRouter()
    const route = useRoute();

    http.getObj<Menu[]>("/sys/menus?subSystemCode=" + route.params["code"]).then(rets => {
        menusData.loading = false;
        menusData.menus = rets;
    }).catch(e => {
        menusData.error = e;
        menusData.loading = false;
    })


    const handleSelect = (code: string) => {
        console.log(code);
    }

    const handleSelectMenu = (menu: Menu) => {
        if (menu.uri) {
            router.push(menu.uri)
            return;
        }
        if (menu.tableCode && menu.tableCode.indexOf("/") < 0) {
            router.push("/mod/" + route.params["code"] + "/table/" + menu.tableCode);
            return;
        }
    };

    let handleOpen = (key: String, keyPath: String) => {
        console.log(key, keyPath);
    };
    let handleClose = (key: String, keyPath: String) => {
        console.log(key, keyPath);
    }

    return {menusData, handleOpen, handleClose, handleSelect, handleSelectMenu};
}

