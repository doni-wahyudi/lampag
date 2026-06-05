import React, { useEffect, useState } from 'react'

const navItems = [
  { label: 'Willkommen', href: '/' },
  { label: 'Über Uns', href: '/uber-uns/' },
  {
    label: 'Dienstleistungen',
    href: '#',
    children: [
      { label: 'Werks- und Montageplanung', href: '/werks-und-montageplanung/' },
      { label: 'Bauphysik', href: '/bauphysik/' },
      { label: 'Beratung', href: '/beratung/' },
    ],
  },
  { label: 'Produkte', href: '/produkte/' },
  { label: 'Bestellprozess', href: '/bestellprozess/' },
  { label: 'Kontakt', href: '/kontakt/' },
]

const services = [
  {
    id: 'werksplanung',
    href: '/werks-und-montageplanung/',
    title: 'Werks- und Montageplanung',
    text: 'Detaillierte Ausführungs-, Werkstatt- und Montageplanung für Fenster, Türen und Fassaden.',
    icon: (
      <img src="https://lampag.com/wp-content/uploads/elementor/thumbs/sketch_w-pwjmbugt6h4j2mbfoqjzsuhms6yyk8ffrrm3ubl620.png.webp" alt="sketch_w blueprint" />
    ),
  },
  {
    id: 'bauphysik',
    href: '/bauphysik/',
    title: 'Bauphysik',
    text: 'Bewertung von Wärme-, Schall-, Sonnen- und Feuchteschutz als Grundlage verlässlicher Planung.',
    icon: (
      <img src="https://lampag.com/wp-content/uploads/elementor/thumbs/settings_w-pwjmbtiyzn38r0csu85d8cq66t3lcjbpfmymd1mk88.png.webp" alt="settings_w gear" />
    ),
  },
  {
    id: 'beratung',
    href: '/beratung/',
    title: 'Beratung',
    text: 'Projektbegleitung von der Systemauswahl bis zur technischen Abstimmung mit allen Beteiligten.',
    icon: (
      <img src="https://lampag.com/wp-content/uploads/elementor/thumbs/consultation_w-pwjmbugt6h4j2mbfoqjzsuhms6yyk8ffrrm3ubl620.png.webp" alt="consultation_w chat" />
    ),
  },
]

const projects = [
  { title: 'Privatresidenz', href: '/privat-residenz/', size: 'small', tone: 'sage' },
  { title: 'Santa Ponsa', href: '/santa-ponsa/', size: 'small', tone: 'stone' },
  { title: 'Cottage Street', href: '/cottage-street/', size: 'large', tone: 'forest' },
  { title: 'Bismarckhaus', href: '/bismarckhaus/', size: 'small', tone: 'silver' },
  { title: 'Spree Studios', href: '/spree-studios/', size: 'small', tone: 'moss' },
]

const serviceIntro =
  'Mehr als Produkte: Lösungen aus einer Hand. Unser umfassendes Produktspektrum wird durch professionelle Dienstleistungen ergänzt - für reibungslose Abläufe von der Planung bis zur Umsetzung. An den Standorten Hamburg und Dortmund stehen Ihnen über 20 erfahrene Architekten und Ingenieure zur Seite. Mit fundierter Fachkompetenz und modernen Planungstools erstellen wir gezielt Bau- und Werksplanungen - effizient, vorausschauend und praxisnah.'

