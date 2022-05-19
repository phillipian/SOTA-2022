// // required for graphs to look okay -- specify at minimum a slug and array of colors
// sota.sotaConfig.sections = [
//     { "slug": "sotajs", "name": "sota.js", "colors": sota.colorInterpolate("#222222") },
//     {
//         "slug": "politics", "name": "Politics & Worldview", "blurb": "test blurb", "colors":
//             sota.colorInterpolate("#660066", "#dac7d8", 5, true)
//     },
//     { "slug": "wellness", "name": "Health & Wellness", "colors": sota.colorInterpolate("#6cb643", "#cae3cb", 5, true) },
//     { "slug": "discipline", "name": "Discipline", "colors": sota.colorInterpolate("#b43432", "#f0d1ca", 5, true) }
// ]

// // required for graphs to look okay -- call functions to inject color, style CSS based on sotaConfig
// sota.setColors(sota.sotaConfig);
// sota.setStyles(sota.sotaConfig);

// // required only if you want to generate default layout containers. Can also specify directly through HTML and use
// // selectors for graphs
// sota.createSections(sota.sotaConfig);

// // optional, render navbar based on sotaConfig.sections
// // make sure you call createSections first!
// sota.sotaNavbar(sota.sotaConfig, "Claire");


// required for graphs to look okay -- specify at minimum a slug and array of colors
sota.sotaConfig.sections = [
    {"slug": "general", "name": "General", "colors": ["#235085","#1065a1","#0b88c0","#22a7d3","#4ac2e5","#8dd1e9","#c6e6f3","#e3f4fb"]},
    {"slug": "politics", "name": "Politics", "colors": ["#2C3278", "#5D5797", "#7D78AD", "#948EB9", "#A8A3C6", "#BFBDD5", "#ACA0C0", "#DFDBE7"],
      "blurb": "POLITICS BLUIRB!!!! "
    },
    {"slug": "wellness", "name": "Wellness", "colors": ["#69B645", "#99CB89", "#98C970", "#B1D281", "#CEDFA6","#E3EFCE", "#BAE5AE"],
    "blurb": "WELLNESS BLUBL!! "
  },
]

// optional styling configuration
sota.sotaConfig.numberFont = "DM Sans"; // optional -- defaults to Montserrat
sota.sotaConfig.labelFont = "Crimson Text"; // optional -- defaults to Lora

// required for graphs to look okay -- call functions to inject color, style CSS based on sotaConfig
sota.setColors(sota.sotaConfig);
sota.setStyles(sota.sotaConfig);

// required only if you want to generate default layout containers. Can also specify directly through HTML and use selectors for graphs
sota.createSections(sota.sotaConfig);

// optional, render navbar based on sotaConfig.sections
// make sure you call createSections first!
sota.sotaNavbar(sota.sotaConfig, "sota.js Demo", "szlogo.png", false, "https://www.samsonzhang.com/");

// render graphs inside window.onload so they will be able to find parent containers dynamically created above
window.onload = () => {

    sota.barChart({selector: "#graph-demo", dataFile: "data/demo", totalResp: 100});

    sota.pieChart({selector: "#graph-demo-pie", dataFile: "data/community"});

    sota.stackedBarChart({selector: "#graph-demo-stack", dataFile: "data/community-stacked", showLegend: false,
        labelStyle: "aboveBar", customColors: ["#574AE2", "#222A68", "#654597"]});

    sota.contentModule({section: "charts", title: "Content Module",
        subtitle: "This module was generated using sota.contentModule",
        content: `<p>Demo data from <a href='https://sota.phillipian.net/'>State of the Academy 2020</a>.
        See all code and data files in the <a href="https://github.com/wwsalmon/sota.js">GitHub repo</a>.
        </p>
    `});

    sota.barChart({section: "charts", dataFile: "data/gallery-class", title: "Bar Chart",
        subtitle: "What class are you in?"});

    sota.pieChart({section: "charts", dataFile: "data/community", title: "Pie Chart",
        subtitle: "Distribution of students by home community type"});

    sota.stackedBarChart({section: "charts", dataFile: "data/gallery-stacked", groupLabelStyle: "onBar",
        title: "Stacked Bar Chart", subtitle: "Perceived socioeconomic class by net income"})

    sota.columnChart({section: "charts", dataFile: "data/gallery-column", title: "Column Chart",
        subtitle: "Top 5 news sources", maxVal: 40});

    sota.stackedColumnChart({section: "charts", dataFile: "data/gallery-stackedCol", title: "Stacked Column Chart",
        subtitle: "Do you think attending Andover affects your chances of attending a selective college?"});

    sota.multiLineGraph({section: "charts", dataFile: "data/gallery-multiline", title: "Multi Line Graph",
        subtitle: "GPA x Gender Identity", maxVal: 30});

    sota.lineGraph({section: "charts", dataFile: "data/gallery-line", title: "Line Graph",
        subtitle: "Approval of sex education at Andover over time", inputIsPercentage: true});

    sota.bigNumber({section: "charts", number: "7.1 hours", title: "Big Number", subtitle: "Average amount of sleep"})

    sota.customColumnChart({section: "charts", title: "Custom Column Chart", subtitle: "Icon from FontAwesome",
        dataFile: "data/gallery-customCol", shapeFile: "shapes/atom", shapeHeight: 250})

    sota.customBarChart({section: "charts", title: "Custom Bar Chart", subtitle: "Icon from FontAwesome",
        dataFile: "data/gallery-customBar", shapeFile: "shapes/fish"})

    // after everything has loaded, use Masonry to fix up layout
    sota.sotaMasonry();
}