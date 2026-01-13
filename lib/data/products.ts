export interface Product {
  slug: string
  name: string
  category: 'flexible' | 'rigid' | 'portable' | 'top'
  series: string
  description: string
  shortDescription: string
  image: string
  gallery: string[]
  badge?: 'NEW' | 'HOT' | 'TOP'
  specs: {
    power?: string
    efficiency?: string
    weight?: string
    dimensions?: string
    warranty?: string
    certification?: string[]
  }
  features: string[]
  applications: string[]
}

export const products: Product[] = [
  // Top Solar Panels
  {
    slug: 'anti-shading-solar-panel',
    name: 'Anti-Shading Solar Panel',
    category: 'top',
    series: 'Anti-Shading',
    description: 'Our Anti-Shading Solar Panel features cell-level shadow management technology, ensuring reliable power output even in partially shaded conditions. Perfect for commercial installations, rooftops, RVs, and public sites where shading is unavoidable.',
    shortDescription: 'Reliable shaded power with cell-level shadow management',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=800&fit=crop',
    ],
    badge: 'NEW',
    specs: {
      power: '400-450W',
      efficiency: 'Up to 22.5%',
      weight: '21kg',
      dimensions: '1722 x 1134 x 30mm',
      warranty: '12 Years Product, 25 Years Performance',
      certification: ['TÜV', 'CE', 'IEC 61215', 'IEC 61730'],
    },
    features: [
      'Cell-level shadow management technology',
      'Bypass diodes for optimal shading performance',
      'N-type TOPCon cells for high efficiency',
      'Anti-reflective glass coating',
      'Salt mist and ammonia resistant',
    ],
    applications: ['Commercial rooftops', 'RV installations', 'Residential solar', 'Public sites'],
  },
  {
    slug: 'topcon-solar-panel',
    name: 'TOPCon Solar Panel',
    category: 'top',
    series: 'TOPCon',
    description: 'N-Type TOPCon technology delivers industry-leading efficiency of up to 24.4%. These premium panels offer superior performance in low-light conditions and excellent temperature coefficient for Australian climates.',
    shortDescription: 'N-TYPE Topcon solar panel with high efficiency',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=800&fit=crop',
    ],
    badge: 'TOP',
    specs: {
      power: '450-480W',
      efficiency: 'Up to 24.4%',
      weight: '23kg',
      dimensions: '2278 x 1134 x 35mm',
      warranty: '15 Years Product, 30 Years Performance',
      certification: ['TÜV', 'UL', 'CE', 'IEC 61215', 'IEC 61730'],
    },
    features: [
      'N-Type TOPCon cell technology',
      'Superior low-light performance',
      'Excellent temperature coefficient',
      'Bifacial design option available',
      'PID resistant',
    ],
    applications: ['Utility-scale projects', 'Commercial installations', 'Premium residential', 'Ground-mount systems'],
  },
  {
    slug: '400-watt-solar-panel',
    name: '400 Watt Solar Panel',
    category: 'top',
    series: '400W',
    description: 'High efficiency 400W solar panel designed for maximum power output. Ideal for both residential and commercial installations where space optimization is crucial.',
    shortDescription: 'High efficiency 400W solar panel for power',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop',
    ],
    badge: 'HOT',
    specs: {
      power: '400W',
      efficiency: 'Up to 21.5%',
      weight: '20kg',
      dimensions: '1722 x 1134 x 30mm',
      warranty: '10 Years Product, 25 Years Performance',
      certification: ['TÜV', 'CE', 'IEC 61215'],
    },
    features: [
      'High power density',
      'Half-cut cell technology',
      'Low light performance',
      'Strong mechanical load capacity',
    ],
    applications: ['Residential rooftops', 'Commercial buildings', 'Ground-mount', 'Carports'],
  },
  {
    slug: '200-watt-solar-panel',
    name: '200 Watt Solar Panel',
    category: 'top',
    series: '200W',
    description: 'Best off-grid solar panel at 200W, perfect for smaller installations, RVs, boats, and cabin setups where moderate power output is required.',
    shortDescription: 'Best off-grid solar panel 200W for efficiency',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
    ],
    badge: 'HOT',
    specs: {
      power: '200W',
      efficiency: 'Up to 20.5%',
      weight: '12kg',
      dimensions: '1480 x 670 x 30mm',
      warranty: '10 Years Product, 25 Years Performance',
      certification: ['TÜV', 'CE', 'IEC 61215'],
    },
    features: [
      'Compact design',
      'Easy installation',
      'Off-grid optimized',
      'Weather resistant',
    ],
    applications: ['RV solar systems', 'Boat installations', 'Cabin solar', 'Small off-grid'],
  },
  {
    slug: 'bc-solar-panel',
    name: 'BC Solar Panel',
    category: 'top',
    series: 'BC',
    description: 'Grid-free front design with back-contact technology increases the receiving area for maximum light absorption. Clean aesthetics meet high performance.',
    shortDescription: 'Grid-free front design for increased receiving area',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
    ],
    badge: 'NEW',
    specs: {
      power: '420-440W',
      efficiency: 'Up to 23%',
      weight: '21kg',
      dimensions: '1722 x 1134 x 30mm',
      warranty: '12 Years Product, 25 Years Performance',
      certification: ['TÜV', 'CE', 'IEC 61215', 'IEC 61730'],
    },
    features: [
      'Back-contact cell design',
      'Grid-free front surface',
      'Premium aesthetics',
      'High efficiency',
    ],
    applications: ['Premium residential', 'Architectural integration', 'Commercial projects'],
  },

  // Flexible Solar Panels
  {
    slug: 'pa621-series',
    name: 'PA621 Series',
    category: 'flexible',
    series: 'PA621',
    description: 'Vibration-resistant and heat-dissipating lightweight RV solar panel featuring anti-shading technology. The PA621 series is designed for curved surfaces and demanding mobile applications.',
    shortDescription: 'Vibration-resistant, heat-dissipating lightweight RV solar panel',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
    ],
    badge: 'NEW',
    specs: {
      power: '100-200W',
      efficiency: 'Up to 23%',
      weight: '3.5 kg/m²',
      dimensions: 'Various sizes available',
      warranty: '10 Years',
      certification: ['TÜV', 'CE', 'RoHS', 'REACH'],
    },
    features: [
      'Anti-shading technology',
      'Heat insulation design',
      'Vibration resistant',
      'Ultra-lightweight',
      'Flexible up to 30°',
    ],
    applications: ['RV roofs', 'Curved surfaces', 'Marine vessels', 'Mobile applications'],
  },
  {
    slug: 'pa219-series',
    name: 'PA219 Series',
    category: 'flexible',
    series: 'PA219',
    description: 'Beyond rooftops - TÜV certified flexible solar panel at only 3.3 kg/m². Best for custom voltage applications and installations requiring lightweight, high-power panels.',
    shortDescription: 'TÜV certified flexible solar panel, beyond rooftops',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop',
    ],
    badge: 'TOP',
    specs: {
      power: '150-400W',
      efficiency: 'Up to 24%',
      weight: '3.3 kg/m²',
      dimensions: 'Customizable',
      warranty: '10 Years',
      certification: ['TÜV', 'CSA', 'CE', 'RoHS', 'REACH'],
    },
    features: [
      'TÜV & CSA certified',
      'Ultra-lightweight 3.3 kg/m²',
      'Custom voltage options',
      'High power output',
      'Flexible design',
    ],
    applications: ['RV installations', 'Marine applications', 'Industrial roofs', 'Custom projects'],
  },
  {
    slug: 'tf-series',
    name: 'TF Series',
    category: 'flexible',
    series: 'TF',
    description: 'Impact-resistant, anti-step flexible solar panel designed for harsh conditions. Walk on it, bend it - the TF Series is built to handle the toughest environments.',
    shortDescription: 'Impact-resistant, anti-step flexible solar panel',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=800&fit=crop',
    ],
    badge: 'HOT',
    specs: {
      power: '100-180W',
      efficiency: 'Up to 22%',
      weight: '4 kg/m²',
      dimensions: 'Multiple sizes',
      warranty: '10 Years',
      certification: ['CE', 'RoHS'],
    },
    features: [
      'Impact resistant surface',
      'Anti-step design - walkable',
      'Flexible up to 30°',
      'Durable construction',
    ],
    applications: ['Boat decks', 'RV roofs', 'Walkable surfaces', 'Harsh environments'],
  },

  // Rigid Solar Panels
  {
    slug: 'sgm-series',
    name: 'SGM Series',
    category: 'rigid',
    series: 'SGM',
    description: 'TÜV & UL certified rigid solar panel designed for permanent installations. The SGM Series offers exceptional durability and performance for residential and commercial applications.',
    shortDescription: 'TÜV & UL certified rigid solar panel',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
    ],
    specs: {
      power: '300-450W',
      efficiency: 'Up to 22%',
      weight: '20-25kg',
      dimensions: 'Standard sizes',
      warranty: '10 Years Product, 25 Years Performance',
      certification: ['TÜV', 'UL', 'CE', 'IEC 61215'],
    },
    features: [
      'TÜV & UL certified',
      'Tempered glass construction',
      'Aluminum frame',
      'High mechanical load',
      '25-year service life',
    ],
    applications: ['Residential rooftops', 'Commercial buildings', 'Ground-mount systems', 'Carports'],
  },
  {
    slug: 'dg-series',
    name: 'DG Series',
    category: 'rigid',
    series: 'DG',
    description: 'Bifacial solar panel with higher power gain by capturing light from both sides. Perfect for ground-mount and elevated installations where rear-side irradiance is available.',
    shortDescription: 'Bifacial solar panel, higher power gain',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
    ],
    specs: {
      power: '440-550W',
      efficiency: 'Up to 22.5%',
      weight: '28kg',
      dimensions: '2278 x 1134 x 35mm',
      warranty: '12 Years Product, 30 Years Performance',
      certification: ['TÜV', 'CE', 'IEC 61215', 'IEC 61730'],
    },
    features: [
      'Bifacial technology',
      'Up to 30% additional power gain',
      'Dual glass construction',
      'Weather resistant',
    ],
    applications: ['Ground-mount farms', 'Elevated installations', 'Carports', 'Agrivoltaics'],
  },
  {
    slug: 'sgsp-series',
    name: 'SGSP Series',
    category: 'rigid',
    series: 'SGSP',
    description: 'Back-contact SunPower rigid solar panel offering premium efficiency and aesthetics. Ideal for space-constrained installations requiring maximum power output.',
    shortDescription: 'Back-contact SunPower rigid solar panel',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop',
    ],
    specs: {
      power: '220-400W',
      efficiency: 'Up to 24%',
      weight: '15-22kg',
      dimensions: 'Various sizes',
      warranty: '10 Years',
      certification: ['TÜV', 'CE', 'IEC 61215'],
    },
    features: [
      'Back-contact SunPower cells',
      'Premium efficiency',
      'Clean aesthetics',
      'Space-efficient',
    ],
    applications: ['Premium residential', 'Limited space installations', 'RV', 'Marine'],
  },

  // Portable Solar Panels
  {
    slug: 'hi-power-series',
    name: 'Hi-Power Series',
    category: 'portable',
    series: 'Hi-Power',
    description: 'TÜV certified, high-power lightweight portable panel designed for serious outdoor enthusiasts. Foldable design with maximum power output for camping, overlanding, and emergency use.',
    shortDescription: 'TÜV certified, high-power lightweight portable panel',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&h=800&fit=crop',
    ],
    badge: 'HOT',
    specs: {
      power: '200-400W',
      efficiency: 'Up to 23%',
      weight: '6-12kg',
      dimensions: 'Foldable design',
      warranty: '5 Years',
      certification: ['TÜV', 'CE', 'RoHS'],
    },
    features: [
      'TÜV certified quality',
      'Lightweight foldable design',
      'High power output',
      'Built-in kickstand',
      'Multiple output ports',
    ],
    applications: ['Camping', 'Overlanding', 'Emergency power', 'Outdoor events'],
  },
  {
    slug: 'bxf-plus-series',
    name: 'BXF Plus Series',
    category: 'portable',
    series: 'BXF Plus',
    description: 'Impact-resistant, lightweight integrated portable solar panel. 50% lighter than previous generations with improved efficiency and durability.',
    shortDescription: 'Impact-resistant, lightweight integrated portable solar panel',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&h=800&fit=crop',
    ],
    badge: 'NEW',
    specs: {
      power: '100-200W',
      efficiency: 'Up to 24%',
      weight: '3-6kg',
      dimensions: 'Compact folded',
      warranty: '5 Years',
      certification: ['CE', 'RoHS'],
    },
    features: [
      '50% lighter design',
      'Impact resistant',
      'Integrated charging system',
      'Waterproof construction',
    ],
    applications: ['Backpacking', 'Camping', 'Beach trips', 'Festival power'],
  },
  {
    slug: 'bxf-series',
    name: 'BXF Series',
    category: 'portable',
    series: 'BXF',
    description: 'Multi-fold integrated laminated folding solar panel. Compact storage with quick deployment for reliable portable power anywhere.',
    shortDescription: 'Multi-fold integrated laminated folding solar panel',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&h=800&fit=crop',
    ],
    badge: 'HOT',
    specs: {
      power: '60-160W',
      efficiency: 'Up to 22%',
      weight: '2-5kg',
      dimensions: 'Multi-fold compact',
      warranty: '5 Years',
      certification: ['CE', 'RoHS'],
    },
    features: [
      'Multi-fold design',
      'Laminated construction',
      'Quick setup',
      'Compact storage',
    ],
    applications: ['Hiking', 'Camping', 'Emergency backup', 'Device charging'],
  },
  {
    slug: 'winner-bag-series',
    name: 'Winner Bag Series',
    category: 'portable',
    series: 'Winner Bag',
    description: 'Charging integrated handle sewn suitcase solar panels. Carry your power station like a briefcase with this innovative all-in-one design.',
    shortDescription: 'Charging integrated handle sewn suitcase solar panels',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&h=800&fit=crop',
    ],
    specs: {
      power: '100-200W',
      efficiency: 'Up to 21%',
      weight: '8-12kg',
      dimensions: 'Suitcase style',
      warranty: '5 Years',
      certification: ['CE', 'RoHS'],
    },
    features: [
      'Suitcase style design',
      'Integrated carry handle',
      'Built-in charge controller',
      'Quick deployment',
    ],
    applications: ['RV camping', 'Tailgating', 'Emergency power', 'Mobile power station'],
  },
  {
    slug: 'spc-series',
    name: 'SPC Series',
    category: 'portable',
    series: 'SPC',
    description: 'Impact-resistant sewn folding solar blanket. Soft, flexible, and durable for outdoor adventures where durability meets portability.',
    shortDescription: 'Impact-resistant sewn folding solar blanket',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&h=800&fit=crop',
    ],
    specs: {
      power: '50-120W',
      efficiency: 'Up to 20%',
      weight: '1.5-4kg',
      dimensions: 'Blanket fold',
      warranty: '3 Years',
      certification: ['CE', 'RoHS'],
    },
    features: [
      'Solar blanket design',
      'Soft and flexible',
      'Impact resistant cells',
      'Ultra-portable',
    ],
    applications: ['Backpacking', 'Hiking', 'Kayaking', 'Ultra-light camping'],
  },
  {
    slug: 'sgf-series',
    name: 'SGF Series',
    category: 'portable',
    series: 'SGF',
    description: 'Rigid folding solar panel with 10-year warranty. Premium quality portable power with the durability of rigid panel construction.',
    shortDescription: 'Rigid folding solar panel with 10-year warranty',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&h=800&fit=crop',
    ],
    specs: {
      power: '100-200W',
      efficiency: 'Up to 22%',
      weight: '8-15kg',
      dimensions: 'Rigid folding',
      warranty: '10 Years',
      certification: ['TÜV', 'CE', 'RoHS'],
    },
    features: [
      '10-year warranty',
      'Rigid panel construction',
      'Folding design',
      'Heavy-duty kickstand',
    ],
    applications: ['Overlanding', 'Boat power', 'Long-term camping', 'Off-grid cabin'],
  },
]

export const productCategories = {
  top: {
    name: 'Top Solar Panels',
    slug: 'top-solar-panel',
    description: 'Premium high-efficiency solar panels with the latest cell technology for maximum power output.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
  },
  flexible: {
    name: 'Flexible Solar Panels',
    slug: 'flexible-solar-panels',
    description: 'Lightweight and bendable panels perfect for curved surfaces, RVs, boats, and mobile applications.',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop',
  },
  rigid: {
    name: 'Rigid Solar Panels',
    slug: 'rigid-solar-panels',
    description: 'Durable long-lasting panels designed for permanent installations with 25+ year service life.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop',
  },
  portable: {
    name: 'Portable Solar Panels',
    slug: 'portable-solar-panels',
    description: 'On-the-go power solutions for camping, overlanding, emergencies, and outdoor adventures.',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=600&fit=crop',
  },
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug)
}