const pageContent = {
  '/uber-uns/': {
    kicker: 'Über uns',
    title: 'LAMPAG - Kompetenz in Aluminium. Member of Alu Group.',
    body: [
      'Die LAMPAG GmbH ist ein führendes Produktionsunternehmen für Schüco-Fenster, Türen und Fassadenlösungen - made in Germany. Als Teil der international tätigen Alu Group mit Hauptsitz in Hamburg profitieren wir von langjähriger Erfahrung, modernsten Fertigungstechnologien und einer hochentwickelten Prozessteuerung. Diese gebündelte Kompetenz macht LAMPAG zur ersten Adresse für anspruchsvolle Bauprojekte in Deutschland.',
      'Mit der Integration eines erfahrenen Teams mit über 50 Jahren regionaler Expertise in NRW haben wir unsere fachliche Tiefe gezielt erweitert. Das fundierte Know-how aus zahlreichen komplexen Bauvorhaben fließt heute direkt in die Entwicklungs- und Produktionsprozesse von LAMPAG ein - ein echter Mehrwert für unsere Kunden.',
      'Mit einem jährlichen Produktionsvolumen von über 100.000 m² liefern wir hochwertige Aluminiumlösungen für Projekte jeder Größenordnung - vom individuellen Objekt bis zum komplexen Großprojekt. Ein Portfolio von über 700 Projekten rund um den Globus unterstreicht unsere Leistungsfähigkeit - unser Fokus liegt dabei klar auf Qualität "Made in Germany".',
      'Unsere Mission: kompromisslose Qualität, absolute Termintreue und volle Preistransparenz. Wir begleiten Architekten, Bauträger und Investoren mit durchdachten Lösungen, technischer Präzision und einem klaren Verständnis für architektonische Visionen - zuverlässig, effizient und partnerschaftlich.',
      'Unser Produktspektrum reicht von Fenster- und Glasfassaden über montagefertige Fassadenelemente aus Aluminium bis hin zu kompletten Geländersystemen - wahlweise als Ganzglas- oder Pfostenlösung. Auch bei Sonderlösungen und objektbezogenen Systemanpassungen stehen wir als starker Entwicklungspartner an Ihrer Seite.',
    ],
  },
  '/dienstleistungen/': {
    kicker: 'Dienstleistungen',
    title: 'Mehr als Produkte: Lösungen aus einer Hand.',
    body: [
      'Unser umfassendes Produktspektrum wird durch professionelle Dienstleistungen ergänzt - für reibungslose Abläufe von der Planung bis zur Umsetzung.',
      'An den Standorten Hamburg und Dortmund stehen Ihnen über 20 erfahrene Architekten und Ingenieure zur Seite.',
      'Mit fundierter Fachkompetenz und modernen Planungstools erstellen wir gezielt Bau- und Werksplanungen - effizient, vorausschauend und praxisnah.',
    ],
  },
  '/werks-und-montageplanung/': {
    kicker: 'Dienstleistung',
    title: 'Werks- und Montageplanung',
    body: [
      'Werks- und Montageplanung - präzise geplant, perfekt umgesetzt',
      'Die Werks- und Montageplanung ist ein zentraler Bestandteil bei der erfolgreichen Umsetzung von Bauprojekten - insbesondere im Bereich hochwertiger Aluminiumfenster. Sie gewährleistet reibungslose Abläufe von der Fertigung bis zur Montage vor Ort.',
      'Werksplanung: In der Werksplanung werden alle Schritte der Herstellung präzise vorbereitet. Technische Spezifikationen, Materialqualität und Fertigungsprozesse werden exakt definiert und unterliegen strengen Qualitätskontrollen - für maximale Passgenauigkeit und Langlebigkeit der Bauelemente.',
      'Montageplanung: Die Montageplanung sorgt dafür, dass die Fenster fachgerecht und terminsicher eingebaut werden. Dabei stehen eine sichere Verankerung, Dichtheit und die Einhaltung bauphysikalischer Anforderungen im Fokus.',
      'Zeit- und Ablaufplanung: Ein realistischer Zeitplan ist entscheidend für den Projekterfolg. Unsere Planung integriert alle Prozessschritte - von der Produktion bis zur Übergabe - und stellt sicher, dass Termine und Budgets eingehalten werden.',
      'Logistikplanung: Die reibungslose Lieferung vom Werk zur Baustelle sowie eine sachgerechte Lagerung vor Ort sind essenziell. Unsere Logistikprozesse garantieren punktgenaue Anlieferung in einwandfreiem Zustand.',
      'Sicherheitsplanung: Arbeitssicherheit hat höchste Priorität - sowohl in der Fertigung als auch auf der Baustelle. Wir setzen auf klare Standards und geschulte Teams, um sichere Arbeitsbedingungen zu gewährleisten.',
      'Eine durchdachte Werks- und Montageplanung ist nicht nur ein Qualitätsversprechen - sie ist die Grundlage für einen effizienten Projektablauf und dauerhaft überzeugende Ergebnisse.',
    ],
  },
  '/bauphysik/': {
    kicker: 'Dienstleistung',
    title: 'Bauphysik',
    body: [
      'Bauphysik trifft Design - Fenster und Fassaden neu gedacht',
      'Fenster und Fassaden sind mehr als nur Gestaltungselemente - sie erfüllen zentrale bauphysikalische Funktionen. Sie regulieren den Austausch von Wärme, Licht und Schall zwischen Innen- und Außenraum und beeinflussen damit maßgeblich das Raumklima, die Energieeffizienz und den Komfort eines Gebäudes.',
      'Bei modernen Fensterlösungen stehen folgende Aspekte im Fokus:',
      'Wärmeschutz: Minimierung des Wärmeverlusts durch Verglasung und Rahmen.',
      'Tageslichtnutzung: Optimale Lichtdurchlässigkeit für helle Innenräume.',
      'Schallschutz: Effektive Reduktion von Außengeräuschen für mehr Ruhe und Wohnqualität.',
      'Die Fassade ist die schützende Haut des Gebäudes - sie erfüllt sowohl funktionale als auch gestalterische Aufgaben:',
      'Wärmedämmung: Vermeidung von Energieverlusten durch hochwertige Dämmung und konstruktiven Wärmeübergang.',
      'Feuchteschutz: Schutz vor Kondensat und eindringender Nässe.',
      'Schall- und Lichtschild: Regulierung von Außeneinflüssen zur Sicherstellung eines angenehmen Innenraumklimas.',
      'Aluminiumfenster - die starke Lösung für moderne Gebäude',
      'Aluminiumfenster überzeugen durch eine Vielzahl technischer und gestalterischer Vorteile: Langlebigkeit, Energieeffizienz, Designvielfalt, Schallschutz, geringes Gewicht und Nachhaltigkeit.',
      'Aluminiumfenster vereinen technologische Stärke mit gestalterischer Freiheit - ideal für energieeffizientes, komfortables und langlebiges Bauen.',
    ],
  },
  '/beratung/': {
    kicker: 'Dienstleistung',
    title: 'Beratung',
    body: [
      'Kompetente Beratung als Grundlage erfolgreicher Fensterlösungen',
      'Die Auswahl der passenden Aluminiumfenster erfordert weit mehr als nur die Entscheidung für ein Design. Unterschiedliche Anforderungen an Wärmedämmung, Schallschutz, Sicherheit und Ästhetik machen eine fundierte Beratung zu einem zentralen Bestandteil jedes Bau- oder Sanierungsprojekts.',
      'Eine qualifizierte Beratung hilft dabei, technische Möglichkeiten optimal mit architektonischen Vorstellungen zu verbinden. Sie berücksichtigt individuelle Rahmenbedingungen - wie Gebäudeart, Standort, Budget und Energieeffizienzvorgaben - und führt zu durchdachten Lösungen, die langfristig überzeugen.',
      'Im Rahmen der Beratung werden unterschiedliche Profilsysteme, Verglasungsvarianten, Öffnungsarten und Designoptionen analysiert und miteinander verglichen. Zusätzlich liefert sie transparente Informationen zu Kosten, Lieferzeiten und Montagemöglichkeiten - für maximale Planungssicherheit.',
      'Nicht zuletzt schafft eine gute Beratung Vertrauen - sie bildet die Basis für ein reibungsloses Projekt, das sowohl funktional als auch gestalterisch überzeugt.',
    ],
  },
  '/bestellprozess/': {
    kicker: 'Bestellprozess',
    title: 'Ablauf Ihrer Bestellung',
    body: ['Von der ersten Kontaktaufnahme bis zur Lieferung folgt jedes Projekt einem klaren Ablauf. Die Schritte sind übersichtlich vorbereitet und führen sicher durch Planung, Freigabe, Herstellung und Versand.'],
  },
  '/kontakt/': {
    kicker: 'Kontakt',
    title: 'Schreiben Sie uns',
    body: [
      'LAMPAG GmbH, Neuer Wall 2-6, 20354 Hamburg',
      'Telefon: +49 040 571 996 390',
      'E-Mail: info@lampag.com',
    ],
    highlights: ['Hamburg', 'NRW', 'Deutschlandweite Projektbegleitung'],
  },
}

