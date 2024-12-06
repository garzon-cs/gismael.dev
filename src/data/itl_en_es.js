import { batch_freelance_en, batch_relevant_en } from "./projects_data_en";
import { batch_freelance_es, batch_relevant_es } from "./projects_data_es";

// language selector component needs to know available langs
// we could invent those, but we better centralize all itl related settings and constants here
export const languageOptionsList = ['en', 'es'];

// navigation bar strings need to know these
const nav_en = {
    portfolio: 'Portfolio',
    confLang: 'Configure Language:',
}

const nav_es = {
    portfolio: 'Portafolio',
    confLang: 'Configurar Idioma:',
}

// footer translations
const year = new Date().getFullYear();
const footer_en = {
    rights: `© ${year} All rights reserved.`,
    disclaimer_js: 'This page was created and internationalized using ReactJS',
}

const footer_es = {
    rights: `© ${year} Todos los derechos reservados.`,
    disclaimer_js: 'Esta página fue creada y traducida utilizando ReactJS',
}

// translations for the portfolio page
const portfolio_en = {
    role: 'Backend Engineer',
    wait: 'This is work in progress. More things to come soon.'
}

const portfolio_es = {
    role: 'Ingeniero Backend',
    wait: 'Este es trabajo en progreso. Más cosas por venir pronto.'
}

import { project_card_en, project_card_es } from "./itl_card_en_es";

// gallery component translations
const gallery_en = {
    show: 'Show gallery',
    hide: 'Hide gallery'
}

// gallery component translations
const gallery_es = {
    show: 'Mostrar galería',
    hide: 'Ocultar galería'
}

// these (at the moment 2 objects should be the central source of international strings)
export const Strings_en = {
    nav: nav_en,
    footer: footer_en,
    page_portfolio: portfolio_en,
    project_card: project_card_en,
    gallery: gallery_en,

    batch_relevant: batch_relevant_en,
    batch_freelance: batch_freelance_en,
}

export const Strings_es = {
    nav: nav_es,
    footer: footer_es,
    page_portfolio: portfolio_es,
    project_card: project_card_es,
    gallery: gallery_es,

    batch_relevant: batch_relevant_es,
    batch_freelance: batch_freelance_es,
}
