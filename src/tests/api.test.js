const fetch = require("node-fetch");
const { apiModule } = require("../common/api");

test("test token to be string", async () => {
  const response = await apiModule.authUser();
  return expect(response.response.access_token).toBeString();
});
