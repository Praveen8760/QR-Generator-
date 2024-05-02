/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
    
      fontSize:{
        'header':'80px',
        'header-sm':'50px',
        'icon':'64px',
        'sub-header':'24px',
        'sub-header-sm':'20px',
        'normal':'60px',
        'normal-sm':'30px'
      },
      backgroundColor:{
        'sec_1':'#F7F7F7'
      },
      dropShadow:{
        'nav_bar':'0px 5px 4px #000000 5%'
      },
      borderRadius:{
        'btn':'40px'
      },
      width:{
        '100':'500px'
      },
      height:{
        '100':'500px'
      }
    },
  },
  plugins: [],
}

