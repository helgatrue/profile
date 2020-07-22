<template>
    <v-app id="inspire">

        <v-app-bar
                app
                color="indigo"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Personal profile</v-toolbar-title>

            <v-spacer></v-spacer>

                <v-avatar>
                    <img
                            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                            alt="User"
                    >
                </v-avatar>



        </v-app-bar>

        <v-main>
            <v-container
                    class="fill-height"
                    fluid
            >

                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col class="text-center">

                        <template>
                            <v-card
                                    max-width="1000"
                                    min-height="500"
                                    class="mx-auto"
                            >
                                <v-card-title>User's data</v-card-title>
                                <v-card-text>Name</v-card-text>
                                <v-card-text>E-mail</v-card-text>
                                <v-card-text>Password</v-card-text>
                            </v-card>
                        </template>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-footer
                color="indigo"
                app
        >
            <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },

        data: () => ({
            drawer: null,
        }),
    }
</script>
