// Edit these values to personalize the site.
export const BIRTHDAY_CONFIG = {
  name: "Yogesh",
  // ISO date of the upcoming birthday (YYYY-MM-DDTHH:mm:ss)
  birthday: "2026-07-31T00:00:00",
  // Year of birth for age calculations
  birthYear: 2001,
  tagline: "Lecturer • AI Researcher • Building the future with LLMs, RAG & Vision.",
  socials: {
    github: "https://github.com/techyogeshchauhan",
    linkedin: "https://linkedin.com/in/yogesh-chauhan",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    portfolio: "https://example.com",
    whatsapp: "https://wa.me/918057743479",
    email: "mailto:yogesh.chauhan.ai@gmail.com",
  },
  adminPassword: "birthday2026",
};

export function getBirthdayDate() {
  return new Date(BIRTHDAY_CONFIG.birthday);
}