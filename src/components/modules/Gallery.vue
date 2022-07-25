<template>
    <lightgallery class="gallery" v-if="galleryData.length !== 0" :settings="{ plugins: plugins }">
        <a v-for="(item, i) in galleryData" :key="i"
            :href="require('@/assets/images/gallery/'+item.img)">
            <img :src="require('@/assets/images/gallery/'+item.img)" :alt="item.alt" />
        </a>
    </lightgallery>
</template>

<script>
import axios from 'axios'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

export default {
    name: "Gallery",
    components: {
        Lightgallery,
        lgThumbnail,
        lgZoom
    },
    data() {
        return {
            plugins: [lgThumbnail, lgZoom],
            galleryData: []
        }
    },
    created() {
        axios
            .get("../data/gallery.json")
            .then(resp => {
                this.galleryData = resp.data
            })
    }
}
</script>

<style lang="scss" scoped>

@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    a {
        flex-basis: 31%;
        max-height: 300px;
        position: relative;
        display: block;
        &::before {
            content: "+";
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 100px;
            background-color: rgba(85, 183, 255, .6);
            opacity: 0;
            transition: ease .4s all;
        }
        &:hover::before {
            opacity: .9;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }
}
@media screen and (max-width: 992px) {
    .gallery {
        a {
            flex-basis: 48%;
        }
    }
}
@media screen and (max-width: 650px) {
    .gallery {
        a {
            flex-basis: 100%;
        }
    }
}
</style>
