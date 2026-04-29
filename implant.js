// ═══════════════════════════════════════════════════════════════════
//  IMPLANT DATA  —  menus, sub-items, and product details
// ═══════════════════════════════════════════════════════════════════

const IMPLANT_SUBMENU = [
    { label: '🔩 DenQ Fixture',     key: 'fixture'    },
    { label: '🦷 Cement Retained',  key: 'cement'     },
    { label: '🔧 Screw Retained',   key: 'screw'      },
    { label: '💻 Digital Library',  key: 'digital'    },
    { label: '🦷 Overdenture',      key: 'overdenture'},
    { label: '🧰 Surgical KIT',     key: 'surgical'   },
];

const CEMENT_ITEMS = [
    { label: 'Screw',      key: 'cement_screw'     },
    { label: 'Healing',    key: 'cement_healing'   },
    { label: 'Cement',     key: 'cement_cement'    },
    { label: 'Angled',     key: 'cement_angled'    },
    { label: 'Freemill',   key: 'cement_freemill'  },
    { label: 'CCM',        key: 'cement_ccm'       },
    { label: 'Temporary',  key: 'cement_temporary' },
    { label: 'Analog',     key: 'cement_analog'    },
    { label: 'Pick-up',    key: 'cement_pickup'    },
    { label: 'Transfer',   key: 'cement_transfer'  },
];

const SCREW_ITEMS = [
    { label: 'Straight',    key: 'screw_straight'   },
    { label: 'Healing',     key: 'screw_healing'    },
    { label: 'Angled',      key: 'screw_angled'     },
    { label: 'CCM',         key: 'screw_ccm'        },
    { label: 'Temporary',   key: 'screw_temporary'  },
    { label: 'Plastic',     key: 'screw_plastic'    },
    { label: 'Ti Cylinder', key: 'screw_ticylinder' },
    { label: 'Analog',      key: 'screw_analog'     },
    { label: 'Pick-up',     key: 'screw_pickup'     },
    { label: 'Transfer',    key: 'screw_transfer'   },
];

const DIGITAL_ITEMS = [
    { label: '📡 Scan Body',   key: 'digital_scanbody'  },
    { label: '🔬 Lab Analog',  key: 'digital_labanalog' },
    { label: '🔧 Ti-BASE',     key: 'digital_tibase'    },
];

const OVERDENTURE_ITEMS = [
    { label: '⚙️ Ball',    key: 'overdenture_ball'    },
    { label: '🔒 Locator', key: 'overdenture_locator' },
];

// ── Product detail data ────────────────────────────────────────────
//
//  HOW TO ADD A SIZE TABLE to any product:
//
//  sizeData: {
//      columns: ['Length', 'Product Code'],   ← column header labels
//      diameters: [
//          {
//              label: '3.5',                  ← shown as "Diameter ∅3.5"
//                                               set null for no diameter header
//              rows: [
//                  ['7.0',  'DSSDR37070S'],   ← [length/size, product code]
//                  ['8.5',  'DSSDR37085S'],
//                  ['10.0', 'DSSDR37100S'],
//              ]
//          },
//          // add more diameter objects for each diameter group
//      ]
//  },
//
//  Leave sizeData out (or set to null) to use the image fallback instead.
// ──────────────────────────────────────────────────────────────────

