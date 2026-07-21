/* ==========================================================================
   Student Housing in Tilburg (SHT) - JavaScript & Multilingual Logic
   ========================================================================== */

const i18n = {
  en: {
    nav_home: "Home",
    nav_aboutsht: "About SHT",
    nav_aboutsam: "About SAM",
    nav_apply: "Apply",
    nav_contact: "Contact",
    nav_faq: "FAQ",
    
    hero_title: "Couchsurfing & Temporary Housing",
    hero_subtitle: "For the homeless students of Tilburg",
    partner_with: "Partnered with",
    
    featured_on: "We Are Featured On",
    housing_shortage_title: "Tilburg's Shortage of Housing",
    housing_shortage_desc: "Tilburg is estimated to have around 200 homeless students by the start of every semester. Some are lucky to find emergency accommodations, while others need to quit their studies before even starting. These numbers have only gotten worse over the years, therefore, if you can provide any sort of housing (from couches and air mattresses to studios and spare rooms), please",
    fill_form_link: "fill in our form and make a difference to someone.",
    
    what_we_do_title: "What We Do",
    what_we_do_desc: "Our goal is to support as many students in Tilburg as we can.",
    find_matches_title: "Find Matches",
    find_matches_desc: "We match homeless students with residents who are willing to host them for up to 3 months.",
    attend_viewings_title: "Attend Viewings",
    attend_viewings_desc: "We offer to represent students who are unable to attend viewings themselves.",
    stay_active_title: "Stay Active",
    stay_active_desc: "We ensure to work closely with everyone, trying to answer all questions within a day.",
    
    about_sam_title: "About Student Party SAM",
    about_sam_desc: "SHT is an initiative in collaboration with Student Party SAM.",
    about_sam_body: "SAM is a party in the university council which aims to represent all students of Tilburg University. The party values internationalisation of the university, but sees how students, both international and Dutch, have troubles finding proper housing. To excel at your studies, it is important to be able to live in a safe and welcoming environment.",
    btn_learn_sam: "Learn More About SAM",
    
    host_apply_title: "Host a Student / Apply for Housing",
    host_apply_subtitle: "Click under 'Host a Student' to offer emergency housing, or click under 'Apply for Housing' if you are currently homeless.",
    host_card_title: "Host a Student",
    host_card_desc: "I have a room, couch, or spare bed available.",
    btn_have_place: "I Have a Place",
    apply_card_title: "Apply for Housing",
    apply_card_desc: "I am a student currently looking for emergency housing.",
    btn_need_place: "I Need a Place",
    
    attend_viewing_title: "Want Us to Attend Your Viewing?",
    attend_viewing_desc: "As a result of the current housing crisis, many international students are unable to leave their countries and, consequently, do not get the chance to attend Dutch viewings. We offer to become their representatives, raising their chances of finding accommodation and avoiding scammers.",
    btn_make_request: "Make a Request",
    
    contact_title: "Contact Us",
    get_in_touch: "Get in Touch",
    reach_out_anytime: "Reach out to us anytime. We aim to respond within 24 hours.",
    
    footer_desc: "Student Housing in Tilburg is a non-profit mutual aid initiative dedicated to helping international and Dutch students find emergency housing.",
    footer_quick_links: "Quick Links",
    footer_legal: "Legal & Policies",
    terms_conditions: "Terms and Conditions",
    privacy_policy: "Privacy Policy",
    download_terms: "Download Terms (PDF)",
    download_privacy: "Download Privacy Statement (PDF)",
    copyright: "© Student Housing in Tilburg. All rights reserved.",
    in_partnership: "In partnership with Student Party SAM"
  },
  nl: {
    nav_home: "Home",
    nav_aboutsht: "Over SHT",
    nav_aboutsam: "Over SAM",
    nav_apply: "Aanmelden",
    nav_contact: "Contact",
    nav_faq: "FAQ",
    
    hero_title: "Couchsurfing & Tijdelijke Huisvesting",
    hero_subtitle: "Voor de dakloze studenten van Tilburg",
    partner_with: "In samenwerking met",
    
    featured_on: "Over Ons In De Media",
    housing_shortage_title: "Kamernood In Tilburg",
    housing_shortage_desc: "Naar schatting zijn er bij aanvang van elk semester ongeveer 200 dakloze studenten in Tilburg. Sommigen hebben het geluk een noodopvang te vinden, terwijl anderen hun studie moeten staken voordat ze überhaupt beginnen. Deze aantallen zijn in de loop der jaren alleen maar toegenomen. Als u hulp kunt bieden (van banken en luchtbedden tot studio's en kamers), gelieve",
    fill_form_link: "ons formulier in te vullen en het verschil te maken.",
    
    what_we_do_title: "Wat Wij Doen",
    what_we_do_desc: "Ons doel is om zoveel mogelijk studenten in Tilburg te ondersteunen.",
    find_matches_title: "Matches Zoeken",
    find_matches_desc: "Wij matchen dakloze studenten met inwoners die bereid zijn hen tot 3 maanden in huis te nemen.",
    attend_viewings_title: "Bezichtigingen Bijwonen",
    attend_viewings_desc: "Wij bieden aan om studenten te vertegenwoordigen die zelf niet bij bezichtigingen aanwezig kunnen zijn.",
    stay_active_title: "Actief Blijven",
    stay_active_desc: "Wij werken nauw samen met iedereen en proberen alle vragen binnen een dag te beantwoorden.",
    
    about_sam_title: "Over Fractie SAM",
    about_sam_desc: "SHT is een initiatief in samenwerking met Student Fractie SAM.",
    about_sam_body: "SAM is een fractie in de universiteitsraad die alle studenten van Tilburg University vertegenwoordigt. De fractie hecht veel waarde aan internationalisering, maar ziet dat studenten grote moeite hebben met het vinden van huisvesting. Om goed te kunnen studeren is een veilige en gastvrije leefomgeving essentieel.",
    btn_learn_sam: "Lees Meer Over SAM",
    
    host_apply_title: "Host Een Student / Vraag Huisvesting Aan",
    host_apply_subtitle: "Klik op 'Host een student' om noodopvang aan te bieden, of op 'Huisvesting aanvragen' als u momenteel geen onderdak heeft.",
    host_card_title: "Host Een Student",
    host_card_desc: "Ik heb een kamer, bank of reservebed beschikbaar.",
    btn_have_place: "Ik Heb Een Plek",
    apply_card_title: "Vraag Huisvesting Aan",
    apply_card_desc: "Ik ben een student die spoedig noodopvang zoekt.",
    btn_need_place: "Ik Zoek Een Plek",
    
    attend_viewing_title: "Wilt U Dat Wij Uw Bezichtiging Bijwonen?",
    attend_viewing_desc: "Als gevolg van de huidige woningnood kunnen veel internationale studenten hun land nog niet verlaten en dus geen Nederlandse bezichtigingen bijwonen. Wij bieden aan hen te vertegenwoordigen, om hun kansen op een woning te vergroten en oplichters te voorkomen.",
    btn_make_request: "Doe Een Aanvraag",
    
    contact_title: "Neem Contact Op",
    get_in_touch: "Contact Opnemen",
    reach_out_anytime: "Neem gerust contact met ons op. Wij streven ernaar binnen 24 uur te reageren.",
    
    footer_desc: "Student Housing in Tilburg is een non-profit initiatief voor wederzijdse hulp dat internationale en Nederlandse studenten helpt bij het vinden van noodopvang.",
    footer_quick_links: "Snelle Links",
    footer_legal: "Juridisch & Beleid",
    terms_conditions: "Algemene Voorwaarden",
    privacy_policy: "Privacybeleid",
    download_terms: "Download Voorwaarden (PDF)",
    download_privacy: "Download Privacyverklaring (PDF)",
    copyright: "© Student Housing in Tilburg. Alle rechten voorbehouden.",
    in_partnership: "In samenwerking met Student Party SAM"
  }
};

function setLanguage(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  localStorage.setItem('sht_lang', lang);
  
  // Synchronize select dropdowns
  const langSelects = document.querySelectorAll('.lang-select');
  langSelects.forEach(select => {
    select.value = lang;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Initial Language setup
  const currentLang = localStorage.getItem('sht_lang') || 'en';
  setLanguage(currentLang);

  // Bind change events to all language selectors
  document.querySelectorAll('.lang-select').forEach(select => {
    select.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  });

  // Mobile navigation menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item.active').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('active');
        }
      });

      item.classList.toggle('active', !isActive);
    });
  });

  // Highlight active menu item based on window location
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
