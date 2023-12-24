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
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1124px", // => @media (min-width: 1280px) { ... }
      "2xl": "1280px", // => @media (min-width: 1280px) { ... }
      "3xl": "1440px", // => @media (min-width: 1280px) { ... }
      "4xl": "1620px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "8rem",
        "4xl": "10rem",
      },
    },
  },
};
