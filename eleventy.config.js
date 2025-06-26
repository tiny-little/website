import toml from "@iarna/toml";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("dist");
    eleventyConfig.addPassthroughCopy({ "src/favicon": "/" });

    eleventyConfig.addDataExtension("toml", (contents) => toml.parse(contents));
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};
