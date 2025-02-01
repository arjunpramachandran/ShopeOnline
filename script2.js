let productsHtml = '';
let productsHtml2 = '';
let productsHtml3 = '';
let productsHtml4 = '';
let combinedProducts = [];


let data = [];
let data1 = [];
let data2 = [];
let data3 = [];
let menCloth = [];
let jwellery = []
let womenCloth = [];
let electronics = []
let beauty = [];
let fragrances = [];
let furniture = []
let groceries = [];
let audio = [];
let gaming = [];
let mobile = [];
let tv = [];


let totalPrice = 0
let itemsAdded = 0
let cartIndex = 1

function roundToNearest100(num) {
    return Math.round(num / 100) * 100;
}

const fetchData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const response1 = await fetch('https://fakestoreapi.com/products');
       // const response2 = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
        const response3 = await fetch('https://fakestoreapi.in/api/products')


        if (!response.ok || !response1.ok || !response3.ok) {
            throw new Error('Failed to fetch data');
        }

        data = await response.json();
        data1 = await response1.json();
        //data2 = await response2.json();
        data3 = await response3.json();
        const filteredData = data.products;

        const filteredData2 = data2.slice(50, 197);
        const allProducts = [...data.products, ...data1, ...data2, ...data3.products];

        menCloth = allProducts.filter(product => product.category === "men's clothing");
        jwellery = allProducts.filter(product => product.category === "jewelery");
        womenCloth = allProducts.filter(product => product.category === "women's clothing");
        electronics = allProducts.filter(product => product.category === "electronics");
        beauty = allProducts.filter(product => product.category === "beauty");
        fragrances = allProducts.filter(product => product.category === "fragrances");
        furniture = allProducts.filter(product => product.category === "furniture");
        groceries = allProducts.filter(product => product.category === "groceries");
        audio = allProducts.filter(product => product.category === "audio");
        gaming = allProducts.filter(product => product.category === "gaming");
        mobile = allProducts.filter(product => product.category === "mobile");
        tv = allProducts.filter(product => product.category === "tv");
        


        combinedProducts = [...filteredData,  ...data3.products];




        updateUI();
        displayRandomProduct('.item-1');

        displayRandomProduct('.item-2');
        displayRandomProduct('.item-2-1');
        displayRandomProduct('.item-2-2');
        displayRandomProduct('.item-2-3');

        displayRandomProduct('.item-3');
        displayRandomProduct('.item-3-1');
        displayRandomProduct('.item-3-2');
        displayRandomProduct('.item-3-3');

        displayRandomProduct('.item-4');
        displayRandomProduct('.item-5');
        displayRandomProduct('.item-6');
        displayRandomProduct('.item-7');
        displayRandomProduct('.item-8');
        displayRandomProduct('.item-9');
        displayRandomProduct('.item-10');
        displayRandomProduct('.item-11');

    } catch (error) {
        console.log(error);
    }
};


const displayData = (data) => {
    if (!data) {
        console.log('Data Not Found');
        return;
    }
    console.log(data)
    productsHtml = data.map(product => {


        const randomDiscount = (Math.floor(Math.random() * (70 - 20 + 1)) + 20)
        return `
                <div class="item item-all">
                   
                    <div class="media">
                        <div class="thumbnail offer-product-image">
                            <a href="">
                                <img src="${product.thumbnail}"  alt="${product.title}" >
                            </a>
                        </div>
                        <div class="hoverable">
                            <ul>
                                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                            </ul>
                        </div>
                        <div class="discount circle flexcenter"><span>${randomDiscount}%</span></div>
                    </div>
                    <div class="content">
                        <div class="rating">
                            <div class="stars"></div>
                            <div class="mini-text"></div>
                        </div>
                        <h3 class="main-links"><a href="#"><p class=" offer-product-title">${product.title}</p></a></h3>
                        <div class="price  offer-product-price">
                            <span class="current" >Rs. ${roundToNearest100(product.price * 86.47)} </span>
                            <span class="normal mini-text">${Math.round(((roundToNearest100(product.price * 86.47)) * (100 + randomDiscount) / 100) / 10) * 10}</span>
                        </div>
                    </div>
                    <button class="secondary-button flexcenter" onclick="cartData(this)" data-product-index =${(product.id-1)}>Add To Cart</button>
                </div>

            `
    }).join('');
}