const productGroups = [
  {
    title: 'Aluminum Fenster',
    heading: 'Aluminium-Fenster - langlebig, effizient, vielseitig.',
    body: [
      'Aluminium-Fenster überzeugen durch ihre robuste Bauweise und außergewöhnlich lange Lebensdauer. Sie bieten exzellente Wärmedämmwerte und tragen aktiv zur Senkung der Energiekosten bei.',
      'Dank ihrer pflegeleichten Oberfläche und der großen Designvielfalt lassen sie sich flexibel an individuelle Gestaltungswünsche und architektonische Konzepte anpassen - funktional, ästhetisch und zukunftssicher.',
    ],
    systems: ['Schüco AWS 50.NI', 'Schüco AWS 65', 'Schüco AWS 70.HI', 'Schüco AWS 75.SI+', 'Schüco AWS 75.PD', 'Schüco AWS 90.SI+', 'Schüco FWS 60.CV'],
  },
  {
    title: 'Aluminum Türen',
    heading: 'Aluminium-Türen - stark im Auftritt, beständig im Einsatz',
    body: [
      'Aluminium-Türen vereinen modernes Design mit langlebiger Funktionalität. Sie sind äußerst robust, pflegeleicht und bieten eine zuverlässige Wärmedämmung - ideal für energieeffizientes Bauen.',
      'Ob minimalistisch, klassisch oder individuell gestaltet: Durch zahlreiche Farb- und Designoptionen lassen sich Aluminium-Türen perfekt auf den Stil und die Anforderungen jedes Gebäudes abstimmen.',
    ],
    systems: ['Schüco ADS 50', 'Schüco ADS 65', 'Schüco ADS 70.HI', 'Schüco ADS 75.SI', 'Schüco ADS 90.SI'],
  },
  {
    title: 'Elementfassaden',
    heading: 'Elementfassaden - schnell montiert, dauerhaft überzeugend.',
    body: [
      'Elementfassaden sind die ideale Lösung für moderne Bauprojekte mit hohen Anforderungen an Effizienz und Gestaltung. Die vorgefertigten Bauelemente ermöglichen eine schnelle und präzise Montage direkt auf der Baustelle - zeitsparend und kosteneffizient. Sie bieten exzellente Wärmedämmung, hohe Langlebigkeit und lassen sich individuell anpassen - perfekt abgestimmt auf Architektur und Anspruch.',
    ],
    systems: ['Schüco UCC 65 SG', 'Schüco AF UDC 80', 'Schüco AF UDC 80.CV', 'Schüco AF UDC 80.SG'],
  },
  {
    title: 'Pfosten - Riegel Fassaden',
    heading: 'Pfosten-Riegel-Fassaden - klassisch im System, stark in der Wirkung.',
    body: [
      'Diese bewährte Fassadenkonstruktion aus vertikalen und horizontalen Profilen überzeugt durch Stabilität, Flexibilität und zeitlose Ästhetik. Pfosten-Riegel-Fassaden bieten hervorragende Wärmedämmung und lassen sich vielseitig gestalten - in Farbe, Form und Funktion. Ideal für unterschiedlichste Architekturstile und anspruchsvolle Designkonzepte.',
    ],
    systems: ['Schüco FWS 50', 'Schüco FWS 60', 'Schüco FWS 60.CV', 'Schüco FWS 50.SG', 'Schüco FWS 60.SG'],
  },
  {
    title: 'Schiebetüren',
    heading: 'Schiebetüren - mehr Raum, mehr Komfort.',
    body: [
      'Schiebetüren sind die ideale Lösung, wenn es auf Platzersparnis, Funktionalität und Design ankommt. Sie gleiten mühelos entlang ihrer Führungsschiene und ermöglichen großzügige, barrierearme Übergänge zwischen Innen- und Außenbereichen. Dank robuster Bauweise, hoher Langlebigkeit und vielfältiger Gestaltungsoptionen passen sie sich nahtlos an jede Architektur und jeden Wohnstil an.',
    ],
    systems: ['Schüco ASE 60', 'Schüco ASE 80.HI', 'Schüco ASS 39.PD.NI', 'Schüco ASS 50', 'Schüco ASS 77.PD.HI'],
  },
  {
    title: 'Falttüren',
    heading: 'Falttüren - maximale Öffnung, minimaler Platzbedarf.',
    body: [
      'Falttüren bieten höchste Flexibilität bei gleichzeitig platzsparender Funktion. Sie lassen sich vollständig zur Seite falten und schaffen so fließende Übergänge zwischen Innen- und Außenbereichen - ideal für lichtdurchflutete Räume und offene Konzepte. Robust, langlebig und in zahlreichen Farben und Designs erhältlich, passen sich Falttüren jedem architektonischen Stil und individuellen Anspruch perfekt an.',
    ],
    systems: ['Schüco ASS 70.FD', 'Schüco ASS 80.FD.HI', 'Schüco AS 75.FD', 'Schüco AS 90.FD'],
  },
  {
    title: 'Fensterfassaden',
    heading: 'Fensterfassaden - Licht, Weite, Ausblick.',
    body: [
      'Fensterfassaden vereinen modernes Design mit maximaler Transparenz. Sie sorgen für natürliche Lichtdurchflutung, beeindruckende Ausblicke und eine offene Raumwirkung - innen wie außen. Dank ihrer robusten Konstruktion, hohen Langlebigkeit und vielfältigen Gestaltungsmöglichkeiten lassen sie sich perfekt an architektonische Konzepte und individuelle Designwünsche anpassen.',
    ],
    systems: ['Schüco AWS 65', 'Schüco AWS 70.HI', 'Schüco AWS 75.SI+', 'Schüco AWS 90.SI+'],
  },
  {
    title: 'Fassadenverkleidungen',
    heading: 'Fassadenverkleidungen - Funktion trifft Design.',
    body: [
      'Fassadenverkleidungen sind eine wichtige Komponente bei der Gestaltung und Renovierung von Gebäuden. Sie schützen die Gebäudehülle vor Witterungseinflüssen und verbessern das Aussehen des Gebäudes. Darüber hinaus können sie aus verschiedenen Materialien wie Holz, Stein oder Kunststoff hergestellt werden, um eine Vielzahl von Architekturstilen zu unterstützen.',
    ],
    systems: ['Aluminium Kantbleche', 'Stahl & Edelstahl Kantbleche', 'Alu Verbundpaneele'],
  },
  {
    title: 'Geländer',
    heading: 'Geländersysteme - sicher, langlebig, formschön.',
    body: [
      'Geländer sind ein unverzichtbares Element an Treppen, Balkonen und Terrassen - sie bieten Sicherheit, Halt und eine klare Linienführung in der Architektur.',
      'Unsere Systeme aus Aluminium oder Stahl überzeugen durch hohe Stabilität, Langlebigkeit und modernes Design. Dank vielfältiger Farb- und Formvarianten lassen sie sich individuell an die architektonische Gestaltung jedes Gebäudes anpassen - funktional, ästhetisch und wartungsarm.',
    ],
    systems: ['Absturzsicherungen', 'Ganzglasgeländer', 'Pfostengeländer'],
  },
  {
    title: 'Sonderkonstruktionen',
    heading: 'Sonderkonstruktionen - Architektur ohne Kompromisse.',
    body: [
      'Sonderkonstruktionen ermöglichen individuelle Lösungen für außergewöhnliche Gestaltungsanforderungen. Ob für Fassaden, Fenster oder Systemanpassungen - sie schaffen Freiraum für architektonische Kreativität und prägen das Erscheinungsbild eines Gebäudes nachhaltig.',
      'Gefertigt aus hochwertigen Metallen wie Aluminium oder Stahl, lassen sich Form, Funktion und Farbe präzise auf die spezifischen Anforderungen jedes Projekts abstimmen. Das Ergebnis: Ein einzigartiger Look, der sich abhebt - technisch durchdacht und visuell überzeugend.',
    ],
    systems: ['Wintergärten', 'Glasüberdachungen', 'Ganzglaslösungen'],
  },
]

