import {ref, shallowReactive, toRaw} from "vue";
import {SetupContext} from "@vue/runtime-core";

export function getLogin(props: any, ctx: SetupContext) {
    const onLogin = function () {
        console.log(toRaw(user));
    }
    const user = shallowReactive({
        name: '',
        pwd: '',
    });
    const rules = {
        name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, message: '长度必须大于6', trigger: 'blur'}
        ],
    };
    const form = ref(null)
    const submitForm = function () {
        // @ts-ignore
        form.value.validate(valid => {
            if (!valid) return;
            onLogin();
        });
    }
    return {form, user, rules, onLogin, submitForm};
}