const displayData1 = (data) => {
    if (!data) {
        console.log('Data Not Found');
        return;
    }
    console.log(data)
    productsHtml2 = data.map(product => {
        const randomDiscount = (Math.floor(Math.random() * (70 - 20 + 1)) + 20)
        return `<div class="item item-all">
                        <div class="media">
                            <div class="thumbnail offer-product-image">
                                <a href="">
                                    <img src="${product.image}"  alt="${product.title}" >
                                </a>
                            </div>
                            <div class="hoverable">
                                <ul>
                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                </ul>
                            </div>
                            <div class="discount circle flexcenter"><span>${randomDiscount}%</span></div>
                        </div>
                        <div class="content">
                            <div class="rating">
                                <div class="stars"></div>
                                <div class="mini-text"></div>
                            </div>
                            <h3 class="main-links"><a href="#"><p class=" offer-product-title">${product.title}</p></a></h3>
                            <div class="price  offer-product-price">
                                <span class="current" >Rs. ${roundToNearest100(product.price * 86.47)} </span>
                                <span class="normal mini-text">${Math.round(((roundToNearest100(product.price * 86.47)) * (100 + randomDiscount) / 100) / 10) * 10}</span>
                            </div>
                        </div>
                        <button class="secondary-button " onclick="cartData1(this)" data-product-index =${(product.id-1)}>Add To Cart</button>
                </div>`}).join('');

}

// const displayData2 = (data) => {
//     if (!data) {
//         console.log('Data Not Found');
//         return;
//     }
//     console.log(data)
//     const filteredProducts = data.slice(50, 197);
//     productsHtml3 = filteredProducts.map(product => {
//         const randomDiscount = (Math.floor(Math.random() * (70 - 20 + 1)) + 20)
//         return `
//                  <div class="item item-all">
                    
//                      <div class="media">
//                          <div class="thumbnail offer-product-image">
//                              <a href="">
//                                  <img src="${product.image_link}"  alt="${product.name}" >
//                              </a>
//                          </div>
//                          <div class="hoverable">
//                              <ul>
//                                  <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
//                                  <li><a href="#"><i class="ri-eye-line"></i></a></li>
//                                  <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
//                              </ul>
//                          </div>
//                          <div class="discount circle flexcenter"><span>${randomDiscount}%</span></div>
//                      </div>
//                      <div class="content">
//                          <div class="rating">
//                              <div class="stars"></div>
//                              <div class="mini-text"></div>
//                          </div>
//                          <h3 class="main-links"><a href="#"><p class=" offer-product-title">${product.name}</p></a></h3>
//                          <div class="price  offer-product-price">
//                              <span class="current" >Rs. ${roundToNearest100(product.price * 86.47)} </span>
//                              <span class="normal mini-text">${Math.round(((roundToNearest100(product.price * 86.47)) * (100 + randomDiscount) / 100) / 10) * 10}</span>
//                          </div>
//                      </div>
//                      <button class="secondary-button flexcenter">Add To Cart</button>
//                  </div>

//             `

//     }).join('')
// }

