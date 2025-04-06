const packages = {
    individual: [
        { 
            id: 1, 
            title: "Wedding", 
            description: "Make sure the moment of a lifetime is captured for eternity.", 
            image: "../assets/images/_package/marriage.jpg" 
        },
        { 
            id: 2, 
            title: "Maternity", 
            description: "Capture the beauty of motherhood with our professional maternity photography.", 
            image: "../assets/images/_package/maternity.jpg" 
        },
        { 
            id: 3, 
            title: "Baby & kids", 
            description: "Kids grow up fast, make sure every month is captured for years", 
            image: "../assets/images/_package/baby.png" 
        },
        {
            id: 4,
            title: "Parties",
            description: "Special occasions demand special attention! Let's Click!",
            image: "../assets/images/_package/parties.jpg",
        }
    ],
    corporate: [
        { 
            id: 5, 
            title: "Corporate Events", 
            description: "Professional coverage for your business gatherings.", 
            image: "../assets/images/_package/corporate.jpg" ,
        },
        { 
            id: 6, 
            title: "Product Photography", 
            description: "Showcase your products in the best light.", 
            image: "../assets/images/_package/product.jpg" ,
        },
        { 
            id: 7, 
            title: "Team Portraits", 
            description: "Professional team photos for your company.", 
            image: "../assets/images/_package/teamportrait.jpg" ,
        }
    ]
  };
  
  function displayPackages(packageType) {
    const cardContainer = document.getElementById('card-container');
    
    if (!cardContainer) {
        console.error("Card container element not found");
        return;
    }
  
    // Get the right package array
    const currentPackages = packages[packageType];
    
    // Generate HTML for the cards
    cardContainer.innerHTML = currentPackages.map(item => `
        <div class="card bg-white rounded-xl flex flex-col items-center justify-center p-4 md:p-6 h-full">
      <img src="${item.image}" alt="${item.title}" class="w-full h-[30vh] object-cover hover:scale-105 transition-transform duration-300" />
      <h2 class="mt-2 text-lg md:text-xl font-medium">${item.title}</h2>
      <p class="text-justify w-[90%] md:w-[80%] mx-auto my-2 md:my-4 text-sm md:text-base">${item.description}</p>
      <button class="bg-gray-400 p-2 md:p-3 rounded-lg md:rounded-xl mt-2 md:mt-4 text-white w-full font-medium text-base md:text-xl hover:scale-105 hover:bg-orange-400 transition-transform" 
              onclick="window.location.href='./wedding.html'">
          More Details
      </button>
  </div>
    `).join("");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const individualLink = document.getElementById('individual-link');
    const cooperateLink = document.getElementById('cooperate-link');
    const individualUnderline = document.getElementById('individual-underline');
    const cooperateUnderline = document.getElementById('cooperate-underline');
  
    // Initialize with individual packages
    displayPackages('individual');
    individualUnderline.style.display = 'block';
    cooperateUnderline.style.display = 'none';
  
    individualLink.addEventListener('click', () => {
        displayPackages('individual');
        individualUnderline.style.display = 'block';
        cooperateUnderline.style.display = 'none';
    });
  
    cooperateLink.addEventListener('click', () => {
        displayPackages('corporate');
        cooperateUnderline.style.display = 'block';
        individualUnderline.style.display = 'none';
    });
  });