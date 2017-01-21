Learn how to include a *data-main* file with our module inclusions
```html
<script data-main="js/main" src="js/require.js"></script>
```

Learn how to include our *modules*
```javascript
require(['jquery', 'message', 'alertone'], function($, message, alertone) {...
```

Learn how to use our modules functionality
```javascript
$('#firstname').html(message); // Use $ (jquery) and access our returned message modules value

```