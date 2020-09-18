const ItemManager = artifacts.require("./ItemManager.sol");

contract("ItemManager", accounts => {
  it("...should store the value 89.", async () => {
    const itemManagereInstance = await ItemManager.deployed();
    const itemName = "Alice";
    const itemPrice = 500;

    const result = await itemManagereInstance.createItem(itemName, itemPrice, { from: accounts[0] });

    console.log(result);
    assert.equal(result.logs[0].args._itemIndex, 0, "There should be one item index in there");

    const item = await itemManagereInstance.items(0);
    assert.equal(item._identifier, itemName, "The item has a different identifier");

  });
});
