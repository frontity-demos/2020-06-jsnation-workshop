const settings = {
  name: "jsnation-frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "jsnation-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://app-5ec4037dc1ac18016c052959.closte.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
