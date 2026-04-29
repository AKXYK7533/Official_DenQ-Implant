// ═══════════════════════════════════════════════════════════════════
//  PACKING DATA  —  packaging info per product group
// ═══════════════════════════════════════════════════════════════════

const PACKING_SUBMENU = [
    { label: '🔩 DenQ Fixture',  key: 'fixture'   },
    { label: '🦷 Abutments',     key: 'abutments' },
    { label: '🧰 Surgical KIT',  key: 'surgical'  },
];

const PACKING_DETAIL = {
    fixture: {
        image:       'Pack_Fixture.jpeg',       // ← update to your actual filename
        title:       'DenQ Fixture Packaging',
        subtitle:    'Individual Sterile Blister Pack',
        description: 'DenQ fixtures packed sealed 5 fixtures per pack. .',
    },
    abutments: {
        image:       'Pack_Abutment.JPG',      // ← update to your actual filename
        title:       'Abutment Packaging',
        subtitle:    'Individual Foil Sealed Pouch',
        description: 'DenQ abutments packing appearance .',
    },
    surgical: {
        image:       'Pack_Surgical.jpeg',      // ← update to your actual filename
        title:       'Surgical KIT Packaging',
        subtitle:    'Complete Sterilisable Cassette',
        description: 'The DenQ Surgical KIT Box. ',
    },
};
