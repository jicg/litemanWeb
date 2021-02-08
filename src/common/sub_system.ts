import {useRoute, useRouter} from "vue-router";
import http from "../api/http";
import {shallowReactive} from "vue";

export interface SubSystem {
    id: number;
    code: string;
    name: string;
    icon: string;
    sort: number;
    active: boolean;
}

const subSystemData = shallowReactive({
    systems: [] as SubSystem[],
    loading: true,
    error: null,
})

export function getSystems() {
    const router = useRouter()
    const route = useRoute();

    const toMod = (system: SubSystem) => {
        router.push('/mod/' + system.code)
    }

    subSystemData.loading = true
    http.getObj<SubSystem[]>("/sys/systems").then(rets => {
        console.log(rets)
        subSystemData.systems = rets;
        subSystemData.loading = false;
    }).catch(e => {
        console.log(e);
        subSystemData.error = e;
        subSystemData.loading = false;
    })

    return {toMod, subSystemData};
}