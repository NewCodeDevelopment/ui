export type Contact = {
  contact: {
    email: {
      href: string;
      text: string;
    };
    phone: {
      href: string;
      text: string;
    };
  };
  socials: {
    name: string;
    url: string;
  }[];
};