const projectDetails = {
  '/privat-residenz/': {
    title: 'Privatresidenz, Hamburg, Deutschland',
    details: ['Fenster: Schüco AWS 75', 'Schiebetüren: Schüco ASS 70', 'Glas: Dreifachglas UG 0.5', 'Hamburg, HH, Deutschland', 'Glasfläche: 4,100 sqft', 'Fertigstellung: 2018'],
  },
  '/santa-ponsa/': {
    title: 'Santa Ponsa, Mallorca, Spanien',
    details: ['Fenster: Schüco AWS 70.HI', 'Falttüren: Schüco ASS 70.FD', 'Glas: Zweifachglas UG 1.0', 'Warema Jalousien', 'Mallorca, Spanien', 'Fertigstellung: 2020'],
  },
  '/cottage-street/': {
    title: '26 Cottage St., Jersey City\nNJ, USA',
    details: ['Fenster: Schüco AWS 70.HI - Zweifach Glas', 'Geländer: Ganzglasgeländer Alu', 'Glas: Zweifachglas UG 1.0', 'Architekt: C3D Architects', 'Jersey City, NJ, USA', 'Fertigstellung: 2021'],
  },
  '/bismarckhaus/': {
    title: 'Bismarckhaus, Stuttgart, Deutschland',
    details: ['Fenster: Schüco AWS 75.SI', 'Schiebetüren: Schüco ASS 70.HI', 'Glas: Dreifachverglasung UG 0.5', 'Architekt: SHARC', 'Stuttgart, Deutschland', 'Fertigstellung: 2015'],
  },
  '/spree-studios/': {
    title: 'Spree Studios, Berlin, Deutschland',
    details: ['Fenster: Schüco AWS 57.RO Motorisierte Dachfenster', 'Fensterfassaden: Schüco AWS 75', 'Berlin, Deutschland', 'Fertigstellung: 2018'],
  },
}