const displayData3 = (data) => {
    if (!data) {
        console.log('Data Not Found');
        return;
    }
    console.log(data)
    productsHtml4 = data.map(product => {
        const randomDiscount = (Math.floor(Math.random() * (70 - 20 + 1)) + 20)
        return `
                    <div class="item item-all">
                       
                        <div class="media">
                            <div class="thumbnail offer-product-image">
                                <a href="">
                                    <img src="Images/API/${product.id}.jpg"  alt="${product.title}" >
                                </a>
                            </div>
                            <div class="hoverable">
                                <ul>
                                    <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                                    <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                    <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                </ul>
                            </div>
                            <div class="discount circle flexcenter"><span>${randomDiscount}%</span></div>
                        </div>
                        <div class="content">
                            <div class="rating">
                                <div class="stars"></div>
                                <div class="mini-text"></div>
                            </div>
                            <h3 class="main-links"><a href="#"><p class=" offer-product-title">${product.title}</p></a></h3>
                            <div class="price  offer-product-price">
                                <span class="current" >Rs. ${roundToNearest100(product.price * 86.47)} </span>
                                <span class="normal mini-text">${Math.round(((roundToNearest100(product.price * 86.47)) * (100 + randomDiscount) / 100) / 10) * 10}</span>
                            </div>
                        </div>
                        <button onclick="cartData3(this)" data-product-index =${(product.id-1)} class="secondary-button flexcenter">Add To Cart</button>
                    </div>

                `

    }).join('')

}
//referrerpolicy="no-referrer"
const updateUI = () => {
    const productsElement = document.querySelector(".products-all");
    if (productsElement) {
        productsElement.innerHTML = productsHtml.concat(productsHtml2, productsHtml3, productsHtml4);

    }
    else {
        console.log('Element with class "products" not found.');
    }


    randomRating('.item-all');
}
const displayRandomProduct = (className) => {
    if (combinedProducts.length === 0) {
        console.log('No products available to display.');
        return;
    }
    const randomIndex = Math.floor(Math.random() * combinedProducts.length);
    const randomProduct = combinedProducts[randomIndex];
    const productTitleElement = document.querySelector(`${className} .offer-product-title`);
    const productImageElement = document.querySelector(`${className} .offer-product-image img`);
    const productPriceElement = document.querySelector(`${className} .offer-product-price`);
    const productDiscountElement = document.querySelector(`${className} .media .discount`)
    const randomDiscount = (Math.floor(Math.random() * (80 - 50 + 1)) + 50);
    
    if (productTitleElement) {
        productTitleElement.innerText = randomProduct.title || randomProduct.name;
    }
    if (productImageElement) {
        productImageElement.src = randomProduct.thumbnail || randomProduct.image_link || `Images/API/${randomProduct.id}.jpg`;
    }
    if (productPriceElement) {
        productPriceElement.innerHTML = `<span class="current" >Rs. ${roundToNearest100(randomProduct.price * 86.47)} </span>
            <span class="normal mini-text">${roundToNearest100((randomProduct.price * 86.47) * (100 + randomDiscount) / 100)}</span>`;
    }
    if (productDiscountElement) {
        productDiscountElement.innerHTML = `<span>${randomDiscount}%</span>`;
    }
    else {
        document.querySelector(`${className} .offer-product-title`).innerText = "No product available";
    }

    randomRating(className)
};

//rating star updation
const randomRating = (className) => {
    const elements = document.querySelectorAll(className);

    elements.forEach(item => {
        function getRandomRating() {
            return (Math.random() * 5).toFixed(1);
        }

        let ratingValue = parseFloat(getRandomRating());
        let totalRating = Math.floor(Math.random() * (6000 - 362 + 1)) + 362;

        const starsContainer = item.querySelector('.content .rating .stars');
        if (!starsContainer) {
            console.error('Stars container not found');
            return;
        }

        const fullStars = Math.floor(ratingValue);
        const hasHalfStar = ratingValue % 1 !== 0;

        starsContainer.innerHTML = '';
        for (let i = 0; i < fullStars; i++) {
            const star = document.createElement('div');
            star.classList.add('full-star');
            starsContainer.appendChild(star);
        }
        if (hasHalfStar) {
            const halfStar = document.createElement('div');
            halfStar.classList.add('half-star');
            starsContainer.appendChild(halfStar);
        }

        const miniTextContainer = item.querySelector('.content .rating .mini-text');
        if (miniTextContainer) {
            miniTextContainer.innerText = `(${totalRating})`;
        } else {
            console.error('Mini text container not found');
        }
    });
};

fetchData()
const copyMenu = () => {
    var dptcategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptcategory.innerHTML;


    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;


    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();


const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addClass = document.querySelector('.site');

menuButton.addEventListener('click', () => {
    addClass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', () => {
    addClass.classList.remove('showmenu')
})

// Show Sub menu
const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();


    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')

}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});




//swiper for brands

const swiperBrand = new Swiper('.brands-swiper', {
    loop: true, // Enable looping
    slidesPerView: 6, // Show six slides at a time (adjust as needed)
    spaceBetween: 30, // Space between slides
    speed: 2000, // Speed of the motion (adjust as needed)
    autoplay: {
        delay: 0, // No delay between transitions
        disableOnInteraction: false, // Keep autoplay even after interactions
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 30,
        },
    },
});





