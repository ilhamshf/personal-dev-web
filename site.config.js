module.exports = {
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL &&
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) ||
    "https://ilhamshf.space",
  description:
    "Personal website of Ilham Shofa. A computer science student and a software engineer focused on the web platforms.",
};
