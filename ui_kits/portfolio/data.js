// Tan Yanggu portfolio — content migrated from the legacy site (tanyanggu.com).
// Works text/images/YouTube taken from the English work pages; profile from the
// Japanese profile page (the most current). Layout/design unchanged.

// Asset resolver — when this page is bundled to standalone, the bundler fills
// window.__resources[id] with blob URLs (ids declared via <meta ext-resource-dependency>).
// Otherwise we fall back to the on-disk path (TYG_BASE + logical path), so the
// live app is unaffected.
window.__ASSET_MAP = window.__ASSET_MAP || {
  'assets/favicon.png': 'favicon',
};
window.__IMG = window.__IMG || function (p) {
  var r = window.__resources, m = window.__ASSET_MAP;
  if (r && m && m[p] && r[m[p]]) return r[m[p]];
  return (window.TYG_BASE || '') + p;
};

window.TYG_DATA = {
  works: [
    {
      slug: 'floating-margins',
      title: 'Floating Margins',
      date: '2026.02',
      place: 'Fulldome Projection',
      tags: ['AfterEffects', 'FullDome', 'TouchDesigner'],
      // Cover crop (object-position): vertical 0% = align top, 50% = center,
      // 100% = align bottom. Lower the % to reveal more of the top.
      //   imagePosition → Works-grid card (16:9)
      //   heroPosition  → project detail hero (21:9); falls back to imagePosition
      imagePosition: '50% 30%',
      heroPosition: '50% 30%',
      image: 'assets/images/works/floating-margins-01.jpg',
      gallery: [
        'assets/images/works/floating-margins-02.jpg',
        'assets/images/works/floating-margins-03.jpg',
        'assets/images/works/floating-margins-04.jpg',
        'assets/images/works/floating-margins-05.jpg',
        'assets/images/works/floating-margins-06.jpg',
        'assets/images/works/floating-margins-07.jpg',
        'assets/images/works/floating-margins-08.jpg',
      ],
      body: [
        'The noise of thought falls utterly silent, giving way to pure rhythms and light that expand within the deepest depths of the unconscious. Detached from the framework of the ego, the mind dissolves into the void.',
        'This dome video artwork visualizes the transformation of consciousness during a deep meditative state and the serene narrative that resides within that space.',
        'Screening:\n2026.02 – ImmersiveDarkNight Vol.4, Tokyo, Japan',
        'Music : DNS - Daybreak',
      ],
    },
    {
      slug: 'wesa-2025',
      title: 'WeSA Festival 2025 — DNS & RustyHead',
      date: '2025.12',
      place: 'Seoul, Korea',
      tags: ['AfterEffects', 'AI', 'Personal', 'TouchDesigner', 'UnrealEngine', 'VJ'],
      youtube: 'hL_kv4muqPI',
      // aspect = each VIDEO's real ratio (drives the crop); width = display size.
      instagram: [
        { path: 'reel/DVvM1z4DPQH', aspect: '16 / 9', width: 700 }, // landscape
        { path: 'reel/DVu74RwGcpU', aspect: '16 / 9', width: 700 }, // landscape
        { path: 'reel/DVivaJJgUPC', aspect: '4 / 5',  width: 480 }, // portrait
      ],
      image: 'assets/images/works/wesa-2025-01.jpg',
      gallery: [
        'assets/images/works/wesa-2025-02.jpg',
        'assets/images/works/wesa-2025-03.jpg',
        'assets/images/works/wesa-2025-04.jpg',
        'assets/images/works/wesa-2025-05.jpg',
        'assets/images/works/wesa-2025-06.jpg',
        'assets/images/works/wesa-2025-07.jpg',
        'assets/images/works/wesa-2025-08.jpg',
        'assets/images/works/wesa-2025-09.jpg',
        'assets/images/works/wesa-2025-10.jpg',
      ],
      body: [
        'WeSA Festival 2025 recap — a story about a family who used to live 6km from the Fukushima Daiichi Nuclear Power Plant.',
        'Visual : RustyHead\nSound : DNS\nOrganized : wesa.seoul\nLocation : thila.seoul',
        'WeSA Official Website: https://www.wesa.kr/festival/',
      ],
    },
    {
      slug: 'emergent-cosmos',
      title: 'Emergent Cosmos',
      date: '2025.08',
      place: 'Personal work',
      tags: ['Personal', 'UnrealEngine'],
      youtube: 'IaivLU6E4Is',
      image: 'assets/images/works/emergent-cosmos-01.jpg',
      gallery: [
        'assets/images/works/emergent-cosmos-02.jpg',
        'assets/images/works/emergent-cosmos-03.jpg',
        'assets/images/works/emergent-cosmos-04.jpg',
        'assets/images/works/emergent-cosmos-05.jpg',
        'assets/images/works/emergent-cosmos-06.jpg',
      ],
      body: [
        '“Emergent Cosmos” explores the intersection of time and existence from a 4D perspective. In a sea of fluid light, floating white structures visualize time, recording the multi-layered paths of movement. It reveals the overlapping “selves” of parallel universes—a singular moment where different worlds find their resonance.',
        '「Emergent Cosmos」は、時間と存在の重なりを四次元的視点から描き出す作品である。流動する光の中に浮かぶ白い構造体は、時間そのものを可視化し、運動の軌跡を多層的に刻む。そこには複数の平行宇宙における「自己」の姿が重なり合い、異なる世界が共鳴し合う瞬間が示されている。',
        'Screenings:\n2026.02 – ImmersiveDarkNight Vol.4, Tokyo, Japan\n2025.08 – Nakano ZERO Media Arts Program 2025, Tokyo, Japan\n2025.10 – 14th International Science Film Festival Dome Festa, Tokyo, Japan\n2025.12 – Ghost in the Mirror — Screening & Exhibition of Visual Anthropological Works, Shanghai, China',
        'Director : RustyHead (Tan Yanggu)\nMusic : First Floor – DNS',
      ],
    },
    {
      slug: 'livs',
      title: 'LiVS / 僕の声、跳ね返る【武蔵β.Ver】Music Video',
      date: '2025.04',
      place: 'Music Video · Tokyo',
      tags: ['AfterEffects', 'UnrealEngine', 'VR', 'Co-creation'],
      youtube: '38Aww9iQOEg',
      image: 'assets/images/works/livs-01.png',
      gallery: [
        'assets/images/works/livs-02.png',
        'assets/images/works/livs-03.png',
        'assets/images/works/livs-04.jpg',
        'assets/images/works/livs-05.jpg',
        'assets/images/works/livs-06.jpg',
      ],
      body: [
        'When translating this track into a Music Video, we interpreted the keyword “Continuity.” We live in a world defined by continuity—if who you are today is who you’ll be tomorrow, or if how you see yourself is different from how others see you. While these are that have been spoken about for years, this song strikingly refer to the modern struggle with the continuity. The song’s broken, almost choppy sounds and extremely repetitive lyrics directly reflect a painful gap and suffering—between self-awareness and the awareness of others, between superficial, destructive emotion and deeper, more fragile emotion. In a way, it’s also a bug. This vid o is ur atte pt to vis y r re t th d a .',
        'Vocal / Performer : LiVS（コンニチハクリニック、スズカス・テラ、ミニ・マルコ、ユニセックス、ランルウ）\nComposer / Lyricist : Ryosuke Shinoda (Top Secretman)\nProduction : ALL INc.\nCG Artist : Yuu Murakami / Fumika Nakamura\nText Animation : Asami Suzuki\nLayout / Animation : Yanggu Tan\nEffect / Editor : Tomoaki Muramatsu\nVR Camera : Watanabe-ka (Concent, Inc.)\nSupervisor : Prof. Kenji Watanabe / Watanabe-ka / Kazuya Sakata',
      ],
    },
    {
      slug: 'synesthesia-array',
      title: 'A/V Performance at Synesthesia Array',
      date: '2024.12',
      place: 'Synesthesia Array · Tokyo',
      tags: ['AfterEffects', 'AI', 'Resolume Arena', 'UnrealEngine'],
      youtube: 'FW_HP2BLbNo',
      image: 'assets/images/works/synesthesia-array-01.png',
      gallery: [
        'assets/images/works/synesthesia-array-02.jpg',
        'assets/images/works/synesthesia-array-03.jpg',
        'assets/images/works/synesthesia-array-04.jpg',
        'assets/images/works/synesthesia-array-05.jpg',
        'assets/images/works/synesthesia-array-06.jpg',
      ],
      body: [
        'A story about a family who used to live 6km from the Fukushima Daiichi Nuclear Power Plant.',
        'Visual : Tan Yanggu\nSound : DNS',
      ],
    },
    {
      slug: 'expanding-body',
      title: 'Expanding Body / 拡張的身体',
      date: '2024.09',
      place: 'Fulldome Projection · Tokyo',
      tags: ['CG', 'Fulldome Projection', 'Personal', 'TouchDesigner'],
      youtube: 'Neomj6lxcNk',
      image: 'assets/images/works/expanding-body-01.jpg',
      gallery: [
        'assets/images/works/expanding-body-02.jpg',
        'assets/images/works/expanding-body-03.png',
        'assets/images/works/expanding-body-04.png',
        'assets/images/works/expanding-body-05.jpg',
        'assets/images/works/expanding-body-06.jpg',
        'assets/images/works/expanding-body-07.jpg',
        'assets/images/works/expanding-body-08.jpg',
        'assets/images/works/expanding-body-09.jpg',
        'assets/images/works/expanding-body-10.jpg',
        'assets/images/works/expanding-body-11.jpg',
        'assets/images/works/expanding-body-12.jpg',
      ],
      body: [
        'In the future, with the advancement of technology, I believe each of us will have a digital avatar. This avatar, reflecting our characteristics, will be constructed from data collected from our physical bodies. Building on this idea, I used AI to generate new images that resemble, but are not identical to, my physical appearance by using photos of parts of my body. I then used these newly generated images as a texture, filling the entire screen via video, transforming the screen into an extension of my digital avatar and exploring the broader possibilities of future digital embodiments.',
        'Screenings:\n2024.08 – Nakano ZERO Media Arts Program 2024\n2025.02 – 13th International Science Film Festival Dome Festa\n2025.02 – Immersive Dark Night Vol.3',
        'Music : stabilizer / V.A.\nSpecial Thanks : Oishi Hiroaki; Yamasaki Renki',
      ],
    },
    {
      slug: 'sazareba',
      title: 'VJ System for Sazareba #005 and SCR',
      date: '2024.02',
      place: 'Sazareba #005 · Tokyo / SCR · Seoul',
      tags: ['Personal', 'TouchDesigner', 'UnrealEngine', 'VJ'],
      youtube: '4sW_tpFNxhk',
      // Instagram reel shown ABOVE the YouTube video for this work.
      // aspect = the VIDEO's real ratio (drives the crop); width = display size.
      instagramAbove: true,
      instagram: { path: 'reel/DGsQCSEP7iE', aspect: '16 / 9', width: 700 },
      image: 'assets/images/works/sazareba-01.jpg',
      gallery: [
        'assets/images/works/sazareba-02.webp',
        'assets/images/works/sazareba-03.webp',
        'assets/images/works/sazareba-04.webp',
        'assets/images/works/sazareba-05.webp',
      ],
      body: [
        'This is a VJ system developed for an audio-visual performance at Sazareba #005. All effects are implemented in UE5 and rendered in real-time to produce interactive visuals synchronized with the audio. Specifically, TouchDesigner is used to receive and analyze audio signals in real-time, then transmit the audio data to UE5 via the OSC protocol. In UE5, the system is primarily divided into a camera controller and a VFX controller, both of which have their parameters controlled by a MIDI controller via the MIDI protocol.',
        'This same system was later brought to a second performance — a live modular synth & visual set at Seoul Community Radio (@scr_radio). The full session is available on the Seoul Community Radio YouTube channel.',
        'Sazareba #005\nVisual : RustyHead (TAN YANGGU)\nMusic : i.s.d (Yuki Ishida)',
        'Seoul Community Radio\nVisual : RustyHead (TAN YANGGU)\nSound : max_spotlite',
      ],
    },
    {
      slug: 'data-family',
      title: 'Project Data Family',
      date: '2023.05',
      place: 'Tokyo, Japan',
      tags: ['Interactive Installation', 'LiDAR', 'Personal', 'Unity'],
      youtube: 'FsAQXc6xgaI',
      image: 'assets/images/works/data-family-01.jpg',
      gallery: [
        'assets/images/works/data-family-02.jpg',
        'assets/images/works/data-family-03.jpg',
        'assets/images/works/data-family-04.jpg',
        'assets/images/works/data-family-05.jpg',
        'assets/images/works/data-family-06.jpg',
        'assets/images/works/data-family-07.png',
        'assets/images/works/data-family-08.png',
      ],
      body: [
        'By using 3D scanning to digitize household items and scenes, a digital replica of the home was created based on the Unity engine. Each scene and item, marked by significant traces of life, includes descriptions of family members’ memories associated with them. Through an immersive interactive installation, a surreal familial memory space was created, allowing viewers to interact with the author’s family memories by touching the projected images. This multi-sensory presentation offers the audience an immersive experience of the author’s family memories. The project aims to back up family memories to the cloud, providing a new possibility for preserving family memories in the future.',
        'In this project, the SLAM LiDAR A2M8 was used as a sensor, and the collected data was converted into screen coordinate data using InteractiveEngine software. This data was then transmitted to Unity via the TUIO protocol. Due to issues such as poor lighting and narrow passageways in environments like my grandmother’s house, the point cloud scanning was conducted using Luma.AI’s NeRF-based scanning method. After exporting the point cloud files, the data was cleaned using the Point Cloud Visualizer plugin in Blender. In Unity, the VFX Graph was used to visualize the point cloud and create particle effects. Colliders were placed and hidden in each scene, and C# scripts was written to convert screen space points into three-dimensional points using raycasting. Touch effects were then generated at these points, influencing the point cloud.',
      ],
    },
    {
      slug: 'audio-particles',
      title: 'Audio-reactive Particles with OSC Control',
      date: '2023.01',
      place: 'Personal work',
      tags: ['Personal', 'TouchOSC', 'UnrealEngine'],
      youtube: '4GU19CInd54',
      image: 'assets/images/works/audio-particles-01.jpg',
      gallery: [],
      body: [
        'Test of audio-reactive particles in UE5 using TouchOSC.\nMusic : Lucky Charm (Original Mix) by Alix Perez',
      ],
    },
    {
      slug: 'metasound',
      title: 'MetaSound Project Demo',
      date: '2022.12',
      place: 'PuZaoSi Studio · Internship',
      tags: ['CG', 'Company', 'Internship', 'MetaHuman', 'UnrealEngine'],
      youtube: '8L_9d2UBmFw',
      image: 'assets/images/works/metasound-01.png',
      gallery: [
        'assets/images/works/metasound-02.png',
        'assets/images/works/metasound-03.png',
        'assets/images/works/metasound-04.png',
      ],
      body: [
        'MetaSound Project is an online concert project. During my internship at PuZaoSi Studio, I was responsible for creating some of the early demos for this project. Except for the collection of scene assets, I completed the rest using Unreal Engine.',
      ],
    },
    {
      slug: 'wang-heye-vj',
      title: 'Singer Wang Heye’s Concert VJ Production',
      date: '2022.10',
      place: 'PuZaoSi Studio · Internship',
      tags: ['AfterEffects', 'CG', 'Company', 'Internship', 'UnrealEngine', 'VJ'],
      image: 'assets/images/works/wang-heye-vj-01.png',
      gallery: [
        'assets/images/works/wang-heye-vj-02.png',
        'assets/images/works/wang-heye-vj-03.png',
        'assets/images/works/wang-heye-vj-04.jpg',
        'assets/images/works/wang-heye-vj-05.png',
        'assets/images/works/wang-heye-vj-06.png',
        'assets/images/works/wang-heye-vj-07.jpg',
      ],
      body: [
        'During my internship at PuZaoSi Studio, I participated in the VJ visual production project for singer Wang Heye’s concert. In this project, I was responsible for creating the VJ visuals for three songs, primarily using Unreal Engine and After Effects.',
      ],
    },
    {
      slug: 'ue-scenes',
      title: 'Scene Rendering Practices in UE',
      date: '2022.06',
      place: 'Personal work',
      tags: ['CG', 'Personal', 'UnrealEngine'],
      youtube: 'nG9hDjvHvqg',
      image: 'assets/images/works/ue-scenes-01.jpg',
      gallery: [
        'assets/images/works/ue-scenes-02.jpg',
        'assets/images/works/ue-scenes-03.png',
      ],
      body: [
        'Some scenes constructed using Unreal Engine. The assets include some from MegaScan and some that I created myself.',
      ],
    },
  ],

  profile: {
    nameEn: 'Tan Yanggu',
    nameJa: 'タン ヤング',
    alias: 'RustyHead',
    portrait: 'assets/images/works/profile-portrait.png',
    instagram: 'https://www.instagram.com/rustyhead_yg/',
    x: 'https://x.com/RustyHead_YG',
    bioJa: '中国・四川省生まれ、現在は東京を拠点に活動。武蔵野美術大学デザイン情報学コース修士課程修了。リアルタイムCGをメインとし、インタラクティブ・インスタレーション、CG映像、VRなど多岐にわたる分野で作品を制作している。技術の人間的側面に焦点を当て、デジタルメディアを通じて鑑賞者の感情に響く多感覚的な体験の創出を目指している。これまで、韓国の「WeSA Festival」や「Planned Accidents」、また北京の「交流方式」モジュラー電子音楽祭2025といった、東京、ソウル、上海、香港、深圳など多岐にわたる都市でオーディオビジュアル・ライブパフォーマンスを行ってきた。2024年末、サウンドアーティストのDNSとともに、東京を拠点とするAudiovisualの企画「Synesthesia Array」を共同設立した。',
    bioEn: 'Born in Sichuan, China; now based in Tokyo. MFA, Department of Design Informatics, Musashino Art University. Working primarily with real-time CG across interactive installation, CG video, and VR — focused on the human side of technology, using digital media to create multisensory experiences that resonate with the viewer’s emotions. Has performed audiovisual live sets across Tokyo, Seoul, Shanghai, Hong Kong, and Shenzhen, including WeSA Festival and Planned Accidents in Korea and the Modular Commune 2025 festival in Beijing. In late 2024, co-founded the Tokyo-based audiovisual project Synesthesia Array with sound artist DNS.',
    // Title/location cells may be a plain string (same in both languages) or a
    // { en, ja } pair, resolved by ProfileScreen based on the active language.
    performance: [
      ['2025.12', 'WeSA Festival 2025', { en: 'Seoul, Korea', ja: 'ソウル, 韓国' }],
      ['2025.12', 'Synesthesia Array Vol.04', { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2025.11', 'Modular Commune 2025', { en: 'Beijing, China', ja: '北京, 中国' }],
      ['2025.09', 'DNS + RustyHead Japan Tohoku Tour', { en: 'Ishinomaki / Morioka, Japan', ja: '石巻 / 盛岡, 日本' }],
      ['2025.07', 'Synesthesia Array Vol.03', { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2025.07', 'Roaring Legion Vol.1', { en: 'Hong Kong / Shenzhen, China', ja: '香港 / 深セン, 中国' }],
      ['2025.07', 'Synesthesia Array Vol.02', { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2025.05', 'Fairytale in Shanghai', { en: 'Shanghai, China', ja: '上海, 中国' }],
      ['2025.05', 'Dawless Teahouse 3year Anniversary Fete', { en: 'Shenzhen, China', ja: '深セン, 中国' }],
      ['2025.04', 'Planned Accidents', { en: 'Seoul, Korea', ja: 'ソウル, 韓国' }],
      ['2025.02', 'BUSAN International Festival of Modular 001', { en: 'Busan, Korea', ja: 'プサン, 韓国' }],
      ['2025.02', 'Seoul Community Radio Live Streaming Show', { en: 'Seoul, Korea', ja: 'ソウル, 韓国' }],
      ['2025.01', 'Blue Moment #8', { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2024.12', 'Synesthesia Array Vol.01', { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2024.02', { en: 'Sazareba #005', ja: 'さざれ場 #005' }, { en: 'Tokyo, Japan', ja: '東京, 日本' }],
    ],
    exhibition: [
      ['2026.06', { en: 'Fulldome Festival 2026 Fukuoka', ja: 'フルドームフェスティバル2026 Fukuoka' }, { en: 'Fukuoka, Japan', ja: '福岡, 日本' }],
      ['2026.04', { en: 'Musashino Art University Graduation & Completion Excellent Works Exhibition', ja: '武蔵野美術大学 卒業・修了制作優秀作品展' }, { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2026.01', 'ImmersiveDarkNight Vol.4', { en: 'Yokohama, Japan', ja: '横浜, 日本' }],
      ['2026.01', { en: 'Musashino Art University Graduation & Completion Works Exhibition 2025', ja: '武蔵野美術大学 卒業・修了制作展 2025年度' }, { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2025.12', 'Ghost in the Mirror — Screening & Exhibition of Visual Anthropological Works', { en: 'Shanghai, China', ja: '上海, 中国' }],
      ['2025.10', { en: 'International Festival of Scientific Visualization — 14th Dome Festa', ja: '国際科学映像祭 第14回ドームフェスタ' }, { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2025.09', { en: '"Digital Archive System Design for a Former Residence" Interim Presentation', ja: '「旧居のデジタルアーカイブシステムデザイン」中間発表展' }, { en: 'Ishinomaki, Japan', ja: '石巻, 日本' }],
      ['2025.08', { en: 'Nakano ZERO Media Arts Program 2025', ja: 'なかのZERO メディア芸術プログラム2025' }, { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2025.02', { en: 'International Festival of Scientific Visualization — 13th Dome Festa', ja: '国際科学映像祭 第13回ドームフェスタ' }, { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2025.02', 'ImmersiveDarkNight Vol.3', { en: 'Yokohama, Japan', ja: '横浜, 日本' }],
      ['2024.08', { en: 'Nakano ZERO Media Arts Program 2024', ja: 'なかのZERO メディア芸術プログラム2024' }, { en: 'Tokyo, Japan', ja: '東京, 日本' }],
      ['2023', { en: 'Chengdu A4 Art Museum — A4 Art Book Fair, Game Unit', ja: '成都A4美術館 A4アートブックフェア ゲームユニット' }, { en: 'Chengdu, China', ja: '成都, 中国' }],
      ['2023', { en: 'Lingyuan AIGC Generative Video Exhibition', ja: '霊源AIGC生成映像展' }, { en: 'Shanghai / Beijing, China', ja: '上海 / 北京, 中国' }],
      ['2022', { en: 'Shanghai "Culture Empowered — Digitally Driven" Art & Technology Exhibition', ja: '上海「Culture Empowered — Digitally Driven」アート＆テクノロジー展' }, { en: 'Shanghai, China', ja: '上海, 中国' }],
      ['2021', { en: '9th Dali International Image Festival', ja: '第9回 大理国際映像祭' }, { en: 'Dali, China', ja: '大理, 中国' }],
    ],
    award: [
      ['2026', { en: 'Musashino Art University Graduation & Completion Works Excellence Award', ja: '武蔵野美術大学 卒業・修了制作優秀賞' }],
      ['2025', { en: 'International Festival of Scientific Visualization, 14th Dome Festa, Short Film Contest — Honorable Mention', ja: '国際科学映像祭 第14回ドームフェスタ ショートフィルムコンテスト — 奨励賞' }],
      ['2023', { en: '4th Zijin Award, China Collegiate Design Exhibition — Innovative Practice Work Award', ja: '第4回 紫金賞 中国大学生デザイン展 — 革新実践作品賞' }],
      ['2022', { en: '10th Future Designer National Collegiate Digital Art & Design Competition — Third Prize', ja: '第10回 未来デザイナー・全国高校デジタルアートデザインコンテスト — 三等賞' }],
      ['2021', { en: '2nd China Collegiate Digital Interactive Art Competition — Second Prize', ja: '第2回 中国高校デジタルインタラクティブアートコンペティション — 二等賞' }],
      ['2021', { en: '3rd China University Student Creative Festival, Creative New Media Category — Finalist Award', ja: '第3回 中国大学生クリエイティブフェスティバル 創意ニューメディア部門 — ファイナリスト賞' }],
    ],
    skills: [
      ['Real-time Rendering', 'UnrealEngine, UnityEngine, TouchDesigner'],
      ['DCC tools', 'Blender, Cinema 4D'],
      ['Others', 'Photoshop, After Effects, Illustrator'],
    ],
  },
};

// ── Japanese work text, migrated from the legacy site (tanyanggu.com JA pages).
// Only works that actually had a Japanese version are listed here; the rest
// (e.g. WeSA, whose JA page was still English) fall back to the default text.
// These get merged onto each work as `titleJa` / `bodyJa`, picked at render
// time by TYG_PICK when the active language is JA. ──────────────────────────
(function () {
  var JA = {
    'floating-margins': {
      title: '浮遊する余白',
      body: [
        '思考のノイズが静まり返り、無意識の奥底に広がる純粋なリズムと光へ。自我という枠組みから抽離された精神は、余白の中へと融け込んでゆく。',
        '本作は、深い瞑想状態における意識の変容と、その空間に宿る静謐な物語を視覚化したドーム映像作品である。',
        '上映：\n2026.02 – ImmersiveDarkNight Vol.4, Tokyo, Japan',
        'Music : DNS - Daybreak',
      ],
    },
    'emergent-cosmos': {
      body: [
        '「Emergent Cosmos」は、時間と存在の重なりを四次元的視点から描き出す作品である。流動する光の中に浮かぶ白い構造体は、時間そのものを可視化し、運動の軌跡を多層的に刻む。そこには複数の平行宇宙における「自己」の姿が重なり合い、異なる世界が共鳴し合う瞬間が示されている。',
        '上映：\n2026.02 – ImmersiveDarkNight Vol.4, Tokyo, Japan\n2025.08 – なかのZEROメディア芸術プログラム2025. 東京. 日本\n2025.10 – 国際科学映像祭第14回ドームフェスタ. 東京. 日本\n2025.12 – Ghost in the Mirror — Screening & Exhibition of Visual Anthropological Works. 上海. 中国',
        'Director : RustyHead (Tan Yanggu)\nMusic : First Floor – DNS',
      ],
    },
    'livs': {
      body: [
        '本楽曲をMVに書き起こすとき、「連続性」というキーワードを解釈した。私たちは連続的な世界の中で生きている。例えば今日の自分と明日の自分、自分から見た自分と他人から見た自分。往々と議論の的となるトピックだが、中でも本楽曲は現代人が抱える「連続性への苦悩」を鮮烈に描いている。楽曲が持つ離散的な音声情報と極端に繰り返される歌詞は、本来あるべきでない自己意識と他者の意識との乖離、果ては表層的な強い破壊衝動と内面的な弱い自分の乖離まで、それによる苦悩を切実に訴えかける。ある種、それはバグである。そういった二面性を、本映像では視覚的に喩えてみようと思う。',
        'Vocal / Performer : LiVS（コンニチハクリニック、スズカス・テラ、ミニ・マルコ、ユニセックス、ランルウ）\nComposer / Lyricist : Ryosuke Shinoda (Top Secretman)\nProduction : ALL INc.\nCG Artist : Yuu Murakami / Fumika Nakamura\nText Animation : Asami Suzuki\nLayout / Animation : Yanggu Tan\nEffect / Editor : Tomoaki Muramatsu\nVR Camera : Watanabe-ka (Concent, Inc.)\nSupervisor : Prof. Kenji Watanabe / Watanabe-ka / Kazuya Sakata',
      ],
    },
    'synesthesia-array': {
      body: [
        '福島第一原発から6kmの地域にある、とある家族の物語。',
        'Visual : Tan Yanggu\nSound : DNS',
      ],
    },
    'expanding-body': {
      body: [
        '未来において、技術の進歩に伴い、私たち一人一人がデジタルアバターを持つようになると信じている。私たちの特徴を備えたデジタルアバターは、現実の身体から収集されたデータを基に構築されたものである。この考えを踏まえ、私はAIを使用して、自分の身体の一部の写真から、自分に似ているが異なる新たな身体の外観を生成した。生成された新しい外観の画像をテクスチャとして使用し、ビデオというメディアを通じて画面全体に表示させることで、ディスプレイをデジタルアバターの身体の延長とする。このプロセスを通じて、未来のデジタルアバターのさらなる可能性を探求していく。',
        '上映：\n2024.08 – なかのZEROメディア芸術プログラム2024\n2025.02 – 国際科学映像祭第13回ドームフェスタ\n2025.02 – ImmersiveDarkNight Vol.3',
        'Music : stabilizer / V.A.\nSpecial Thanks : Oishi Hiroaki; Yamasaki Renki',
      ],
    },
    'sazareba': {
      body: [
        'さざれ場005でのオーディオビジュアルパフォーマンスのために開発されたVJシステムです。すべてのエフェクトはUE5で実装され、リアルタイムでオーディオと連動したビジュアルをレンダリングします。\n具体的には、TouchDesignerを使用してオーディオ信号をリアルタイムで受信し解析した後、OSCプロトコルを介してUE5にオーディオデータを送信します。UE5では、システムは主にカメラコントローラーとVFXコントローラーに分かれており、これらのパラメータはMIDIプロトコルを介してMIDIコントローラーによって制御されます。',
        'このシステムは後に2度目の公演でも使用されました。Seoul Community Radio（@scr_radio）でのライブ・モジュラーシンセ＆ビジュアルセットです。フルセッションはSeoul Community RadioのYouTubeチャンネルで公開されています。',
        'さざれ場 #005\nVisual : RustyHead (TAN YANGGU)\nMusic : i.s.d (Yuki Ishida)',
        'Seoul Community Radio\nVisual : RustyHead (TAN YANGGU)\nSound : max_spotlite',
      ],
    },
    'data-family': {
      body: [
        '家庭内の物やシーンなどを3Dスキャンしてデータ化し、Unityを使用して家のデジタルコピーを作成しました。また、各部屋に対して、家族のメンバーがその記憶に関する説明を残しました。最終的には、没入型のインタラクティブ・インストレーションを通じて、超現実的な家族の記憶の場を作り出しました。観客は、投影画面に触れることで作者の家族の記憶と対話することができ、作者の家族の記憶を多感覚で体感することができます。',
        '本プロジェクトでは、センサーとしてSLAM LiDAR A2M8を使用し、収集したデータをInteractiveEngineを用いてスクリーンの座標データに変換しました。このデータはTUIOを介してUnityに送信されました。祖母の家のような照明が不足している場所や狭い通路などの問題のため、点群のスキャンはLuma.AIのNeRFベースのスキャン方法を使用して行いました。点群ファイルを書き出した後、BlenderのPoint Cloud Visualizerプラグインを使用してデータをクリーンアップしました。Unityでは、VFX Graphを使用して点群を可視化し、パーティクルエフェクトを作成しました。各シーンにコライダーを配置して非表示にし、C#スクリプトを作成して、画面空間の点をレイキャスティングの方法で三次元の点に変換しました。この点を中心にタッチエフェクトを生成し、点群に影響を与えました。',
      ],
    },
    'audio-particles': {
      body: [
        'TouchOSCを使用したUE5でのオーディオリアクティブ粒子のテスト。\nMusic : Lucky Charm (Original Mix) by Alix Perez',
      ],
    },
    'metasound': {
      body: [
        '「MetaSound Project」は、バーチャルライブ・プロジェクトです。私はPuZaoSiスタジオでのインターンシップ期間中、このプロジェクトの初期デモ制作に携わりました。シーンアセットの収集を除き、Unreal Engineを用いた構築や演出など、ほとんどの工程を自分自身で手がけました。',
      ],
    },
    'wang-heye-vj': {
      title: '歌手王赫野のコンサートのVJ映像制作',
      body: [
        'PuZaoSiスタジオでのインターンシップ中に、歌手王赫野（ワン・ハーイエ）のコンサートのVJ映像制作プロジェクトに参加しました。このプロジェクトでは、3曲のVJ映像制作を担当し、主にUnreal EngineとAfter Effectsを使用して制作しました。',
      ],
    },
    'ue-scenes': {
      body: [
        'Unreal Engineを使用して構築したいくつかのシーン。アセットにはMegaScansのアセットを使用したものと、自分で制作したものが含まれています。',
      ],
    },
  };
  window.TYG_DATA.works.forEach(function (w) {
    var j = JA[w.slug];
    if (!j) return;
    if (j.title) w.titleJa = j.title;
    if (j.body) w.bodyJa = j.body;
  });
})();

// Resolve a work's display fields for the active language. Falls back to the
// default (English) field whenever a JA variant isn't present.
window.TYG_PICK = function (w, lang) {
  var ja = lang === 'JA';
  return {
    title: ja && w.titleJa ? w.titleJa : w.title,
    place: ja && w.placeJa ? w.placeJa : w.place,
    body:  ja && w.bodyJa  ? w.bodyJa  : w.body,
  };
};
