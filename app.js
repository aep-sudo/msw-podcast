(function () {
  var el = document.getElementById('countdown');
  if (!el) return;

  function berlinWeekday() {
    try {
      var name = new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: 'Europe/Berlin' }).format(new Date());
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(name);
    } catch (e) {
      return new Date().getDay();
    }
  }

  function render() {
    var today = berlinWeekday();
    var thursday = 4;
    var diff = (thursday - today + 7) % 7;
    var text;

    if (diff === 0) {
      text = 'Heute ist Donnerstag. Neue Folge ist da 🎧';
    } else if (diff === 1) {
      text = 'Nächste Folge: morgen. Ruhig bleiben, Hebel halten.';
    } else {
      text = 'Nächste Folge in ' + diff + ' Tagen. Bis dahin: Diamanthände.';
    }
    el.textContent = text;
  }

  render();
  // Einmal pro Minute prüfen, falls die Seite über Mitternacht offen bleibt
  setInterval(render, 60000);
})();
