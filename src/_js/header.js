// header.js
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.mobileMenuOpen = false;
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
      </style>
      <link href="../_css/output.css" rel="stylesheet">
      
      <header class="bg-white text-black py-4 px-6 fixed w-full z-50 shadow-md" style="position: static">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center">
            <img src="../../assests/images/headerlogo.png" alt="Little Sweet Photography Logo" class="h-20 w-auto">
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300 font-medium">Home</a>
            <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300 font-medium">About Us</a>
            <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300 font-medium">Packages</a>
            <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300 font-medium">Contact Us</a>
            <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300 font-medium">John As Photographer</a>
          </nav>
          
          <!-- Mobile Menu Button -->
          <button class="md:hidden p-2 focus:outline-none text-black" aria-label="Toggle menu" aria-expanded="false" id="mobile-menu-button">
            <i class="fas ${this.mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl"></i>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div class="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 transition-all duration-300 ease-in-out ${this.mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}" id="mobile-menu">
          <div class="flex flex-col items-center justify-center h-full space-y-8 text-xl text-white">
            <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300 py-2 px-4">Home</a>
            <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300 py-2 px-4">About Us</a>
            <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300 py-2 px-4">Packages</a>
            <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300 py-2 px-4">Contact Us</a>
            <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300 py-2 px-4">John As Photographer</a>
          </div>
        </div>
      </header>
    `;
  }

  connectedCallback() {
    const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
    
    mobileMenuButton.addEventListener('click', () => {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      this.updateMenuState();
    });

    // Close menu when clicking on links
    const mobileLinks = this.shadowRoot.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.mobileMenuOpen = false;
        this.updateMenuState();
      });
    });
  }

  updateMenuState() {
    const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
    const icon = mobileMenuButton.querySelector('i');
    
    // Update ARIA attributes
    mobileMenuButton.setAttribute('aria-expanded', this.mobileMenuOpen);
    
    icon.classList.remove(this.mobileMenuOpen ? 'fa-bars' : 'fa-times');
    icon.classList.add(this.mobileMenuOpen ? 'fa-times' : 'fa-bars');
    icon.className = `fas ${this.mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`;

    
    // Update menu visibility
    if (this.mobileMenuOpen) {
      mobileMenu.classList.remove('invisible');
      mobileMenu.classList.add('visible');
      mobileMenu.classList.remove('opacity-0');
      mobileMenu.classList.add('opacity-100');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('visible');
      mobileMenu.classList.add('invisible');
      mobileMenu.classList.remove('opacity-100');
      mobileMenu.classList.add('opacity-0');
      document.body.style.overflow = '';
    }
  }
}

customElements.define('header-component', HeaderComponent);