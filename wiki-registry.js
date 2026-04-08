/* wiki-registry.js — shared parser for wiki/index.md */

function parseWikiIndex(text) {
  var articles = [];
  var sections = text.split(/^## /m);

  for (var i = 1; i < sections.length; i++) {
    var lines = sections[i].split('\n');
    var topic = lines[0].trim().toLowerCase();
    var rowRe = /\|\s*\[([^\]]+)\]\(([^)]+)\)\s*\|\s*([^|]*)\|\s*([^|]*)\|/;

    for (var j = 1; j < lines.length; j++) {
      var m = lines[j].match(rowRe);
      if (m) {
        articles.push({
          title: m[1].trim(),
          path: m[2].trim(),
          summary: m[3].trim(),
          updated: m[4].trim(),
          topic: topic,
          tags: [topic],
          href: 'page.html?p=wiki/' + m[2].trim()
        });
      }
    }
  }

  return articles;
}

function groupByTopic(articles) {
  var groups = {};
  for (var i = 0; i < articles.length; i++) {
    var t = articles[i].topic;
    if (!groups[t]) groups[t] = [];
    groups[t].push(articles[i]);
  }
  return groups;
}

async function loadRegistry() {
  var resp = await fetch('wiki/index.md');
  var text = await resp.text();
  return parseWikiIndex(text);
}
