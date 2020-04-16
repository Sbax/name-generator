const discoveryDocs = [
    "https://sheets.googleapis.com/$discovery/rest?version=v4"
];

const apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;

export const initializeGoogleServices = () =>
    new Promise(resolve => {
        window.gapi.load("client", () =>
            window.gapi.client
                .init({
                    apiKey,
                    discoveryDocs
                })
                .then(() => resolve())
        );
    });

const saveToSession = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
};

const getFromSession = key => {
    const saved = sessionStorage.getItem(key);
    if (!saved) return;
    return JSON.parse(saved);
};

const sheet = process.env.REACT_APP_LINKS_SHEET;
export const getSheet = async (range, callback) => {
    const saved = getFromSession(`${sheet}:${range}`);
    if (saved) return callback(saved);

    await initializeGoogleServices();
    window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: sheet,
                range
            })
            .then(response => {
                saveToSession(`${sheet}:${range}`, response);
                callback(response);
            });
    });
};
