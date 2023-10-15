import {setCategory} from "./components/category/category";
import {setListItem} from "./components/list/list";
import {setItemInfo} from "./components/info/info";
import {myOrders} from "./components/orders/orders";
import {postUserOrder} from "./components/modal-form/modal-form";
import {cartHasOrder, logoResetGoToHome, showListOrders} from "./layout/header/header";

setCategory();
setListItem();
setItemInfo();
myOrders();
postUserOrder();
showListOrders();
logoResetGoToHome()
cartHasOrder();