const sheets = require("./sheets");
const { getDishes, getRegions, getNames, getRandom } = sheets;

exports.handler = async (event) => {
  console.log(event);
  const path = event.path.split("/").pop();

  if (path === "sheet-data") {
    const [dishes, regions, names, random] = await Promise.all([
      getDishes(),
      getRegions(),
      getNames(),
      getRandom(),
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ dishes, regions, names, ...random }),
    };
  }

  return {
    statusCode: 500,
    body: JSON.stringify({ data: "Wrong API call" }),
  };
};
