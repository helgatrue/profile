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
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Login form</v-toolbar-title>
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
                                            v-model="name"
                                            :counter="10"
                                            :rules="nameRules"
                                            label="Name"
                                            required
                                    ></v-text-field>

                                    <v-text-field
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                    ></v-text-field>

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
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
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
    }
</script>
