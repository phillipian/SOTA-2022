sota.sotaConfig.sections = [
    {"slug": "general", "name": "General", "colors": ["#235085","#1065a1","#0b88c0","#22a7d3","#4ac2e5","#8dd1e9","#c6e6f3","#e3f4fb"]},
    {"slug": "politics", "name": "Politics", "colors": ["#2C3278", "#5D5797", "#7D78AD", "#948EB9", "#A8A3C6", "#BFBDD5", "#ACA0C0", "#DFDBE7"],
      "blurb": "POLITICS"
    },
    {"slug": "campus", "name": "Campus Culture", "colors": ["#762670", "#945E98", "#A77FAD", "#BC98B9", "#D9C6D8"],
      "blurb": "CAMPUS CULTURE"
    },
    {"slug": "school", "name": "School", "colors": ["#812F54", "#AA7281", "#BF97A0", "#BF97A0", "#DCC5C3"],
      "blurb" : "SCHOOL "
    },
    {"slug": "discipline", "name": "Discipline", "colors": ["#B53432", "#C74F50", "#D47173","#E4A8A6", "#F0D1CA"],
      "blurb": "DISCIPLINE"
    },
    {"slug": "sex", "name": "Sex", "colors": ["#D5127D", "#DF5694", "#E680A9", "#ECA8C1", "#F5BAD1", "#F8D3DD", "#fbe7ec"],
      "blurb": "SEX "
    },
    {"slug": "drugs", "name": "Drugs & Alcohol", "colors": ["#E77929", "#EFA05E", "#F3B572", "#F6CC99", "#FAE3C4"],
      "blurb": "DRUGS AND ALCOJHOL!!"
    },
    {"slug": "wellness", "name": "Wellness", "colors": ["#69B645", "#99CB89", "#98C970", "#B1D281", "#CEDFA6","#E3EFCE", "#BAE5AE"],
      "blurb": "WELLNESS!!! "
    },
    {"slug": "community", "name": "Community Diversity", "colors": ["#279680", "#29AD97", "#78C4B1", "#AEDCCA", "#C8E7DD"],
      "blurb": "COMMUNITY DIVERSITY BLURB "
    },
    {"slug": "senior", "name": "Senior Sota", "colors": ["#235085","#1065a1","#0b88c0","#22a7d3","#4ac2e5", "#7CB7D1", "#8dd1e9","#c6e6f3","#e3f4fb"]},
]

sota.setColors(sota.sotaConfig);
sota.setStyles(sota.sotaConfig);


// required only if you want to generate default layout containers. Can also specify directly through HTML and useselectors for graphs
sota.createSections(sota.sotaConfig);

// optional, render navbar based on sotaConfig.sections
// make sure you call createSections first!
sota.sotaNavbar(sota.sotaConfig, "", "assets/graphics/nameplate.png", false, "#intro");

// render graphs inside window.onload so they will be able to find parent containers dynamically created above
window.onload = () => {

    // sota.barChart({ selector: "#graph-demo", dataFile: "data/demo", totalResp: 100 });

    // sota.pieChart({ selector: "#graph-demo-pie", dataFile: "data/community" });

    // sota.stackedBarChart({
    //     selector: "#graph-demo-stack", dataFile: "data/community-stacked", showLegend: false,
    //     labelStyle: "aboveBar", customColors: ["#574AE2", "#222A68", "#654597"]
    // });

    // sota.contentModule({
    //     section: "charts", title: "Content Module",
    //     subtitle: "This module was generated using sota.contentModule",
    //     content: `<p>Demo data from <a href='https://sota.phillipian.net/'>State of the Academy 2020</a>.
    //     See all code and data files in the <a href="https://github.com/wwsalmon/sota.js">GitHub repo</a>.
    //     </p>
    // `});

    // sota.barChart({
    //     section: "charts", dataFile: "data/gallery-class", title: "Bar Chart",
    //     subtitle: "What class are you in?"
    // });

    // sota.pieChart({
    //     section: "charts", dataFile: "data/community", title: "Pie Chart",
    //     subtitle: "Distribution of students by home community type"
    // });

    // sota.stackedBarChart({
    //     section: "charts", dataFile: "data/gallery-stacked", groupLabelStyle: "onBar",
    //     title: "Stacked Bar Chart", subtitle: "Perceived socioeconomic class by net income"
    // })

    // sota.columnChart({
    //     section: "charts", dataFile: "data/gallery-column", title: "Column Chart",
    //     subtitle: "Top 5 news sources", maxVal: 40
    // });

    // sota.stackedColumnChart({
    //     section: "charts", dataFile: "data/gallery-stackedCol", title: "Stacked Column Chart",
    //     subtitle: "Do you think attending Andover affects your chances of attending a selective college?"
    // });

    // sota.multiLineGraph({
    //     section: "charts", dataFile: "data/gallery-multiline", title: "Multi Line Graph",
    //     subtitle: "GPA x Gender Identity", maxVal: 30
    // });

    // sota.lineGraph({
    //     section: "charts", dataFile: "data/gallery-line", title: "Line Graph",
    //     subtitle: "Approval of sex education at Andover over time", inputIsPercentage: true
    // });

    // sota.bigNumber({ section: "charts", number: "7.1 hours", title: "Big Number", subtitle: "Average amount of sleep" })

    // sota.customColumnChart({
    //     section: "charts", title: "Custom Column Chart", subtitle: "Icon from FontAwesome",
    //     dataFile: "data/gallery-customCol", shapeFile: "shapes/atom", shapeHeight: 250
    // })

    // sota.customBarChart({
    //     section: "charts", title: "Custom Bar Chart", subtitle: "Icon from FontAwesome",
    //     dataFile: "data/gallery-customBar", shapeFile: "shapes/fish"
    // })

    // ----- WELLNESS!!!

    sota.columnChart({
        section: "wellness",
        dataFile: "assets/data/wellness/44-sleep",
        displayPercentage: true,
        subtitle: "On average, how many hours of sleep do you get per night?",
        title: "sleep"
    });

    // after everything has loaded, use Masonry to fix up layout
    sota.sotaMasonry();
}

