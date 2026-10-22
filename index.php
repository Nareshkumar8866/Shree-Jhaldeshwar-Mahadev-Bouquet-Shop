<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Naresh Bouquet | Premium Chocolate Bouquets &amp; Gifts</title>
  <meta name="description" content="Naresh Bouquet creates beautiful chocolate bouquets, thoughtfully wrapped with love, for birthdays, anniversaries, Valentine's Day and surprise gifts. Order on WhatsApp.">
  <meta name="theme-color" content="#3b2118">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Naresh Bouquet | Premium Chocolate Bouquets &amp; Gifts">
  <meta property="og:description" content="Make every moment sweeter. Beautiful chocolate bouquets, thoughtfully wrapped with love.">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>
</head>
<body>
  <a class="skip" href="#collection">Skip to bouquets</a>

  <!-- ============ HEADER ============ -->
  <header class="site-header" id="siteHeader">
    <a class="brand" href="#top" aria-label="Naresh Bouquet home">
      <span class="brand-mark" aria-hidden="true">N</span>
      <span class="brand-name">Naresh <em>Bouquet</em></span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mainNav" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
    <nav class="main-nav" id="mainNav" aria-label="Main">
      <a href="#collection">Collection</a>
      <a href="#custom">Custom Gift</a>
      <a href="#occasions">Occasions</a>
      <a href="#process">How We Make It</a>
      <a href="#reviews" data-nav="reviews">Reviews</a>
      <a href="#faq">FAQ</a>
      <a href="#contact">Contact</a>
      <a class="btn btn-wa btn-sm" data-wa href="#" target="_blank" rel="noopener">WhatsApp</a>
    </nav>
  </header>

  <main id="top">
    <!-- ============ HERO ============ -->
    <section class="hero" aria-labelledby="heroTitle">
      <canvas id="scene" aria-hidden="true"></canvas>
      <div class="hero-bg" aria-hidden="true">
        <span class="orb o1"></span><span class="orb o2"></span><span class="orb o3"></span>
      </div>

      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Naresh Bouquet · Chocolate Gifting</p>
          <h1 id="heroTitle">Make Every Moment <em>Sweeter.</em></h1>
          <p class="sub">Beautiful Chocolate Bouquets, Thoughtfully Wrapped With Love.</p>
          <div class="cta">
            <a class="btn btn-primary" href="#collection">Explore Bouquets</a>
            <a class="btn btn-wa" data-wa href="#" target="_blank" rel="noopener">Order on WhatsApp</a>
          </div>
        </div>

        <div class="hero-stage" id="heroStage">
          <div class="stage-glow" aria-hidden="true"></div>
          <figure class="bouquet-3d" id="heroBouquet">
            <img id="heroImg" src="images/bouquet.jpg" alt="Handmade chocolate bouquet from Naresh Bouquet" width="800" height="1000" fetchpriority="high">
            <span class="shine" aria-hidden="true"></span>
          </figure>
          <svg class="ribbon-svg" viewBox="0 0 400 500" aria-hidden="true" preserveAspectRatio="none">
            <path class="rb rb1" d="M-10 380 C 90 300, 140 460, 230 380 S 360 300, 420 360" />
            <path class="rb rb2" d="M-10 420 C 100 350, 160 490, 250 420 S 370 350, 420 400" />
          </svg>
          <span class="piece p1" aria-hidden="true"></span>
          <span class="piece p2" aria-hidden="true"></span>
          <span class="piece p3" aria-hidden="true"></span>
          <span class="piece p4" aria-hidden="true"></span>
        </div>
      </div>

      <a class="scroll-cue" href="#story" aria-label="Scroll to discover">
        <span>Scroll</span><i></i>
      </a>
    </section>

    <!-- ============ SCROLL STORY ============ -->
    <section class="story" id="story" aria-labelledby="storyTitle">
      <div class="story-stage">
        <div class="story-bg" aria-hidden="true"></div>
        <div class="story-text">
          <p class="eyebrow">The Making of a Bouquet</p>
          <h2 id="storyTitle">Sweet things, <em>beautifully</em> arranged</h2>
          <div class="caps" aria-live="off">
            <p class="cap cap1">Hand-picked chocolates, chosen for every occasion.</p>
            <p class="cap cap2">Wrapped by hand in soft, glossy layers.</p>
            <p class="cap cap3">Finished with a ribbon, ready to be gifted.</p>
          </div>
        </div>
        <div class="story-visual" aria-hidden="true">
          <div class="story-bouquet">
            <img id="storyImg" src="images/bouquet.jpg" alt="" loading="lazy" width="800" height="1000">
          </div>
          <span class="chip c1"></span><span class="chip c2"></span><span class="chip c3"></span>
          <span class="chip c4"></span><span class="chip c5"></span><span class="chip c6"></span>
        </div>
      </div>
    </section>

    <!-- ============ COLLECTION ============ -->
    <section class="section" id="collection" aria-labelledby="collTitle">
      <div class="wrap">
        <header class="section-head reveal">
          <p class="eyebrow">The Collection</p>
          <h2 id="collTitle">Chocolate bouquets for <em>every</em> moment</h2>
          <p class="lead">Each bouquet is arranged and wrapped by hand. Tap Order Now and your message is ready to send on WhatsApp.</p>
        </header>
        <div class="grid" id="productGrid"></div>
      </div>
    </section>

    <!-- ============ BEST SELLERS ============ -->
    <section class="section section-dark" id="best" aria-labelledby="bestTitle">
      <div class="wrap">
        <header class="section-head reveal">
          <p class="eyebrow gold">Best Sellers</p>
          <h2 id="bestTitle">Our most-loved <em>bouquets</em></h2>
        </header>
        <div class="best-row" id="bestRow"></div>
      </div>
    </section>

    <!-- ============ CUSTOM GIFT ============ -->
    <section class="section" id="custom" aria-labelledby="customTitle">
      <div class="wrap">
        <header class="section-head reveal">
          <p class="eyebrow">Custom Gift Experience</p>
          <h2 id="customTitle">Design your <em>own</em> bouquet</h2>
          <p class="lead">Choose what you love. We will receive your selection on WhatsApp and take it from there.</p>
        </header>

        <div class="custom-layout">
          <form class="custom-form reveal" id="customForm" novalidate>
            <fieldset>
              <legend>1 · Chocolates</legend>
              <div class="chips" id="fChoc">
                <label class="pill"><input type="checkbox" name="choc" value="Dairy Milk"><span>Dairy Milk</span></label>
                <label class="pill"><input type="checkbox" name="choc" value="KitKat"><span>KitKat</span></label>
                <label class="pill"><input type="checkbox" name="choc" value="Mixed assortment"><span>Mixed assortment</span></label>
                <label class="pill"><input type="checkbox" name="choc" value="Other (I will describe)"><span>Other</span></label>
              </div>
            </fieldset>

            <fieldset>
              <legend>2 · Wrapping colour</legend>
              <div class="swatches" id="fWrap">
                <label class="sw"><input type="radio" name="wrap" value="Blush pink" data-c="#f3c9cf" checked><span style="--c:#f3c9cf"></span><em>Blush pink</em></label>
                <label class="sw"><input type="radio" name="wrap" value="Cream" data-c="#f6ead6"><span style="--c:#f6ead6"></span><em>Cream</em></label>
                <label class="sw"><input type="radio" name="wrap" value="Chocolate brown" data-c="#5a3426"><span style="--c:#5a3426"></span><em>Chocolate</em></label>
                <label class="sw"><input type="radio" name="wrap" value="Soft gold" data-c="#d9b774"><span style="--c:#d9b774"></span><em>Soft gold</em></label>
                <label class="sw"><input type="radio" name="wrap" value="Rose red" data-c="#b94a5c"><span style="--c:#b94a5c"></span><em>Rose</em></label>
              </div>
            </fieldset>

            <fieldset>
              <legend>3 · Ribbon</legend>
              <div class="swatches" id="fRibbon">
                <label class="sw"><input type="radio" name="ribbon" value="Pink satin" data-c="#e58aa5" checked><span style="--c:#e58aa5"></span><em>Pink</em></label>
                <label class="sw"><input type="radio" name="ribbon" value="Gold" data-c="#c9a15b"><span style="--c:#c9a15b"></span><em>Gold</em></label>
                <label class="sw"><input type="radio" name="ribbon" value="Cream" data-c="#fffaf0"><span style="--c:#fffaf0"></span><em>Cream</em></label>
                <label class="sw"><input type="radio" name="ribbon" value="Chocolate brown" data-c="#3b2118"><span style="--c:#3b2118"></span><em>Brown</em></label>
              </div>
            </fieldset>

            <fieldset>
              <legend>4 · Occasion &amp; details</legend>
              <div class="fields">
                <label>Occasion
                  <select name="occasion" id="fOcc">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Valentine's Day</option>
                    <option>Surprise Gift</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>Your name
                  <input type="text" name="name" autocomplete="name" placeholder="Your name" required>
                </label>
                <label>Needed by (optional)
                  <input type="date" name="date">
                </label>
                <label>Budget (optional)
                  <input type="text" name="budget" placeholder="e.g. around ₹1000">
                </label>
                <label class="full">Message for the card / special notes
                  <textarea name="notes" rows="3" placeholder="e.g. Happy Birthday, Riya!"></textarea>
                </label>
              </div>
            </fieldset>

            <p class="form-error" id="formError" role="alert" hidden></p>
            <div class="form-actions">
              <button type="submit" class="btn btn-wa">Send enquiry on WhatsApp</button>
              <button type="button" class="btn btn-ghost" id="copyMsg">Copy message</button>
            </div>
            <p class="small muted">This opens WhatsApp with your selections filled in. Nothing is sent until you press send.</p>
          </form>

          <aside class="preview reveal" aria-label="Live bouquet colour preview">
            <div class="cone-wrap" id="cone" style="--wrap:#f3c9cf; --rib:#e58aa5">
              <div class="blooms" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
              <div class="cone"></div>
              <div class="bow" aria-hidden="true"></div>
            </div>
            <p class="small muted center">Colour preview only. Your actual bouquet is made from real chocolates and wrapping.</p>
          </aside>
        </div>
      </div>
    </section>

    <!-- ============ OCCASIONS ============ -->
    <section class="section section-blush" id="occasions" aria-labelledby="occTitle">
      <div class="wrap">
        <header class="section-head reveal">
          <p class="eyebrow">Occasions</p>
          <h2 id="occTitle">A bouquet for <em>every</em> reason</h2>
        </header>
        <div class="occ-grid" id="occGrid"></div>
      </div>
    </section>

    <!-- ============ PROCESS ============ -->
    <section class="section" id="process" aria-labelledby="procTitle">
      <div class="wrap">
        <header class="section-head reveal">
          <p class="eyebrow">How We Create Your Bouquet</p>
          <h2 id="procTitle">Made with <em>care</em>, step by step</h2>
        </header>
        <ol class="steps" id="stepList"></ol>
      </div>
    </section>

    <!-- ============ REVIEWS ============ -->
    <section class="section section-dark" id="reviews" aria-labelledby="revTitle" hidden>
      <div class="wrap">
        <header class="section-head reveal">
          <p class="eyebrow gold">Customer Reviews</p>
          <h2 id="revTitle">Kind words from <em>our customers</em></h2>
        </header>
        <div class="rev-grid" id="revGrid"></div>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section class="section" id="faq" aria-labelledby="faqTitle">
      <div class="wrap narrow">
        <header class="section-head reveal">
          <p class="eyebrow">FAQ</p>
          <h2 id="faqTitle">Frequently asked <em>questions</em></h2>
        </header>
        <div class="faq" id="faqList"></div>
      </div>
    </section>

    <!-- ============ CONTACT ============ -->
    <section class="section section-blush" id="contact" aria-labelledby="contTitle">
      <div class="wrap contact-grid">
        <div class="reveal">
          <p class="eyebrow">Contact &amp; Location</p>
          <h2 id="contTitle">Visit or message <em>Naresh Bouquet</em></h2>
          <ul class="contact-list" id="contactList"></ul>
          <div class="cta">
            <a class="btn btn-wa" data-wa href="#" target="_blank" rel="noopener">Order on WhatsApp</a>
          </div>
        </div>
        <div class="map-card reveal" id="mapCard">
          <figure class="shop-photo">
            <img id="shopImg" src="images/shop.jpg" alt="Naresh Bouquet shop" loading="lazy" width="900" height="700">
          </figure>
        </div>
      </div>
    </section>
  </main>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="wrap foot">
      <div>
        <a class="brand light" href="#top"><span class="brand-mark" aria-hidden="true">N</span><span class="brand-name">Naresh <em>Bouquet</em></span></a>
        <p class="small">Beautiful chocolate bouquets, thoughtfully wrapped with love.</p>
      </div>
      <nav class="foot-nav" aria-label="Footer">
        <a href="#collection">Collection</a><a href="#custom">Custom Gift</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
      </nav>
      <ul class="social" id="socialList" aria-label="Social media"></ul>
    </div>
    <p class="copy">© <span id="year"></span> Naresh Bouquet. All rights reserved.</p>
  </footer>

  <a class="wa-float" data-wa href="#" target="_blank" rel="noopener" aria-label="Order on WhatsApp">
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.8-2.2-1.5-.5-.5-1-1.1-1.2-1.6-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.7.7-1 1.5-.9 2.5.2 1.1.7 2.1 1.4 3 1.2 1.7 2.6 2.8 4.3 3.5 1.1.4 1.9.4 2.6.3.8-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
  </a>

  <script src="js/config.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
  <script src="js/main.js" defer></script>
  <script type="module" src="js/scene.js"></script>
</body>
</html>
