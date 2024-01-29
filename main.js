import assert from "assert";

describe("loan_management", function () {
  it("should have correct name in package.json", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "loan_management");
  });

  describe("Client Tests", function () {
    if (Meteor.isClient) {
      it("should not be server on the client", function () {
        assert.strictEqual(Meteor.isServer, false);
      });
    }
  });

  describe("Server Tests", function () {
    if (Meteor.isServer) {
      it("should not be client on the server", function () {
        assert.strictEqual(Meteor.isClient, false);
      });
    }
  });
});
