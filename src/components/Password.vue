<template>
    <v-form>
        <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                name="input-10-2"
                label="Password"
                hint="At least 8 characters"

                class="input-group--focused"
                @click:append="show = !show"
        ></v-text-field>
    </v-form>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                password: 'Password',
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                },
            }
        },
    }
</script>
