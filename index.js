// const { tryGetPreviewData } = require("next/dist/server/api-utils");

sota.sotaConfig.sections = [
  {
    slug: "general",
    name: "General",
    colors: [
      "#235085",
      "#1065a1",
      "#0b88c0",
      "#22a7d3",
      "#4ac2e5",
      "#8dd1e9",
      "#c6e6f3",
      "#e3f4fb",
    ],
  },
  {
    slug: "politics",
    name: "Politics & Worldview",
    colors: [
      "#2C3278",
      "#5D5797",
      "#7D78AD",
      "#948EB9",
      "#A8A3C6",
      "#BFBDD5",
      "#ACA0C0",
      "#DFDBE7",
    ],
    blurb:
      "Though 98 percent of respondents said that they ​​support “the advocacy of women's rights on the ground of the equality of the sexes?” However, 70.4 percent of people said they consider themselves feminists. 77.8 percent of students think that people should always have the right to have an abortion, while 97.7 percent of people supported abortion in at least some circumstances. In addition, 31.6 percent of students believe that white people can experience reverse racism.",
  },
  {
    slug: "campus",
    name: "Campus Culture",
    colors: ["#762670", "#945E98", "#A77FAD", "#BC98B9", "#D9C6D8"],
    blurb:
      "Following Divest Andover’s requests, 80.5 percent of students believe that Andover should divest from fossil fuel companies. A 62 percent majority of students believe that the Shuman Office of Admissions does not accurately represent the school. Following the release of the Andover Anti-Racism Task Force (AATF) Report, 18.2 percent of students feel that Andover’s anti-racist work is sufficient. Last year, 28.3 percent of students believed the same.",
  },
  {
    slug: "school",
    name: "School",
    colors: ["#812F54", "#AA7281", "#BF97A0", "#BF97A0", "#DCC5C3"],
    blurb:
      "After a shift from online and hybrid schooling during the 2020-2021 school year to primarily in-person learning this year, Andover’s average G.P.A. for the 2021-2022 winter term was 5.35. Last year, the average G.P.A. was reported to be 5.50. This year, students reported spending 5.7 hours on average doing coursework each night. This was a 1.17 hour increase from last year’s average of 4.53. Of respondents, 14.6 percent of students believe that a “4” is a good grade.",
  },
  {
    slug: "discipline",
    name: "Discipline",
    colors: ["#B53432", "#C74F50", "#D47173", "#E4A8A6", "#F0D1CA"],
    blurb:
      "Andover’s Community Conduct Council (C.C.C.) and Disciplinary Committee (D.C.) are responsible for handling subsequent action when a student has committed a major offense. 45.7 percent of respondents reported cheating on tests, quizzes, or in-class assessments, and 11.4 percent of respondents reported plagiarizing. When correlated with income, 88.5 percent of respondents whose net family income is $35,000 or less believe the C.C.C. and D.C. systems favor students of privileged backgrounds compared to 59.5 percent of respondents whose income is $500,000 or more. 36.5 percent of respondents reported engaging in illegal room visitations, and 68.3 percent of respondents disagree with this year’s changes to room visitation policies.",
  },
  {
    slug: "sex",
    name: "Sex",
    colors: [
      "#D5127D",
      "#DF5694",
      "#E680A9",
      "#ECA8C1",
      "#F5BAD1",
      "#F8D3DD",
      "#fbe7ec",
    ],
    blurb:
      "At Andover, 76.6 percent of Juniors, 63.3 percent of Lowers, 48.3 percent of Uppers, and 38.2 percent of Seniors have never engaged in sexual activity—defined as digital, oral, vaginal, or anal sex. 72.3 percent of men feel comfortable telling friends that they masturbate, while only 40 percent of women feel the same way. 1.6 percent of respondents have contracted Sexually Transmitted Infections. ",
  },
  {
    slug: "drugs",
    name: "Drugs & Alcohol",
    colors: ["#E77929", "#EFA05E", "#F3B572", "#F6CC99", "#FAE3C4"],
    blurb:
      "Of Andover’s current student population, 55.3 percent of students have consumed alcohol recreationally. Of respondents, 38.4 percent of student leaders have consumed drugs or alcohol on campus, compared to 27.2 percent of non-student leaders. As of this year, XXX percent of students have used pharmaceutical drugs in the hopes of enhancing academic performance (i.e. “study drugs”) during their time at Andover.",
  },
  {
    slug: "wellness",
    name: "Wellness",
    colors: [
      "#69B645",
      "#99CB89",
      "#98C970",
      "#B1D281",
      "#CEDFA6",
      "#E3EFCE",
      "#BAE5AE",
    ],
    blurb:
      "Students at Andover on average sleep 6.65 hours a night. 66.9 percent of Andover students feel as though they have an adequate mental and/or emotional support system on campus, with 61.9 percent marking family as a part of this support system while 88.5 percent noted friends and 81.1 percent chose themselves as an aspect of said system. Only 38.0 percent indicated faculty and staff as a part of their support system. Of respondents, 76.3 percent generally consider themselves happy at Andover, while only 52.7 percent of students think that Andover students are happy.",
  },
  {
    slug: "diversity",
    name: "Campus Diversity",
    colors: ["#279680", "#29AD97", "#78C4B1", "#AEDCCA", "#C8E7DD"],
    blurb:
      "While 66.1 percent of day students think day students are able to integrate enough with boarding students at Andover this year, while just 37.8 percent agreed. On the basis of socioeconomic equity, 16.9 percent of respondents that feel like their capability of attaining a leadership position is affected by their socioeconomic status are of lower and lower middle class. 67.3 percent ​​of respondents who are black feel as though Andover’s faculty is lacking racial diversity.",
  },
  {
    slug: "senior",
    name: "Senior Sota",
    colors: [
      "#235085",
      "#1065a1",
      "#0b88c0",
      "#22a7d3",
      "#4ac2e5",
      "#7CB7D1",
      "#8dd1e9",
      "#c6e6f3",
      "#e3f4fb",
    ],
  },
];

sota.setColors(sota.sotaConfig);
sota.setStyles(sota.sotaConfig);

// required only if you want to generate default layout containers. Can also specify directly through HTML and useselectors for graphs
sota.createSections(sota.sotaConfig);

// optional, render navbar based on sotaConfig.sections
// make sure you call createSections first!
sota.sotaNavbar(
  sota.sotaConfig,
  "",
  "assets/graphics/nameplate.png",
  false,
  "#intro"
);

