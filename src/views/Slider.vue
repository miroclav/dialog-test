<template>
  <main class="main">
    <div class="dog-breed-container">
      <select v-model="selectedBreed" @change="getRandomImage" class="select-breed">
        <option value="" disabled>Выберите породу собаки</option>
        <option v-for="breed in breeds" :value="breed">{{ breed }}</option>
      </select>

      <div class="buttons-container">
        <button @click="getselectedBreedImage" class="next-button">Следующая</button>
        <button @click="goBack()" class="back-button">Назад</button>
      </div>

      <img :src="currentImage" :alt="selectedBreed" class="dog-image">
    </div>
  </main>
</template>

<script>
export default {
  name: 'DogBreed',
  data() {
    return {
      breeds: [],
      selectedBreed: '',
      currentImage: '',
      images: []
    }
  },
  mounted() {
    this.getBreeds();
    this.getRandomImage()
  },
  methods: {
    async getRandomImage() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      this.currentImage = data.message
    },

    async getBreeds() {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
      this.breeds = Object.keys(data.message);
    },
    async getselectedBreedImage() {
      if (this.selectedBreed === '') {
        alert('Выберите породу собаки');
        return;
      }
      const response = await fetch(`https://dog.ceo/api/breed/${this.selectedBreed}/images/random`);
      const data = await response.json();
      this.currentImage = data.message;
      this.images.push(data.message);
    },
    goBack() {
      if (this.images.length > 1) {
        this.images.pop();
        this.currentImage = this.images[this.images.length - 1];
      }
    }
  }
}
</script>

<style lang="scss">
.dog-breed-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.select-breed {
  font-size: 16px;
  padding: 0.5rem;
  margin: 1rem auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.next-button,
.back-button {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.next-button:hover,
.back-button:hover {
  background-color: #0056b3;
}

.dog-image {
  max-width: 600px;
  margin: 2rem auto;
}
</style>