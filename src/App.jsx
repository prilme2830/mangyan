import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Globe2,
  Heart,
  Image as ImageIcon,
  Leaf,
  Map,
  Menu,
  Moon,
  Mountain,
  Search,
  Sun,
  X,
} from "lucide-react";

const groups = [
  {
    name: "Iraya",
    image: "/images/Iraya.webp",
    region: "Northern Mindoro",
    short:
      "The Iraya are one of the Mangyan communities of Mindoro, with traditions that include forest-based livelihoods and nito weaving.",
    details: [
      "Traditional clothing and daily life have changed over time, while cultural practices continue to be passed on.",
      "Iraya communities are associated with nito weaving and handicrafts made from forest vines.",
      "Staple foods include crops such as rice, banana, sweet potato, and other root crops."
    ],
    tags: ["Nito weaving", "Farming", "Handicrafts"],
  },
  {
    name: "Alangan",
    image: "/images/alangan.jpg",
    region: "Upper Alangan Valley",
    short:
      "The Alangan Mangyans have cultural practices connected to the forest, farming, clothing, and community life.",
    details: [
      "The name Alangan is associated with the Alangan River and mountain slopes in the upper Alangan Valley.",
      "Traditional clothing includes woven materials and garments made from plant fibers.",
      "Swidden farming has traditionally involved careful stages of clearing, planting, cultivation, and allowing sites to recover."
    ],
    tags: ["Swidden farming", "Plant fibers", "Community"],
  },
  {
    name: "Tadyawan",
    image: "/images/tadyawan.webp",
    region: "Eastern Mindoro",
    short:
      "The Tadyawan are a distinct Mangyan community with their own cultural practices, clothing traditions, and livelihood patterns.",
    details: [
      "Traditional clothing included the abay, paypay, and talapi.",
      "Staple foods include upland rice, banana, sweet potato, and taro.",
      "Some communities also cultivate fruit-bearing trees such as rambutan, citrus, and coffee."
    ],
    tags: ["Food", "Clothing", "Farming"],
  },
  {
    name: "Bangon",
    image: "/images/bangon.webp",
    region: "Mindoro",
    short:
      "The Bangon Mangyans are recognized as a distinct Indigenous community with their own cultural identity and language.",
    details: [
      "Bangon community members have asserted a distinct group identity rather than being treated simply as a subgroup.",
      "Their community history includes meetings and decisions concerning how the group identifies itself.",
      "The website presents Bangon as a living community whose culture continues to develop."
    ],
    tags: ["Identity", "Language", "Community history"],
  },
  {
    name: "Tau-buid",
    image: "/images/tau-buid.jpg",
    region: "Interior Mindoro",
    short:
      "The Tau-buid are known for distinctive clothing traditions, bark-cloth practices, and forest-based lifeways.",
    details: [
      "Traditional dress includes loin cloth and, in some areas, bark cloth made from the inner bark of trees.",
      "Bark cloth has also been used for headbands, breast coverings, and blankets.",
      "Traditional livelihoods are closely connected with farming and the surrounding environment."
    ],
    tags: ["Bark cloth", "Forest knowledge", "Farming"],
  },
  {
    name: "Buhid",
    image: "/images/buid.jpg",
    region: "Southern/Central Mindoro",
    short:
      "The Buhid are known for pottery, weaving, ornaments, and a traditional writing system.",
    details: [
      "Buhid potters produce cooking vessels and other traditional pottery.",
      "Buhid material culture includes woven clothing, beadwork, belts, bracelets, and necklaces.",
      "The Buhid syllabic writing system is one of the Indigenous writing traditions associated with Mindoro."
    ],
    tags: ["Pottery", "Writing system", "Weaving"],
  },
  {
    name: "Hanunuo",
    image: "/images/hanunuo.jpg",
    region: "Southern Mindoro",
    short:
      "The Hanunuo are known for weaving, beadwork, agricultural knowledge, music, and the Hanunuo writing tradition.",
    details: [
      "Traditional clothing includes the loin cloth and indigo-dyed garments, with decorative designs and beadwork.",
      "Hanunuo communities practice swidden farming and have developed knowledge for managing cultivated areas.",
      "Hanunuo Mangyan writing is a pre-Spanish syllabic writing tradition that continues to be taught in some communities."
    ],
    tags: ["Writing", "Weaving", "Music"],
  },
  {
    name: "Ratagnon",
    image:  "/images/ratagnon.jpg",
    region: "Southern Mindoro",
    short:
      "The Ratagnon are one of the distinct Mangyan communities traditionally associated with the southern part of Mindoro.",
    details: [
      "Ratagnon should be presented as a distinct community rather than being treated as interchangeable with other Mangyan groups.",
      "For this project, detailed information should be added only after checking a credible source.",
      "The page is intentionally designed with a source-first approach so that student researchers can add verified cultural information."
    ],
    tags: ["Identity", "Southern Mindoro", "Research"],
  },
];

