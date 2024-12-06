// return {
//     title: '',
//     url: '',
//     anchorText: '',
//     techStack: '',

//     description: "",

//     images: [],
//     status: project_card_en.status_dev,
// };

import { img_crypto, img_kvwims, img_landing1, img_landing2, img_msedge } from "./index_static_project_imgages"
import { project_card_en } from "./itl_card_en_es"

const kvwims = {
    title: 'KVWIMS',
    url: 'https://kvwims.com/',
    anchorText: 'www.kvwims.com',
    techStack: 'Django Python, scikit-learn, Oracle MySQL, Docker, Azure Cloud, Bootstrap, HTML,CSS,JS',

    description: "Team leader for the development of a web-based inventory and warehouse management platform for convenience stores, integrating data mining and visualization to gain strategic insights. Implemented configurable access control, sales forecasting, dynamic offer generation, and calculation of key KPIs. Additionally, I designed a 2D editor that optimizes the strategic reorganization of products.",

    images: img_kvwims,
    status: project_card_en.status_arc,
}

const ms_edge_bf = {
    title: 'MS-Edge Better Favorites',
    url: 'https://github.com/gismael-gzn/msedge-better-favorites-page',
    anchorText: 'View in GitHub',
    techStack: 'ReactJS, JSX, tailwindcss, yarn, vite, JavaScript Browser Apis',

    description: "Currently developing a web extension that enables browser users to manage their bookmarks in a visual and intuitive way, optimizing organization and significantly enhancing the browsing experience.",

    images: img_msedge,
    status: project_card_en.status_dev,
}

const crypto_course =  {
    title: 'Cryptography Course - ESCOM',
    url: 'https://github.com/gismael-gzn/Cryptography---Escom-IPN.-Spring-Summer-2023',
    anchorText: 'View in GitHub',
    techStack: 'Python, Fernet, PyQt, Hazmat, GNU GPG, Java, Servlets, JSP, Tomcat',

    description: "Developed cryptographic applications with graphical user interfaces in Python and web interfaces in Java, leveraging standard compliant algorithms to deliver robust cybersecurity services. Implemented a secure authentication system (login) and password recovery, adhering to best practices, using hash algorithms to protect user credentials. Applied confidentiality using AES-128, integrity with SHA256 and SHA512, non-repudiation using RSA combined with SHA, and secure key exchange through 2048-bit Diffie-Hellman.",

    images: img_crypto,
    status: project_card_en.status_arc,    
}

const kde_plasma = {
    title: 'KDE Plasma automatic colorscheme switcher',
    url: 'https://github.com/gismael-gzn/KDE_AutomaticColorSwitcher',
    anchorText: 'View in GitHub',
    techStack: 'Linux SystemD, Bash Scripting',

    description: "Contributed to the KDE open-source community by developing a script for the Linux KDE desktop environment to enhance system customization. The script automates switching between dark and light themes at predefined times using a systemd daemon and automated scripts, optimizing the visual experience based on individual user preferences.",

    images: [],
    status: project_card_en.status_man
}

export const batch_relevant_en = {
    title: 'Relevant Projects',
    projects: [
        kvwims, ms_edge_bf, crypto_course, kde_plasma,
    ]
}


const grupo_logaviva = {
    title: 'Landing Page 1',
    url: 'https://www.grupodeasesorescontablesylegales.com/',
    anchorText: 'www.grupodeasesorescontablesylegales.com',
    techStack: 'HTML,CSS,JS, ssh, Linux Fedora Server, bash, Apache WebServer',

    description: "Landing page for an accounting and legal advisory firm. Configured all the server settings, including users, permissions, SSH keys for access, and SSL certificates for the displayed pages, all done through the command terminal using Bash on Linux.",

    images: img_landing1,
    status: project_card_en.status_man,
}

const psicologa_mexico = {
    title: 'Landing Page 2',
    url: 'https://psicologacd.mx/',
    anchorText: 'www.psicologacd.mx',
    techStack: 'HTML,CSS,JS, ssh, Linux Fedora Server, bash, Apache WebServer',

    description: "Landing page for a mental health professional. Configured all the server settings, including users, permissions, SSH keys for access, and SSL certificates for the displayed pages, all done through the command terminal using Bash on Linux.",

    images: img_landing2,
    status: project_card_en.status_man,
}

export const batch_freelance_en = {
    title: 'Some of my Freelance Work',
    projects: [grupo_logaviva, psicologa_mexico]
}
