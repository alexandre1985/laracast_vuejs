<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said...
                        </p>
                        <p>
                            {{ status.created_at | ago | capitalize }}
                        </p>
                    </div>

                    <div class="message-body" v-text="status.body"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    moment.locale('pt');

    export default {
        data() {
            return { statuses: [] }
        },
        filters: {
            ago(date) {
                return moment(date).fromNow();
            },
            capitalize(text) {
                return text.charAt(0).toUpperCase() + text.slice(1);
            }
        },
        created() {
            axios.get('/statuses')
                .then(response => this.statuses = response.data);
        }
    }
</script>
