const buildConfig = () => {

  const name = process.env.NEXT_PUBLIC_DISPLAY_NAME || "Display Name.";
  const copyright = process.env.NEXT_PUBLIC_COPYRIGHT || "Copyright";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Meta title";
  const defaultDescription = process.env.NEXT_PUBLIC_DESCRIPTION || "Description";

  return {
    sitename: process.env.NEXT_PUBLIC_SITE_NAME || "Site Name",
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "123-000-0000",
    emailAddress:
      process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "info@luluwebstudio.com",

    links: {
      linkedin: "https://www.linkedin.com/company/lulu-web-studio/",
      instagram: "/"
    },
    name: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
  };
};

export const config = buildConfig();
