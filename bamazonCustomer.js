var mysql = require('mysql');
var inquirer = require('inquirer');
//create connection to db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        promptForId(res);
    });
}
function exit(choice) {
    if(choice.toLowerCase() === "q") {
        console.log(`Later!`);
        process.exit(0);
    }
}
function promptForId(inventory) {
    inquirer
      .prompt ([{
          type: "input",
          name: "choice",
          message: "What is the ID of the item you would like to purchase? (exit with q)",
          validate: function(val) {
              return !isNaN(val) || val.toLowerCase() === "q";
          }     
      }
    ])
     .then(function(val) {
         exit(val.choice);
         var ID = parseInt(val.choice);
         var product = checkInventory(ID, inventory);
         if(product) {
             promptQuantity(product);
         }
         else {
             console.log(`the item is not available in inventory`);
             start();
         }
     });
}
function promptQuantity(product) {
    inquirer
      .prompt([{
          type: "input",
          name: "quantity",
          message: "How many would you like? (exit with q)",
          validate: function(val) {
              return val > 0 || val.toLowerCase() === "q";
          }
      }
    ])
    .then(function(val) {
        exit(val.quantity);
        var quantity = parseInt(val.quantity);
        if (quantity > product.stock_quantity) {
            console.log(`insufficient quantity`);
            start();
        }
        makeSale(product, quantity);
    });
}

function makeSale(product, quantity) {
    connection.query (
      "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
      [quantity, product.item_id, product.price], function(err, res)  {
          if (err) throw err;
          console.log("Purchase made: " + quantity + " " + product.product_name + "'s " + "for $" + quantity*product.price);
          start();
      } 
    );
}
function checkInventory(ID, inventory) {
    for(var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === ID) {
            return inventory[i];
        }
    }
    return null;
}
start();