export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/app.js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  eleventyConfig.addCollection("empieza", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/empieza-por-aqui/*.{html,md}")
      .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  });

  eleventyConfig.addCollection("herramientas", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/herramientas/*.{html,md}")
      .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  });

  eleventyConfig.addCollection("articulos", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/articulos/*.{html,md}")
      .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  });

  // Filtro para calcular el tiempo de lectura
  eleventyConfig.addFilter("readingTime", (content) => {
    const wordsPerMinute = 200; // Velocidad promedio
    const text = content.replace(/<[^>]*>/g, ""); // Limpiar HTML si lo hay
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min de lectura`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
