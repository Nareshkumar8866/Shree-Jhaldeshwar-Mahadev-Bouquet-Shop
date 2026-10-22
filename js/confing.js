/* ==========================================================
   NARESH BOUQUET — SITE CONFIG
   Edit this one file to change names, prices, contact info,
   products, reviews and FAQs. No other file needs touching.
   Anything left as "" (empty) is hidden or handled gracefully.
   ========================================================== */
window.SHOP = {
  name: "Naresh Bouquet",

  /* ---- CONTACT (fill these in) ---------------------------
     whatsapp: digits only, with country code, no + or spaces.
               Example for India: "919876543210"
     If left empty, WhatsApp buttons still work: they open
     WhatsApp with your message ready and let the visitor pick
     the contact. Add your number so it goes straight to you. */
  whatsapp: "",
  phone: "",          // shown as a tap-to-call link, e.g. "+91 98765 43210"
  email: "",
  address: "",        // e.g. "Shop no., Street, Area, City"
  hours: "",          // e.g. "Mon-Sun, 10 AM - 9 PM"
  mapsLink: "",       // Google Maps share link (opens in a new tab)
  mapsEmbed: "",      // Google Maps "Embed a map" src URL (optional)

  /* ---- SOCIAL LINKS (empty = hidden) ---------------------- */
  social: {
    instagram: "",
    facebook: "",
    youtube: ""
  },

  /* ---- PRODUCTS --------------------------------------------
     price: leave "" to show "Price on request". Example: "₹899"
     image: path in /images/products/. If the file is missing,
            the main bouquet photo is used instead.
     bestSeller: true shows the product in the Best Sellers row. */
  products: [
    {
      id: "dairy-milk",
      name: "Dairy Milk Chocolate Bouquet",
      price: "",
      image: "images/products/dairy-milk.jpg",
      desc: "Classic, creamy Dairy Milk bars hand-arranged and wrapped into a gift-ready bouquet.",
      bestSeller: true
    },
    {
      id: "kitkat",
      name: "KitKat Chocolate Bouquet",
      price: "",
      image: "images/products/kitkat.jpg",
      desc: "Crunchy KitKat fingers styled into a bold, playful bouquet for chocolate lovers.",
      bestSeller: true
    },
    {
      id: "mixed",
      name: "Mixed Chocolate Bouquet",
      price: "",
      image: "images/products/mixed.jpg",
      desc: "A delightful assortment of chocolates so there is something sweet for every taste.",
      bestSeller: true
    },
    {
      id: "birthday",
      name: "Birthday Chocolate Bouquet",
      price: "",
      image: "images/products/birthday.jpg",
      desc: "A cheerful bouquet made to celebrate birthdays, with an optional message card.",
      bestSeller: false
    },
    {
      id: "anniversary",
      name: "Anniversary Gift Bouquet",
      price: "",
      image: "images/products/anniversary.jpg",
      desc: "An elegant, romantic bouquet to mark another year together.",
      bestSeller: false
    },
    {
      id: "custom",
      name: "Customized Chocolate Bouquet",
      price: "",
      image: "images/products/custom.jpg",
      desc: "Pick your chocolates, wrapping, ribbon and occasion. We create it just for you.",
      bestSeller: false
    }
  ],

  /* ---- OCCASIONS ------------------------------------------ */
  occasions: [
    { name: "Birthday",         note: "Make their day a little sweeter.",       icon: "🎂" },
    { name: "Anniversary",      note: "A sweet way to say 'still choosing you'.", icon: "💞" },
    { name: "Valentine's Day",  note: "Skip the ordinary. Say it with chocolate.", icon: "🌹" },
    { name: "Surprise Gifts",   note: "No reason needed. Just because.",        icon: "🎁" }
  ],

  /* ---- HOW WE CREATE YOUR BOUQUET ------------------------- */
  steps: [
    { title: "Choose",   text: "Pick your chocolates, occasion and style, or tell us your idea." },
    { title: "Arrange",  text: "Your chocolates are carefully arranged into a full, balanced bouquet." },
    { title: "Wrap",     text: "Wrapped in your chosen colour and finished with a ribbon and optional message card." },
    { title: "Gift",     text: "Ready for you to give. Message us on WhatsApp to confirm the details." }
  ],

  /* ---- REVIEWS ----------------------------------------------
     Add REAL customer reviews only. Section stays hidden while
     this list is empty. Format:
     { name: "Customer name", text: "Their words.", source: "Google" } */
  reviews: [],

  /* ---- FAQ (edit freely) ------------------------------------ */
  faqs: [
    {
      q: "How do I place an order?",
      a: "Tap any “Order Now” button or the WhatsApp button. Your message is pre-filled, so just send it. You can also fill in the custom bouquet form and it will open WhatsApp with your choices."
    },
    {
      q: "Can I customise my bouquet?",
      a: "Yes. Use the Custom Gift section to choose chocolates, wrapping colour, ribbon and occasion, and add a message for the card."
    },
    {
      q: "How much does a bouquet cost?",
      a: "Prices depend on the bouquet and the chocolates you choose. Message us on WhatsApp and we will share the price."
    },
    {
      q: "Can I add a personal message?",
      a: "Yes. Tell us what you would like written in the form or in your WhatsApp message."
    }
  ]
};
