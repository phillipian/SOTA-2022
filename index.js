// required for graphs to look okay -- specify at minimum a slug and array of colors
sota.sotaConfig.sections = [
{"slug": "sotajs", "name": "sota.js", "colors": sota.colorInterpolate("#222222")},
{"slug": "politics", "name": "Politics & Worldview", "blurb": "test blurb", "colors":
sota.colorInterpolate("#660066", "#dac7d8", 5, true)},
{"slug": "wellness", "name": "Health & Wellness", "colors": sota.colorInterpolate("#6cb643", "#cae3cb", 5, true)},
{"slug": "discipline", "name": "Discipline", "colors": sota.colorInterpolate("#b43432", "#f0d1ca", 5, true)}
]

// required for graphs to look okay -- call functions to inject color, style CSS based on sotaConfig
sota.setColors(sota.sotaConfig);
sota.setStyles(sota.sotaConfig);

// required only if you want to generate default layout containers. Can also specify directly through HTML and use
selectors for graphs
sota.createSections(sota.sotaConfig);

// optional, render navbar based on sotaConfig.sections
// make sure you call createSections first!
sota.sotaNavbar(sota.sotaConfig, "sota.js Demo", "szlogo.png", false, "https://www.samsonzhang.com/");
