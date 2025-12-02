// Dados dos Produtos
const products = [
  {
    id: 1,
    title: "BM Simples",
    price: 55.90,
    type: "bm",
    tags: ["Entrega imediata", "Garantia", "Suporte 24h"],
    features: ["Compartilha Pixel", "Limite R$ 280/dia", "3 Contas de Anúncio", "Campanha WhatsApp liberada"],
    description: "BM ideal para iniciar operações. Compartilha Pixel, Limite R$ 280/dia, 3 Contas de Anúncio e Campanha WhatsApp liberada.",
    badge: null
  },
  {
    id: 2,
    title: "Proxy Ultra IPv6",
    price: 39.90,
    type: "profile",
    tags: ["IP Dedicado", "Alta Performance"],
    features: [
      "Uso Exclusivo: CONTINGÊNCIA ANÚNCIOS",
      "Localização: BRASIL",
      "Protocolo: SOCKS5",
      "Tipo: IPV6",
      "Trocas Adicionais: 32%",
      "Cada proxy gera 1 IP único e exclusivo!",
      "SEM LIMITE DE USO E TRÁFEGO (GB)"
    ],
    description: "Sua contingência no Facebook ADS e Google ADS sem cruzamento de dados!",
    badge: null
  },
  {
    id: 3,
    title: "Perfil Comum",
    price: 59.90,
    type: "profile",
    tags: ["Iniciantes"],
    features: ["Perfil pessoal ativo", "Ótimo para testes e iniciantes", "Perfil com 6 meses a 1 ano de criação"],
    description: "Perfil pessoal ativo, ótima opção para quem está começando ou precisa realizar testes rápidos.",
    badge: null
  },
  {
    id: 4,
    title: "Perfil Verificado",
    price: 109.90,
    type: "verified",
    tags: ["Alta Confiança", "Confiável"],
    features: ["Perfil real com histórico", "Alta taxa de aprovação de anúncios", "Confiável", "Perfil com 6 meses a 1 ano de criação"],
    description: "Perfil real com histórico e alta taxa de aprovação. Extremamente confiável para suas campanhas.",
    badge: null
  },
  {
    id: 5,
    title: "Perfil Aquecido",
    price: 139.90,
    type: "warmed",
    tags: ["Mais Vendido", "Engajamento Real"],
    features: ["Engajamento real", "Já rodou campanhas", "Suporte prioritário", "Perfil com 6 meses a 1 ano de criação"],
    description: "O favorito! Perfil com engajamento real e histórico de campanhas. Inclui suporte prioritário.",
    badge: "Mais vendido"
  },
  {
    id: 6,
    title: "Combo 3 Perfis Verificado + 1 BM",
    price: 269.90,
    type: "combo",
    tags: ["Economia", "Agências"],
    features: ["3 Perfis Verificados", "1 BM em cada perfil", "Ideal para agências", "Economia no pacote", "Perfil com 6 meses a 1 ano de criação"],
    description: "Pacote econômico com 3 perfis verificados, cada um com 1 BM. A escolha ideal para agências e gestores.",
    badge: null
  },
  {
    id: 7,
    title: "BM 1.3k Limite Diário",
    price: 369.90,
    type: "bm",
    tags: ["Escala Agressiva", "Alto Limite"],
    features: ["Compartilha Píxel", "Limite R$ 1.300/dia [inicial]", "1 Conta (4 liberam após pgto)", "Campanha WhatsApp liberada"],
    description: "BM de alto limite (R$ 1.300/dia inicial). Vem com 1 conta criada e outras 4 liberam após o primeiro pagamento.",
    badge: null
  },
  {
    id: 8,
    title: "Combo 3 Perfis Aquecidos + BMs",
    price: 310.00,
    type: "combo",
    tags: ["Super Oferta", "Com BMs"],
    features: ["3 Perfis Reais BR", "2 BMs (R$260) por perfil", "Docs + Email + 2FA", "Entrega Imediata", "Perfil com 6 meses a 1 ano de criação"],
    description: "Pacote com 3 perfis aquecidos brasileiros. Cada um inclui 2 BMs (Limite R$260), documentos, acesso ao e-mail e 2FA ativo.",
    badge: "Novo"
  },
  {
    id: 9,
    title: "Perfil Marketplace",
    price: 34.90,
    type: "profile",
    tags: ["Marketplace", "Orgânico"],
    features: [
      "Média de 1 ano de criação",
      "Alta qualidade",
      "Marketplace do facebook liberado",
      "Pode interagir em grupos, postar etc",
      "❌ Não funciona para turbinar",
      "❌ Não anuncia no tráfego pago"
    ],
    description: "Perfil com Marketplace liberado, ideal para anúncios orgânicos e interação em grupos. Média de 1 ano de criação.",
    badge: "Novo"
  },
  {
    id: 10,
    title: "Combo 3 Perfis Verificados + Docs",
    price: 299.70,
    type: "combo",
    tags: ["Com Documentos", "Alta Segurança"],
    features: [
      "Identidade confirmada",
      "Acompanha o doc que verificou",
      "Todos com mais de um ano",
      "Autenticação de dois fatores ativa",
      "Acesso ao e-mail",
      "Perfil com 6 meses a 1 ano de criação"
    ],
    description: "Combo Premium com 3 perfis verificados. Inclui documentos de verificação, 2FA ativo e acesso ao e-mail.",
    badge: "Premium"
  },
  {
    id: 11,
    title: "Perfil Aquecido com 1 BM Simples",
    price: 99.90,
    type: "warmed",
    tags: ["Aquecido", "BM Incluso"],
    features: [
      "Acompanha documento",
      "Autenticação de dois fatores ativa",
      "Acesso ao e-mail",
      "Perfil com 6 meses a 1 ano de criação"
    ],
    description: "Perfil aquecido pronto para uso, acompanha 1 BM simples. Inclui documentos, 2FA e acesso ao e-mail.",
    badge: "Novo"
  }
];

