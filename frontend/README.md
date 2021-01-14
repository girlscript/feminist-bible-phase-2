## Using CSS Modules. 
### Folder Structure
Every component will have a folder of its name. Inside the folder will be three mandatory 
```
|_ Header 
  |_Header.js
  |_index.js
  |_header.module.scss
```
<br>

### Making a new CSS file
1. Copy all the CSS of the particular component or page to the new css file. (CSS module file)
2. Enter the following on the first line of the new CSS file. `@import "PATH/css/settings/global";`
3. Delete the file (old one) from the css folder.
4. Comment or delete the reference to the old css file from main.scss.

<br>

### Modifying Component
1. Import new CSS file as shown `import style from "./header.module.scss"`.
2. Repace all the classNames with className={`style["class-name"]`}. Keep the foundation classes as it is. Foundation classes include `grid-container`, `grid-x grid-margin-x`, `cell`, `large-4 medium-2 small-12` etc.  
3. Remove the `default export` line from the bottom of the component file. 
4. Put `export` before the class. Example, `export class Header extends Components{` This is called [named export](https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281)

<br>

### Index file
1. Use this file to export everything from the component file. Example `export * from './Header';`;

<br>

### Modifying App.js
1. To import named component `import { Header } form "PATH/components/Header/index"`

<br>
<hr>
<br>

## CSS Naming conventions
The following naming convention should strictly be followed. 

### SCSS files
All file names should start with an underscore `_`. <br />
Example - `_home.scss` or `_about-us.scss`<br /><br />

DO NOT use `camelCase`, or `PascalCase` to name the css files. <br />
**Strictly use `Kebab-case`** 

Example - `_codeOfConduct.scss` will not be accepted. The right way is `_code-of-conduct.scss`

<br /><br />

### variable names
Use `kebab-case` for variable names while maintaing the BEM nomenclature. 
For example

```css
/* wrong practice */
.blogCard__card--small{
    ...
}

/* right practice */
.blog-card__card--small{
    ...
}
```

```css
/* wrong practice */
.submitButton__big--lightBlue{
    ...
}

/* right practice */
.submit-button__big--light-blue{
    ...
}
```