const topics = [
  {
    title: "History & Cultural Heritage",
    icon: BookOpen,
    text:
      "Explore community histories, customs, clothing, crafts, music, food, and other cultural expressions while recognizing that traditions differ among groups.",
  },
  {
    title: "Language & Indigenous Knowledge",
    icon: Globe2,
    text:
      "Learn about languages, writing systems, oral traditions, farming knowledge, environmental relationships, and traditional technologies.",
  },
  {
    title: "The Community Today",
    icon: Heart,
    text:
      "Present Mangyan communities as living and changing communities, including education, cultural transmission, contemporary practices, challenges, and preservation.",
  },
  {
    title: "Digital Heritage",
    icon: ImageIcon,
    text:
      "Use photographs, an interactive group explorer, a timeline, and digital storytelling to make cultural information easier to explore.",
  },
];

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [openTopic, setOpenTopic] = useState(null);
  const [galleryImage, setGalleryImage] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const filters = ["All", "Farming", "Clothing", "Writing", "Crafts", "Community"];

  const filteredGroups = useMemo(() => {
    return groups.filter((group) => {
      const matchesQuery =
        group.name.toLowerCase().includes(query.toLowerCase()) ||
        group.region.toLowerCase().includes(query.toLowerCase()) ||
        group.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

      const matchesFilter =
        activeFilter === "All" ||
        group.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase())) ||
        (activeFilter === "Crafts" && group.tags.some((tag) =>
          ["nito weaving", "plant fibers", "pottery", "weaving", "bark cloth"].some((x) =>
            tag.toLowerCase().includes(x)
          )
        ));

      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="navbar">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-mark">M</span>
          <span>
            <strong>Mangyan</strong>
            <small>Digital Heritage</small>
          </span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["Home", "home"],
            ["Community", "community"],
            ["Culture", "culture"],
            ["Knowledge", "knowledge"],
            ["Today", "today"],
            ["Digital Heritage", "digital"],
            ["Sources", "sources"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" title="Toggle theme" onClick={() => setDark((v) => !v)}>
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="menu-btn icon-btn" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">INDIGENOUS COMMUNITIES OF MINDORO</span>
            <h1>Mangyan<br /><span>Heritage</span></h1>
            <p>
              A digital heritage space that introduces the distinct Indigenous
              communities of Mindoro and highlights their identities, cultures,
              knowledge, and lives today.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo("community")}>
                Explore the Communities <ArrowRight size={18} />
              </button>
              <button className="secondary-btn" onClick={() => scrollTo("sources")}>
                View Sources
              </button>
            </div>
            <div className="hero-note">
              <Leaf size={18} />
              <span>Mangyan is a collective name for several distinct communities.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-main">
              <img src="/images/location.webp" alt="Ethnographic map of Mangyan groups of Mindoro" />
              <div className="image-caption">
                <Map size={17} /> Ethnographic map of Mangyan communities
              </div>
            </div>
            <div className="floating-card">
              <Mountain size={22} />
              <div>
                <strong>Mindoro</strong>
                <span>Home of diverse Mangyan communities</span>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div>
            <span className="eyebrow">WHY THIS MATTERS</span>
            <h2>One name, many communities.</h2>
          </div>
          <p>
            This website avoids treating “Mangyan” as one homogeneous culture.
            Each community has its own identity, language, traditions, and experiences.
          </p>
        </section>

        <section id="community" className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE COMMUNITY</span>
              <h2>Explore the 8 ethnolinguistic groups</h2>
            </div>
          </div>

          <div className="tools">
            <div className="search-box">
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a group, region, or topic..."
              />
              {query && <button onClick={() => setQuery("")}><X size={16} /></button>}
            </div>
            <div className="filter-row">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? "filter active" : "filter"}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="group-grid">
            {filteredGroups.map((group) => (
              <article className="group-card" key={group.name}>
                <button className="card-image-button" onClick={() => setSelectedGroup(group)}>
                  {group.image ? (
                    <img src={group.image} alt={`${group.name} Mangyan community`} />
                  ) : (
                    <div className="ratagnon-placeholder">
                      <Mountain size={46} />
                      <span>Ratagnon</span>
                      <small>Add a verified image with permission</small>
                    </div>
                  )}
                  <span className="view-label">View profile</span>
                </button>

                <div className="card-content">
                  <div className="card-title-row">
                    <div>
                      <span className="mini-label">{group.region}</span>
                      <h3>{group.name} Mangyans</h3>
                    </div>
                    <button className="round-arrow" onClick={() => setSelectedGroup(group)}>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <p>{group.short}</p>
                  <div className="tag-row">
                    {group.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredGroups.length === 0 && (
            <div className="empty-state">
              <Search size={28} />
              <h3>No groups found</h3>
              <p>Try another search term or choose “All”.</p>
              <button className="secondary-btn" onClick={() => { setQuery(""); setActiveFilter("All"); }}>
                Reset search
              </button>
            </div>
          )}
        </section>

        <section id="culture" className="section soft-section">
          <div className="section-heading centered">
            <span className="eyebrow">HISTORY & CULTURAL HERITAGE</span>
            <h2>Culture is more than a photograph.</h2>
            <p>
              Explore cultural expressions while giving attention to community
              differences, context, and the people who continue these traditions.
            </p>
          </div>

          <div className="topic-grid">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              const open = openTopic === index;
              return (
                <article className={open ? "topic-card open" : "topic-card"} key={topic.title}>
                  <button className="topic-button" onClick={() => setOpenTopic(open ? null : index)}>
                    <span className="topic-icon"><Icon size={21} /></span>
                    <span>{topic.title}</span>
                    {open ? <ChevronUp size={19} /> : <ChevronDown size={19} />}
                  </button>
                  {open && <p className="topic-detail">{topic.text}</p>}
                </article>
              );
            })}
          </div>
        </section>

        <section id="knowledge" className="section knowledge-section">
          <div className="knowledge-visual">
            <img src="/images/hanunuo.jpg" alt="Hanunuo Mangyan cultural image" />
            <div className="knowledge-badge">
              <Leaf size={18} />
              <span>Indigenous Knowledge</span>
            </div>
          </div>
          <div className="knowledge-copy">
            <span className="eyebrow">LANGUAGE & INDIGENOUS KNOWLEDGE</span>
            <h2>Knowledge lives in language, land, craft, and community.</h2>
            <p>
              The website can document language and writing systems, oral traditions,
              farming practices, environmental knowledge, weaving, pottery, and other
              traditional technologies.
            </p>
            <div className="knowledge-list">
              <div><strong>01</strong><span>Language & writing systems</span></div>
              <div><strong>02</strong><span>Oral traditions and storytelling</span></div>
              <div><strong>03</strong><span>Livelihood and farming knowledge</span></div>
              <div><strong>04</strong><span>Environmental knowledge and materials</span></div>
            </div>
            <button className="primary-btn" onClick={() => scrollTo("digital")}>
              Open Digital Heritage <ArrowRight size={18} />
            </button>
          </div>
        </section>

        <section id="today" className="section today-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE COMMUNITY TODAY</span>
              <h2>Living communities, changing realities</h2>
            </div>
            <p>
              Present-day life should be included so the communities are not shown
              only as subjects of history.
            </p>
          </div>

          <div className="today-grid">
            {[
              ["Education", "Show how knowledge and cultural practices are transmitted to younger generations."],
              ["Contemporary Life", "Document current practices while recognizing differences among communities."],
              ["Challenges", "Add only verified information about current social, economic, environmental, or cultural concerns."],
              ["Preservation", "Highlight community-led efforts that support language, arts, knowledge, and cultural continuity."]
            ].map(([title, text], i) => (
              <button className="today-card" key={title} onClick={() => alert(`${title}: ${text}`)}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowRight size={19} />
              </button>
            ))}
          </div>
        </section>

        <section id="digital" className="section digital-section">
          <div className="section-heading centered">
            <span className="eyebrow">DIGITAL HERITAGE</span>
         
          </div>

          <div className="digital-grid">
            {groups.filter(g => g.image).slice(0, 6).map((group) => (
              <button className="gallery-card" key={group.name} onClick={() => setGalleryImage(group)}>
                <img src={group.image} alt={group.name} />
                <span>{group.name}</span>
                <ImageIcon size={18} />
              </button>
            ))}
          </div>

          <div className="timeline">
            <div className="timeline-line"></div>
            {[
              ["Before publication", "Verify cultural information and sources."],
              ["Research", "Use academic, government, institutional, Indigenous, and documented interview sources."],
              ["Digital storytelling", "Connect photographs, text, maps, audio/video, and timelines."],
              ["Final review", "Check citations, image credits, permissions, and cultural sensitivity."]
            ].map(([title, text], i) => (
              <div className="timeline-item" key={title}>
                <span className="timeline-dot">{i + 1}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="sources" className="section sources-section">
          <div className="source-card">
            <div>
              <span className="eyebrow">SOURCES & ACKNOWLEDGMENTS</span>
              <h2>Research first. Publish responsibly.</h2>
            </div>

            <div className="source-columns">
              <div>
                <h3>Recommended source types</h3>
                <ul>
                  <li>Academic publications and books</li>
                  <li>Philippine government agencies</li>
                  <li>Cultural institutions</li>
                  <li>Indigenous organizations</li>
                  <li>Documented interviews with permission</li>
                </ul>
              </div>
              <div>
                <h3>Media credits</h3>
                <ul>
                  <li>Photographer / author</li>
                  <li>Original webpage or publication</li>
                  <li>Access date</li>
                  <li>License or permission information</li>
                  <li>Interview acknowledgments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Mangyan Digital Heritage</strong>
          <span> • Mindoro, Philippines</span>
        </div>
        <button className="back-top" onClick={() => scrollTo("home")}>
          Back to top ↑
        </button>
      </footer>

      {selectedGroup && (
        <div className="modal-backdrop" onClick={() => setSelectedGroup(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedGroup(null)}><X /></button>
            {selectedGroup.image ? (
              <img src={selectedGroup.image} alt={selectedGroup.name} />
            ) : (
              <div className="modal-placeholder"><Mountain size={55} /><span>Ratagnon</span></div>
            )}
            <div className="modal-body">
              <span className="eyebrow">{selectedGroup.region}</span>
              <h2>{selectedGroup.name} Mangyans</h2>
              <p>{selectedGroup.short}</p>
              <h3>Profile notes</h3>
              <ul>
                {selectedGroup.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <div className="tag-row">
                {selectedGroup.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <button className="primary-btn" onClick={() => setSelectedGroup(null)}>Close Profile</button>
            </div>
          </div>
        </div>
      )}

      {galleryImage && (
        <div className="modal-backdrop" onClick={() => setGalleryImage(null)}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setGalleryImage(null)}><X /></button>
            <img src={galleryImage.image} alt={galleryImage.name} />
            <div>
              <span className="eyebrow">DIGITAL GALLERY</span>
              <h2>{galleryImage.name} Mangyans</h2>
              <p>{galleryImage.short}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