// Estado
let cart = [];
let currentFilter = 'all';
let currentSort = 'bestsellers';
let currentSearch = '';

// Elementos DOM
let productsGrid;
let cartDrawer;
let cartOverlay;
let cartItemsContainer;
let cartTotalElement;
let cartCountElement;
let modalOverlay;
let modalBody;

// PIX Elements
let pixModal;
let closePixModalBtn;
let pixCheckoutBtn;
let pixTotalValue;
let pixCopyCodeInput;
let btnCopyPix;
let btnPixWhatsapp;

// Carousel Elements
let track;
let dotsContainer;

// Inicialização Simplificada e Robusta
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM Carregado. Iniciando App...");
  initApp();
});

function initApp() {
  try {
    // Initialize DOM Elements
    productsGrid = document.getElementById('products-grid');
    cartDrawer = document.getElementById('cart-drawer');
    cartOverlay = document.getElementById('cart-overlay');
    cartItemsContainer = document.getElementById('cart-items');
    cartTotalElement = document.getElementById('cart-total-price');
    cartCountElement = document.querySelector('.cart-count');
    modalOverlay = document.getElementById('product-modal');
    modalBody = document.getElementById('modal-body-content');

    // Initialize PIX Elements
    pixModal = document.getElementById('pix-modal');
    closePixModalBtn = document.getElementById('close-pix-modal');
    pixCheckoutBtn = document.getElementById('pix-checkout-btn');
    pixTotalValue = document.getElementById('pix-total-value');
    pixCopyCodeInput = document.getElementById('pix-copy-code');
    btnCopyPix = document.getElementById('btn-copy-pix');
    btnPixWhatsapp = document.getElementById('btn-pix-whatsapp');

    // Initialize Carousel Elements
    track = document.getElementById('testimonials-track');
    dotsContainer = document.getElementById('carousel-dots');

    if (!productsGrid) {
      console.error("Elemento products-grid não encontrado!");
      alert("Erro crítico: Elemento products-grid não encontrado.");
      return;
    }

    console.log("Elementos encontrados. Renderizando...");

    // Limpar mensagem de carregamento
    productsGrid.innerHTML = '';

    renderProducts();
    setupEventListeners();
    updateCartUI();
    initCarousel();

    console.log("App inicializado com sucesso.");
  } catch (error) {
    console.error("Erro ao inicializar app:", error);
    alert("Erro ao inicializar o site: " + error.message);
  }
}

