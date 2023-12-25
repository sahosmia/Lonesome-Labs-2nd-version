tailwind.config = {
  theme: {
    extend: {
      colors: {
        main: "#3A0CA3",
        secondary: "#4361EE",
      },

      backgroundImage: {
        "hero-pattern": "url('/img/hero-bg.png')",
      },
    },
    screens: {
      sm: "640px", 
      md: "768px", 
      lg: "1024px", 
      xl: "1124px", 
      "2xl": "1280px", 
      "3xl": "1366px", 
      "4xl": "1440px", 
      "5xl": "1536px", 
      "6xl": "1600px", 
      "7xl": "1720px",
      "8xl": "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "7rem",
        "4xl": "8rem",
        "5xl": "9rem",
        "6xl": "10rem",
        "7xl": "11rem",
        "8xl": "12rem",
      },
    },
  },
};
