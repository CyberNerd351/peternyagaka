/**
 * images.ts
 * -----------------------------------------------------------------------------
 * Every image on the site is registered here so paths, alt text, dimensions and
 * object-position live in one place. Drop your real files at the same paths in
 * `public/` and the layout will not need to change.
 *
 * `objectPosition` controls what stays in frame when the image is cropped.
 */

export type ImageAsset = {
  src: string
  alt: string
  width: number
  height: number
  objectPosition?: string
  caption?: string
}

export const images = {
  profile: {
    src: '/images/profile.jpg',
    alt: 'Portrait of Peter Nyagaka',
    width: 1200,
    height: 1500,
    objectPosition: 'center 20%',
  },
  about: {
    src: '/images/about.jpg',
    alt: 'Peter Nyagaka working at his desk',
    width: 1200,
    height: 1500,
    objectPosition: 'center 30%',
  },
  favicon: {
    src: '/images/favicon.png',
    alt: 'Peter Nyagaka monogram',
    width: 512,
    height: 512,
  },
  og: {
    src: '/images/og-image.png',
    alt: 'Peter Nyagaka — Computer Scientist and Full-Stack Developer',
    width: 1200,
    height: 630,
  },
  gallery: {
    workspace: {
      src: '/images/gallery/workspace.jpg',
      alt: 'Peter Nyagaka’s workspace',
      width: 1200,
      height: 900,
      objectPosition: 'center center',
    },
    coding: {
      src: '/images/gallery/coding.jpg',
      alt: 'Peter Nyagaka writing code',
      width: 1200,
      height: 900,
      objectPosition: 'center center',
    },
  },
} satisfies Record<string, ImageAsset | Record<string, ImageAsset>>

export const projectImages = {
  cyberInventory: {
    src: '/images/projects/cyber-inventory.png',
    alt: 'Cyber Inventory System dashboard showing stock levels, sales and low-stock alerts',
    width: 1600,
    height: 1000,
    objectPosition: 'center top',
  },
  butcherySystem: {
    src: '/images/projects/butchery-system.png',
    alt: 'Butchery Management System point-of-sale screen with a weight-based sale and receipt',
    width: 1600,
    height: 1000,
    objectPosition: 'center top',
  },
  busaElection: {
    src: '/images/projects/busa-election.png',
    alt: 'BUSA Election System results page with candidate vote charts',
    width: 1600,
    height: 1000,
    objectPosition: 'center top',
  },
  grabHub: {
    src: '/images/projects/grab-hub.png',
    alt: 'Grab Hub product catalogue with food items, search bar and purchase buttons',
    width: 1600,
    height: 1000,
    objectPosition: 'center top',
  },
  richwrldFashion: {
    src: '/images/projects/richwrld-fashion.png',
    alt: 'Richwrld Fashion Collections catalogue grid of clothing items',
    width: 1600,
    height: 1000,
    objectPosition: 'center top',
  },
  dataScience: {
    src: '/images/projects/data-science.png',
    alt: 'Data science notebook showing exploratory analysis plots on a dataset',
    width: 1600,
    height: 1000,
    objectPosition: 'center top',
  },
} satisfies Record<string, ImageAsset>

export const experienceImages = {
  saiketSystems: {
    src: '/images/experience/saiket-systems.png',
    alt: 'Saiket Systems',
    width: 800,
    height: 800,
  },
  egertonUniversity: {
    src: '/images/experience/egerton-university.png',
    alt: 'Egerton University',
    width: 800,
    height: 800,
  },
  modcom: {
    src: '/images/experience/modcom.png',
    alt: 'Modcom Institute of Technology',
    width: 800,
    height: 800,
  },
} satisfies Record<string, ImageAsset>