// Renderização
function renderProducts() {
  let filtered = products;

  // Filtro
  if (currentFilter !== 'all') {
    filtered = products.filter(p => p.type === currentFilter || (currentFilter === 'bm' && p.type === 'bm'));
  }

  // Busca
  if (currentSearch) {
    const lowerSearch = currentSearch.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(lowerSearch) ||
      p.description.toLowerCase().includes(lowerSearch) ||
      (p.tags && p.tags.some(tag => tag.toLowerCase().includes(lowerSearch)))
    );
  }

  // Ordenação
  filtered.sort((a, b) => {
    if (currentSort === 'price-asc') return a.price - b.price;
    if (currentSort === 'price-desc') return b.price - a.price;
    if (currentSort === 'newest') return b.id - a.id;
    return 0; // bestsellers (default order for now)
  });

  if (!productsGrid) return;

  // Force display
  productsGrid.style.display = 'grid';

  if (filtered.length === 0) {
    productsGrid.innerHTML = '<p style="color: white; text-align: center; grid-column: 1/-1;">Nenhum produto encontrado.</p>';
    return;
  }

  productsGrid.innerHTML = filtered.map(product => `
    <div class="product-card">
      <div class="card-header">
        ${product.badge ? `<span class="badge">${product.badge}</span>` : ''}
        <i class="ph ph-facebook-logo" style="font-size: 3rem; color: #fff; opacity: 0.2;"></i>
      </div>
      <div class="card-body">
        <h3 class="product-title">${product.title}</h3>
        <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
        ${product.tags && product.tags.length > 0 ? `
          <div class="product-tags">
            ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
          </div>
        ` : ''}
        <ul class="product-features">
          ${product.features.slice(0, 3).map(f => `<li><i class="ph ph-check"></i> ${f}</li>`).join('')}
        </ul>
        <div class="card-actions">
          <button class="btn btn-outline" onclick="openProductModal(${product.id})">Detalhes</button>
          <button class="btn btn-primary btn-add-cart" onclick="addToCart(${product.id})">
            <i class="ph ph-shopping-cart"></i> Adicionar
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Event Listeners
function setupEventListeners() {
  // Filtros
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      renderProducts();
    });
  });

  // Ordenação
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Busca
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderProducts();
    });
  }

  // Carrinho
  const cartTrigger = document.querySelector('.cart-trigger');
  if (cartTrigger) cartTrigger.addEventListener('click', openCart);

  const closeCartBtn = document.querySelector('.close-cart');
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Modal Produto
  const closeModalBtn = document.querySelector('.close-modal');
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Checkout WhatsApp
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

  // Checkout PIX
  if (pixCheckoutBtn) {
    pixCheckoutBtn.addEventListener('click', handlePixCheckout);
  }

  // Modal PIX
  if (closePixModalBtn) {
    closePixModalBtn.addEventListener('click', closePixModal);
  }
  if (pixModal) {
    pixModal.addEventListener('click', (e) => {
      if (e.target === pixModal) closePixModal();
    });
  }

  // Copiar PIX
  if (btnCopyPix) {
    btnCopyPix.addEventListener('click', copyPixCode);
  }
}

// Funções do Carrinho
window.addToCart = (id) => {
  const product = products.find(p => p.id === id);
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  openCart();
};

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function updateCartUI() {
  if (!cartTotalElement || !cartCountElement || !cartItemsContainer) return;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartCountElement.textContent = count;
  cartTotalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Seu carrinho está vazio.</div>';
    if (pixCheckoutBtn) pixCheckoutBtn.disabled = true;
  } else {
    if (pixCheckoutBtn) pixCheckoutBtn.disabled = false;
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}</div>
          <div class="cart-item-remove" onclick="removeFromCart(${item.id})">Remover</div>
        </div>
      </div>
    `).join('');
  }

  // Expor função globalmente para o onclick do HTML gerado
  window.removeFromCart = removeFromCart;
}

function openCart() {
  if (cartDrawer) cartDrawer.classList.add('open');
  if (cartOverlay) cartOverlay.classList.add('open');
}

function closeCart() {
  if (cartDrawer) cartDrawer.classList.remove('open');
  if (cartOverlay) cartOverlay.classList.remove('open');
}

// Funções do Modal Produto
window.openProductModal = (id) => {
  const product = products.find(p => p.id === id);
  if (!modalBody || !modalOverlay) return;

  modalBody.innerHTML = `
    <h3 class="modal-product-title">${product.title}</h3>
    <div class="modal-product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
    <p class="modal-description">${product.description}</p>
    
    <div class="modal-features">
      <h4>O que está incluso:</h4>
      <ul class="product-features">
        ${product.features.map(f => `<li><i class="ph ph-check"></i> ${f}</li>`).join('')}
      </ul>
    </div>

    <button class="btn btn-primary btn-full" onclick="addToCart(${product.id}); closeModal();">
      ADICIONAR AO CARRINHO
    </button>
  `;

  modalOverlay.classList.add('open');
}

