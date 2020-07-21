<template>
    <v-app id="inspire">
        <v-main>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="indigo"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Authorization form</v-toolbar-title>
                                <v-spacer></v-spacer>

                            </v-toolbar>
                            <v-container>
                                <v-form
                                        id="app"
                                        @submit="checkForm"
                                        action="/something"
                                        method="post"
                                        ref="form"
                                        v-model="valid"
                                >
                                    <v-text-field
                                            v-bind="name1"
                                            v-model="name"

                                            :error-messages="nameErrors"
                                            :rules="nameRules"
                                            label="Name"
                                            required
                                            @input="$v.name.$touch()"
                                            @blur="$v.name.$touch()"
                                    ></v-text-field>

                                    <Password></Password>

                                    <v-checkbox
                                            v-model="checkbox"
                                            :rules="[v => !!v || 'You must agree to continue!']"
                                            label="Do you agree?"
                                            required
                                    ></v-checkbox>

                                    <v-btn
                                            :disabled="!valid"
                                            color="success"
                                            class="mr-4"
                                            @click="validate"
                                            type="submit"
                                    >
                                        Send
                                    </v-btn>
                                </v-form>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
                <Page></Page>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Password from "@/components/Password";
    import Page from "@/components/Page";

    export default {
        data: () => ({
            data: {
            },
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
            login: {
                name1: 'abc',
                email1: 'abc@m.com',
            }
        }),

        methods: {
            checkForm: function (e) {
                if (this.name && this.age) return true;
                this.errors = [];
                if (!this.name) this.errors.push("Name required.");
                e.preventDefault();
            },
            validate() {
                this.$refs.form.validate()
            },
        },
        components: {
            Password,
            Page
        },
    }
</script>
