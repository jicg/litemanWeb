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
    description: string | undefined;
    menuId: number | undefined;
    childList: Menu[] = [];
    zindex: number = 1000;
    cdate: string = ""
    udate: string = "";
    active: boolean = true;
}

export function loadParam() {
    let route = useRoute();
    const router = useRouter()
    console.log(route.params)
}

const menusData = shallowReactive({
    menus: [] as Menu[],
    // leftMenus: [] as Menu[],
    loading: true,
    error: null,
})

export function getMenus() {
    // console.log("--------getMenus------")
    const router = useRouter()
    const route = useRoute();
    // console.log(route.params["code"])
    // if (menusData.menus.length == 0) {
    //
    // }else{
    //     if (route.params["menu"]) {
    //         let menus = menusData.menus.filter(s => s.code == route.params["menu"]);
    //         menusData.leftMenus = menus[0].childList;
    //     }
    // }

    http.getObj<Menu[]>("/sys/menus?subSystemCode=" + route.params["code"]).then(rets => {
        // menusData.menus = rets.filter(it => it.childList != null && it.childList.length > 0);
        // if (menusData.menus != null && menusData.menus.length > 0) {
        //     menusData.leftMenus = menusData.menus[0].childList
        // }
        menusData.loading = false;
        menusData.menus = rets;
        // if (route.params["menu"]) {
        //     let menus = menusData.menus.filter(s => s.code == route.params["menu"]);
        //     menusData.leftMenus = menus[0].childList;
        // }
    }).catch(e => {
        menusData.error = e;
        menusData.loading = false;
    })


    // const handleSelect = (code: string) => {
    //     let menus = menusData.menus.filter(s => s.code == code);
    //     if (menus == null || menus.length <= 0) return;
    //     menusData.leftMenus = menus[0].childList;
    //     router.replace({path: "/home/" + code})//.then(r => console.log(r)).catch(reason => console.log(reason))
    // }

    let handleOpen = (key: String, keyPath: String) => {
        console.log(key, keyPath);
    };
    let handleClose = (key: String, keyPath: String) => {
        console.log(key, keyPath);
    }

    return {menusData,  handleOpen, handleClose};
}

