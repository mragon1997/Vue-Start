<template>
    <div v-if="data.length">
        <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="padding">
            <v-tooltip />
            <v-axis />
            <v-line position="time*rate" />
            <v-guide v-for="{ type, position,content, style, start, end, lineLength, index } in guides" :type="type" :position="position" :content="content" :v-style="style" :start="start" :end="end" :lineLength="lineLength" :key="index">
            </v-guide>
        </v-chart>
    </div>
</template>
<script>
import data from './demo_data.js'
const scale = [
    {
        dataKey: 'time',
        range: [0, 1],
    },
];

const guides = [

];

export default {
    data() {
        return {
            data: data,
            scale,
            height: 440,
            padding: [50],
            guides,
        }
    }
}
</script>
