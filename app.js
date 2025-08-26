// NFL Team Selector App
// Loads team data from CSV and populates dropdown, displays info on selection

const csvData = `team_abbr,team_name,team_division,team_logo_espn
ARI,Arizona Cardinals,NFC West,https://a.espncdn.com/i/teamlogos/nfl/500/ari.png
ATL,Atlanta Falcons,NFC South,https://a.espncdn.com/i/teamlogos/nfl/500/atl.png
BAL,Baltimore Ravens,AFC North,https://a.espncdn.com/i/teamlogos/nfl/500/bal.png
BUF,Buffalo Bills,AFC East,https://a.espncdn.com/i/teamlogos/nfl/500/buf.png
CAR,Carolina Panthers,NFC South,https://a.espncdn.com/i/teamlogos/nfl/500-dark/car.png
CHI,Chicago Bears,NFC North,https://a.espncdn.com/i/teamlogos/nfl/500/chi.png
CIN,Cincinnati Bengals,AFC North,https://a.espncdn.com/i/teamlogos/nfl/500/cin.png
CLE,Cleveland Browns,AFC North,https://a.espncdn.com/i/teamlogos/nfl/500/cle.png
DAL,Dallas Cowboys,NFC East,https://a.espncdn.com/i/teamlogos/nfl/500/dal.png
DEN,Denver Broncos,AFC West,https://a.espncdn.com/i/teamlogos/nfl/500/den.png
DET,Detroit Lions,NFC North,https://a.espncdn.com/i/teamlogos/nfl/500/det.png
GB,Green Bay Packers,NFC North,https://a.espncdn.com/i/teamlogos/nfl/500/gb.png
HOU,Houston Texans,AFC South,https://a.espncdn.com/i/teamlogos/nfl/500/hou.png
IND,Indianapolis Colts,AFC South,https://a.espncdn.com/i/teamlogos/nfl/500/ind.png
JAX,Jacksonville Jaguars,AFC South,https://a.espncdn.com/i/teamlogos/nfl/500/jax.png
KC,Kansas City Chiefs,AFC West,https://a.espncdn.com/i/teamlogos/nfl/500/kc.png
LA,Los Angeles Rams,NFC West,https://a.espncdn.com/i/teamlogos/nfl/500/lar.png
LAC,Los Angeles Chargers,AFC West,https://a.espncdn.com/i/teamlogos/nfl/500/lac.png
LV,Las Vegas Raiders,AFC West,https://a.espncdn.com/i/teamlogos/nfl/500/lv.png
MIA,Miami Dolphins,AFC East,https://a.espncdn.com/i/teamlogos/nfl/500/mia.png
MIN,Minnesota Vikings,NFC North,https://a.espncdn.com/i/teamlogos/nfl/500/min.png
NE,New England Patriots,AFC East,https://a.espncdn.com/i/teamlogos/nfl/500/ne.png
NO,New Orleans Saints,NFC South,https://a.espncdn.com/i/teamlogos/nfl/500/no.png
NYG,New York Giants,NFC East,https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png
NYJ,New York Jets,AFC East,https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png
PHI,Philadelphia Eagles,NFC East,https://a.espncdn.com/i/teamlogos/nfl/500/phi.png
PIT,Pittsburgh Steelers,AFC North,https://a.espncdn.com/i/teamlogos/nfl/500/pit.png
SEA,Seattle Seahawks,NFC West,https://a.espncdn.com/i/teamlogos/nfl/500/sea.png
SF,San Francisco 49ers,NFC West,https://a.espncdn.com/i/teamlogos/nfl/500/sf.png
TB,Tampa Bay Buccaneers,NFC South,https://a.espncdn.com/i/teamlogos/nfl/500/tb.png
TEN,Tennessee Titans,AFC South,https://a.espncdn.com/i/teamlogos/nfl/500/ten.png
WAS,Washington Commanders,NFC East,https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png`;

function parseCSV(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
        const values = line.split(',');
        let obj = {};
        headers.forEach((h, i) => obj[h] = values[i]);
        return obj;
    });
}

const teams = parseCSV(csvData);

const dropdown = document.getElementById('teamDropdown');
const teamInfo = document.getElementById('teamInfo');
const teamName = document.getElementById('teamName');
const teamDivision = document.getElementById('teamDivision');
const teamLogo = document.getElementById('teamLogo');

// Populate dropdown
teams.forEach(team => {
    const option = document.createElement('option');
    option.value = team.team_abbr;
    option.textContent = team.team_name;
    dropdown.appendChild(option);
});

dropdown.addEventListener('change', function() {
    const selected = teams.find(t => t.team_abbr === this.value);
    if (selected) {
        teamName.textContent = selected.team_name;
        teamDivision.textContent = `Division: ${selected.team_division}`;
        teamLogo.src = selected.team_logo_espn;
        teamLogo.alt = selected.team_name + ' logo';
        teamInfo.style.display = 'block';
    } else {
        teamInfo.style.display = 'none';
    }
});
