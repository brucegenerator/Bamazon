# Bamazon
Bamazon is a CLI storefront written in JavaScript and executed in NodeJS.
The store's inventory is created and tracked using MySQL and takes orders for purchases via the command line and Inquirer package. The inventory is modeled and displayed with a cli-table package.

# How it works
* When the application is executed an inventory table is displayed with id number, item name, department, price and stock quantity
![inventory](../assets/inventorydisplay.png)
* Users are prompted with an inquiry to choose an item by ID number from a tabled list of inventory items
* After making a selection, the user is prompted with an inquiry of quantity
* Upon submitting quantity, a purchase confirmation is displayed with a message describing the number of items purchased along with total
* Users can press "Q" at any time to quit the application
