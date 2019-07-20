<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>{{ $route.params.id }}</p>
        <p>{{ $route.params.newsTitle }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'hello params'
        }
    },
    beforeRouteEnter:(to, from, next) => {
        console.log(to);
        console.log(from);
        next()
    },
    beforeRouteLeave:(to, from, next) => {
        console.log(to);
        console.log(from);
        next()
    }
}
</script>