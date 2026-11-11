/* Sends old homepage anchors from the 2019 notebook export to the
   preserved project page. The notebook used to be served at /. */
(function () {
  var legacy = {
    "Basketball-Analysis-Tutorial": true,
    "Background/-Current-Literature": true,
    "Objective": true,
    "Databases": true,
    "Hoops-Hype-Database": true,
    "Bart-Torvik-Database": true,
    "NBA-Basketball-Reference": true,
    "Methods": true,
    "Impact": true,
    "Conflicts-of-Interest": true,
    "Sources:": true,
    "Data-Acquisition": true,
    "Exploratory-Analysis-and-Characterization-of-the-Data": true,
    "Final-Conclusions": true
  };

  var raw = window.location.hash;
  if (!raw || raw === "#") return;

  var id;
  try {
    id = decodeURIComponent(raw.slice(1));
  } catch (error) {
    return;
  }

  if (document.getElementById(id) || !legacy[id]) return;
  window.location.replace("/projects/nba-statistics/" + raw);
})();
