const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const spreadsheetId = process.env.REACT_APP_LINKS_SHEET;
const key = process.env.NODE_GOOGLE_SHEETS_API_KEY;

// since google sheets returns the values by rows and I need them by columns
// this function rotates the matrix so that
//
// [                       [
//    [1, 1, 1],              [1, 2, 3],
//    [2, 2, 2],   becomes    [1, 2, 3],
//    [3, 3, 3],              [1, 2, 3],
// ]                       ]
//
const rotateMatrix = (matrix) =>
  matrix[0].map((_, i) => matrix.map((row) => row[i]).filter(Boolean));

const getSheet = (range) => {
  const sheets = google.sheets({
    version: "v4",
    auth: key,
  });

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get(
      {
        spreadsheetId,
        range,
      },
      (error, res) => {
        if (error) {
          reject({ error: `The API returned an error: ${error}` });
          return;
        }

        const rows = res.data.values;
        resolve(rows);
      }
    );
  });
};

const getGroupedSheet = (range) =>
  getSheet(range)
    .then((response) => {
      const [labels, ...dataRotated] = response;
      const data = rotateMatrix(dataRotated);

      const dishes = labels.map((name, index) => ({
        name,
        items: data[index],
      }));

      return dishes;
    })
    .catch((error) => error);

const getDishes = () => getGroupedSheet("food!A:C");
const getRegions = () => getGroupedSheet("regions!A:E");
const getNames = () => getGroupedSheet("names!A:D");
const getRandom = () =>
  getSheet("random!A2:B")
    .then((response) => {
      const random = response.reduce(
        ({ places }, [place]) => {
          if (place) places.push(place);

          return { places };
        },
        {
          places: [],
        }
      );

      return random;
    })
    .catch((error) => error);

module.exports = {
  SCOPES,
  getDishes,
  getRegions,
  getNames,
  getRandom,
};
