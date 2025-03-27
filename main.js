

const aiDatabase = {
    "sun": "☀️ The Sun is a giant ball of hot plasma that provides heat and light to our solar system. It is about 4.6 billion years old.",
    "earth": "🌍 Earth is the third planet from the Sun. It has an atmosphere rich in oxygen, liquid water, and supports millions of species, including humans.",
    "mars": "🪐 Mars is the fourth planet from the Sun, known as the Red Planet due to its iron-rich soil. It has the largest volcano in the solar system, Olympus Mons.",
    "jupiter": "🌀 Jupiter is the largest planet in the solar system. It has 79 known moons and a massive storm called the Great Red Spot that has lasted for centuries.",
    "saturn": "💍 Saturn is the sixth planet and is famous for its magnificent ring system made of ice and rock particles.",
    "uranus": "🔵 Uranus is the seventh planet and rotates on its side. It appears blue-green due to methane in its atmosphere.",
    "neptune": "🌊 Neptune is the farthest planet from the Sun and has the fastest winds in the solar system, reaching up to 2,100 km/h.",
    "moon": "🌙 The Moon is Earth's only natural satellite. It influences ocean tides and has been explored by astronauts from NASA’s Apollo missions.",
    "pluto": "❄️ Pluto was once the ninth planet but was reclassified as a dwarf planet in 2006. It has a heart-shaped glacier called Tombaugh Regio.",
    "mercury": "🔥 Mercury is the closest planet to the Sun and has the most extreme temperature changes, from -173°C at night to 427°C during the day.",
    "venus": "🟡 Venus is the hottest planet due to its thick atmosphere of carbon dioxide that traps heat. It has a surface temperature of 471°C.",
    "asteroid": "☄️ Asteroids are rocky objects orbiting the Sun, mostly found in the asteroid belt between Mars and Jupiter.",
    "comet": "🌠 Comets are icy bodies that release gas and dust when they get close to the Sun, forming a bright tail.",
    "galaxy": "🌌 A galaxy is a massive collection of stars, planets, gas, and dust bound by gravity. Our galaxy, the Milky Way, contains billions of stars.",
    "milky way": "✨ The Milky Way is our home galaxy, a spiral galaxy containing around 100-400 billion stars.",
    "black hole": "🕳️ A black hole is a region in space with such strong gravity that nothing, not even light, can escape from it.",
    "solar system": "🌞 The Solar System consists of the Sun and all objects that orbit it, including eight planets, moons, asteroids, and comets.",
    "exoplanet": "🪐 An exoplanet is a planet that orbits a star outside our solar system. Thousands have been discovered, some in habitable zones.",
    "nebula": "🌫️ A nebula is a vast cloud of gas and dust in space where new stars are born.",
    "supernova": "💥 A supernova is a powerful explosion that occurs when a star reaches the end of its life, releasing enormous energy.",
    "meteor": "🔥 A meteor is a space rock that burns up in Earth's atmosphere, creating a bright streak of light known as a shooting star.",
    "meteorite": "🌑 A meteorite is a meteor that survives the atmosphere and lands on Earth's surface.",
    "constellation": "⭐ A constellation is a group of stars forming a recognizable pattern. Famous ones include Orion, Ursa Major, and Cassiopeia.",
    "andromeda": "🌠 The Andromeda Galaxy is the nearest spiral galaxy to the Milky Way and is on a collision course with us in about 4.5 billion years.",
    "kuiper belt": "🧊 The Kuiper Belt is a region beyond Neptune filled with icy bodies, dwarf planets, and comets.",
    "oort cloud": "☁️ The Oort Cloud is a distant spherical shell of icy objects surrounding the solar system, where long-period comets originate.",
};







document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".explore-btn").forEach(button => {
        button.addEventListener("click", function() {
            let featureItem = this.parentElement;
            let planetName = featureItem.querySelector("p").textContent.trim();
            let rocket = featureItem.querySelector(".rocket");

            // Start animation
            rocket.classList.add("animate");

            // After animation, clear everything except navigation
            setTimeout(() => {
                document.querySelectorAll("body > *:not(nav)").forEach(element => element.remove());

                // Generate the correct form based on the planet
                let formHTML = getPlanetForm(planetName);
                
                // Append the new form to the body
                document.body.insertAdjacentHTML("beforeend", formHTML);
            }, 2000);
        });
    });
});






function toggleHeart(element) {
 element.classList.toggle("liked");
 if (element.classList.contains("liked")) {
     element.classList.replace("fa-regular", "fa-solid"); // Change to filled heart
 } else {
     element.classList.replace("fa-solid", "fa-regular"); // Change back to outline heart
 }
}