const PRODUCT_DETAIL = {

    // FIXTURE
    fixture: {
        image:     'SLA_Fixture.png',
        title:     'DenQ Sub SLA Fixture',
        subtitle:  'Premium Dental Implant Solution',
        details:   'Typically Emphasized Features',
        specs: [
            'Economical Design',
            'SLA Surface Treatment',
            'Titanium Grade 4',
            'Platform Switching',
            'Double Thread',
            'Cutting Edge',
            'Internal Hex 2.5',
            'Torque: 30-40 Ncm',
            'Packing Unit: Fixture + Cover Screw'
        ],
        sizeData: {
            columns: ['Length', 'Product Code'],
            diameters: [
                {
                    label: '3.5',
                    rows: [
                        ['7.0',  '-'           ],
                        ['8.5',  'DSSDR37085S' ],
                        ['10.0', 'DSSDR37100S' ],
                        ['11.5', 'DSSDR37115S' ],
                        ['13.0', 'DSSDR37130S' ],
                    ]
                },
                {
                    label: '4.0',
                    rows: [
                        ['7.0',  'DSSDR40070S' ],
                        ['8.5',  'DSSDR40085S' ],
                        ['10.0', 'DSSDR40100S' ],
                        ['11.5', 'DSSDR40115S' ],
                        ['13.0', 'DSSDR40130S' ],
                    ]
                },
                {
                    label: '4.5',
                    rows: [
                        ['7.0',  'DSSDR45070S' ],
                        ['8.5',  'DSSDR45085S' ],
                        ['10.0', 'DSSDR45100S' ],
                        ['11.5', 'DSSDR45115S' ],
                        ['13.0', 'DSSDR45130S' ],
                    ]
                },
                {
                    label: '5.0',
                    rows: [
                        ['7.0',  'DSSDR50070S' ],
                        ['8.5',  'DSSDR50085S' ],
                        ['10.0', 'DSSDR50100S' ],
                        ['11.5', 'DSSDR50115S' ],
                        ['13.0', 'DSSDR50130S' ],
                    ]
                },
            ]
        },
    },

    // CEMENT RETAINED
    cement_screw: {
        image: 'Screw.png', sizeImage: 'Cement_Screw_Size.png',
        title: 'Cement – Screw Abutment', subtitle: 'Cement-retained screw interface',
        details: 'Fixture Cover Screw',
        specs: ['Driver: Hex 1.2 Screw Driver', 'Torque: 5-8 Ncm'],
         sizeData: {
            columns: ['Fixture Platform', 'Product Code'],
            diameters: [
                {
                    label: '--',
                    rows: [
                        ['3.5',  'DSSCR35' ],
                        ['4.0, 4.5,5.0',  'DSSCR' ],
                    ]
                },
            ]
        },

    },
    cement_healing: {
        image: 'Healing Abutment.png', sizeImage: 'Healing_Size.png',
        title: 'Cement – Healing Abutment', subtitle: 'Soft tissue shaping abutment',
        details: 'DenQ Healing Abutment.',
        specs: ['Packing Unit: Abutment','Driver: Hex 1.2 Screw Driver', 'Torque: 10 Ncm'], 
        
        sizeData: {
            columns: ['G/H', 'Product Code'],
            diameters: [
                {
                    label: '4.0',
                    rows: [
                        ['3.0',  'DSHR403' ],
                        ['5.0',  'DSHR405' ],
                        ['7.0',  'DSHR407' ],
                    ]
                },
                {
                    label: '4.5',
                    rows: [
                        ['3.0',  'DSHR453' ],
                        ['5.0',  'DSHR455' ],
                        ['7.0',  'DSHR457' ],
                    ]
                },
                {
                    label: '5.0',
                    rows: [
                        ['3.0',  'DSHR503' ],
                        ['5.0',  'DSHR505' ],
                        ['7.0',  'DSHR507' ],
                    ]
                },
                {
                    label: '5.5',
                    rows: [
                        ['3.0',  'DSHR553' ],
                        ['5.0',  'DSHR555' ],
                        ['7.0',  'DSHR557' ],
                    ]
                },
            ]
        },
    },
    cement_cement: {
        image: 'Cement.png', sizeImage: 'Cement_Size.png',
        title: 'Cement Abutment', subtitle: 'Cement-retained restoration interface',
        details: 'Abutment Connetor',
        specs: ['Packing Unit: Abutment + Screw', 'Driver: Hex 1.2 Screw Driver', 'Torque: 30 Ncm'],

          sizeData: {
            columns: ['G/H', 'Product Code'],
            diameters: [
                {
                    label: '4.0',
                    rows: [
                        ['1.0',  'DSCR40107DS' ],
                        ['2.0',  'DSCR40207DS' ],
                        ['3.0',  'DSCR40307DS' ],
                        ['4.0',  'DSCR40407DS' ],
                    ]
                },
                {
                    label: '4.5',
                    rows: [
                        ['1.0',  'DSCR45107DS' ],
                        ['2.0',  'DSCR45207DS' ],
                        ['3.0',  'DSCR45307DS' ],
                        ['4.0',  'DSCR45407DS' ],
                    ]
                },
                {
                    label: '5.0',
                    rows: [
                        ['1.0',  'DSCR50107DS' ],
                        ['2.0',  'DSCR50207DS' ],
                        ['3.0',  'DSCR50307DS' ],
                        ['4.0',  'DSCR50407DS' ],
                    ]
                },
                {
                    label: '5.5',
                    rows: [
                        ['1.0',  'DSCR55107DS' ],
                        ['2.0',  'DSCR55207DS' ],
                        ['3.0',  'DSCR55307DS' ],
                        ['4.0',  'DSCR55407DS' ],
                    ]
                },
            ]
        },
    },
    cement_angled: {
        image: 'Angle15.png', sizeImage: 'Angled_Size.png',
        title: 'Cement – Angled Abutment', subtitle: 'Angular restorative alignment',
        details: 'Angled Abutment',
        specs: ['Angles: 15° · 25°', 
                'Packing Unit: Abutment + Screw', 
                'Driver: Hex 1.2 Screw Driver', 
                'Torque: 30 Ncm'
            ],

         sizeData: {
            columns: ['G/H', 'Product Code'],
            diameters: [
                {
                    label: '4.0',
                    rows: [
                        ['1.0',  'DSAR401015ADS' ],
                        ['2.0',  'DSAR402015ADS' ],
                        ['3.0',  'DSAR403015ADS' ],
                        ['4.0',  'DSAR404015ADS' ],
                    ]
                },
                {
                    label: '4.5',
                    rows: [
                        ['1.0',  'DSAR451015ADS' ],
                        ['2.0',  'DSAR452015ADS' ],
                        ['3.0',  'DSAR453015ADS' ],
                        ['4.0',  'DSAR454015ADS' ],
                    ]
                },
                {
                    label: '5.0',
                    rows: [
                        ['1.0',  'DSAR501015ADS' ],
                        ['2.0',  'DSAR502015ADS' ],
                        ['3.0',  'DSAR503015ADS' ],
                        ['4.0',  'DSAR504015ADS' ],
                    ]
                },
                {
                    label: '5.5',
                    rows: [
                        ['1.0',  'DSAR551015ADS' ],
                        ['2.0',  'DSAR552015ADS' ],
                        ['3.0',  'DSAR553015ADS' ],
                        ['4.0',  'DSAR554015ADS' ],
                    ]
                },
            ]
        },
    },
    cement_freemill: {
        image: 'Freemil.png', sizeImage: 'Freemill Abutment_D.png',
        title: 'Freemill Abutment', subtitle: 'Milling-ready titanium blank',
        details: 'Abutment Connector',
        specs:['Packing Unit: Abutment + Screw', 'Driver: Hex 1.2 Screw Driver', 'Torque: 30 Ncm'],

         sizeData: {
            columns: ['G/H', 'Product Code'],
            diameters: [
                {
                    label: '4.5',
                    rows: [
                        ['1.0',  'DSMR4510DS' ],
                        ['2.0',  'DSMR4520DS' ],
                        ['3.0',  'DSMR4530DS' ],
                    ]
                },
                {
                    label: '5.0',
                    rows: [
                        ['1.0',  'DSMR5010DS' ],
                        ['2.0',  'DSMR5020DS' ],
                        ['3.0',  'DSMR5030DS' ],
                    ]
                },
                {
                    label: '5.5',
                    rows: [
                        ['1.0',  'DSMR5510DS' ],
                        ['2.0',  'DSMR5520DS' ],
                        ['3.0',  'DSMR5530DS' ],
                    ]
                },
            ]
        },
    },
    cement_ccm: {
        image: 'ccm.png', sizeImage: 'ccm_Size.png',
        title: 'CCM Abutment', subtitle: 'Custom cast metal abutment',
        details: 'Abutment Connector.',
        specs: ['Packing Unit: Abutment + Screw', 'Driver: Hex 1.2 Screw Driver', 'Torque: 30 Ncm'],

         sizeData: {
            columns: ['Type', 'Product Code'],
            diameters: [
                {
                    label: '4.0',
                    rows: [
                        ['Hex',  'DCCA4010S' ],
                        ['Non-Hex',  'DCCAN4020S' ],
                    ]
                },
                {
                    label: '4.5',
                    rows: [
                        ['Hex',  'DCCA4510S' ],
                        ['Non-Hex',  'DCCAN4520S' ],
                    ]
                },
            ]
        },
    },
    cement_temporary: {
        image: 'temporary.png', sizeImage: 'Temporary_Size.png',
        title: 'Temporary Abutment (Cement)', subtitle: 'Provisional cement-retained interface',
        details: 'Abutment Connector',
        specs:'Packing Unit: Abutment + Screw, Driver: Hex 1.2 Screw Driver, Torque: 20 Ncm',
         sizeData: {
            columns: ['G/H', 'Product Code'],
            diameters: [
                {
                    label: '4.0',
                    rows: [
                        ['1.0',  'DST4010DS' ],
                    ]
                },
                {
                    label: '4.5',
                    rows: [
                        ['1.0',  'DST4510DS' ],
                    ]
                },
            ]
        },
    },
    cement_analog: {
        image: 'FixtureLabAnalog.png', sizeImage: 'FixtureLabAnalog_Size.png',
        title: 'Lab Analog (Cement)', subtitle: 'Lab replica for model fabrication',
        details: 'Fixture Level Lab Analog',
        specs: ['Packing Unit: Analog'],
    },
    cement_pickup: {
        image: 'pickup.png', sizeImage: 'pickup_Size.png',
        title: 'Pick-up Impression Coping (Cement)', subtitle: 'Open-tray impression transfer',
        details: 'Open-tray pick-up coping',
        specs: ['Packing Unit: Impression Coping + Guide pin', 'Driver: Hex 1.2 Screw Driver'],

        sizeData: {
            columns: ['Length', 'Product Code'],
            diameters: [
                {
                    label: '4.0',
                    rows: [
                        ['11',  'DPICH4011DS' ],
                        ['15',  'DPICH4015DS' ],
                    ]
                },
                {
                    label: '4.5',
                    rows: [
                        ['11',  'DPICH4511DS' ],
                        ['15',  'DPICH4515DS' ],
                    ]
                },
                {
                    label: '5.5',
                    rows: [
                        ['11',  'DPICH5511DS' ],
                        ['15',  'DPICH5515DS' ],
                    ]
                },
            ]
        },
        
    },
    cement_transfer: {
        image: 'transfer.png', sizeImage: 'Transfer_Size.png',
        title: 'Transfer Impression Coping (Cement)', subtitle: 'Closed-tray impression transfer',
        details: 'Closed-tray transfer coping',
        specs: ['Packing Unit: Impression Coping + Guide Pin', 'Driver: Hex 1.2 Screw Driver'],
          sizeData: {
            columns: ['Length', 'Product Code'],
            diameters: [
                {
                    label: '4.0',
                    rows: [
                        ['11',  'DTICH4011DS' ],
                        ['14',  'DTICH4014DS' ],
                    ]
                },
                {
                    label: '4.5',
                    rows: [
                        ['11',  'DTICH4511DS' ],
                        ['14',  'DTICH4514DS' ],
                    ]
                },
                {
                    label: '5.5',
                    rows: [
                        ['11',  'DTICH5511DS' ],
                        ['14',  'DTICH5514DS' ],
                    ]
                },
            ]
        },
    },

    // SCREW RETAINED
    screw_straight: {
        image: 'Straight.png', sizeImage: 'Screw_Straight_Size.png',
        title: 'Straight Abutment (Screw)', subtitle: 'Screw-retained straight abutment',
        details: 'Standard Straight Abutment',
        specs: ['Packing Unit: Abutment + Carrier','Driver: internal hex driver', 'Torque: 30 Ncm'],
        sizeData: {
            columns: ['G/H', 'Product Code'],
            diameters: [
                 {
                    label: '4.8',
                    rows: [
                        ['1.5',  'DSMR48152S' ],
                        ['2.5',  'DSMR48252S' ],
                        ['3.5',  'DSMR48352S' ],
                        ['4.5',  'DSMR48452S' ],
                    ]
                },
            ]
        },
        
    },
    screw_healing: {
        image: 'healingcap.png', sizeImage: 'Healingcap_Size.png',
        title: 'Healing Abutment (Screw)', subtitle: 'Soft tissue shaping abutment',
        details: 'Multiunit Healing Cap',
        specs: ['Packing Unit: Healing Cap','Driver: 1.2 Hex Screw Driver' ,'Torque: 20 Ncm'],
    },
    screw_angled: {
        image: 'MultiunitAngled.png', sizeImage: 'Angled_Size.png',
        title: 'Angled Abutment (Screw)', subtitle: 'Screw-retained angular alignment',
        details: 'Multiunit Angled Abutment',
        specs: ['Packing Unit: Abutment + Screw + Ti-Carrier','Torque: 30 Ncm','Angles: 17° · 30°', 'Driver: Hex 1.2 Screw Driver'],
        sizeData: {
            columns: ['G/H', 'Product Code'],
            diameters: [
                 {
                    label: '4.8 / 17°',
                    rows: [
                        ['2.5',  'DSMAR482517DS' ],
                        ['3.5',  'DSMAR483517DS' ],
                    ]
                },
                {
                    label: '4.8 / 30°',
                    rows: [
                        ['3.5',  'DSMAR483530DS' ],
                        ['4.5',  'DSMAR484530DS' ],
                    ]
                },
            ]
        },
    },
    screw_ccm: {
        image: 'multiccm.png', sizeImage: 'MultiCCM_Size.png',
        title: 'CCM Abutment (Screw)', subtitle: 'Cast metal screw abutment',
        details: 'Custom Cast Metal',
        specs: ['Packing Unit: Cylinder + Screw', 'Driver: 1.2 Hex Screw Driver', 'Torque: 20 Ncm'],
    },
    screw_temporary: {
        image: 'multitem.png', sizeImage: 'MultiTem_Size.png',
        title: 'Temporary Abutment (Screw)', subtitle: 'Provisional screw-retained interface',
        details: 'Provisional Abutment During Healing.',
        specs: ['Packing Unit: Cylinder + Screw', 'Driver: 1.2 Hex Screw Driver', 'Torque: 20 Ncm'],
    },
    screw_plastic: {
        image: 'Plastic.png', sizeImage: 'Plastic_Size.png',
        title: 'Plastic Abutment', //subtitle: 'Burn-out pattern for custom castings',
        details: 'DenQ Plastic Abutment',
        specs: ['Packing Unit: Cylinder + Screw', 'Driver: 1.2 Hex Screw Driver', 'Torque: 20 Ncm'],
    },
    screw_ticylinder: {
        image: 'Ticylinder.png', sizeImage: 'TiCylinder_Size.png',
        title: 'Ti Cylinder', subtitle: 'Titanium cylinder for CAD/CAM frameworks',
        details: 'Titanium Cylinder Abutment',
        specs: ['Packing Unit: Cylinder + Screw', 'Driver: 1.2 Hex Screw Driver', 'Torque: 20 Ncm'],
    },
    screw_analog: {
        image: 'MultipleLab Analog.png', sizeImage: 'MultiAnalog_Size.png',
        title: 'Lab Analog (Screw)', //subtitle: 'Lab replica for model fabrication',
        details: 'Abutment Level Lab Analog',
        specs: ['Packing Unit: Lab Analog' ],
    },
    screw_pickup: {
        image: 'multipickup.png', sizeImage: 'MultiPickup_Size.png',
        title: 'Pick-up Impression Coping (Screw)', subtitle: 'Open-tray impression transfer',
        details: 'Open-tray pick-up coping',
        specs: ['Packing Unit: Impression Coping + Guide Pin', 'Driver: Hex 1.2 Screw Driver'],
    },
    screw_transfer: {
        image: 'multitransfer.png', sizeImage: 'MultiTransfer_Size.png',
        title: 'Transfer Impression Coping (Screw)', subtitle: 'Closed-tray impression transfer',
        details: 'Closed-tray coping',
        specs: ['Packing Unit: Impression Coping + Guide Pin', 'Driver: Hex 1.2 Screw Driver'],
    },

    // DIGITAL LIBRARY
    digital_scanbody: {
        image: 'ScanBody.png', sizeImage: 'ScanBody_Size.png',
        title: 'Scan Body', subtitle: 'Digital scan reference for intraoral scanners',
        details: 'Digital Library',
        specs: ['Durable Surface', 'Shape(Half Straight, Half Taper)'],
    },
    digital_labanalog: {
        image: 'Analog.png', sizeImage: 'Analog_Size.png',
        title: 'Lab Analog', subtitle: 'Fixture replica for digital workflows',
        details: 'Digital Library',
        specs: ['Anti-rotation', 'Product Identification Line on Post ', 'Insertion Assuring Notch',],
    },
    digital_tibase: {
        image: 'Ti-base.png', sizeImage: 'TiBase_Size.png',
        title: 'Ti-BASE', subtitle: 'Titanium base for CAD/CAM restorations',
        details: 'Digital Library.',
        specs: ['Mini: 4.0mm','Regular: 4.5mm','Anti-rotation ridge', 'Strong Bonding', 'Tighter Retention in Top Portion','Compatible with Original Screws'],
    },

    // OVERDENTURE
    overdenture_ball: {
        image: 'ball.png', sizeImage: 'Ball_Size.png',
        title: 'Ball Attachment', subtitle: 'Overdenture ball-type retention',
        details: 'DenQ Overdenture Product',
         sizeData: {
            columns: ['G/H', 'Product Code'],
            diameters: [
                 {
                    label: 'Regular 4.0',
                    rows: [
                        ['1',  'DSOLA4010' ],
                        ['2',  'DSOLA4020' ],
                        ['3',  'DSOLA4030' ],
                        ['4',  'DSOLA4040' ],
                        ['5',  'DSOLA4050' ],
                        ['6',  'DSOLA4060' ],
                        ['7',  'DSOLA4070' ],
                    ]
                },
            ]
        },

    },
    overdenture_locator: {
        image: 'locator.png', sizeImage: 'Locator_Size.png',
        title: 'Locator Abutment', subtitle: 'Dual-retention overdenture attachment',
        details: 'DenQ Overdenture Product',
           sizeData: {
            columns: ['G/H', 'Product Code'],
            diameters: [
                 {
                    label: 'Regular 3.5',
                    rows: [
                        ['1',  'DSOBA3510' ],
                        ['2',  'DSOBA3520' ],
                        ['3',  'DSOBA3530' ],
                        ['4',  'DSOBA3540' ],
                        ['5',  'DSOBA3550' ],
                        ['6',  'DSOBA3560' ],
                    ]
                },
            ]
        },
    },

    // SURGICAL KIT
    surgical: {
        image: 'DenQTaper.jpeg', sizeImage: 'Surgical_Size.jpeg',
        title: 'DenQ Surgical KIT', subtitle: 'Complete Implant Placement System',
        details: 'DenQ Taper Surgical KIT',
        specs: [
            'Simple KIT: 13 drills',
            'Full KIT: 25 drills',
        ],
    },
};
