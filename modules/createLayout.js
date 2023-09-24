import {
	addClassToElement,
	appendElements,
	setItemInfo,
	setListItem,
	setMenuCategory,
	setPopup,
	setTextContent,
} from "./domManipulation.js";

import {
	domElementFooter,
	domElementHeader,
	domElementInfo,
	domElementList,
	domElementMain,
	domElementMenu,
	domElementPopup,
	domElementRoot,
	domElementWrapper,
} from "./vars.js";

import {carsData} from "./carsData.js";

// Root
export function createLayoutRoot() {
	appendElements(domElementRoot,
		domElementWrapper
	);
}

// Wrapper
export function createLayoutWrapper() {
	appendElements(domElementWrapper,
		domElementHeader, domElementMain, domElementFooter
	);
	
	addClassToElement(domElementWrapper, 'wrapper');
}

// Main
export function createLayoutMain() {
	appendElements(domElementMain,
		domElementMenu, domElementList, domElementInfo
	);
	
	addClassToElement(domElementMain, 'main');
}

// Header
export function createLayoutHeader() {
	addClassToElement(domElementHeader, 'header');
	setTextContent(domElementHeader, 'Brand new cars');
}

// Menu
export function createLayoutMenu() {
	addClassToElement(domElementMenu, 'menu');
	setMenuCategory(domElementMenu, carsData);
}

// List
export function createLayoutList() {
	addClassToElement(domElementList, 'list');
	setListItem(domElementList, carsData);
}

// Info
export function createLayoutInfo() {
	addClassToElement(domElementInfo, 'info');
	setItemInfo(domElementInfo, carsData);
}

// Footer
export function createLayoutFooter() {
	addClassToElement(domElementFooter, 'footer');
	setTextContent(domElementFooter, '2023');
}

// Popup
export function createLayoutPopup() {
	appendElements(domElementWrapper,
		domElementPopup
	);
	addClassToElement(domElementPopup, 'popup');
	setPopup(domElementPopup);
}

// Create Page
export function createLayoutFullPage() {
	createLayoutRoot();
	createLayoutWrapper();
	createLayoutMain();
	createLayoutHeader();
	createLayoutMenu();
	createLayoutList();
	createLayoutInfo();
	createLayoutFooter();
	createLayoutPopup();
}