// ONLINE
window.onload = () => {
  
// -- GENERAL!! --- 

  sota.bigNumber({
    section: "general",
    number: "956",
    title: "",
    subtitle: "total students responded.",
  });

  sota.bigNumber({
    section: "general",
    number: "80.5%",
    title: "",
    subtitle: "of the student body participated in this survey.",
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/1-class",
    totalResp: 945,
    displayPercentage: true,
    title: "WHAT CLASS ARE YOU IN?",
    subtitle: "Editor’s note: four students did not select a class year.",
    // 2022!!
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/3-boarding",
    title: "Boarding vs. Day Students",
    subtitle: "In a normal year, what would you be enrolled as?",
    // 2022!!
  });

  sota.bigNumber({
    section: "general",
    number: "184",
    title: "",
    subtitle: "students responded from the class of 2025.",
  });
  sota.bigNumber({
    section: "general",
    number: "265",
    title: "",
    subtitle: "students responded from the class of 2024.",
  });
  sota.bigNumber({
    section: "general",
    number: "265",
    title: "",
    subtitle: "students responded from the class of 2023.",
  });

  sota.bigNumber({
    section: "general",
    number: "238",
    title: "",
    subtitle: "students responded from the class of 2022.",
  });
  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/12-sex",
    totalResp: 947,
    displayPercentage: true,
    title: "WHAT IS YOUR SEX?",
    // 2022!!
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/6-community_type",
    title: "Geographic Distribution",
    subtitle: "What type of community do you live in?",
    // 2022!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/13-gender",
    totalResp: 944,
    displayPercentage: true,
    title: "WHAT IS YOUR GENDER IDENTITY?",
    // 2022!!
  });

  // sota.pieChart({
  //   section: "general",
  //   dataFile: "assets/data/general/region",
  //   title: "Region",
  //   subtitle: "What region are you from?"
  // });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/14-pronoun",
    totalResp: 982,
    displayPercentage: true,
    title: "What are your preferred gender pronouns?",
    subtitle:
      "Editor’s note: Respondents were able to select multiple responses.",
    // 2022!!
  });

  sota.columnChart({
    section: "general",
    dataFile: "assets/data/general/17-race",
    totalResp: 1057,
    title: "What is your race?",
    subtitle:
      "Editor’s Note: Respondents were given the option to select more than one answer if applicable.",
    // 2022!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/18-ethnicity",
    totalResp: 1349,
    title: "What is your ethnicity?",
    subtitle:
      "Editor’s Note: Respondents were given the option to select more than one answer if applicable.",
    // 2022!!
  });

  // sota.stackedBarChart({
  //     section: "general",
  //     dataFile: "assets/data/general/sexual_orientationXgender",
  //     labelStyle: "onBar",
  //     groupLabelStyle: "onBar",
  //     showLegend: true,
  //     title: "GENDER IDENTITY AND SEXUAL ORIENTATION",
  //     subtitle: "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents."
  // })

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/15-sexual_orientation",
    totalResp: 1028,
    displayPercentage: true,
    title: "What is your sexual orientation?",
    // 2022!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/16-romantic_orientation",
    totalResp: 1001,
    displayPercentage: true,
    title: "What is your romantic orientation?",
    // 2022!!
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/21-income",
    totalResp: 945,
    sorted: false,
    title: "NET INCOME",
    subtitle: "What is your net family income?",
    // 2022!!
  });

  sota.columnChart({
    section: "general",
    dataFile: "assets/data/general/22-financial_aid",
    totalResp: 967,
    title: "Financial Aid",
    subtitle: "Are you on any form of financial aid?",
    // 2022!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/9-parents_college",
    totalResp: 946,
    displayPercentage: true,
    title: "HOW MANY OF YOUR PARENTS GRADUATED FROM COLLEGE?",
    // 2022!!
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/38-incarcerated",
    totalResp: 930,
    sorted: false,
    title: "INCARCERATION",
    subtitle: "Do you personally know someone who has been incarcerated?",
    // 2022!!
  });

  sota.bigNumber({
    section: "general",
    number: "35.0",
    title: "Legacy",
    subtitle:
      "of respondents have at least one immediate family member who is currently attending or has previously attended Andover.",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "general",
    dataFile: "assets/data/general/legacyXincome",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    showLegend: false,
    title: "Legacy and Income",
    subtitle:
      "Whether or not respondents had at least one immediate family member who was attending or has previously attended Andover, and their income.",
    // 2022!
  });

  sota.stackedBarChart({
    section: "general",
    dataFile: "assets/data/general/socioeconomicXincome0",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: false,
    title: "Percevied SEC & Income",
    subtitle: "Perceived socioeconmic class compared to income of respondents.",
    // 2022!!
  }); //better if 2 pie charts

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/23-varsity",
    sorted: false,
    title: "Varsity Athletics",
    subtitle: "Are you a varsity athlete?",
    // 2022!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/19-religion",
    totalResp: 1075,
    displayPercentage: true,
    title: "Religious Affiliation",
    subtitle:
      "With which religion/faith system do you currently identify, if any?",
  });

  // --- POLITICS!! --

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/24-political_affiliation",
    totalResp: 931,
    title: "Political Affiliation",
    subtitle: "What is your political affiliation?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/politicsXgender",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Political Affiliation & Gender Identity",
    subtitle:
      "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents",
      // 2022!!
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/27-censorship",
    title: "Self-Censorship",
    subtitle:
      "While at Andover, have you ever felt the need to censor yourself due to your political leaning?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/censorshipXpolitics",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    title: "Self-Censorship & Political Affiliation",
    subtitle:
      "Percentage of respondents who answered “Yes” to self-censorship question sorted by political affiliation.",
      // 2022!!
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/25-shifting_perspectives",
    title: "Shifting Perspectives",
    subtitle:
      "Have your political beliefs changed after the increase in media coverage of societal and systemic injustices this past year?",
    // 2022!!
  });

  sota.barChart({
    section: "politics",
    dataFile: "assets/data/politics/30-news_sources",
    totalResp: 926,
    displayPercentage: true,
    title: "Staying Informed",
    subtitle: "How do you get your news?",
    // 2022!!
  });

  sota.bigNumber({
    section: "politics",
    number: "70.4%",
    title: "Feminism",
    subtitle: "of respondents consider themselves feminists. ",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/35-feminist",
    labelStyle: "onBar",
    showLegend: true,
    title: "Feminism",
    subtitle: "Do you consider yourself a feminist?",
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/feministXgender",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    title: "Feminism By Gender Identity",
    subtitle:
      "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
      // 2022!!
  });

  // sota.columnChart({
  //     section: "politics",
  //     dataFile: "assets/data/politics/top_5_news_sources",
  //     totalResp: 930,
  //     title: "Top 5 News Sources"

  // });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/28-informed",
    sorted: false,
    title:
      "How informed do you believe you are about politics and/or current events?",
    // 2022!!
  });

  sota.columnChart({
    section: "politics",
    dataFile: "assets/data/politics/33-blm",
    title: "Black Lives Matter",
    subtitle: "Do you support the Black Lives Matter movement?",
    // 2022!!
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/31-affirmative_action",
    title: "Affirmative Action",
    subtitle: "Do you support affirmative action in academic institutions?",
    // 2022!!
  });

  sota.stackedColumnChart({
    section: "politics",
    dataFile: "assets/data/politics/affirmative_actionXclass",
    title: "Do you support affirmative action in academic institutions?",
    subtitle: "Percentage by Class Year",
    // 2022!!
  });

  sota.stackedColumnChart({
    section: "politics",
    dataFile: "assets/data/politics/affirmative_actionXrace",
    title: "Do you support affirmative action in academic institutions?",
    subtitle: "Percentage by Race",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/affirmativeXgender",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    title: "Affirmative Action Support By Gender Identity",
    subtitle:
      "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
      // 2022!!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/prison_reformXincarceration",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage:true,
    showLegend: true,
    title: "Prison System",
    subtitle:
      "Do you believe that the current prison system in the United States should be altered?",
      // 2022!!
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/36-immigration",
    title: "Immigration & Border Security",
    subtitle:
      "Do you believe that the United States should increase border security?",
    // 2022!!
  });

  sota.bigNumber({
    section: "politics",
    number: "31.6%",
    title: '"Reverse Racism"',
    subtitle:
      "of respondents believe that white people can experience racism, a decrease from 2021's 33.3%.",
    // 2022!!
  });

  sota.stackedColumnChart({
    section: "politics",
    dataFile: "assets/data/politics/32-reverse_racism",
    title: '"Reverse Racism"',
    subtitle:
      "Do you believe that white people can experience racism (colloquially known as reverse racism)? ",
      // 2022!!
  });

  sota.stackedColumnChart({
    section: "campus",
    dataFile: "assets/data/politics/reverse_racismXrace",
    showLegend: true,
    groupLabelStyle: "onBar",
    labelStyle: "onBar",
    title: "Reverse racism by race",
    subtitle: "Whether or not respondents believe that white people can experience racism (colloquially known as reverse racism) by race.",
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/37-abortion",
    labelStyle: "onBar",
    showLegend: true,
    title: "Abortion",
    subtitle:
      "Do you think that people should have the right to have an abortion?",
    // 2022!!
  });

  sota.stackedColumnChart({
    section: "politics",
    dataFile: "assets/data/politics/abortionXgender",
    title:
      "Do you think that people should have the right to have an abortion?",
    subtitle: "By Gender Identity",
    // 2022!!
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/41-drug_regulation",
    title: "Drug Regulation",
    subtitle: "Do you support the legalization of marijuana?",
    // 2022!!
  });

  sota.bigNumber({
    section: "politics",
    number: "72.0%",
    subtitle:
      "of respondents who know someone who has been incarcerated believe drug use should be decriminalized.",
    // 2022!!
  });

  sota.bigNumber({
    section: "politics",
    number: "5.91%",
    subtitle:
      "of respondents who do not know someone who has been incarcerated believe drug use should be decriminalized.",
    // 2022!!
  });

  sota.barChart({
    section: "politics",
    dataFile: "assets/data/politics/40-capital_punishment",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    title: "Capital Punishment",
    subtitle: "Do you support the death penalty?",
    // 2022!!
  });

  sota.barChart({
    section: "politics",
    dataFile: "assets/data/politics/42-firearms",
    title: "Firearm Ownership",
    subtitle: "Does your family own firearms?",
    // 2022!!
  });

  sota.bigNumber({
    section: "politics",
    number: "84.3%",
    title: "Gun Control",
    subtitle:
      "of respondents believe that gun control laws in the United States should be stricter.",
      // 2022!!
  });

  // --- CAMPUS CULTURE!! ----

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/combat_climate_change",
    showLegend: true,
    labelStyle: "onBar",
    title: "Climate change",
    subtitle:
      "Do you feel like Andover is doing enough to combat climate change?",
  });

  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/environmental_justice",
    title: "climate education",
    subtitle:
      "Have your classes covered climate change and other environmental justice issues?",
  });

  sota.barChart({
    section: "campus",
    dataFile: "assets/data/campus/carbon_footprint",
    displayPercentage: true,
    title: "carbon footprints",
    subtitle:
      "How often do you make conscious decisions to decrease your carbon footprint? A carbon footprint is “a measure of the carbon emissions of a particular individual, organization, or community” (Oxford Dictionary).",
  });

  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/environment_impact",
    title:
      "Do you feel that environmental issues (global warming, water, and air pollution, etc.) directly impact your life?",
  });

  // sota.pieChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/divestfossilfuel",
  //     title: "Do you believe that Andover should divest from fossil fuel companies? Divestment is the act of \"taking money away from where you have invested it\" (Oxford Dictionaries)."
  // });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/divestXpolitical",
    showLegend: true,
    groupLabelStyle: "onBar",
    labelStyle: "onBar",
    title: "Fossil Fuels",
    subtitle:
      "Do you believe that Andover should divest from fossil fuel companies?",
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/ideologicaldiversity",
    showLegend: true,
    labelStyle: "onBar",
    title: "ideological diversity",
    subtitle:
      "Do you think the school promotes ideological diversity in its selection of speakers?",
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/idea_diversityXpolitical",
    showLegend: true,
    groupLabelStyle: "onBar",
    labelStyle: "onBar",
    title: "ideological diversity by political affiliation",
    subtitle:
      "Do you think the school promotes ideological diversity in its selection of speakers?",
  });

  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/mlkday",
    showLegend: true,
    title: "MLK day",
    subtitle: "Do you feel that the MLK Day curriculum is adequate?",
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/antiracist",
    showLegend: true,
    labelStyle: "onBar",
    title: "Anti-racist work",
    subtitle: "Do you think Andover’s anti-racist work is sufficient?",
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/antiracismXrace",
    showLegend: true,
    groupLabelStyle: "onBar",
    labelStyle: "onBar",
    title: "anti-racist work by race",
    subtitle: "Do you think Andover’s anti-racist work is sufficient?",
  });

  sota.stackedColumnChart({
    section: "campus",
    dataFile: "assets/data/campus/antiracistXclass",
    showLegend: true,
    groupLabelStyle: "onBar",
    labelStyle: "onBar",
    title: "anti-racist work by class year",
    subtitle: "Do you think Andover’s anti-racist work is sufficient?",
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/antiracismtaskforce",
    showLegend: true,
    labelStyle: "onBar",
    title: "Anti-racism task force",
    subtitle:
      "Do you feel the creation of the Anti-Racism Task Force was a productive choice in making Andover a more racially equitable, inclusive, and just community?",
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/indigenousday",
    showLegend: true,
    labelStyle: "onBar",
    title:
      'Do you think that Andover should have a "day on" for Indigenous People\'s Day?',
  });

  // sota.stackedBarChart({
  //   section: "campus",
  //   dataFile: "assets/data/campus/glorifyathletics",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   title: "Do you think that Andover prioritizes athletics (compared to music, art, robotics, etc.)?",
  // });

  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/133-shuman",
    title:
      "Do you think that the Shuman Office of Admissions accurately presents the school?",
      // 2022!!
  });

  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/supportive",
    title: "Support from faculty",
    subtitle:
      "Do you think your teachers/other adults on campus have been sufficiently supportive or flexible during significant and possibly traumatic global events over the past year?",
  });

  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/virtual_support",
    title: "virtual support sessions",
    subtitle:
      "Did you attend any of the virtual support sessions that Andover provided after significant and possibly traumatic global events (community spaces with Sykes, the Brace Center, the Chaplaincy, trauma counseling, etc.) and if so, were they helpful?",
  });

  // sota.pieChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/combat_climate",
  //     title: "Do you feel like Andover is doing enough to combat climate change?"
  // });

  // sota.stackedBarChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/antiracismXclass",
  //     showLegend: true,
  //     groupLabelStyle: "onBar",
  //     labelStyle: "onBar",
  //     title: "Do you feel the creation of the Anti-Racism Task Force was a productive choice in making Andover a more racially equitable, inclusive, and just community? x class "
  //     });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/prioritizeXvarsity",
    showLegend: true,
    groupLabelStyle: "onBar",
    labelStyle: "onBar",
    title:
      "Do you think that Andover prioritizes athletics(compared to music, art, robotics, etc.)?",
  });

  // --- SCHOOL!! ---

  sota.bigNumber({
    section: "school",
    number: "5.7",
    title: "Time Spent on Coursework",
    subtitle: "average hours spent on coursework daily, a 1.17 hour increase from 2021 (last year).",
    // 2022!!
  });

  sota.lineGraph({
    section: "school",
    dataFile: "assets/data/school/113-hours_on_coursework",
    minVal: 2,
    maxVal: 250,
    title: "Hours on coursework",
    subtitle: "Q113. How many hours do you spend on coursework outside of class each day?",
    // 2022!
  });

  sota.lineGraph({
    section: "school",
    dataFile: "assets/data/school/111-gpa",
    maxVal: 180,
    title: "G.P.A",
    subtitle: "What was your rounded Winter 2021-2022 G.P.A.? (If you are between two numbers, round up to the closest decimal – a 5.3 G.P.A. would round to a 5.4. If you earned a Pass or multiple Passes, exclude this from your calculation.)",
    // 2022!!
  });

  sota.multiLineGraph({
    section: "school",
    dataFile: "assets/data/school/gpaXgender",
    displayPercentage: true,
    maxVal: 24,
    minVal: 0,
    title: "G.P.A. and Gender",
    // 2022!!
  });

  sota.bigNumber({
    section: "school",
    number: "5.35",
    title: "Overall Average G.P.A",
    subtitle: "Winter 2021-2022",
    // 2022!!
  });

  sota.barChart({
    section: "school",
    dataFile: "assets/data/school/112-4_good",
    // totalResp: 854,
    title: "Grading Scale",
    subtitle: 'Do you think a "4" is a good grade?',
    // 2022!!
  });

  sota.barChart({
    section: "school",
    dataFile: "assets/data/school/114-department_disparity",
    title: "Disparity between teachers",
    subtitle: "In which department(s), if any, is/are there an unreasonable grading disparity between teachers? Check all that apply.",
    // 2022!!
  });

  sota.lineGraph({
    section: "school",
    dataFile: "assets/data/school/gpa2017",
    maxVal: 6.0,
    minVal: 5.0,
    title: "Average G.P.A Since 2017",
    subtitle:
      "Editor's note: this question uses data from the 2017 to 2022 State of the Academy surveys.",
      // 2022!!
  });

  sota.pieChart({
    section: "school",
    dataFile: "assets/data/school/115-switch_teacher",
    sorted: false,
    title: "Switching Teachers",
    subtitle:
      "Have you ever switched or attempted to switch teachers within the same course in order to attain a better grade?",
      // 2022!!
  });

  sota.stackedColumnChart({
    section: "school",
    dataFile: "assets/data/school/collegeXclass",
    title: "Andover College",
    subtitle:
      "Do you think attending Andover affets your chances of attending a selective college?",
      // 2022!!
  });

  sota.stackedBarChart({
    section: "school",
    dataFile: "assets/data/school/119-extracurriculars",
    labelStyle: "onBar",
    showLegend: true,
    title: "On Campus, I ...",
    subtitle:
      "Do you participate in any extracurriculars because you think they will increase your chances of getting into a selective college?",
      // 2022!!
  });

  sota.pieChart({
    section: "school",
    dataFile: "assets/data/school/121-teacher_care",
    totalResp: 903,
    title: "Teacher Support",
    subtitle:
      "Do you think that the majority of your teachers care about your health and well-being?",
    // 2022!!
  });

  sota.bigNumber({
    section: "school",
    number: "26.2%",
    title: "Teacher Care",
    subtitle: "of respondents do not think the majority of their teachers care about their health and well-being.",
    // 2022!!
  });
  sota.pieChart({
    section: "school",
    dataFile: "assets/data/school/117-student_leader",
    sorted: false,
    title: "Student Leadership",
    subtitle:
      "Are you currently a student leader (prefect, proctor, DSM, EBI Senior, Cluster or School Co-President) on campus?",
      // 2022!!
  });

  // sota.pieChart({
  //   section: "school",
  //   dataFile: "assets/data/school/board_member",
  //   sorted: false,
  //   title: "Are you a board member of a club on campus?",
  // });

  sota.stackedBarChart({
    section: "school",
    dataFile: "assets/data/school/122-children",
    labelStyle: "onBar",
    showLegend: true,
    title: "Would you want your children to attend andover?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "school",
    dataFile: "assets/data/school/124-family_relationship",
    labelStyle: "onBar",
    showLegend: true,
    title: "Andover and family",
    subtitle:
      "Has attending Andover affected your relationship ith your family?",
      // 2022!!
  });

  sota.stackedBarChart({
    section: "school",
    dataFile: "assets/data/school/120-leaving",
    labelStyle: "onBar",
    showLegend: true,
    title: "Leaving Andover",
    subtitle: "Have you ever considered leaving Andover permanently?",
    // 2022!!
  });

  sota.bigNumber({
    section: "school",
    number: "12.1%",
    title: "Learning Accommodations",
    subtitle:
      "of respondents have disability/disorder/impairment that affects their learning.",
      // 2022!!
  });

  sota.stackedBarChart({
    section: "school",
    dataFile: "assets/data/school/learning_disabilityXaccomodation",
    labelStyle: "onBar",
    displayPercentage: true,
    groupLabelStyle: "onBar",
    showLegend: true,
    title:
      "Do you think Andover adequately accommodates students with learning disabilities?",
      // 2022!!
  });

  // sota.pieChart({
  //   section: "school",
  //   dataFile: "assets/data/school/character",
  //   sorted: false,
  //   title: "Andover and Self",
  //   subtitle:
  //     "Generally speaking, has attending Andover significantly affected your character?",
  // });

  sota.barChart({
    section: "school",
    dataFile: "assets/data/school/123-come_to_andover",
    title:
      "In retrospect, would you still make the decision to come to andover?",
      // 2022!!
  });

  // --- DISCIPLINE!! ---

  sota.bigNumber({
    section: "discipline",
    number: "40.6%",
    title: "Major Offenses",
    subtitle:
      "of respondents have commited a major offense without being caught.",
      // 2022!!
  });

  sota.pieChart({
    section: "discipline",
    dataFile: "assets/data/discipline/148-CCCDC",
    sorted: false,
    title: "Have you ever sat before a ccc or a dc?",
    // 2022!!
  });

  sota.columnChart({
    section: "discipline",
    dataFile: "assets/data/discipline/149-consequences",
    totalResp: 895,
    title:
      "Which of the following disciplinary consequences have you recieved?",
      // 2022!!
  });

  sota.stackedBarChart({
    section: "discipline",
    dataFile: "assets/data/discipline/effectiveXconsequences",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    title: "DC System Effectiveness",
    subtitle:
      "Do you think that the DC system effectively disciplines students who are caught breaking school rules?",
      // 2022!!
  });

  sota.stackedBarChart({
    section: "discipline",
    dataFile: "assets/data/discipline/major_offensesXboarding",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Boarding vs. day students and major offenses",
    subtitle: "Have you ever committed a major offense without being caught?",
  });

  sota.bigNumber({
    section: "discipline",
    number: "33.0%",
    title: "Concerning Contraband",
    subtitle:
      "of respondents think that the administration should have the right to search an entire dorm for contraband material.",
      // 2022!!
  });

  sota.pieChart({
    section: "discipline",
    dataFile: "assets/data/discipline/152-cheated",
    sorted: false,
    title: "Cheating",
    subtitle:
      "Have you ever cheated on any tests, quizzes, or in-class assessments while at Andover?",
      // 2022!!
  });

  sota.bigNumber({
    section: "discipline",
    number: "36.5%",
    title: "Room Visits—Have you ever had a room visit: \"visiting the dormitory room of or inviting an individual from outside your dormitory to your dorm room?\"",
    subtitle:
      "of respondents had illegal visitations to their dorms.",
    // 2022!!
  });

  sota.bigNumber({
    section: "discipline",
    number: "68.3%",
    title: "Room Visits",
    subtitle:
      "of respondents do not agree with this year's changes.",
    // 2022!!
  });

  sota.stackedColumnChart({
    section: "discipline",
    dataFile: "assets/data/discipline/cheatedXclass",
    title: "Cheating & Class",
    subtitle:
      "Have you ever cheated on any tests, quizzes, or in-class assessments while at Andover?",
  });

  sota.barChart({
    section: "discipline",
    dataFile: "assets/data/discipline/147-understand_processes",
    totalResp: 880,
    displayPercentage: true,
    title: "DC Understanding",
    subtitle: "Do you understand the CCC and DC processes?",
    // 2022!!
  });


  sota.stackedBarChart({
    section: "discipline",
    dataFile: "assets/data/discipline/153-plagiarized",
    sorted: false,
    title: "Plagiarizing",
    subtitle: "Have you ever plagiarized while at Andover?",
    // 2022!!
  });

  // sota.stackedBarChart({
  //   section: "discipline",
  //   dataFile: "assets/data/discipline/favors_privilegedXincome",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: false,
  //   title: "The dc system, privilege, and net family income",
  //   subtitle:
  //     "Do you think that the school's disciplinary system favors students of privileged backgrounds?",
  // });

  // --- CAMPUS DIVERSITY!! ---

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/138-faculty_diversity",
    totalResp: 949,
    displayPercentage: true,
    title: "Faculty Diversity",
    subtitle:
      "Do you think the faculty is lacking in diversity in _______________ ?",
      // 2022!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/faculty_diversityXgender",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    title: "Faculty Diversity By Gender",
    subtitle: "Do you think the faculty is lacking in diversity of gender?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/faculty_diversityXrace",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    title: "Faculty Diversity By Race",
    subtitle: "Do you think the faculty is lacking in diversity of race?",
    // 2022!!
  });

  // sota.stackedBarChart({
  //   section: "diversity",
  //   dataFile: "assets/data/diversity/faculty_diversityXsocioeconomic",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: true,
  //   title: "Faculty Diversity By Percieved Socioeconomic Class",
  //   subtitle:
  //     "Do you think the faculty is lacking in diversity of socioeconomic status?",
  // });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/140-social_divide",
    totalResp: 875,
    displayPercentage: true,
    title: "Social Divide",
    subtitle:
      "Do you feel like there is a social divide at Andover between students of different _______________ ?",
      // 2022!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/social_divideXrace",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: false,
    title: "Social Divide by Racial Group",
    subtitle: "Whether or not students believe there is a social divide on campus compared to their racial group.",
    // 2022!!
  });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/143-discrimination",
    totalResp: 864,
    displayPercentage: true,
    title: "Discrimination",
    subtitle:
      "Have you ever felt discriminated against at Andover due to your __________?",
      // 2022!!
  });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/139-faculty_support",
    totalResp: 848,
    displayPercentage: true,
    title: "Faculty Support",
    subtitle:
      "Which of the faculty/staff members in your life do you feel are supportive of a diverse range of students?",
      // 2022!!
  });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/144-identity_discussion",
    totalResp: 870,
    displayPercentage: true,
    title: "Talking the Talk",
    subtitle:
      "Do you think that there are facets of identity that are not discussed enough at Andover?",
      // 2022!!
  });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/142-classroom_comfort",
    totalResp: 871,
    displayPercentage: true,
    title: "Classroom",
    subtitle:
      "While at Andover, have any of the following aspects of your identity significantly and consistently affected your level of comfort in a classroom setting?",
      // 2022!!
  });

  sota.pieChart({
    section: "diversity",
    dataFile: "assets/data/diversity/145-ebi",
    sorted: false,
    title: "EBI Curriculumn",
    subtitle:
      "Do you think the EBI curriculum at Andover is effective in helping students become better community members?",
      // 2022!!
  });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/141-leadership",
    totalResp: 862,
    displayPercentage: true,
    title: "Leadership Positions",
    subtitle:
      "Do you think your capability to attain leadership positions at Andover is affected by your __________?",
      // 2022!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/day_student",
    title: "Day Students",
    subtitle:
      "Do you think day students are able to integrate enough with boarding students at Andover this year?",
  });

  // ------ SEX -------

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/70-sexual_activity",
    displayPercentage: true,
    title: "Have you ever engaged in sexual activity? Check all that apply.",
    // 2022!!
    // SHOULD I KEEPEPEPEPEP
  });

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/79-use_protection",
    displayPercentage: true,
    title:
      "Do you use protection while engaging in sexual activity? Check all that apply.",
    // 2022!!
  });

  sota.groupedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/sexXclass",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Sexual Activity by class year",
    totalResp: { 2025: 183, 2024: 333, 2023: 377, 2022: 445 },
    subtitle: "What form(s) of sexual activity have you engaged in?",
    // 2022!!
  });

  sota.stackedColumnChart({
    section: "sex",
    dataFile: "assets/data/sex/sexfreqXgender",
    showLegend: false,
    // labelStyle: "onBar",
    // groupLabelStyle: "onBar",
    // totalResp: {"Not applicable": 90, 2: 87, 3: 74, 4: 71, 5: 48, 6: 14},
    title: "Sexual Frequency by Gender Identity",
    subtitle: "How frequently various gender identities have sex.",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/71-sex_frequency",
    showLegend: true,
    labelStyle: "onBar",
    title: "How frequently do you engage in sexual activity?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/rapecultureXgenderid",
    showLegend: true,
    labelStyle: "onBar",
    title: "Rape culture and gender identity",
    // 2022!!
  });

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/72-number_of_partners",
    displayPercentage: true,
    title: "How many people have you engaged in sexual activity with?",
    // 2022!!
  });

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/92-sti",
    displayPercentage: true,
    title: "Sexual health",
    subtitle:
      "Have you ever contracted a Sexually Transmitted Infection (STI) or Sexually Transmitted Disease (STD)?",
    // 2022!!
  });

  sota.bigNumber({
    section: "sex",
    number: "19.0%",
    title: "Sex, Drugs, and Alcohol",
    subtitle:
      "of respondents who have consumed drugs or alcohol have had sex under the influence.",
    // 2022!!
  });

  sota.lineGraph({
    section: "sex",
    dataFile: "assets/data/sex/sex_ed",
    title: "Sexual Education",
    subtitle:
      "Do you think that your sexual education at Andover has been/is adequate?",
    inputIsPercentage: true,
    // 2022!!
  });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/73-hookup_culture",
    displayPercentage: true,
    title: "hook-up culture",
    subtitle: "Do you believe that there is a hook-up culture at Andover?",
    // 2022!!
  });

  sota.bigNumber({
    section: "sex",
    number: "23.6%",
    title: "Peer pressure & hook-up culture",
    subtitle:
      "of respondents that believe Andover has a hook-up culture have felt pressured by peers to participate in it.",
    // 2022!!
  });
  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/74-participate_hookup",
    displayPercentage: true,
    title:
      "Have you ever felt pressured by your peers to participate in Andover's hook-up culture?",
    // 2022!!
  });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/75-ever_hookedup",
    displayPercentage: true,
    title: ' "Hooking-up"',
    subtitle:
      "Have you ever “hooked up” with someone you were not in a committed relationship with?",
    // 2022!!
  });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/76-partner_pressure",
    displayPercentage: true,
    title: "partner pressure",
    subtitle:
      "Have you ever felt pressured by a partner to engage in sexual activity?",
    // 2022!!
  });

  sota.bigNumber({
    section: "sex",
    number: "18.6%",
    title: "Partner Pressure",
    subtitle:
      "of respondents have felt pressured by their partners to engage in sexual activity.",
    // 2022!!
  });

  sota.bigNumber({
    section: "sex",
    number: "32.6%",
    title: '"Hooking-up"',
    subtitle:
      'of respondents have "hooked up" with someone they were not in a committed relationship with',
    // 2022!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/77-rape_culture",
    displayPercentage: true,
    groupLabelStyle: "onBar",
    title: "Do you believe that there is rape culture at Andover?",
    subtitle:
      "Rape culture: “a society or environment whose prevailing social attitudes have the effect of normalizing or trivializing sexual assault and abuse” (Oxford Dictionaries)",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/78-verbalconsent",
    showLegend: true,
    labelStyle: "onBar",
    title: "consent",
    subtitle: "Do you consistently ask your partner for verbal consent?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/80-committed_relationship",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Have you ever been in a committed relationship?",
    // 2022!!
  });

  sota.stackedColumnChart({
    section: "sex",
    dataFile: "assets/data/sex/inter-class_relationship",
    showLegend: true,
    labelStyle: "onBar",
    title: "inter-class relationships",
    subtitle:
      "If you are currently in a committed relationship, what class is your partner in?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/84-telling_friends_masturbate",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title:
      "Would you feel comfortable telling your friends that you masturbate?",
    subtitle:
      "Editor's Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, and nonbinary have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/83-masturbation",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "masturbation",
    subtitle: "How frequently do you masturbate?",
    // 2022!!
  });

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/85-porn",
    displayPercentage: true,
    title: "Porn",
    subtitle:
      "If you watch pornography/read pornographic materials, how frequently, on average, do you do so?",
    // 2022!!
  });

  sota.columnChart({
    section: "sex",
    dataFile: "assets/data/sex/89-harassed",
    displayPercentage: true,
    totalResp: 949,
    title: "Have you ever been sexually harassed?",
    // 2022!!
  });

  sota.columnChart({
    section: "sex",
    dataFile: "assets/data/sex/91-assaulted",
    displayPercentage: true,
    totalResp: 949,
    title: "Have you ever been sexually assaulted?",
    // 2022!!
  });

  sota.bigNumber({
    section: "sex",
    number: "25.2%",
    title: "sexting",
    subtitle:
      "of respondents have sent a sexually explicit photo of themselves.",
    // 2022!!
  });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/86-receive_sext",
    displayPercentage: true,
    title: "Have you ever received a sexually explicit photo?",
    // 2022!!
  });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/90-sex_racial",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Sexual racism",
    subtitle:
      "Have you ever been sexualized (including being fetishized and hypersexualized) or desexualized (including being defeminized and emasculated) due to your racial-ethnic identity?",
    // 2022!!
  });

  // --- DRUGS AND ALCOHOL!!! ---

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/95-alcohol",
    displayPercentage: true,
    groupLabelStyle: "onBar",
    title: "Alcohol",
    subtitle: "Have you ever consumed alcohol recreationally?",
    // 2022!!
  });


  sota.bigNumber({
    section: "drugs",
    number: "28.6%",
    title: "drugs",
    subtitle:
      "of respondents consume drugs.",
      // 2022!!
  });

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/98-marijuana",
    displayPercentage: true,
    groupLabelStyle: "onBar",
    title: "Marijuana",
    subtitle: "Have you ever used marijuana?",
    // 2022!!
  });

  sota.columnChart({
    section: "drugs",
    dataFile: "assets/data/drugs/96-tobacco",
    displayPercentage: true,
    groupLabelStyle: "onBar",
    title: "tobacco",
    subtitle:
      "Have you ever used any tobacco products (e.g. dipping and chewing tobacco, cigarettes)?",
      // 2022!!
  });

  // sota.stackedBarChart({
  //   section: "drugs",
  //   dataFile: "assets/data/drugs/juulXclass",
  //   displayPercentage: true,
  //   groupLabelStyle: "onBar",
  //   title: " vaping ",
  //   subtitle:
  //     'Have you ever "juuled" or used a similar e-cigarette/pod vape nicotine-based product?',
  // });

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/99-drug_frequency",
    displayPercentage: true,
    totalResp: 949,
    title: "Drug habits",
    subtitle:
      "How often do you consume recreational drugs or alcohol on campus?",
      // 2022!!
  });


  sota.bigNumber({
    section: "drugs",
    number: "70.7%",
    title: "normalization of drugs and alcohol",
    subtitle:
      "of respondents believe that the use of recreational drugs or alcohol is normalized at Andover.",
  });

  // sota.pieChart({
  //     section:"drugs",
  //     dataFile: "assets/data/drugs/normalized",
  //     displayPercentage: true,
  //     title: "Do you think that the use of recreational drugs or alcohol is normalized at Andover?"
  // });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/107-influence_friends",
    displayPercentage: true,
    title: "drugs and friendships",
    title:
      "Do you think that recreational drug or alcohol use significantly influences your friendships at Andover?",
      // 2022!!
  });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/102-dorm_drug",
    displayPercentage: true,
    title: "dorm culture",
    subtitle:
      "Do you think your dorm significantly influences how you think about/use drugs and alcohol?",
      // 2022!!
  });

  sota.bigNumber({
    section: "drugs",
    number: "33.1%",
    title: "Drugs vs. student leadership",
    subtitle:
      "of student leaders have consumed drugs or alchohol in their dorms.",
  });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/104-study_drugs",
    displayPercentage: true,
    title: "study drugs",
    subtitle:
      "Have you ever used pharmaceutical drugs in the hopes of enhancing academic performance (i.e. “study drugs”) during your time at Andover?",
      // 2022!!
  });

  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/studydrugsXgpa",
    displayPercentage: true,
    groupLabelStyle: "onBar",
    title: "Study drug use vs. GPA",
    subtitle:
      'respondents who use study drugs compared to their GPA.',
      // 2022!!
  });

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/103-hard_drugs",
    displayPercentage: true,
    totalResp: 949,
    title: "Hallucinogens & hard drugs",
    subtitle: "Have you ever used hallucinogens or hard drugs?",
    // 2022!!
  });

  // sota.stackedBarChart({
  //   section: "drugs",
  //   dataFile: "assets/data/drugs/drugs_for_stress",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   title: "stress relief",
  //   subtitle:
  //     "If you consume recreational drugs or alcohol on campus, do you do so primarily to relieve stress?",
  // });
  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/105-peer_pressure",
    showLegend: true,
    labelStyle: "onBar",
    title: "peer pressure",
    subtitle:
      "Have you ever felt pressured by peers to consume recreational drugs or alcohol on campus?",
      // 2022!!
  });
  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/106-sold_drugs",
    displayPercentage: true,
    sorted: false,
    title: "sales",
    subtitle:
      "Have you ever sold someone recreational drugs, alcohol, or your prescription medication?",
      // 2022!!
  });

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/107-location",
    displayPercentage: true,
    totalResp: 949,
    title: "location",
    subtitle:
      "In which of the following settings at Andover have you been under the influence of recreational drugs or alcohol?",
      // 2022!!
  });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/109-been_sancted",
    displayPercentage: true,
    title: "Have you ever been sanctuaried?",
    subtitle:
      "Sanctuary: provided with a means of accessing support in situations where alcohol, drugs, tobacco, and/or nicotine are involved WITHOUT disciplinary consequences (The Blue Book)?",
      // 2022!!
  });

  // ----- WELLNESS!! <3 ------

  sota.columnChart({
    section: "wellness",
    dataFile: "assets/data/wellness/44-sleep",
    displayPercentage: true,
    subtitle: "On average, how many hours of sleep do you get per night?",
    title: "sleep",
    // 2022!!
  });

  sota.bigNumber({
    section: "wellness",
    title: "sleep",
    number: "6.65",
    subtitle: "Average hours of sleep per night of an Andover student",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/6123-diagnosed",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "mental health",
    subtitle: "Have you ever been diagnosed with..",
    // 2022!!
  });
  sota.bigNumber({
    section: "wellness",
    title: "ADD/ADHD",
    number: "247",
    subtitle:
      "respondents have or would like to seek an evaluation for ADD/ADHD",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/56-eating_disorder",
    showLegend: true,
    labelStyle: "onBar",
    title: "eating disorders",
    subtitle:
      "Have you ever had, or do you currently have, an eating disorder?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/anxietyXgender",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Anxiety by Gender identity",
    subtitle: "Have you ever been diagnosed with anxiety?",
    // 2022!!
  });

  sota.bigNumber({
    section: "wellness",
    title: "bullying & hazing",
    number: "139",
    subtitle: "respondents have been bullied or hazed while at Andover",
    // 2022!!
  });

  sota.bigNumber({
    section: "wellness",
    title: "neurodivergence",
    number: "129",
    subtitle: "respondents consider themselves neurodivergent",
    // 2022!
  });

  sota.bigNumber({
    section: "wellness",
    title: "Percentage of students who have tested positive for Covid-19",
    number: "32.4%",
    subtitle:
      "Editor's Note: This number reflects the number of students who have tested for Covid-19 when the survey was completed, or between April 8, 2022 and April 20, 2022",
    // 2022!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/54-insecure_body",
    sorted: false,
    title: "body insecurity",
    subtitle:
      "Do you feel insecure about your body, physical health, and/or appearance?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/insecureXgender",
    showLegend: true,
    groupLabelStyle: "onBar",
    labelStyle: "onBar",
    title: "body insecurity by gender identity",
    subtitle:
      "Do you feel insecure about your body, physical health, and/or appearance?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/insecureXvarsity",
    showLegend: true,
    groupLabelStyle: "onBar",
    labelStyle: "onBar",
    title: "body insecurity in athletes",
    subtitle:
      "Do you feel insecure about your body, physical health, and/or appearance?",
    // 2022!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/53-insecure_academic",
    sorted: false,
    title: "academic insecurity",
    subtitle:
      "Do you feel insecure about your academic ability and/or intelligence?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/65-happiness",
    showLegend: true,
    labelStyle: "onBar",
    title: "HAPPINESS",
    subtitle: "Generally speaking, do you consider yourself happy at Andover?",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/happyXgpa",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Happiness by GPA",
    subtitle: "Happiness of students and their GPA.",
    // 2022!!
  });

  sota.bigNumber({
    section: "wellness",
    title: "Support Systems",
    number: "66.9%",
    subtitle:
      "of students feel as though they have an adequate mental and/or emotional support system on campus.",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/66-others_happiness",
    showLegend: true,
    labelStyle: "onBar",
    title: " percieved happiness",
    subtitle:
      "Generally speaking, do you think that Andover students are happy?",
    // 2022!!
  });

  sota.barChart({
    section: "wellness",
    dataFile: "assets/data/wellness/46-social_media",
    displayPercentage: true,
    totalResp: 949,
    title: "What social media platforms do you use at Andover?",
    // 2022!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/47-social_media_impact",
    showLegend: true,
    labelStyle: "onBar",
    title: "social media and mental health",
    subtitle: "How does social media impact your life?",
    // 2022!!
  });

  sota.columnChart({
    section: "wellness",
    dataFile: "assets/data/wellness/45-hours_social",
    sorted: false,
    title: "social media usage",
    subtitle:
      "Approximately how many hours a day do you spend on social media?",
    // 2022!!
  });

  sota.barChart({
    section: "wellness",
    dataFile: "assets/data/wellness/50-dietary_restrict",
    displayPercentage: true,
    totalResp: 949,
    subtitle: "What are your dietary restrictions?",
    title: "Dietary restrictions",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/happyXperceivedSEC",
    groupLabelStyle: "onBar",
    showLegend: true,
    labelStyle: "onBar",
    title: "Happiness vs. Perceived Socioeconomic Class",
    subtitle: "Respondents' happiness and their perceived socioeconomic class.",
    // 2022!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/51-skip_meals",
    sorted: false,
    subtitle:
      "Do you skip meals in order to get more sleep and/or do school work?",
    title: "skipping meals",
    // 2022!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/58-see_counselor",
    sorted: false,
    subtitle:
      "Have you ever been to the Sykes Wellness Center to see a counselor?",
    title: "Sykes counseling",
  });

  sota.bigNumber({
    section: "wellness",
    title: "Adequate Recources",
    number: "30.5%",
    subtitle:
      "less respondents believe that the resources provided by the Sykes Wellness Center are sufficient compared to last year (2021).",
    // 2022!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/sykesmentalXseencounselor",
    groupLabelStyle: "onBar",
    showLegend: true,
    labelStyle: "onBar",
    title: "sykes counseling resources",
    subtitle:
      "Do you think that the mental health and counseling resources provided by the Sykes Wellness Center are sufficient?",
    // 2022!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/60-sykes_physical",
    sorted: false,
    subtitle:
      "Do you think that the physical health resources provided by the Sykes Wellness Center are sufficient?",
    title: "physical health resources",
    // 2022!!
  });

  sota.barChart({
    section: "wellness",
    dataFile: "assets/data/wellness/67-support_system",
    displayPercentage: true,
    totalResp: 949,
    title: "support systems",
    subtitle: "What is your mental and/or emotional support system on campus?",
    // 2022!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/59-adequate_support",
    title: "Adequate Resources",
    sorted: false,
    subtitle:
      "Do you feel as though you have an adequate mental and/or emotional support system on campus?",
    // 2022!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/69-take_care",
    sorted: false,
    title: "self-care",
    subtitle:
      "Do you have enough time in your day-to-day life as an Andover student to adequately take care of yourself?",
    // 2022!!
  });

  sota.bigNumber({
    section: "wellness",
    title: "Sykes Counseling",
    number: "36.3%",
    subtitle:
      "of students have been to Sykes Wellness Center to see a counselor.",
    // 2022!!
  });

  //senior

  sota.stackedBarChart({
    section: "senior",
    dataFile: "assets/data/senior/college",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Andover and college",
    subtitle:
      "Do you think attending Andover affects your chances of attending a selective college?",
  });
  sota.stackedBarChart({
    section: "senior",
    dataFile: "assets/data/senior/happiness",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Happiness",
    subtitle: "Generally speaking, do you consider yourself happy at Andover?",
  });

  sota.groupedBarChart({
    section: "senior",
    dataFile: "assets/data/senior/sexual_activity",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    totalResp: { 2018: 230, 2019: 361, 2020: 524, 2021: 519 },
    title: "Sexual Activity",
    subtitle: "What form(s) of sexual activity have you engaged in?",
  });

  sota.stackedColumnChart({
    section: "senior",
    dataFile: "assets/data/senior/alcohol",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Have you ever consumed alcohol?",
  });

  sota.stackedColumnChart({
    section: "senior",
    dataFile: "assets/data/senior/marijuana",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Have you ever consumed marijuana?",
  });

  sota.stackedColumnChart({
    section: "senior",
    dataFile: "assets/data/senior/rape_culture",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Do you believe there is rape culture at Andover?",
    subtitle:
      "Rape culture: “a society or environment whose prevailing social attitudes have the effect of normalizing or trivializing sexual assault and abuse” (Oxford Dictionaries).",
  });

  sota.stackedColumnChart({
    section: "senior",
    dataFile: "assets/data/senior/sexual_orientation",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "sexuality over the years",
    subtitle: "What is your sexual orientation?",
  });

  sota.stackedColumnChart({
    section: "senior",
    dataFile: "assets/data/senior/feminist",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Do you consider yourself a feminist?",
  });

  sota.stackedColumnChart({
    section: "senior",
    dataFile: "assets/data/senior/relationships",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Committed relationships",
    subtitle: "Have you ever been in a committed relationship?",
  });

  sota.stackedBarChart({
    section: "senior",
    dataFile: "assets/data/senior/family",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Andover and Family",
    subtitle:
      "Has attending Andover affected your relationship ith your family?",
  });

  sota.stackedColumnChart({
    section: "senior",
    dataFile: "assets/data/senior/come_to_andover",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title:
      "IN RETROSPECT, WOULD YOU STILL MAKE THE DECISION TO COME TO ANDOVER?",
    // subtitle: "Have you ever been in a committed relationship?"
  });

  sota.stackedColumnChart({
    section: "senior",
    dataFile: "assets/data/senior/children",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "WOULD YOU WANT YOUR CHILDREN TO ATTEND ANDOVER?",
    // subtitle: "Have you ever been in a committed relationship?"
  });

  sota.stackedBarChart({
    section: "senior",
    dataFile: "assets/data/senior/political_affiliation",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Political Affiliation",
    subtitle: "What is your political affiliation?",
  });

  sota.sotaMasonry();
};
