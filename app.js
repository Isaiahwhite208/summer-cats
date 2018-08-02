const mrSnibbly = {
 name: 'Mr. Snibbly',
 moods: [
  'classy',
  'sassy',
  'gone'
 ],
 moodImg: ['assets/cat.jpg',
  'assets/madcat.jpg',
  ''],
 tolerance: 7,
 pets: 0,
 moodIndex: 0
}

const catImg = document.getElementById('cat-Img')
const catName = document.getElementById('name')
const mood = document.getElementById('mood')
const pets = document.getElementById('pets')

function draw() {
 catImg.setAttribute('src', mrSnibbly.moodImg[mrSnibbly.moodIndex])
 catName.innerText = mrSnibbly.name
 mood.innerText = mrSnibbly.moods[mrSnibbly.moodIndex]
 pets.innerText = mrSnibbly.pets.toString()
 if (mrSnibbly.pets > mrSnibbly.tolerance * 2) {
  document.getElementById('pet-button').disabled = true;
 }
}

function pet() {
 mrSnibbly.pets++;
 if (mrSnibbly.pets % mrSnibbly.tolerance == 0) {
  mrSnibbly.moodIndex++
 }
 draw();
}

function reset() {

}
draw()