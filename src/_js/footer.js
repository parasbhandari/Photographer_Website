class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
        
        /* Fix for logo container */
        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;
          width: 8rem;
          height: 8rem;
        }
        
        @media (min-width: 768px) {
          .logo-container {
            width: 10rem;
            height: 10rem;
          }
        }
      </style>
      <link href="../_css/output.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <div class="bg-black text-white">
        <footer class="flex flex-col">
          <!-- Main content -->
          <div class="flex-grow flex flex-col items-center justify-center py-2 px-4 mx-auto max-w-7xl">
            <!-- Logo - Fixed container -->
            <div class="mb-8 w-full flex justify-center">
              <div class="logo-container">
                <img src="../../assests/images/footerlogo.png" alt="footer_logo" class="w-full h-auto max-w-full object-contain"/>
              </div>
            </div>

            <!-- Rest of your footer content remains the same -->
            <p class="text-center mb-8 px-4 w-full max-w-2xl">Starts with a click – ends with a notification.</p>

            <!-- Social Media Icons -->
            <div class="flex flex-wrap justify-center gap-6 md:gap-8 mb-10 w-full">
              <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">
                <i class="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">
                <i class="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">
                <i class="fab fa-youtube text-2xl"></i>
              </a>
            </div>

            <!-- Three Columns -->
            <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 px-4">
              <!-- Quick Links -->
              <div class="text-center md:text-left">
                <h3 class="text-xl font-semibold mb-6">Quick Links</h3>
                <ul class="space-y-4">
                  <li><a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">About</a></li>
                  <li><a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">Contact</a></li>
                  <li><a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">Services</a></li>
                  <li><a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">Terms & Privacy</a></li>
                </ul>
              </div>

              <!-- Occasions -->
              <div class="text-center">
                <h3 class="text-xl font-semibold mb-6">Occasions</h3>
                <ul class="space-y-4">
                  <li><a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">Weddings</a></li>
                  <li><a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">Events</a></li>
                  <li><a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">Product Events</a></li>
                  <li><a href="#" class="hover:text-[#FF6F00] transition-colors duration-300">Shoot</a></li>
                </ul>
              </div>

              <!-- Subscribe -->
              <div class="text-center md:text-left lg:text-right">
                <h3 class="text-xl font-semibold mb-6">Subscribe</h3>
                <form class="relative mb-6 w-full max-w-md mx-auto md:mx-0">
                  <input 
                    type="email" 
                    placeholder="Subscribe to Newsletter" 
                    class="w-full py-3 px-4 pr-12 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
                    required
                  >
                  <button 
                    type="submit"
                    class="absolute right-0 top-0 bottom-0 bg-[#FF6F00] text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#E65A00] transition-colors duration-300"
                  >
                    <i class="fas fa-envelope text-lg"></i>
                  </button>
                </form>
                <p class="text-sm">
                  Stay Inspired! Subscribe to Our Newsletter for Photography Tips,
                  <span class="hidden md:inline"><br></span>
                  Exclusive Offers, and the Latest Updates.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-[#FF6F00] py-4 px-6 w-full">
          <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <p class="text-center md:text-left">2025 | All Rights Reserved by LSP</p>
            <p class="text-center md:text-right">Designed & Developed By 
              <a href="https://w3developers.com.np" target="_blank" rel="noopener noreferrer" class="hover:underline">W3 Developers</a>  
            </p>
          </div>
        </div>
        </footer>
      </div>
    `;
  }

  connectedCallback() {
    const subscribeForm = this.shadowRoot.querySelector('form');
    
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = subscribeForm.querySelector('input[type="email"]');
      const email = emailInput.value;
      
      if (email && email.includes('@')) {
        alert('Thank you for subscribing! You will receive photography tips and updates soon.');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
}

customElements.define('footer-component', FooterComponent);