function closeModal() {
  if (modalOverlay) modalOverlay.classList.remove('open');
}

// Checkout WhatsApp
function checkout() {
  if (cart.length === 0) return;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let message = "Olá, gostaria de finalizar meu pedido:\n\n";

  cart.forEach(item => {
    message += `${item.quantity}x ${item.title} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
  });

  message += `\nTotal: R$ ${total.toFixed(2)}`;

  const finalMessage = encodeURIComponent(message);
  window.open(`https://wa.me/5551997140970?text=${finalMessage}`, '_blank');
}

// PIX Logic
function handlePixCheckout() {
  try {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const txid = generateUUID();

    if (typeof Pix === 'undefined') {
      alert("Erro: Biblioteca PIX não carregada. Recarregue a página.");
      return;
    }

    const pix = new Pix(
      '1c9b0a51-b7f6-4a1a-84d4-e7e76f0208bd',
      'Alex da Silva',
      'Rio Grande',
      txid,
      'Pagamento fbmarketbr'
    );

    const payload = pix.getPayload(total);

    // Update UI
    if (pixTotalValue) pixTotalValue.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    if (pixCopyCodeInput) pixCopyCodeInput.value = payload;

    // Generate QR Code
    const qrContainer = document.getElementById('pix-qrcode-container');
    if (qrContainer) {
      qrContainer.innerHTML = ''; // Clear previous

      if (typeof QRCode === 'undefined') {
        alert("Erro: Biblioteca QR Code não carregada. Verifique se o arquivo qrcode.min.js está na pasta.");
        return;
      }

      new QRCode(qrContainer, {
        text: payload,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
    }

    // Setup WhatsApp Button with proof message
    let message = "Olá, realizei o pagamento via PIX do pedido:\n\n";
    cart.forEach(item => {
      message += `${item.quantity}x ${item.title}\n`;
    });
    message += `\nTotal: R$ ${total.toFixed(2)}\nTXID: ${txid}\n\nSegue o comprovante:`;

    if (btnPixWhatsapp) btnPixWhatsapp.href = `https://wa.me/5551997140970?text=${encodeURIComponent(message)}`;

    openPixModal();

    // Google Ads Conversion Tracking
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-17761260609/ITA4CJi5kcobEMGonZVC',
        'value': total,
        'currency': 'BRL',
        'transaction_id': txid
      });
    }

    closeCart();
  } catch (e) {
    console.error(e);
    alert("Ocorreu um erro inesperado: " + e.message);
  }
}

function openPixModal() {
  if (pixModal) pixModal.classList.add('open');
}

function closePixModal() {
  if (pixModal) pixModal.classList.remove('open');
}

function copyPixCode() {
  if (!pixCopyCodeInput) return;
  pixCopyCodeInput.select();
  document.execCommand('copy');

  const originalText = btnCopyPix.innerHTML;
  btnCopyPix.innerHTML = '<i class="ph ph-check"></i> Copiado!';
  btnCopyPix.classList.add('btn-success');

  setTimeout(() => {
    btnCopyPix.innerHTML = originalText;
    btnCopyPix.classList.remove('btn-success');
  }, 2000);
}

function generateUUID() {
  // PIX TXID must be max 25 chars. We use 20 chars to be safe.
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 20; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Testimonials Data
const testimonials = [
  {
    name: "Marcos Vieira",
    rating: 5,
    text: "Eu já tinha tentado comprar perfil e BM com outros fornecedores e sempre caía na mesma história: bloqueava rápido, suporte lento e nenhum deles assumia responsabilidade. Com o Alex foi TOTALMENTE diferente. Recebi tudo imediatamente, o BM já veio configurado certinho e as campanhas começaram a rodar no mesmo dia. Estou usando há duas semanas e a estabilidade está surreal. Sem dúvidas virou meu fornecedor fixo."
  },
  {
    name: "Juliana Moreira",
    rating: 5,
    text: "Estava desesperada porque minha conta caiu no meio de um lançamento e eu precisava ativar anúncios rápido. O Alex me atendeu em menos de 2 minutos e entregou um perfil aquecido que salvou meu projeto. Eu nunca pensei que iria encontrar alguém tão profissional no meio dessa bagunça que é contingência. Sou extremamente grata e já indiquei para dois amigos gestores"
  },
  {
    name: "Gabriel Rocha",
    rating: 5,
    text: "Eu trabalho com tráfego para e-commerce e preciso de estabilidade acima de tudo. Comprei o BM de limite diário alto e posso dizer com tranquilidade que foi a melhor compra que fiz esse ano. Consegui rodar campanhas pesadas sem nenhum bloqueio inesperado. O suporte também é algo que nunca vi igual — rápido, educado e realmente entende do que está falando."
  },
  {
    name: "Larissa Alves",
    rating: 5,
    text: "Eu tinha muito medo de comprar perfis porque já tinha sido enganada antes. O Alex tirou todas minhas dúvidas, me explicou o processo e me passou uma confiança absurda. Quando o perfil chegou, já veio funcionando perfeitamente. Consegui subir minha campanha de WhatsApp na hora. Hoje uso 2 perfis aquecidos dele e nunca mais tive problemas."
  },
  {
    name: "Renan Carvalho",
    rating: 4,
    text: "Sou gestor de tráfego e trabalho com vários clientes, então preciso de perfis que realmente funcionem. Comprei o combo de 2 perfis verificados e a qualidade me surpreendeu muito. Mesmo com contas novas, elas tiveram uma taxa de aprovação excelente. Além disso, o Alex acompanha mesmo depois da compra, algo raro hoje em dia. Atendimento impecável."
  },
  {
    name: "Ana Paula Rodrigues",
    rating: 5,
    text: "Eu perdi minha estrutura inteira num bloqueio do Meta e estava completamente travada. Um amigo me indicou o Alex e eu resolvi tentar. Melhor decisão que tomei. Ele me entregou tudo na hora, me explicou como conectar meus ativos e até me deu dicas de contingência para evitar problemas futuros. Ele realmente sabe o que está fazendo. Recomendo de olhos fechados."
  },
  {
    name: "João Mendes",
    rating: 5,
    text: "Já comprei BM com várias pessoas e sempre dava problema: bloqueava, limitava ou vinha todo bagunçado. Com o Alex a experiência foi outra. O BM veio com limite bom, confiável e totalmente configurado. Já estou rodando campanhas há dias sem qualquer tipo de restrição. Transparência e profissionalismo são o diferencial dele."
  },
  {
    name: "Camila Duarte",
    rating: 5,
    text: "Eu precisava de um BM simples só pra validar um projeto rápido, e confesso que nem esperava tanta qualidade. Mas fiquei impressionada com a velocidade de entrega e a qualidade do suporte. O Alex me acompanhou em tudo, até no processo de vincular o Pixel. Hoje virei cliente fixa e vou migrar todos os meus clientes pra estrutura dele."
  },
  {
    name: "Thiago Santana",
    rating: 5,
    text: "Comecei comprando um perfil comum pra testar e, depois de ver a estabilidade, voltei pra pegar um BM de limite maior. Em ambos os casos, a entrega foi super rápida e tudo funcionou exatamente como prometido. A sensação é de estar comprando algo seguro, com alguém que realmente entende do que vende. Vale cada centavo."
  }
];

// Carousel Logic
let currentSlide = 0;
let itemsPerView = 1;

function renderStars(rating) {
  let starsHtml = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starsHtml += '<i class="ph-fill ph-star"></i>';
    } else {
      starsHtml += '<i class="ph ph-star"></i>';
    }
  }
  return starsHtml;
}

function initCarousel() {
  if (!track) return;

  // Render Testimonials
  track.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="stars">
        ${renderStars(t.rating)}
      </div>
      <p>"${t.text}"</p>
      <div class="author">${t.name}</div>
    </div>
  `).join('');

  updateItemsPerView();
  createDots();
  updateCarousel();

  // Event Listeners
  window.addEventListener('resize', () => {
    updateItemsPerView();
    updateCarousel();
    createDots();
  });

  const prevBtn = document.querySelector('.prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
      }
    });
  }

  const nextBtn = document.querySelector('.next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const maxSlide = Math.ceil(testimonials.length / itemsPerView) - 1;
      if (currentSlide < maxSlide) {
        currentSlide++;
        updateCarousel();
      }
    });
  }
}

function updateItemsPerView() {
  if (window.innerWidth >= 1024) itemsPerView = 3;
  else if (window.innerWidth >= 768) itemsPerView = 2;
  else itemsPerView = 1;
}

function createDots() {
  if (!dotsContainer) return;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);
  dotsContainer.innerHTML = '';

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === currentSlide) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentSlide = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  if (!track) return;

  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update dots
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}
