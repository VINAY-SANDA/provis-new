export interface ProductGrade {
    name: string;
    sku: string;
    description: string;
}

export interface QuickSpec {
    purity?: string;
    activity?: string;
    endotoxin?: string;
    storage?: string;
    formulation?: string;
    molecularWeight?: string;
    casNumber?: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    category: 'api' | 'reagent' | 'cdmo';
    grade: string;
    tagline: string;
    shortDescription: string;
    description: string;
    longDescription?: string;
    image: string;
    aof?: boolean;
    badge?: string;
    casNumber?: string;
    keyFeatures?: string[];
    applications: string[];
    href: string;
    // New scientific fields
    quickSpecs?: QuickSpec;
    workflow?: string[];
    grades?: ProductGrade[];
    documentation?: { label: string; url: string }[];
    technicalImages?: { url: string; caption: string }[];
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'l-asparaginase',
        name: 'L-Asparaginase Bulk',
        category: 'api',
        grade: 'GMP Grade',
        tagline: 'High-purity oncology therapeutic enzyme for the treatment of Acute Lymphoblastic Leukemia.',
        shortDescription: 'High-purity oncology therapeutic enzyme.',
        description: 'L-Asparaginase is a crucial enzyme used primarily in the treatment of Acute Lymphoblastic Leukemia (ALL). Our product is manufactured under strict cGMP guidelines.',
        longDescription: 'Our L-Asparaginase is a premium-grade bulk active pharmaceutical ingredient (API) featuring exceptionally high purity levels. Elaborately produced under stringent WHO-GMP conditions, this therapeutic enzyme demonstrates unparalleled efficacy in oncology treatments, specifically aimed at Acute Lymphoblastic Leukemia (ALL). Our advanced manufacturing controls guarantee consistency and very low endotoxin levels, meeting global regulatory standards.',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2670&auto=format&fit=crop',
        casNumber: '9015-68-3',
        keyFeatures: ['High purity >99%', 'Low endotoxin levels', 'Manufactured under WHO-GMP', 'Scalable production capacity'],
        applications: ['Oncology Therapeutics', 'Clinical Research', 'Formulation Development'],
        href: '/l-asparaginase',
        quickSpecs: {
            purity: '≥99%',
            molecularWeight: '~141 kDa',
            casNumber: '9015-68-3',
            storage: '2-8°C',
            formulation: 'Liquid/Frozen'
        },
        workflow: ['Cell Culture Harvest', 'Primary Recovery', 'Chromatography', 'Formulation', 'Sterile Fill'],
        documentation: [
            { label: 'Technical Data Sheet', url: '#' },
            { label: 'SDS (Safety Data Sheet)', url: '#' }
        ]
    },
    {
        id: '2',
        slug: 'provinase',
        name: 'Provinase®',
        category: 'reagent',
        grade: 'Bioprocessing Grade',
        tagline: 'Flagship endonuclease for efficient bioprocessing and DNA removal.',
        shortDescription: 'Flagship endonuclease for bioprocessing.',
        description: 'Provinase is our proprietary, highly active endonuclease designed to digest all forms of DNA and RNA, reducing viscosity and improving downstream purification efficiency.',
        longDescription: 'Provinase is a robust, animal-origin-free endonuclease designed specifically to address challenges in modern bioprocessing. It efficiently digests single-stranded, double-stranded, linear, and circular DNA and RNA, significantly reducing sample viscosity. It performs reliably across a wide range of operational pH and temperature parameters, delivering optimal removal of host-cell nucleic acid impurities in complex bioproduction workflows.',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2670&auto=format&fit=crop',
        aof: true,
        badge: 'Bestseller',
        casNumber: '9025-65-4',
        keyFeatures: ['Animal-origin free (AOF)', 'Works across wide pH and temperature ranges', 'Complete nucleic acid digestion', 'High specific activity'],
        applications: ['Viral Vector Purification', 'Recombinant Protein Production', 'Vaccine Manufacturing', 'Downstream Processing'],
        href: '/provinase',
        quickSpecs: {
            purity: '≥99%',
            activity: '≥250 U/µL',
            casNumber: '9025-65-4',
            storage: '-20°C',
            formulation: '50% Glycerol'
        },
        workflow: ['Clarification', 'Benzonase/Provinase Treatment', 'Tangential Flow Filtration', 'Ion Exchange Chromatography'],
        grades: [
            { name: 'Research Grade', sku: 'PRO-RUO-001', description: 'For R&D use only' },
            { name: 'GMP Grade', sku: 'PRO-GMP-001', description: 'Validated for clinical manufacturing' }
        ],
        documentation: [
            { label: 'CoA (Sample)', url: '#' },
            { label: 'SDS', url: '#' },
            { label: 'AOF Certificate', url: '#' }
        ]
    },
    {
        id: '3',
        slug: 'biosimilars',
        name: 'Biosimilars',
        category: 'api',
        grade: 'GMP Grade',
        tagline: 'Next-generation biosimilar pipeline targeting critical therapeutic areas.',
        shortDescription: 'Next-generation biosimilar pipeline.',
        description: 'Our biosimilar program focuses on delivering high-quality, accessible alternatives to complex biologic medicines, leveraging our advanced fermentation and purification platforms.',
        longDescription: 'Driven by our vision to broaden global access to essential biologics, our next-generation biosimilar pipeline relies on state-of-the-art analytical characterization and robust manufacturing platforms. Through rigorous comparability studies, we ensure our biosimilars meet the highest standards of safety, purity, and potency, targeting key areas in critical therapeutics.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop',
        casNumber: 'N/A',
        keyFeatures: ['Comprehensive comparability studies', 'State-of-the-art analytical characterization', 'High-yield fermentation processes', 'Strict quality control systems'],
        applications: ['Therapeutics', 'Clinical Trials', 'Precision Medicine'],
        href: '/biosimilars',
        quickSpecs: {
            purity: 'High Purity',
            storage: '2-8°C',
            formulation: 'Bulking agents'
        },
        workflow: ['Cell Line Dev', 'Master Cell Bank', 'Scale-up Fermentation', 'Downstream Purification', 'Analytical Comparability']
    },
    {
        id: '4',
        slug: 'pngase-f',
        name: 'PNGase F',
        category: 'reagent',
        grade: 'Research Grade',
        tagline: 'Gold standard enzyme for N-glycan release in glycoprotein analysis.',
        shortDescription: 'Standard N-glycan release enzyme.',
        description: 'PNGase F (Peptide-N-Glycosidase F) is an amidase that cleaves between the innermost GlcNAc and asparagine residues of high mannose, hybrid, and complex oligosaccharides.',
        longDescription: 'PNGase F is recognized as the industry\'s gold standard for N-linked glycan removal. This highly specific amidase thoroughly cleaves the intact oligosaccharide chains from glycoproteins, empowering precise structural and functional analyses. It is an indispensable tool in mass spectrometry workflows and intricate glycobiology research, ensuring uncompromised resolution and accuracy.',
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508abb0?q=80&w=2670&auto=format&fit=crop',
        casNumber: '83534-39-8',
        keyFeatures: ['High specific activity', 'Glycerol-free formulation available', 'Optimal for mass spectrometry workflows', 'Cleaves all common N-linked glycan classes'],
        applications: ['Glycobiology', 'Mass Spectrometry', 'Protein Characterization'],
        href: '/pngase-f',
        quickSpecs: {
            purity: 'Ultra-pure',
            activity: 'High',
            storage: '-20°C',
            formulation: 'In stability buffer'
        },
        workflow: ['Protein Denaturation', 'PNGase F Addition', 'Incubation', 'Glycan Extraction', 'Mass Spec Analysis'],
        documentation: [
            { label: 'Protocol Guide', url: '#' },
            { label: 'Product Flyer', url: '#' }
        ]
    },
    {
        id: '5',
        slug: 'synthetic-peptides',
        name: 'Synthetic Peptides',
        category: 'api',
        grade: 'GMP & Research Grade',
        tagline: 'Custom peptide synthesis and development services from mg to kg scale.',
        shortDescription: 'Custom peptide synthesis and development.',
        description: 'We offer comprehensive synthetic peptide services including custom synthesis, library generation, and process development for GMP manufacturing of peptide APIs.',
        longDescription: 'Our synthetic peptide division provides cutting-edge solutions for custom synthesis and robust scale-up capabilities. Deploying both solid-phase and liquid-phase methodologies, we tackle complex modifications including advanced cyclizations and targeted tagging. From early-stage library generation to extensive commercial GMP manufacturing, we deliver rigorous analytical validation throughout the entire project lifecycle.',
        image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2670&auto=format&fit=crop',
        keyFeatures: ['Solid-phase and liquid-phase synthesis', 'Complex modifications (cyclization, tagging)', 'Stringent analytical QC (HPLC, MS)', 'Scalable from milligrams to kilograms'],
        applications: ['Drug Discovery', 'Diagnostics', 'Cosmeceuticals', 'Therapeutics'],
        href: '/synthetic-peptides',
        quickSpecs: {
            purity: 'Up to 98%',
            storage: '-20°C',
            formulation: 'Lyophilized Powder'
        },
        workflow: ['Design', 'Synthesis', 'Cleavage/Deprotection', 'HPLC Purification', 'Lyophilization']
    },
    {
        id: '6',
        slug: 'pegaspargase',
        name: 'Pegaspargase Bulk',
        category: 'api',
        grade: 'GMP Grade',
        tagline: 'PEGylated L-Asparaginase with prolonged activity for oncology formulations.',
        shortDescription: 'PEGylated enzyme for ALL treatment workflows.',
        description: 'Pegaspargase is a PEGylated L-Asparaginase designed for improved pharmacokinetics and reduced dosing frequency in oncology applications.',
        longDescription: 'Pegaspargase represents an advanced formulation of L-Asparaginase combined with polyethylene glycol (PEG). This cutting-edge modification significantly prolongs the enzyme\'s half-life and reduces immunogenicity, resulting in customized and highly effective dosing regimens for Acute Lymphoblastic Leukemia patients. Produced under critical cGMP safeguards, it delivers consistent baseline quality for specialized oncology pipelines.',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2670&auto=format&fit=crop',
        casNumber: '130167-69-0',
        keyFeatures: ['PEGylated formulation', 'cGMP manufacturing controls', 'Consistent batch quality', 'Enhanced circulating half-life'],
        applications: ['Oncology Therapeutics', 'Clinical Development', 'Targeted Drug Delivery'],
        href: '/pegaspargase',
        quickSpecs: {
            purity: '≥99%',
            casNumber: '130167-69-0',
            storage: '2-8°C',
            formulation: 'Liquid'
        },
        workflow: ['L-Asparaginase Bio-API', 'PEGylation Reaction', 'Purification of Conjugate', 'UF/DF', 'Final Product Testing']
    },
    {
        id: '7',
        slug: 'streptokinase',
        name: 'Streptokinase Bulk',
        category: 'api',
        grade: 'GMP Grade',
        tagline: 'High-purity thrombolytic enzyme API for cardiovascular care.',
        shortDescription: 'Thrombolytic bulk API.',
        description: 'Streptokinase is a fibrinolytic enzyme used in thrombolytic therapies and manufactured under robust GMP controls.',
        longDescription: 'Streptokinase is an essential, highly specific fibrinolytic enzyme, acting as a robust therapeutic bulk API in cardiovascular interventions. By rapidly converting plasminogen to plasmin, it effectively dissolves pathogenic blood clots. Manufactured under rigorous GMP standards, our product features a consistently high specific activity, an exceptionally low impurity profile, and absolute scalability to meet extensive formulation demands.',
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2670&auto=format&fit=crop',
        casNumber: '9002-01-1',
        keyFeatures: ['High specific activity', 'Low impurity profile', 'Scalable manufacturing', 'Proven thrombolytic efficacy'],
        applications: ['Cardiovascular Therapeutics', 'Formulation Development', 'Emergency Medicine'],
        href: '/streptokinase',
        quickSpecs: {
            purity: '≥99%',
            casNumber: '9002-01-1',
            storage: '2-8°C',
            formulation: 'Lyophilized'
        }
    },
    {
        id: '8',
        slug: 'sodium-hyaluronate',
        name: 'Sodium Hyaluronate',
        category: 'api',
        grade: 'GMP Grade',
        tagline: 'High-purity sodium hyaluronate for orthopedics and ophthalmic applications.',
        shortDescription: 'High-purity sodium hyaluronate API.',
        description: 'Sodium hyaluronate manufactured for consistent molecular weight distribution and dependable performance in sterile formulations.',
        longDescription: 'Our Sodium Hyaluronate API is engineered to offer exceptional purity and a tightly controlled diverse range of molecular weights, suitable for the most sensitive and demanding medical applications. It guarantees flawless sterile process compatibility, extremely low endotoxin units, and unparalleled viscoelastic behavior, perfectly tailored for progressive orthopedic visco-supplementation and intraocular ophthalmic solutions.',
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2670&auto=format&fit=crop',
        casNumber: '9067-32-7',
        keyFeatures: ['Controlled viscosity grades', 'Low endotoxin levels', 'Sterile process compatibility', 'Consistent molecular weight distribution'],
        applications: ['Orthopedics', 'Ophthalmics', 'Medical Devices', 'Dermatology'],
        href: '/sodium-hyaluronate',
        quickSpecs: {
            purity: 'Sterile Grade',
            casNumber: '9067-32-7',
            storage: 'Ambient',
            formulation: 'Powder/Liquid'
        }
    },
    {
        id: '9',
        slug: 'recombinant-albumin',
        name: 'Recombinant Human Albumin',
        category: 'reagent',
        grade: 'Bioprocessing Grade',
        tagline: 'Animal-origin-free recombinant albumin for media and formulation support.',
        shortDescription: 'AOF recombinant albumin excipient.',
        description: 'Recombinant human albumin for cell culture, vaccine formulation, and biologics stabilization workflows.',
        longDescription: 'Recombinant Human Albumin is an animal-origin-free (AOF) protein that eliminates the risks of adventitious agents while mimicking the structural and functional attributes of native human serum albumin. With exceptional lot-to-lot consistency and superior purity profiles, it stabilizes labile therapeutics, enhances cell culture media viability, and serves securely in advanced vaccine formulations.',
        image: 'https://images.unsplash.com/photo-1618015359908-04bb525e9854?q=80&w=2670&auto=format&fit=crop',
        aof: true,
        casNumber: '70024-90-7',
        keyFeatures: ['Animal-origin free', 'High purity', 'Excellent lot-to-lot consistency', 'Biologically identical to native human albumin'],
        applications: ['Cell Culture', 'Vaccine Formulation', 'Protein Stabilization', 'Cryopreservation'],
        href: '/recombinant-albumin',
        quickSpecs: {
            purity: '≥99%',
            storage: '2-8°C',
            formulation: 'Liquid'
        }
    },
    {
        id: '10',
        slug: 'trypsin',
        name: 'Trypsin (USP-Grade)',
        category: 'reagent',
        grade: 'USP Grade',
        tagline: 'Recombinant trypsin for controlled proteolysis and cell culture workflows.',
        shortDescription: 'USP-grade recombinant trypsin.',
        description: 'USP-grade recombinant trypsin suitable for bioprocessing and manufacturing workflows requiring controlled enzymatic activity.',
        longDescription: 'Setting an elevated standard in bioprocessing, our USP-grade recombinant Trypsin replaces traditional animal-derived sources, bringing absolute uniformity and zero viral contamination risks. Designed precisely for managed proteolysis operations, cell dissociation mechanics, and complex biological manufacturing steps, it guarantees distinguished specific activity and pure compliance with stringent pharmacopeia regulations.',
        image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=2670&auto=format&fit=crop',
        aof: true,
        casNumber: '9002-07-7',
        keyFeatures: ['Recombinant source', 'USP-aligned quality', 'High activity and purity', 'Free of contaminating proteases'],
        applications: ['Cell Culture', 'Protein Processing', 'Peptide Mapping', 'Cell Therapy'],
        href: '/trypsin',
        quickSpecs: {
            activity: 'High Specific Activity',
            storage: '-20°C',
            formulation: 'Lyophilized'
        }
    },
    {
        id: '11',
        slug: 'carboxypeptidase-b',
        name: 'Carboxypeptidase B',
        category: 'reagent',
        grade: 'Bioprocessing Grade',
        tagline: 'Recombinant serine protease for downstream processing optimization.',
        shortDescription: 'Recombinant Carboxypeptidase B.',
        description: 'Carboxypeptidase B supports removal of C-terminal basic residues in biologics processing and analytical workflows.',
        longDescription: 'A meticulously expressed recombinant serine protease, Carboxypeptidase B selectively targets the rapid and exact cleavage of basic amino acid terminals (Arginine, Lysine). It is globally deployed across high-yielding industrial purification processes—most notably in recombinant insulin processing—where uncompromised enzyme specificity and scalable, consistent downstream capabilities are non-negotiable.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
        casNumber: '9025-24-5',
        keyFeatures: ['High specificity', 'Process-ready format', 'Consistent enzyme performance', 'Stable formulation'],
        applications: ['Bioprocessing', 'Protein Characterization', 'Insulin Manufacturing'],
        href: '/carboxypeptidase-b',
        quickSpecs: {
            purity: 'High Specificity',
            storage: '-20°C',
            formulation: 'Stability Buffer'
        }
    },
    {
        id: '12',
        slug: 'streptavidin',
        name: 'Streptavidin',
        category: 'reagent',
        grade: 'Research Grade',
        tagline: 'High-affinity biotin-binding protein for diagnostics and assay development.',
        shortDescription: 'High-affinity streptavidin reagent.',
        description: 'Streptavidin with strong biotin affinity for immunoassays, molecular diagnostics, and affinity purification workflows.',
        longDescription: 'Streptavidin forms one of the strongest non-covalent interactions known in biological systems due to its unparalleled affinity for biotin. Extensively purified and rigorously assayed, this homotetrameric protein exhibits negligible nonspecific binding, enabling robust and reproducible performance in sensitive molecular diagnostics, advanced immunoassays, and precision affinity-purification techniques.',
        image: 'https://images.unsplash.com/photo-1628595351029-c2bf1d4e127d?q=80&w=2670&auto=format&fit=crop',
        keyFeatures: ['Strong biotin affinity', 'High purity', 'Assay-ready consistency', 'Low non-specific binding'],
        applications: ['Diagnostics', 'Molecular Biology', 'Affinity Purification', 'Microarray Development'],
        href: '/streptavidin',
        quickSpecs: {
            purity: 'Lyophilized Powder',
            storage: '-20°C',
            formulation: 'Carrier-free'
        }
    },
    {
        id: '13',
        slug: 'pngase-f-flash',
        name: 'PNGase F Flash™',
        category: 'reagent',
        grade: 'Research Grade',
        tagline: 'Rapid N-glycan removal in high-throughput glycoprotein workflows.',
        shortDescription: 'High-activity rapid deglycosylation formulation.',
        description: 'PNGase F Flash offers accelerated deglycosylation performance for antibody and glycoprotein characterization workflows.',
        longDescription: 'Designed natively for the high-velocity demands of modern biotherapeutics labs, PNGase F Flash™ compresses processing boundaries resulting in instantaneous enzymatic reaction profiles. It is formulated to perform rapid, complete N-linked glycan removal typically within minutes, securing unparalleled operational bandwidth in analytical pipelines—specifically targeted at comprehensive antibody characterization.',
        image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313db?q=80&w=2670&auto=format&fit=crop',
        casNumber: '83534-39-8',
        keyFeatures: ['Fast workflow turnaround (minutes instead of hours)', 'High activity', 'Compatible with downstream analytical pipelines', 'Optimized buffer system'],
        applications: ['Glycan Profiling', 'Antibody Characterization', 'High-throughput Screening'],
        href: '/pngase-f-flash',
        quickSpecs: {
            activity: 'Flash Reaction',
            storage: '-20°C',
            formulation: 'Proprietary Buffer'
        },
        workflow: ['Protein Prep', 'Flash Enzyme Addition', 'Rapid Incubation (10m)', 'Direct Analytics Injection']
    },
    {
        id: '14',
        slug: 'enterokinase',
        name: 'Enterokinase',
        category: 'reagent',
        grade: 'Research Grade',
        tagline: 'Sequence-specific protease for fusion-tag cleavage in recombinant proteins.',
        shortDescription: 'Sequence-specific tag cleavage enzyme.',
        description: 'Enterokinase enables controlled cleavage of fusion tags for downstream purification and characterization workflows.',
        longDescription: 'A remarkably precise biochemical tool, Enterokinase perfectly recognizes and cleaves downstream of the Asp-Asp-Asp-Asp-Lys sequence marker. Functioning as a supreme sequence-specific protease, it guarantees minimal extraneous digestion, resulting in pure native target proteins. Essential for removing affinity fusion tags, its bioprocess-tolerant properties cater dynamically to stringent laboratory upscaling tasks.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2670&auto=format&fit=crop',
        keyFeatures: ['High sequence specificity', 'Efficient cleavage performance', 'Bioprocess compatible', 'Active in diverse buffer conditions'],
        applications: ['Protein Purification', 'Recombinant Protein Workflows', 'Fusion Tag Removal'],
        href: '/enterokinase',
        quickSpecs: {
            purity: 'High Specificity',
            storage: '-20°C',
            formulation: 'Glycerol-free possible'
        }
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}