function getPath() {
  const path = window.location.pathname
  return path.endsWith('/') ? path : `${path}/`
}

function navigate(event, href) {
  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0 ||
    href.startsWith('http') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  ) {
    return
  }

  event.preventDefault()
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function AppLink({ href, children, className, ...props }) {
  return (
    <a className={className} href={href} onClick={(event) => navigate(event, href)} {...props}>
      {children}
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <AppLink className="brand" href="/" aria-label="LAMPAG Startseite">
        <span className="brand-logo-line">
          <span className="brand-mark">LAMPAG</span>
          <span className="brand-sub">GmbH</span>
        </span>
        <span className="brand-caption">AG FensterWerke</span>
      </AppLink>

      <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <div className="nav-item" key={item.label}>
            <AppLink href={item.href}>{item.label}</AppLink>
            {item.children && (
              <div className="submenu">
                {item.children.map((child) => (
                  <AppLink key={child.label} href={child.href}>
                    {child.label}
                  </AppLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-label="Menü öffnen"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
        <em>Menü</em>
      </button>
    </header>
  )
}

function App() {
  const [path, setPath] = useState(getPath())

  useEffect(() => {
    const handlePop = () => setPath(getPath())
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  useEffect(() => {
    let title = 'LAMPAG GmbH - AG Fensterwerke'
    let description = 'LAMPAG GmbH - nachhaltige Fenster-, Tür- und Fassadenlösungen für zukunftsorientiertes Bauen.'

    if (path === '/') {
      title = 'LAMPAG GmbH - AG Fensterwerke Erleben Sie die Zukunft!'
      description = 'AG FensterWerke - LAMPAG - Erleben Sie die Zukunft! - Nachhaltige Produkte für die Zukunft. Vertrauen Sie auf Qualität durch die zertifizierten Partnerschaften mit führenden Systemlieferanten. Die AG Fensterwerke sind ein weltweit führendes Produktionswerk spezialisiert auf Schüco Fenster, Haustüren und Fassaden'
    } else if (path === '/uber-uns/' || path === '/ueber-uns/') {
      title = 'Über uns - LAMPAG GmbH - AG Fensterwerke'
      description = 'AG FensterWerke - LAMPAG - Erleben Sie die Zukunft! - Nachhaltige Produkte für die Zukunft. Vertrauen Sie auf Qualität durch die zertifizierten Partnerschaften mit führenden Systemlieferanten. Die AG Fensterwerke sind ein weltweit führendes Produktionswerk spezialisiert auf Schüco Fenster, Haustüren und Fassaden'
    } else if (path === '/werks-und-montageplanung/') {
      title = 'Werks- und Montageplanung - LAMPAG GmbH - AG Fensterwerke'
      description = 'Mehr als Produkte: Lösungen aus einer Hand. Unser umfassendes Produktspektrum wird durch professionelle Dienstleistungen ergänzt – für reibungslose Abläufe von der Planung bis zur Umsetzung.'
    } else if (path === '/bauphysik/') {
      title = 'Bauphysik - LAMPAG GmbH - AG Fensterwerke'
      description = 'Bewertung von Wärme-, Schall-, Sonnen- und Feuchteschutz als Grundlage verlässlicher Planung.'
    } else if (path === '/beratung/') {
      title = 'Beratung - LAMPAG GmbH - AG Fensterwerke'
      description = 'Projektbegleitung von der Systemauswahl bis zur technischen Abstimmung mit allen Beteiligten.'
    } else if (path === '/produkte/') {
      title = 'Produkte - LAMPAG GmbH - AG Fensterwerke'
      description = 'Die unten dargestellten Systeme und Produkte stellen einen Teilauszug dar. Für weitere Produktlösungen kontaktieren Sie bitte unser technisches Büro in Hamburg.'
    } else if (path === '/bestellprozess/') {
      title = 'Bestellprozess - LAMPAG GmbH - AG Fensterwerke'
      description = 'Von der ersten Kontaktaufnahme bis zur Lieferung folgt jedes Projekt einem klaren Ablauf.'
    } else if (path === '/kontakt/') {
      title = 'Kontakt - LAMPAG GmbH - AG Fensterwerke'
      description = 'Schreiben Sie uns - LAMPAG GmbH, Neuer Wall 2-6, 20354 Hamburg. Telefon: +49 040 571 996 390'
    } else if (path === '/impressum/') {
      title = 'Impressum - LAMPAG GmbH - AG Fensterwerke'
      description = 'Impressum der LAMPAG GmbH - Angaben gemäß § 5 TMG, vertreten durch den Geschäftsführer H. Reinke und A. Dordevic.'
    } else if (path === '/datenschutz/') {
      title = 'Datenschutz - LAMPAG GmbH - AG Fensterwerke'
      description = 'Datenschutzerklärung der LAMPAG GmbH - Erfassung und Verarbeitung personenbezogener Daten.'
    } else {
      const project = projects.find((item) => item.href === path)
      if (project) {
        title = `${project.title} - LAMPAG GmbH - AG Fensterwerke`
        const details = projectDetails[path]
        description = details ? details.details.join(', ') : 'Projektinformationen der LAMPAG GmbH.'
      }
    }

    document.title = title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', description)
    }
  }, [path])

  return (
    <>
      <Header />
      <main>{renderPage(path)}</main>
      <Footer />
    </>
  )
}

function renderPage(path) {
  if (path === '/') return <HomePage />
  if (path === '/uber-uns/' || path === '/ueber-uns/') return <ContentPage content={pageContent['/uber-uns/']} variant="about" />
  if (path === '/produkte/') return <ProductsPage />
  if (path === '/impressum/') return <LegalPage type="impressum" />
  if (path === '/datenschutz/') return <LegalPage type="datenschutz" />

  const project = projects.find((item) => item.href === path)
  if (project) return <ProjectPage project={project} details={projectDetails[path]} />

  const content = pageContent[path]
  if (content) return <ContentPage content={content} variant={path === '/uber-uns/' ? 'about' : 'default'} />

  return <NotFoundPage />
}

function HomePage() {
  return (
    <>
      <section className="hero" id="willkommen">
        <div className="hero-content">
          <p className="eyebrow">Nachhaltigkeit neu gedacht.</p>
          <h1>Willkommen in der Zukunft des Bauens</h1>
          <p className="hero-lead">Langlebige und energieeffiziente Lösungen.</p>
          <p className="hero-copy">
            Verlassen Sie sich auf höchste Qualität durch zertifizierte Partnerschaften mit führenden
            Systemanbietern.
          </p>
          <AppLink className="primary-button" href="/kontakt/">
            Kontaktieren Sie uns
          </AppLink>
        </div>
      </section>

      <ServicesSection />
      <ProjectsSection />
      <VideoSection />
    </>
  )
}

function ServicesSection() {
  return (
    <section className="services" id="dienstleistungen">
      <div className="section-inner">
        <p className="section-kicker">Dienstleistungen</p>
        <h2>
          Mit einem erfahrenen Team von über 20 Architekten und Ingenieuren an den Standorten
          Hamburg und Dortmund bieten wir Ihnen umfassende Unterstützung für die Realisation Ihres
          Projektes.
        </h2>
        <div className="service-grid">
          {services.map((service) => (
            <AppLink className="service-card" href={service.href} key={service.id}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
            </AppLink>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="projects" id="produkte">
      <div className="section-inner">
        <h2>Entdecken Sie unsere Projekte</h2>
        <div className="project-grid">
          <div className="project-column">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <ProjectCard project={projects[2]} />
          <div className="project-column">
            {projects.slice(3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function VideoSection() {
  return (
    <section className="video-section">
      <div className="section-inner">
        <div className="video-placeholder" aria-label="Video Platzhalter">
          <button type="button" aria-label="Video abspielen">
            <span />
          </button>
        </div>
      </div>
    </section>
  )
}

function ContentPage({ content, variant = 'default' }) {
  if (variant === 'about') return <AboutPage content={content} />
  if (content.kicker === 'Dienstleistung') return <ServicePage content={content} />
  if (content.kicker === 'Bestellprozess') return <OrderPage content={content} />
  if (content.kicker === 'Kontakt') return <ContactPage content={content} />

  return (
    <article className="page-main">
      <section className="elementor-band">
        <div className="section-inner">
          <h1>{content.title}</h1>
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      {content.kicker === 'Dienstleistungen' && <ServicesSection />}
    </article>
  )
}

function AboutPage({ content }) {
  return (
    <article className="page-main">
      <section className="about-template">
        <div className="section-inner about-layout">
          <div className="about-copy-panel">
            <h1>{content.title}</h1>
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-image-panel" aria-label="Bild Platzhalter" />
        </div>
      </section>
    </article>
  )
}

function ServicePage({ content }) {
  return (
    <article className="page-main">
      <section className="service-template">
        <div className="section-inner">
          <h1>{serviceIntro}</h1>
          <div className="service-detail-row">
            <AppLink className="service-detail-card" href="/dienstleistungen/">
              <span className="service-icon">
                {services.find((service) => service.title === content.title)?.icon || services[0].icon}
              </span>
              <h2>{content.title}</h2>
            </AppLink>
            <div className="service-text-panel">
              <h2>{content.body[0]}</h2>
              {content.body.map((paragraph) => (
                paragraph === content.body[0] ? null : <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <AppLink className="primary-button" href="/kontakt/">
            Kontaktieren Sie uns
          </AppLink>
        </div>
      </section>
    </article>
  )
}

function ProductsPage() {
  return (
    <article className="page-main">
      <section className="products-template">
        <div className="section-inner">
          <h1 className="product-intro-heading">
            Die unten dargestellten Systeme und Produkte stellen einen Teilauszug dar. Für weitere
            Produktlösungen kontaktieren Sie bitte unser technisches Büro in Hamburg. Wir bieten
            Ihnen auch projektbezogene Systementwicklungen in Zusammenarbeit mit Schüco an.
          </h1>
          <div className="product-accordion">
            {productGroups.map((item) => (
              <details key={item.title}>
                <summary>{item.title}</summary>
                <div className="accordion-content">
                  <div className="accordion-copy">
                    <p>
                      <strong>{item.heading}</strong>
                    </p>
                    {item.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <ul>
                      {item.systems.map((system) => (
                        <li key={system}>{system}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}

function OrderPage({ content }) {
  const steps = ['Kontaktaufnahme', 'Projektbesprechung', 'Erstellung', 'Lieferung', 'Herstellung', 'Produktionsfreigabe']

  return (
    <article className="page-main">
      <section className="order-template">
        <div className="section-inner">
          <h1>{content.title}</h1>
          <div className="order-media-grid">
            <div className="order-gallery">
              {steps.map((step) => (
                <div className="order-media-card" key={step}>
                  <div className="order-icon-placeholder">
                    <span>{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AppLink className="primary-button" href="/kontakt/">
            Kontaktieren Sie uns
          </AppLink>
        </div>
      </section>
    </article>
  )
}

function ContactPage() {
  return (
    <article className="page-main">
      <ContactForm />
    </article>
  )
}

function ContactForm() {
  return (
    <section className="contact-section">
      <div className="section-inner contact-layout">
        <div className="contact-card-row">
          <div className="contact-card">
            <span className="contact-card-icon"><i aria-hidden="true" className="fas fa-map-marker-alt"></i></span>
            <h2>Adresse</h2>
            <p>
              Neuer Wall 2-6,
              <br />
              20354 Hamburg
            </p>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon"><i aria-hidden="true" className="fas fa-envelope-open"></i></span>
            <h2>E-mail</h2>
            <p>info@lampag.com</p>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon"><i aria-hidden="true" className="fas fa-phone-alt"></i></span>
            <h2>Telefonnummer</h2>
            <p>+49 040 571 996 390</p>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon"><i aria-hidden="true" className="fas fa-fax"></i></span>
            <h2>Faxnummer</h2>
            <p>+49 040 571 996 381</p>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-map-placeholder" aria-label="Karte Platzhalter" />
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Schreiben Sie Uns</h2>
            <input aria-label="Vor und Nachname" placeholder="Vor und Nachname *" required />
            <input type="tel" aria-label="Telefonnummer" placeholder="Telefonnummer *" required />
            <input type="email" aria-label="E-mail" placeholder="E-mail *" required />
            <textarea aria-label="Ihre Nachricht" placeholder="Ihre Nachricht *" rows="6" required />
            <label>
              <input type="checkbox" required /> Ich erkläre meine Einwilligung zur Erhebung, Verarbeitung oder
              Nutzung meiner personenbezogenen Daten gemäß unserer <AppLink href="/datenschutz/">Datenschutzerklärung</AppLink>.
            </label>
            <button type="submit">Absenden</button>
          </form>
        </div>
      </div>
    </section>
  )
}

function ProjectPage({ project, details }) {
  return (
    <article className="project-page">
      <section className="project-template">
        <div className="section-inner project-real-layout">
          <div className={`project-carousel ${project.tone}`}>
            <button type="button" aria-label="Vorheriges Bild">‹</button>
            <span>Bild Karussell</span>
            <button type="button" aria-label="Nächstes Bild">›</button>
          </div>
          <div className="project-info-panel">
            <h1>{details?.title || project.title}</h1>
            <p>{details?.details.join('\n') || 'Projektinformationen folgen.'}</p>
          </div>
        </div>
      </section>
    </article>
  )
}

function LegalPage({ type }) {
  const isPrivacy = type === 'datenschutz'
  return (
    <article className="page-main legal-page">
      <section className="legal-template">
        <div className="section-inner legal-copy">
          <h1>{isPrivacy ? 'Datenschutzerklärung' : 'Impressum'}</h1>
          {isPrivacy ? (
            <>
              <h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <h3>Datenerfassung auf unserer Website</h3>
              <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
              </p>
              <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
              <p>
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>

              <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3>Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
              <h3>Hinweis zur verantwortlichen Stelle</h3>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>
                LAMPAG GmbH vert. durch den GF H. Reinke und A. Dordevic
                <br />
                Neuer Wall 2-6
                <br />
                20354 Hamburg
                <br />
                Telefon: +49 (0) 40 / 571 996 390
                <br />
                E-Mail: info@lampag.com
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
              <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
              <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p>
                Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.
              </p>
              <h3>Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>
              <h3>SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
              <h3>Auskunft, Sperrung, Löschung</h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>

              <h2>3. Datenschutzbeauftragter</h2>
              <h3>Gesetzlich vorgeschriebener Datenschutzbeauftragter</h3>
              <p>Wir haben für unser Unternehmen einen Datenschutzbeauftragten bestellt.</p>
              <p>
                LAMPAG GmbH vert. durch den GF H. Reinke und A. Dordevic
                <br />
                Neuer Wall 2-6
                <br />
                20354 Hamburg
                <br />
                Telefon: +49 (0) 40 / 571 996 390
                <br />
                E-Mail: info@lampag.com
              </p>

              <h2>4. Datenerfassung auf unserer Website</h2>
              <h3>Cookies</h3>
              <p>
                Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
              </p>
              <p>
                Die meisten der von uns verwendeten Cookies sind so genannte “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
              </p>
              <p>
                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
              </p>
              <h3>Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
              <p>
                Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
              </p>
              <h3>Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
              </p>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h2>5. Plugins und Tools</h2>
              <h3>YouTube</h3>
              <p>
                Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
              </p>
              <p>
                Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
              </p>
              <p>
                Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
              </p>
              <p>
                Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
              </p>
              <p>
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter:&nbsp;
                <a href="https://www.google.de/intl/de/policies/privacy" target="_blank" rel="noopener noreferrer">https://www.google.de/intl/de/policies/privacy</a>.
              </p>
              <h3>Google Web Fonts</h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
              </p>
              <p>
                Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
              </p>
              <p>
                Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
              </p>
              <p>
                Weitere Informationen zu Google Web Fonts finden Sie unter&nbsp;
                <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a>&nbsp;
                und in der Datenschutzerklärung von Google:&nbsp;
                <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/privacy/</a>.
              </p>
              <h3>Google Maps</h3>
              <p>
                Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
              </p>
              <p>
                Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
              </p>
              <p>
                Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
              </p>
              <p>
                Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:&nbsp;
                <a href="https://www.google.de/intl/de/policies/privacy/" target="_blank" rel="noopener noreferrer">https://www.google.de/intl/de/policies/privacy/</a>.
              </p>
            </>
          ) : (
            <>
              <h2>Angaben gemäß § 5 TMG:</h2>
              <p>
                LAMPAG GmbH
                <br />
                Neuer Wall 2-6
                <br />
                20354 Hamburg
              </p>
              <h3>Vertreten durch:</h3>
              <p>LAMPAG GmbH, vertreten durch den Geschäftsführer H. Reinke und A. Dordevic</p>
              <h3>Kontakt:</h3>
              <p>
                Telephone: +49 (0) 40 / 571 996 390
                <br />
                Telefax: +49 (0) 40 / 571 996 381
                <br />
                Email: info@lampag.com
              </p>
              <h3>Registereintrag:</h3>
              <p>
                Eintragung im Handelsregister.
                <br />
                Registergericht: HRB Hamburg
                <br />
                Registernummer: 179354
              </p>
              <h3>Umsatzsteuer:</h3>
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 359276785</p>
              <h3>Streitschlichtung</h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:&nbsp;
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              <h3>Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              <h3>Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
              <h3>Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
              <h3>Photos</h3>
              <p>Schüco International KG und mehr. Alle Recht vorbehalten.</p>
            </>
          )}
        </div>
      </section>
    </article>
  )
}

function NotFoundPage() {
  return (
    <article className="page-main">
      <section className="elementor-band not-found-template">
        <div className="section-inner">
          <h1>Diese Seite wurde nicht gefunden.</h1>
          <AppLink className="primary-button" href="/">
            Zur Startseite
          </AppLink>
        </div>
      </section>
    </article>
  )
}

function ProjectCard({ project }) {
  return (
    <AppLink className={`project-card ${project.size} ${project.tone}`} href={project.href}>
      <span>{project.title}</span>
    </AppLink>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="kontakt">
      <div className="footer-top">
        <div className="footer-copy">
          <p>
            <AppLink href="/">
              Nachhaltige Produkte für die Zukunft.
              <br />
              Vertrauen Sie auf Qualität durch die zertifizierten Partnerschaften mit führenden
              Systemlieferanten.
            </AppLink>
          </p>
          <div className="partner-badge">Schüco Partner</div>
        </div>

        <div className="footer-spacer" />

        <address>
          <h3>Kontakt:</h3>
          <AppLink href="/kontakt/">
            LAMPAG GmbH
            <br />
            Neuer Wall 2-6
            <br />
            20354 Hamburg
          </AppLink>
          <p>
            <a href="tel:+49040571996390">T: +49 040 571 996 390</a>
            <br />
            <a href="tel:+49040571996381">F: +49 040 571 996 381</a>
          </p>
          <a href="mailto:info@lampag.com">E-Mail: info@lampag.com</a>
        </address>
      </div>

      <nav className="footer-menu" aria-label="Footer Navigation">
        <AppLink href="/impressum/">Impressum</AppLink>
        <AppLink href="/datenschutz/">Datenschutz</AppLink>
      </nav>

      <p className="copyright">Copyright © 2026 LAMPAG GmbH</p>
    </footer>
  )
}

export default App