const dptMenu = document.querySelector('.header-main .dpt-menu')
const dptHead = document.querySelector('.header-main .dpt-head')
const mainContent = document.querySelector('#main-content')
filterproductsHead = document.querySelector('#productFilter')
menuTriger = document.querySelector('.header-main .dpt-cat .dpt-head .dpt-trigger')
const displayAll = ()=>{

    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    dptMenu.style.display = "none"
    
    menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Products"
    
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;
        menuTriger.style.color = "black"
        // setTimeout(() => {
        //     dptMenu.style.opacity = 1;
        // }, 500);
    });

    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
        menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');
        // setTimeout(() => {
        //     dptMenu.style.display = 'none';
        //     dptMenu.classList.add('hidden');
        // }, 500);
    });
    mainContent.style.display = 'none'

  
    displayData(data.products);
    displayData1(data1);
   // displayData2(data2);
    displayData3(data3.products);
    updateUI()
}
// Groceries Show
const showGroceries = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    dptMenu.style.display = "none"
    
    menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Grocery Items"
    
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;
        menuTriger.style.color = "black"
        // setTimeout(() => {
        //     dptMenu.style.opacity = 1;
        // }, 500);
    });

    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
        menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');
        // setTimeout(() => {
        //     dptMenu.style.display = 'none';
        //     dptMenu.classList.add('hidden');
        // }, 500);
    });
    mainContent.style.display = 'none'

    displayData(groceries);
    updateUI();

}
//lifestyle Show
const lifeStyle = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Life Style Products"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    displayData([...beauty,...fragrances]);
    
    displayData1([...menCloth, ...jwellery, ...womenCloth]);
    //displayData2(data2);
    updateUI();

}

const lifeStyleDpt = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Life Style Products"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    displayData([...beauty,...fragrances]);
    
    displayData1(jwellery);
    //displayData2(data2);
    updateUI();

}

//Electronics Show
const Electronics = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Electronics Products"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData1(electronics);
    displayData3(data3.products)
    updateUI();

}
//Furniture
const Furniture = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Furniture items"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData(furniture)
    updateUI();

}
const Beauty = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Cosmetics items"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData(beauty)
    updateUI();

}
const Fragrance = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Fragrance items"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData(fragrances)
    updateUI();

}
const Jewelery = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Jewellery items"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData1(jwellery)
    updateUI();

}
const WomenFashion = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Women Fashion items"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData1(womenCloth)
    updateUI();

}
const MenFashion = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Men Fashion items"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData1(menCloth)
    updateUI();

}
const Computer = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Computer Accessories"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData3(gaming)
    displayData1(electronics)
    updateUI();

}
const Mobile = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Mobile Products"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData3(mobile)
    
    updateUI();

}
const Tv = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All TV Products"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData3(tv)
    
    updateUI();

}
const AudioDevice = () => {
    productsHtml = ''
    productsHtml2 = ''
    productsHtml3 = ''
    productsHtml4 = ''
    
    dptMenu.style.display = "none"
     menuTriger.style.display = "block"
    filterproductsHead.innerText = "All Audio Devices"
    dptHead.addEventListener('mouseenter', () => {
        dptMenu.classList.remove('hidden');
        menuTriger.style.color = "black"
        dptMenu.style.display = 'block';
        dptMenu.style.opacity = 1;

    });
    dptMenu.addEventListener('mouseleave', () => {
        dptMenu.style.opacity = 0;
        dptMenu.style.display = 'none';
         menuTriger.style.color = "white"
        dptMenu.classList.add('hidden');

    });
    mainContent.style.display = 'none'

    
    
    displayData3(audio)
    
    updateUI();

}

//Timer for Flash Sale


document.addEventListener('DOMContentLoaded', () => {
    const timer = document.getElementById('timer');
    const listItems = timer.querySelectorAll('li');

    const updateTime = () => {
        let days = parseInt(listItems[0].getAttribute('data-time'), 10);
        let hours = parseInt(listItems[1].getAttribute('data-time'), 10);
        let minutes = parseInt(listItems[2].getAttribute('data-time'), 10);
        let seconds = parseInt(listItems[3].getAttribute('data-time'), 10);

        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                } else {
                    hours = 23;
                    if (days > 0) {
                        days--;
                    } else {
                        clearInterval(interval); // Stop the timer when it reaches 0
                    }
                }
            }
        }

        listItems[0].setAttribute('data-time', days);
        listItems[0].textContent = days;
        listItems[1].setAttribute('data-time', hours);
        listItems[1].textContent = hours;
        listItems[2].setAttribute('data-time', minutes);
        listItems[2].textContent = minutes;
        listItems[3].setAttribute('data-time', seconds);
        listItems[3].textContent = seconds;
    };

    const interval = setInterval(updateTime, 1000);
});


//Mobile menu show cart
const divtoShow = '.mini-cart'
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');
divTrigger.addEventListener('click',()=>{
    setTimeout(()=>{
       if(!divPopup.classList.contains('show')){
        divPopup.classList.add('show')
    } 
    },250)
    
})

//close by click outside

document.addEventListener('click' , (e)=>{
    const isClosest = e.target.closest(divtoShow)
    if(!isClosest  &&  divPopup.classList.contains('show')){
        divPopup.classList.remove('show')
    }
})
//Cart Updation

