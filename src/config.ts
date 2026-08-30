const buildConfig = () => {

  const name = process.env.NEXT_PUBLIC_DISPLAY_NAME || "Lulu Web Studio";
  const copyright = process.env.NEXT_PUBLIC_COPYRIGHT || "Copyright";

  return {
    sitename: process.env.NEXT_PUBLIC_SITE_NAME || "Site Name",
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "(215) 948-2236",
    emailAddress: "info@luluwebstudio.com",

    links: {
      linkedin: "https://www.linkedin.com/company/lulu-web-studio/",
      instagram: "/"
    },
    name: {
      name,
      copyright,
    },
  };
};

export const config = buildConfig();
