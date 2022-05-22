<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
/*Сброс стилей*/
* {
	padding: 0;
	margin: 0;
	border: 0;
}

*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active  {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1.2;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

input,
button,
textarea  {
  font-family:inherit;
}

input::-ms-clear  {
  display: none;
}

button  {
  cursor: pointer;
  background-color: transparent;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a {
  color: inherit;
}

a,
a:visited,
a:hover {
  text-decoration: none;
}

ul {
  li  {
    list-style: none;
  }
}

img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6  {
  font-size:inherit;
  font-weight: 400;
}
/*--------------------*/

#app {
  padding: 20px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Lucida Sans', sans-serif;
}

.title-h-1 {
  font-size: 26px;
  text-align: center;
}

.button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #e8e8e8;
  transition: .2s ease-in-out;

  &:hover {
    background-color: #dbdbdb;
  }
}

.form {
  width: 300px;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  &__field {
    position: relative;
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

	&__input {
    padding: 10px 20px;
    width: 100%;
    border: 1px solid gray;
    border-radius: 5px;
  }

  &__error {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: 12px;
    color: red;
  }
}
</style>
