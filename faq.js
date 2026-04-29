// ═══════════════════════════════════════════════════════════════════
//  FAQ DATA  —  categories and Q&A pairs
//  To add a question: add { q: '...', a: '...' } to any category array
// ═══════════════════════════════════════════════════════════════════

const FAQ_CATEGORIES = [
    { label: '🦷 Dentist & Surgeon',      key: 'dentist'     },
    { label: '🤝 Distributor & Partner',  key: 'distributor' },
    { label: '📚 Student & Researcher',   key: 'student'     },
    { label: '❓ General Question',       key: 'general'     },
];

const FAQ_DATA = {

    dentist: [
        {
            q: 'Are DenQ implants compatible with other major prosthetic brands?',
            a: 'Yes, DenQ implants are compatible with Osstem and Dentium prosthetic components.',
        },
        {
            q: 'What is the surface treatment used on DenQ implants?',
            a: 'SLA: SandBlasted Large grit Acid Etched.',
        },
        {
            q: 'What is the recommended torque for implant placement?',
            a: '30–40 Ncm for final fixture placement.',
        },
        {
            q: 'Can I use DenQ implants for immediate loading protocols?',
            a: 'Not recommended.',
        },
        {
            q: 'What connection type does DenQ use?',
            a: 'Internal Hex 2.5 mm with a taper body design and platform switching.',
        },
    ],

    distributor: [
        {
            q: 'What countries does DenQ currently distribute to?',
            a: 'DenQ is active in the Middle East, and the CIS Region.',
        },
        {
            q: 'How do I become an official DenQ distributor?',
            a: 'Contact us via WhatsApp +82 10 8210-9792 Our team will assist you step by step.',
        },
        {
            q: 'What certifications does DenQ hold?',
            a: 'FDA 510(k) cleared, ISO 13485 certified, and MFDS (Korean FDA) approved.',
        },
        {
            q: 'Is there a minimum order quantity (MOQ)?',
            a: 'MOQ varies by product line. Please contact our sales team at biz@denq.kr for details.',
        },
        {
            q: 'Does DenQ provide marketing materials for distributors?',
            a: 'Yes — catalogs, brochures, company profile and digital assets are available. Contact biz@denq.kr.',
        },
    ],

    student: [
        {
            q: 'What material is used for DenQ fixtures?',
            a: 'Grade 4 Titanium with SLA surface treatment.',
        },
        {
            q: 'What does platform switching mean?',
            a: 'Platform switching uses a smaller-diameter abutment on a wider implant platform, reducing bone resorption around the implant neck.',
        },
        {
            q: ' Where can I find clinical case studies involving DenQ implants?',
            a: 'we do not have published case studies, but you can contact us at biz@denq.krfor more information.',
        },
        {
            q: 'Does DenQ host webinars or hands-on training workshops?',
            a: 'We are planning to host them in the near future.',
        },
    ],

    general: [
        {
            q: 'Where is DenQ headquartered?',
            a: 'DenQ Implant Co., Ltd is located in Busan, South Korea.',
        },
        {
            q: 'Do you have CE certification?',
            a: 'No, Currently DenQ does not have CE certification. We expect to obtain it in the near future.',
        },
        {
            q: 'What products does DenQ offer?',
            a: 'Implant fixtures, cement & screw retained, surgical kits, digital library, overdenture attachments, and endo instruments.',
        },
        {
            q: 'Does DenQ offer a product warranty?',
            a: 'Yes, we provide a 3-year warranty for implant.',
        },
    ],
};
