<template>
    <div class="gallery" ref="app">
        <div class="row">
            <img v-for="(photo, index) in photos" :key="index" :src="photo" alt="dog" />
            <div ref="observer" class="observer"></div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            photos: [],
            loading: false,
            page: 0,
        };
    },
    mounted() {
        const options = {

            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                this.getPhotos()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)
    },

    methods: {
        getPhotos() {
            this.loading = true;
            axios.get(`https://dog.ceo/api/breeds/image/random/20?page=${this.page}`)
                .then(response => {
                    this.photos = [...this.photos, ...response.data.message];
                    this.page += 1
                    this.loading = false;
                })
                .catch(error => console.error(error));
        },

    },
};
</script>
  
<style lang="scss">
.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 20px;

        img {
            width: 250px;
            height: 250px;
            margin: 10px;
            object-fit: cover;
        }
    }

    @media (max-width: 767px) {
        .row {
            flex-direction: column;

            img {
                width: 46%;
            }
        }
    }
}
</style>
  
