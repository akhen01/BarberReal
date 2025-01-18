/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
<<<<<<< HEAD
        custom: ['CustomFont', ''], 
=======
        reviolaRegular: ['Regular'], 
        neonBold: ['Bold'], 
>>>>>>> ee64039 (reupdated)
      }, 
      scrollSnapType: { 
        none: 'none', 
        x: 'x', 
        y: 'y', 
        both: 'both', }, 
        scrollSnapAlign: { 
          start: 'start', 
          end: 'end', 
          center: 'center', 
          none: 'none', 
        }, 
      }, 
    }, 
    variants: { 
      scrollSnapType: ['responsive'], 
      scrollSnapAlign: ['responsive'], 
    },
  plugins: [],
}

