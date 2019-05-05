# ngShop
ngShop is a small shopping application that allows you to purchase products. Along with that, you can login, view shopping cart, view orders and process them for shipping.
<br><br>
The admin can also manage the products and orders along with rest of the functionalities.
<br><br>
The application is hosted on the firebase and you can view it here: [https://ng-shop-2a084.firebaseapp.com/](https://ng-shop-2a084.firebaseapp.com/)
<br><br>
### Product Catalog
![Screenshot](https://i.imgur.com/GlAiTuQ.png)
### Shopping Cart
![Screenshot](https://i.imgur.com/uDtW46O.png)
### Shipping and Order Review
![Screenshot](https://i.imgur.com/SFI0U2e.png)
### Order Success
![Screenshot](https://i.imgur.com/t9yCAli.png)

# Functionality
* View products in catalog
* View products according to it categories
* Add products to shopping cart
* Remove products from the shopping cart
* Process order with the shipping details
* Authenticate user through Google Login

# Admin Functionality
* View products in list with search.
* Add/Edit/Delete products in the application. 

# How it Works
I have used the [Firebase](https://firebase.google.com/) to save and fetch all the data. The data have been saved in multiple nodes of the firebase along with security rules so that only authenticated users can access nodes.

When a user visits the site they can add any number of orders in the shopping cart and then they can proceed to checkout. Before checkout the user has to login using Google and they can process the order.

# What I Used
* Angular 7
* HTML5/CSS3
* Bootstrap4
* Firebase

# Can you contribute?
Of course. I have made few issues/enhancement which ae required in the application or you can make enhancements of your own. You can send a pull request and it will be reviewed and merged. I will also add your name and Twitter/LinkedIn handle.

# What I learned
This was my second project with the Angular. This project taught me more than I ever expected. I was able to work with `Routing`, `Firebase`, `Authentication`, `Authorization` for the first time.