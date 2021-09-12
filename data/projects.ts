import { ProjectType } from "@/types/project";
const js = {
  name: "javascript",
};
const react = {
  name: "react",
};
const nextjs = {
  name: "nextjs",
  url: "https://nextjs.org/",
};
const chakra = {
  name: "chakra-ui",
  url: "https://chakra-ui.com/",
};
const typescript = {
  name: "typescript",
  url: "https://www.typescriptlang.org/",
};
const project: ProjectType[] = [
  {
    title: "Shorten URL - Hamsh",
    image: require("public/projects/ailabtelkom-next.jpg"),
    description:
      "Hamsh.me is a url shortener service provider website that can be freely customized according to the user's wishes.",
    createdAt: "2020-08-19",
    technology: [react, nextjs, typescript],
    url: "https://hamsh.me",
    source: "https://github.com/ilhamshf/shorturl-hamsh.me",
  }
];

export default project;
