<template>
    <div class="map">
        <l-map :zoom="13" :center="[51.498691, -0.154455]">
            <l-tile-layer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png">
            </l-tile-layer>
            <l-marker :lat-lng="[51.498691, -0.154455]">
                <l-popup>
                    <div class="popup">
                        <div class="popup_title">Working hours</div>
                        <div class="popup_text"><span>Mon - Fri</span><span>9am - 6pm</span></div>
                        <div class="popup_text"><span>Sat - Sun</span><span>Closed</span></div>
                    </div>
                </l-popup>
            </l-marker>

        </l-map>
    </div>

</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LMarker, LTileLayer, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
    name: "MyMap",
    components: {
        LMap,
        LMarker,
        LTileLayer,
        LPopup
    }
}
</script>

<style lang="scss">
.map {
    width: 100%;
    height: 500px;
    max-height: 80vh;
    background: #fff;
}
.leaflet-popup-close-button {
    display: none;
}
.popup {
    padding: 12px 20px;
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #666666;
    &_title {
        text-align: center;
        margin-bottom: 10px;
    }
    &_text {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        font-weight: 700;
    }
}
</style>