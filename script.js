(() => {
  'use strict';
  const navToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.navlinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') !== 'true';
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      navLinks.classList.toggle('is-open', open);
    });
    navLinks.addEventListener('click', event => {
      if (event.target.closest('a')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') { navToggle.setAttribute('aria-expanded','false'); navLinks.classList.remove('is-open'); }
    });
  }
  const pathname = window.location.pathname.split('/').pop() || 'index.html';
  const active = pathname.includes('commandes') ? 'commandes' : pathname.includes('lunel-rp') ? 'lunel' : 'index';
  if (pathname === 'index.html' || pathname === 'commandes.html' || pathname === 'lunel-rp.html') {
    document.querySelectorAll('[data-page]').forEach(a => { if (a.dataset.page === active) {a.classList.add('active');a.setAttribute('aria-current','page');} });
  }
  const writeClipboard = async (value) => {
    try { await navigator.clipboard.writeText(value);return true; } catch { return false; }
  };
  document.querySelectorAll('.copy-code').forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.dataset.code || 'LUNEL';
      const ok = await writeClipboard(text);
      const feedback = button.closest('.server-card')?.querySelector('.copy-feedback');
      if (feedback) feedback.textContent = ok ? '✓ Code LUNEL copié !' : 'Code à copier : LUNEL';
      const label=button.textContent;button.textContent=ok?'✓ Copié':'LUNEL';
      setTimeout(() => {button.textContent=label;if(feedback) feedback.textContent='';},2500);
    });
  });
  const container = document.getElementById('commandList');
  if (!container) return;
  const commands = [{"name":"captcha","description":"Lance ou relance ton captcha OziRP pour commencer le parcours d’arrivée.","category":"Entrée & serveur","staff":false},{"name":"configuration","description":"Configure les commandes OziRP visibles sur ce serveur.","category":"Entrée & serveur","staff":true},{"name":"connexions-joueurs","description":"Consulte les heures et sessions de connexion ER:LC sur les 15 derniers jours.","category":"Entrée & serveur","staff":false},{"name":"joueurs","description":"Affiche les joueurs présents dans le serveur ER:LC.","category":"Entrée & serveur","staff":false},{"name":"onboarding","description":"Configure le parcours d’arrivée : wiki, règlement, Roblox et identité.","category":"Entrée & serveur","staff":true},{"name":"relance-personnage","description":"Invitation privée à relier Roblox et créer son personnage, réservée au responsable.","category":"Entrée & serveur","staff":true},{"name":"roblox","description":"Gère la liaison entre Discord et Roblox.","category":"Entrée & serveur","staff":false},{"name":"role-salons","description":"Ajoute ou modifie les permissions d’un rôle sur tous les salons et catégories.","category":"Entrée & serveur","staff":true},{"name":"serveur","description":"Affiche l’état actuel du serveur ER:LC.","category":"Entrée & serveur","staff":false},{"name":"status-ozirp","description":"Publie ou déplace uniquement le panneau de statut OziRP dans ce salon.","category":"Entrée & serveur","staff":true},{"name":"tableau-mise-a-jour","description":"Publie ou déplace le tableau public des mises à jour OziRP.","category":"Entrée & serveur","staff":true},{"name":"carte-grise","description":"Gère les cartes grises RP avec des fenêtres Discord.","category":"Identité & documents","staff":false},{"name":"carte-identite-admin","description":"Staff : modifie les informations d’une carte d’identité RP.","category":"Identité & documents","staff":true},{"name":"carte-identité","description":"Crée et gère jusqu’à 5 personnages RP et leurs cartes d’identité.","category":"Identité & documents","staff":false},{"name":"carte-pro","description":"Gère les cartes professionnelles RP.","category":"Identité & documents","staff":false},{"name":"papier-voir","description":"Ouvre tes papiers RP pour les voir ou les envoyer à un autre membre.","category":"Identité & documents","staff":false},{"name":"papiers-panneau","description":"Publie le panneau public regroupant les démarches liées aux papiers RP.","category":"Identité & documents","staff":false},{"name":"permis-conduire","description":"Gère les permis de conduire fictifs du RP.","category":"Identité & documents","staff":false},{"name":"personnage-staff","description":"Staff : corrige le profil RP et les informations des documents d’un personnage.","category":"Identité & documents","staff":true},{"name":"port-arme","description":"Gère les permis de port d’arme fictifs du RP.","category":"Identité & documents","staff":false},{"name":"synchroniser-vehicules","description":"Synchronise tes cartes grises et assurances sur tous tes personnages RP.","category":"Identité & documents","staff":true},{"name":"vérif-papiers","description":"Services autorisés : vérifie les documents RP d’un titulaire de façon privée.","category":"Identité & documents","staff":false},{"name":"achat-vendre-vehicule","description":"Achète ou revend un véhicule RP avec gestion bancaire et carte grise automatique.","category":"Banque & économie","staff":false},{"name":"assurance","description":"Choisis un véhicule possédé pour demander, consulter ou résilier une assurance.","category":"Banque & économie","staff":false},{"name":"assurance-admin","description":"Modifie une assurance déjà créée : prix, dates et plaque.","category":"Banque & économie","staff":true},{"name":"assurance-souscription","description":"Ancien raccourci : ouvre maintenant le menu central /assurance.","category":"Banque & économie","staff":false},{"name":"banquier","description":"Configure ou attribue le rôle Banquier donnant accès aux fonctions bancaires.","category":"Banque & économie","staff":true},{"name":"compte","description":"Ouvre ton tableau de bord bancaire RP interactif.","category":"Banque & économie","staff":false},{"name":"compte-panneau","description":"Publie le panneau public d’accès au compte bancaire RP.","category":"Banque & économie","staff":false},{"name":"contravention","description":"Crée et consulte les contraventions RP reliées au compte bancaire.","category":"Banque & économie","staff":false},{"name":"facture","description":"Envoie et gère les factures RP.","category":"Banque & économie","staff":false},{"name":"facture-rattrapage","description":"Staff : retrouver les anciennes contestations de factures et notifier leurs émetteurs.","category":"Banque & économie","staff":true},{"name":"releve-bancaire","description":"Banquier : exporter toutes les transactions RP enregistrées d’un membre.","category":"Banque & économie","staff":true},{"name":"salaire","description":"Demande, valide et verse les salaires RP sur les comptes bancaires.","category":"Banque & économie","staff":false},{"name":"salaire-panneau","description":"Publie le panneau public des demandes de salaire RP.","category":"Banque & économie","staff":false},{"name":"ticket-banque","description":"Transmet une demande au salon bancaire configuré.","category":"Banque & économie","staff":false},{"name":"bracelet-électronique","description":"Gère les bracelets électroniques fictifs du RP.","category":"Gendarmerie & justice","staff":false},{"name":"casier-judiciaire","description":"Tribunal : gère les mentions et génère automatiquement le Bulletin N°2.","category":"Gendarmerie & justice","staff":false},{"name":"constat-accident","description":"Crée un constat d’accident routier RP guidé avec conducteurs, véhicules et signatures.","category":"Gendarmerie & justice","staff":false},{"name":"forces-ordre-panneau","description":"Publie le panneau public regroupant les commandes des forces de l’ordre RP.","category":"Gendarmerie & justice","staff":false},{"name":"fourrière","description":"Crée une mise en fourrière RP et l’envoie au propriétaire du véhicule.","category":"Gendarmerie & justice","staff":false},{"name":"immobilisation","description":"Crée une fiche RP d’immobilisation de véhicule et l’envoie au propriétaire.","category":"Gendarmerie & justice","staff":false},{"name":"personne-recherché","description":"Crée une fiche interne de recherche / signalement avec référence de procédure automatique.","category":"Gendarmerie & justice","staff":false},{"name":"procès-verbal","description":"Choisis le type de procès-verbal RP à rédiger puis complète le formulaire.","category":"Gendarmerie & justice","staff":false},{"name":"pv-archive-retroactif","description":"Archivage de procès-verbaux existants dans le système secondaire.","category":"Gendarmerie & justice","staff":true},{"name":"pv-supprimer","description":"Suppression contrôlée d’un procès-verbal avec confirmation.","category":"Gendarmerie & justice","staff":true},{"name":"rapport-d-intervention","description":"Remplit un rapport d’information RP puis l’envoie dans le salon choisi.","category":"Gendarmerie & justice","staff":false},{"name":"absence","description":"Déclare une absence RP et choisit automatiquement le salon selon le service.","category":"Immobilier & vie RP","staff":false},{"name":"absence-panneau","description":"Publie le panneau public de déclaration d’absence RP.","category":"Immobilier & vie RP","staff":false},{"name":"immobilier","description":"Ouvre le système de location immobilière RP et de justificatifs de domicile.","category":"Immobilier & vie RP","staff":false},{"name":"immobilier-panneau","description":"Publie ou déplace le panneau immobilier public (réservé aux agents immobiliers).","category":"Immobilier & vie RP","staff":true},{"name":"transport","description":"Ouvre le réseau Lunel Mobilités : bus, billets, correspondances et taxis.","category":"Immobilier & vie RP","staff":false},{"name":"transport-config","description":"Configure le panneau public Lunel Mobilités.","category":"Immobilier & vie RP","staff":false},{"name":"auto-ecole-panneau","description":"Publie le panneau public de l’auto-école RP.","category":"Métiers & services","staff":true},{"name":"auto-école","description":"Demande une inscription et un devis pour passer un permis de conduire RP.","category":"Métiers & services","staff":false},{"name":"bipeur","description":"Déclenche un appel d’intervention privé vers un ou plusieurs membres.","category":"Métiers & services","staff":false},{"name":"cinéma","description":"Publie le panneau de billetterie du Cinéma de Lunel.","category":"Métiers & services","staff":false},{"name":"fermer-ticket","description":"Ferme et supprime un ticket Auto-école terminé.","category":"Métiers & services","staff":true},{"name":"restaurateur","description":"Restaurants RP : carte, commandes et demandes de paiement.","category":"Métiers & services","staff":true},{"name":"service","description":"Prends ou termines ton service RP pour le métier choisi.","category":"Métiers & services","staff":false},{"name":"service-config","description":"Enregistre ou modifie tes informations de service RP.","category":"Métiers & services","staff":true},{"name":"service-en-cours","description":"Affiche les personnes actuellement en service pour le métier choisi.","category":"Métiers & services","staff":false},{"name":"service-panneau","description":"Publie le tableau de bord permanent des prises de service.","category":"Métiers & services","staff":false},{"name":"travaux","description":"Planifie et publie des travaux RP avec zone, durée, restrictions et référent.","category":"Métiers & services","staff":false},{"name":"bilan-de-santé","description":"Crée une fiche bilan de santé RP complète du CHU de Lunel.","category":"Santé & secours","staff":false},{"name":"certificat-de-décès","description":"Crée un certificat de décès RP officiel.","category":"Santé & secours","staff":false},{"name":"certificat-medical","description":"Crée un certificat médical RP pour une GAV, une agression, une plainte ou autre.","category":"Santé & secours","staff":false},{"name":"sante-panneau","description":"Publie le panneau public regroupant les commandes de santé RP.","category":"Santé & secours","staff":false},{"name":"visite-médicale","description":"Démarrer cette fonction RP depuis Discord.","category":"Santé & secours","staff":false},{"name":"annonce","description":"Envoie une annonce globale dans ER:LC.","category":"Évènements & communauté","staff":false},{"name":"annonce-message","description":"Ouvre le panneau pour envoyer ou programmer des annonces ER:LC.","category":"Évènements & communauté","staff":false},{"name":"avertissement","description":"Gère les avertissements Discord et ER:LC.","category":"Évènements & communauté","staff":true},{"name":"compteur","description":"Crée et gère un compte à rebours persistant pour un événement.","category":"Évènements & communauté","staff":false},{"name":"giveaway-points","description":"Ajoute manuellement des points à un participant du giveaway actif.","category":"Évènements & communauté","staff":true},{"name":"giveaway-promo","description":"Participer ou gérer le giveaway promotionnel à points.","category":"Évènements & communauté","staff":false},{"name":"inactivite","description":"Suivi des membres inactifs, avertissements et exclusions configurables.","category":"Évènements & communauté","staff":true},{"name":"message","description":"Envoie, programme ou modifie un message Discord publié par OziRP.","category":"Évènements & communauté","staff":false},{"name":"message-auto","description":"Configure les messages automatiques Discord ou ER:LC.","category":"Évènements & communauté","staff":false},{"name":"tableau-staff","description":"Installe ou déplace le tableau de bord staff permanent OziRP.","category":"Évènements & communauté","staff":true},{"name":"ticket-ozirp","description":"Publie ou déplace uniquement le panneau de tickets OziRP dans ce salon.","category":"Évènements & communauté","staff":false},{"name":"tombola","description":"Panneau tombola et gestion du tirage avec vérification staff.","category":"Évènements & communauté","staff":true},{"name":"vehicules","description":"Vérifie les véhicules présents via le pseudo Roblox de leur propriétaire.","category":"Évènements & communauté","staff":false},{"name":"vehicules-panneau","description":"Publie le panneau public regroupant les démarches liées aux véhicules.","category":"Évènements & communauté","staff":false},{"name":"illegal","description":"Marché illégal fictif RP : panneau et gestion réservés au rôle Illégal.","category":"Autres","staff":false}];
  const categoryOrder = ["Entrée & serveur", "Identité & documents", "Banque & économie", "Gendarmerie & justice", "Immobilier & vie RP", "Métiers & services", "Santé & secours", "Évènements & communauté", "Autres"];
  const categoryIcons = {"Entrée & serveur": "🌐", "Identité & documents": "🪪", "Banque & économie": "💳", "Gendarmerie & justice": "🚔", "Immobilier & vie RP": "🏡", "Métiers & services": "💼", "Santé & secours": "🏥", "Évènements & communauté": "🎟️", "Autres": "🧩"};
  const input = document.getElementById('commandSearch');
  const reset = document.getElementById('resetFilters');
  const clear = document.getElementById('clearSearch');
  const filters = document.getElementById('categoryFilters');
  const result = document.getElementById('searchResult');
  const none = document.getElementById('noResults');
  let selectedCategory = new URL(window.location.href).searchParams.get('categorie') || 'Toutes';
  if (!categoryOrder.includes(selectedCategory)) selectedCategory = 'Toutes';
  const normalize = (text) => String(text).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('fr');
  const make = (tag,cls,txt) => {const el=document.createElement(tag);if(cls)el.className=cls;if(txt!==undefined)el.textContent=txt;return el;};
  function renderFilters(){
    filters.replaceChildren();
    ['Toutes',...categoryOrder.filter(cat=>commands.some(c=>c.category===cat))].forEach(category => {
      const n=category==='Toutes'?commands.length:commands.filter(c=>c.category===category).length;
      const b=make('button','filter-chip',category === 'Toutes'?'Tout':category);
      b.type='button';b.setAttribute('aria-pressed',String(category===selectedCategory));
      const count=make('span','',String(n));b.append(count);
      b.addEventListener('click',() => {selectedCategory=category;renderFilters();renderCommands();});filters.append(b);
    });
  }
  function renderCommands(){
    const query=normalize(input.value.trim());
    const shown=commands.filter(c => (selectedCategory==='Toutes'||c.category===selectedCategory) && (!query||normalize(c.name+' '+c.description+' '+c.category).includes(query)));
    container.replaceChildren();
    for (const category of categoryOrder){
      const entries=shown.filter(c => c.category===category);
      if (!entries.length)continue;
      const section=make('section','command-section');
      const heading=make('div','command-section-title');
      heading.append(make('h2','',`${categoryIcons[category]||'◈'}  ${category}`),make('span','section-n',`${entries.length} commande${entries.length>1?'s':''}`));section.append(heading);
      const grid=make('div','command-grid');
      for(const command of entries){
        const article=make('article','command-card');
        const top=make('div','command-card-top');top.append(make('code','',`/${command.name}`));
        const p=make('p','',command.description);
        const bottom=make('div','command-card-bottom');bottom.append(make('span',command.staff?'command-tag staff':'command-tag',command.staff?'Accès restreint':'Roleplay'));
        const copy=make('button','copy-command','Copier ↗');copy.type='button';copy.setAttribute('aria-label',`Copier la commande /${command.name}`);
        copy.addEventListener('click',async()=>{const ok=await writeClipboard('/'+command.name);copy.textContent=ok?'✓ Copié':'Sélectionnez le texte';setTimeout(()=>{copy.textContent='Copier ↗'},1900)});
        bottom.append(copy);article.append(top,p,bottom);grid.append(article);
      }
      section.append(grid);container.append(section);
    }
    none.hidden=shown.length!==0;
    result.textContent=`${shown.length} commande${shown.length>1?'s':''} affichée${shown.length>1?'s':''} · ${commands.length} référencées`;
    clear.hidden=input.value.length===0;
  }
  if(input && filters){
    input.addEventListener('input',renderCommands);
    clear?.addEventListener('click',()=>{input.value='';renderCommands();input.focus()});
    reset?.addEventListener('click',()=>{input.value='';selectedCategory='Toutes';renderFilters();renderCommands()});
    renderFilters();renderCommands();
  }
})();
