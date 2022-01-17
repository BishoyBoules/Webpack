/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let theUrl = 'https://jsonplaceholder.typicode.com/photos';\nasync function getInfo(url){\n    const response = await fetch(url);\n    const items = await response.json();\n    const theBody = document.getElementById('theBody');\n    const popupContainer = document.getElementById('popupContainer');\n    \n    for (let item of items) {\n            const img = item.thumbnailUrl;\n            const title = item.title;\n            const image = document.createElement('img');\n            const theTitle = document.createElement('div');\n            const theDiv = document.createElement('div');\n            image.src = img;\n            theTitle.innerHTML = title;\n            theTitle.classList.add('theTitle');\n            image.classList.add('theImage');\n            theDiv.classList.add('theDiv');\n            theBody.appendChild(theDiv);\n            theDiv.appendChild(image);\n            theDiv.appendChild(theTitle);\n            theDiv.addEventListener('click', () => {\n                console.log('clicked');\n                popupContainer.style.display = \"block\";\n                const popupImg = item.url;\n                const description = document.createElement('div');\n                description.setAttribute('id', 'description');\n                description.innerHTML = `photo-ID: ${item.id},\\n\n                Description: ${item.title}`;\n                const popup = document.createElement('div');\n                popup.classList.add('active');\n                const popupImage = document.createElement('img');\n                const close = document.createElement('button');\n                close.innerHTML = '&times';\n                close.classList.add('close');\n                popupImage.classList.add('popupImage');\n                popupImage.src = popupImg;\n                popup.appendChild(close);\n                popup.appendChild(popupImage);\n                popup.appendChild(description);\n                popupContainer.appendChild(popup);\n                theBody.classList.add('inactive');\n                popupContainer.addEventListener('click', () =>{\n                    popupContainer.style.display = \"none\";\n                    console.log('close');\n                    popup.remove();\n                });\n            });\n        }\n}\ngetInfo(theUrl);\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;