// return {
//     title: '',
//     url: '',
//     anchorText: '',
//     techStack: '',

//     description: "",

//     images: [],
//     status: project_card_es.status_dev,
// };

import { project_card_es } from "./itl_card_en_es"
import { img_crypto, img_kvwims, img_landing1, img_landing2, img_msedge } from "./index_static_project_imgages"

const kvwims = {
    title: 'KVWIMS',
    url: 'https://kvwims.com/',
    anchorText: 'www.kvwims.com',
    techStack: 'Django Python, scikit-learn, Oracle MySQL, Docker, Azure Cloud, Bootstrap, HTML,CSS,JS',

    description: "Lider del equipo de desarrolo de una plataforma web de gestión de inventario y almacenes para tiendas de conveniencia, integrando minería y visualización de datos para obtener insights estratégicos. Implementé control de acceso configurable, pronóstico de ventas, generación de ofertas dinámicas y cálculo de KPIs clave. Además diseñé un editor 2D que optimiza la reorganización estratégica de productos.",

    images: img_kvwims,
    status: project_card_es.status_arc,
}

const ms_edge_bf = {
    title: 'MS-Edge Better Favorites',
    url: 'https://github.com/gismael-gzn/msedge-better-favorites-page',
    anchorText: 'Ver en GitHub',
    techStack: 'ReactJS, JSX, tailwindcss, yarn, vite, JavaScript Browser Apis',

    description: "Actualmente en desarrollo de una extensión web que permite a los usuarios de navegadores gestionar sus favoritos de manera visual e intuitiva, optimizando la organización y mejorando significativamente la experiencia de navegación.",

    images: img_msedge,
    status: project_card_es.status_dev,
}

const crypto_course =  {
    title: 'Cryptography Course - ESCOM',
    url: 'https://github.com/gismael-gzn/Cryptography---Escom-IPN.-Spring-Summer-2023',
    anchorText: 'Ver en GitHub',
    techStack: 'Python, Fernet, PyQt, Hazmat, GNU GPG, Java, Servlets, JSP, Tomcat',

    description: "Desarrollé aplicaciones criptográficas con interfaz gráfica de usuario en Python, e interfaz web con Java, aplicando algoritmos avanzados para ofrecer servicios robustos de seguridad informática. Implementé un sistema de autenticación seguro (login) y recuperación de contraseña, siguiendo las mejores prácticas, utilizando algoritmos de hash para proteger las credenciales de los usuarios. Apliqué confidencialidad mediante AES-128, integridad con SHA256 y SHA512, no repudio utilizando RSA combinado con SHA, e intercambio seguro de claves a través de Diffie-Hellman de 2048 bits.",

    images: img_crypto,
    status: project_card_es.status_arc,    
}

const kde_plasma = {
    title: 'KDE Plasma automatic colorscheme switcher',
    url: 'https://github.com/gismael-gzn/KDE_AutomaticColorSwitcher',
    anchorText: 'Ver en GitHub',
    techStack: 'Linux SystemD, Bash Scripting',

    description: "Contribuí a la comunidad de código abierto de KDE desarrollando un script para el entorno de escritorio Linux KDE que mejora la personalización del sistema. Automatiza el cambio entre temas oscuros y claros en horarios predeterminados mediante un daemon de systemd y scripts automatizados, optimizando la experiencia visual según las preferencias individuales de los usuarios.",

    images: [],
    status: project_card_es.status_man
}

export const batch_relevant_es = {
    title: 'Proyectos Relevantes',
    projects: [
        kvwims, ms_edge_bf, crypto_course, kde_plasma,
    ]
}


const grupo_logaviva = {
    title: 'Página de aterrizaje 1',
    url: 'https://www.grupodeasesorescontablesylegales.com/',
    anchorText: 'www.grupodeasesorescontablesylegales.com',
    techStack: 'HTML,CSS,JS, ssh, Linux Fedora Server, bash, Apache WebServer',

    description: "Página de aterrizaje para un despacho de asesores contables y legales. He configurado además todos los ajustes del servidor, desde sus usuarios, permisos, claves ssh para acceder, hasta los certificados ssl de las páginas mostradas, esto mediante la terminal de comandos con Bash en Linux",

    images: img_landing1,
    status: project_card_es.status_man,
}

const psicologa_mexico = {
    title: 'Página de aterrizaje 2',
    url: 'https://psicologacd.mx/',
    anchorText: 'www.psicologacd.mx',
    techStack: 'HTML,CSS,JS, ssh, Linux Fedora Server, bash, Apache WebServer',

    description: "Página de aterrizaje para una profesional de la salud mental. He configurado además todos los ajustes del servidor, desde sus usuarios, permisos, claves ssh para acceder, hasta los certificados ssl de las páginas mostradas, esto mediante la terminal de comandos con Bash en Linux",

    images: img_landing2,
    status: project_card_es.status_man,
}

export const batch_freelance_es = {
    title: 'Algunos de mis proyectos como Freelance',
    projects: [grupo_logaviva, psicologa_mexico]
}