let cartBody = document.getElementById('cart-item')
let priceTotalCart = document.getElementById('total-price')
let countOfItems = document.getElementById('CartHead')
let priceTotalDisplay = document.getElementById('CartTotal')
const cartData3=(button)=>{
    const productIndex = parseInt(button.dataset.productIndex);
    
    const product= data3.products[productIndex];
    const newItem = document.createElement('li')
    newItem.classList.add('item');
    newItem.id = `cartItem-${cartIndex}`
    newItem.innerHTML = 
                            `<div class="thumbnail object-cover">
                                <a href="#"><img src="Images/API/${product.id}.jpg" alt=""></a>
                            </div>
                            <div class="item-content">
                                <p><a href="#"></a>${product.title}</p>
                                <span class="price">
                                <span>Rs.<span id="cart-price-${cartIndex}">${roundToNearest100((product.price)*86.47)}</span></span>
                                <span class="fly-item"><span></span></span>
                                </span>
                            </div>
                            <a href="#" class="item-remove" onclick="removeItem(this)" data-id-index=${cartIndex}><i class="ri-close-line"></i></a>`;
     
     
    cartIndex++;                      
    totalPrice+=(parseInt(roundToNearest100((product.price)*86.47)));
     itemsAdded+=1;                    
    cartBody.appendChild(newItem)
    updateCart()
    
    
}
const removeItem = (button)=>{
    totalPrice-= parseInt(document.getElementById(`cart-price-${parseInt(button.dataset.idIndex)}`).innerText);
    document.getElementById(`cartItem-${parseInt(button.dataset.idIndex)}`).innerText=''
    itemsAdded-=1
    updateCart()
}
const updateCart = ()=>{
    priceTotalCart.textContent = `Rs.${parseInt(totalPrice)}.00`;
    priceTotalDisplay.innerText = `Rs.${parseInt(totalPrice)}.00`;
    document.getElementById('cartDisplayNumber').innerText = `${itemsAdded}`
    if(itemsAdded==1)countOfItems.innerText = `${itemsAdded}  Item Aded`
    else if (itemsAdded==0) countOfItems.innerText = 'No Items Aded'
    else countOfItems.innerText = `${itemsAdded}  Items Aded`
   
}
const cartData1=(button)=>{
    const productIndex = parseInt(button.dataset.productIndex);
    
    const product= data1[productIndex];
    const newItem = document.createElement('li')
    newItem.classList.add('item');
    newItem.id = `cartItem-${cartIndex}`
    newItem.innerHTML = 
                            `<div class="thumbnail object-cover">
                                <a href="#"><img src="${product.image}" alt=""></a>
                            </div>
                            <div class="item-content">
                                <p><a href="#"></a>${product.title}</p>
                                <span class="price">
                                <span>Rs.<span id="cart-price-${cartIndex}">${roundToNearest100((product.price)*86.47)}</span></span>
                                <span class="fly-item"><span></span></span>
                                </span>
                            </div>
                            <a href="#" class="item-remove" onclick="removeItem(this)" data-id-index=${cartIndex}><i class="ri-close-line"></i></a>`;
     
     
    cartIndex++;                      
    totalPrice+=(parseInt(roundToNearest100((product.price)*86.47)));
     itemsAdded+=1;                    
    cartBody.appendChild(newItem)
    updateCart()
}
const cartData=(button)=>{
    const productIndex = parseInt(button.dataset.productIndex);
    
    const product= data.products[productIndex];
    const newItem = document.createElement('li')
    newItem.classList.add('item');
    newItem.id = `cartItem-${cartIndex}`
    newItem.innerHTML = 
                            `<div class="thumbnail object-cover">
                                <a href="#"><img src="${product.thumbnail}" alt=""></a>
                            </div>
                            <div class="item-content">
                                <p><a href="#"></a>${product.title}</p>
                                <span class="price">
                                <span>Rs.<span id="cart-price-${cartIndex}">${roundToNearest100((product.price)*86.47)}</span></span>
                                <span class="fly-item"><span></span></span>
                                </span>
                            </div>
                            <a href="#" class="item-remove" onclick="removeItem(this)" data-id-index=${cartIndex}><i class="ri-close-line"></i></a>`;
     
     
    cartIndex++;                      
    totalPrice+=(parseInt(roundToNearest100((product.price)*86.47)));
     itemsAdded+=1;                    
    cartBody.appendChild(newItem)
    updateCart()
    
    
}