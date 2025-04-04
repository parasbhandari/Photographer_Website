document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  headerContainer.innerHTML = `
    <header class="bg-white text-black py-4 px-6 fixed w-full z-50 shadow-md">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <img src="../assets/images/headerlogo.png" alt="Little Sweet Photography Logo" class="h-15 w-20 lg:h-20 lg:w-auto">
        </div>
        <nav class="hidden md:flex items-center space-x-8">
          <a href="../pages/index.html" class="hover:text-[#FF6F00] transition-colors duration-300 font-medium">Home</a>
          <a href="../pages/about.html" class="hover:text-[#FF6F00] transition-colors duration-300 font-medium">About Us</a>
          <a href="../pages/packages.html" class="hover:text-[#FF6F00] transition-colors duration-300 font-medium">Packages</a>
          <button class="border-2 border-orange-500 p-2 rounded-full">
            <a href="../pages/contact.html" class="hover:text-[#FF6F00] transition-colors duration-300 font-medium">
              <i class="fa-solid fa-phone-volume" style="color: orange;"></i>
              <span>Contact Us</span>
            </a>
          </button>
          <button class="border-2 border-orange-500 p-2 rounded-full bg-orange-500">
            <a href="../pages/photographer.html" class="text-white hover:text-white">Join As Photographer</a>
          </button>
        </nav>
        <button class="md:hidden p-2 focus:outline-none text-white bg-orange-500" aria-label="Toggle menu" id="mobile-menu-button">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
      <div class="lg:hidden fixed inset-0 bg-orange-300 text-bold bg-opacity-95 z-40 transition-all duration-300 ease-in-out opacity-0 invisible" id="mobile-menu">
        <div class="flex flex-col items-center justify-center h-full space-y-8 text-xl text-white relative">
          <button class="absolute top-6 right-6 p-2 focus:outline-none" id="mobile-menu-close">
            <i class="fas fa-times text-3xl text-white"></i>
          </button>
          <a href="../pages/index.html" class="hover:text-[#FF6F00] transition-colors duration-300 py-2 px-4">Home</a>
          <a href="../pages/about.html" class="hover:text-[#FF6F00] transition-colors duration-300 py-2 px-4">About Us</a>
          <a href="../pages/packages.html" class="hover:text-[#FF6F00] transition-colors duration-300 py-2 px-4">Packages</a>
          <button class="border-2 border-orange-500 p-2 rounded-full bg-orange-500">
            <a href="../pages/contact.html" class="hover:text-[#FF6F00] transition-colors duration-300 font-medium">
              <i class="fa-solid fa-phone-volume" style="color: orange;"></i>
              <span>Contact Us</span>
            </a>
          </button>
          <button class="border-2 border-orange-500 p-2 rounded-full bg-[#FF6F00]">
            <a href="../pages/photographer.html" class="text-white hover:text-white">Join As Photographer</a>
          </button>
        </div>
      </div>
    </header>
  `;

  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("invisible");
    mobileMenu.classList.toggle("opacity-100");
    document.body.style.overflow = mobileMenu.classList.contains("opacity-100") ? "hidden" : "";
  });

  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.add("opacity-0", "invisible");
    mobileMenu.classList.remove("opacity-100");
    document.body.style.overflow = "";
  });

  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("opacity-0", "invisible");
      mobileMenu.classList.remove("opacity-100");
      document.body.style.overflow = "";
    });
  });
});