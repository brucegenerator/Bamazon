# Bamazon
Bamazon is a CLI storefront written in JavaScript and executed in NodeJS.
The store's inventory is created and tracked using MySQL and takes orders for purchases via the command line and Inquirer package. The inventory is modeled and displayed with a cli-table package.

# How it works
* When the application is executed an inventory table is displayed with id number, item name, department, price and stock quantity
![inventory](/assets/inventory.png)
* Users are prompted with an inquiry to choose an item by ID number from a tabled list of inventory items
* After making a selection, the user is prompted with an inquiry of quantity
![quantity](/assets/id-quantity.png)
* Upon submitting quantity, a purchase confirmation is displayed with a message describing the number of items purchased along with total
![quantity](/assets/purchase.png)
* Total 
![quantity](/assets/total.png)
* And Total Stock is reduced as well
![quantity](/assets/quantityreduced.png)
* Users can press "Q" at any time to quit the application
![quit](/assets/quit.png)

# Expanding on the Concept
I would like to further develop the application to incorporate different modes of administration for maintaining the inventory database. For example, establishing a Manager Mode for adding and removing items and stock from the inventory. This mode would be password protected and require user authentication. Another possibility is a Supervisor Mode which could be used in conjunction with user authentication and allow for coallating statistics across all departments to track sales trends and product movement.
