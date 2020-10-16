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