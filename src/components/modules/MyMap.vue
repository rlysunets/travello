<template>
    <div class="map">
        <l-map :zoom="13" :center="[51.498691, -0.154455]">
            <l-tile-layer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png">
            </l-tile-layer>
            <l-marker :lat-lng="[51.498691, -0.154455]" >
                <l-icon :icon-url="require('@/assets/images/marker-map.svg/')" />
                <l-popup>
                    Here is our office
                </l-popup>
            </l-marker>

        </l-map>
    </div>

</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LMarker, LTooltip, LTileLayer, LIcon, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
    name: "MyMap",
    components: {
        LMap,
        LMarker,
        LTooltip,
        LTileLayer,
        LIcon,
        LPopup

    }
}
</script>

<style>

.map {
    width: 100%;
    height: 500px;
    max-height: 80vh;
    background: #fff;
}
</style>