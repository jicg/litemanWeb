import {computed, shallowReactive} from "vue";
import http from "../api/http";
import {useRoute, useRouter} from "vue-router";
import {SetupContext} from "@vue/runtime-core";

//region
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




export function getMenus() {
    const router = useRouter()
    const route = useRoute();
    const menusData = shallowReactive({
        menus: [] as Menu[],
        loading: true,
        error: null,
    })
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

    const handleSelectMenu = (key: String, keyPath: String) => {
        router.push("/mod/" + route.params["code"] + "/menu/" + key);
    };

    let handleOpen = (key: String, keyPath: String) => {
        // console.log(key, keyPath);
    };
    let handleClose = (key: String, keyPath: String) => {
        // console.log(key, keyPath);
    }

    return {menusData, handleOpen, handleClose, handleSelect, handleSelectMenu};
}

//endregion





export function getMenu() {
    const router = useRouter()
    const route = useRoute();

    let menuCode = route.params["menuCode"];
    const menuData = shallowReactive({
        menu: {} as Menu,
        loading: true,
        error: null,
    })
    http.getObj<Menu>("/sys/menu/" + menuCode).then(ret => {
        menuData.loading = false;
        menuData.menu = ret;
    }).catch(e => {
        menuData.error = e;
        menuData.loading = false;
    })
    return {
        menuData
    }
}
